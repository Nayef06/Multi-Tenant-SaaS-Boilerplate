import { Router } from "express";
import { createUser, getUserById, getUsers } from "../handlers/users";

const router = Router()

// /api/users to access
router.get('/', getUsers)

// /api/user/123
router.get('/:id', getUserById)

// /api/users
router.post('/', createUser)

export default router