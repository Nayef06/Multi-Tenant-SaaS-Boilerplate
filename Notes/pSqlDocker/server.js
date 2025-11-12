const express = require('express');
const pool = require('./db');
const port = 3000;

const app = express();
app.use(express.json()); // <-- call it

// Optional: urlencoded if you send form bodies
// app.use(express.urlencoded({ extended: true }));

// Health check (helps quick testing)
app.get('/health', (req, res) => res.status(200).json({ ok: true }));

app.get('/', async (req, res, next) => {
  try {
    const { rows } = await pool.query('SELECT * FROM schools');
    res.status(200).json({ message: 'Works', children: rows });
  } catch (err) {
    next(err); // ensure we respond
  }
});

app.post('/', async (req, res, next) => {
  try {
    const { name, location } = req.body || {};
    if (!name || !location) {
      return res.status(400).json({ error: 'name and location are required' });
    }
    await pool.query(
      'INSERT INTO schools (name, address) VALUES ($1, $2)',
      [name, location]
    );
    res.status(201).json({ message: 'Added Child' });
  } catch (err) {
    next(err);
  }
});

app.get('/setup', async (req, res, next) => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS schools (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        address VARCHAR(100)
      )
    `);
    res.status(200).json({ message: 'Created Table' });
  } catch (err) {
    next(err);
  }
});

// Centralized error handler so we never hang
app.use((err, req, res, next) => {
  console.error(err); // log for debugging
  if (res.headersSent) return next(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
