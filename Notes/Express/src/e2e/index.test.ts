import request from 'supertest'
import { createApp } from '../createApp'
import { type Express } from 'express-serve-static-core';

describe('users', ()=>{
    let app: Express;
    beforeAll(()=>{
        app = createApp()

    })

    it('should return empty array from /api/users',async ()=>{
        const response = await request(app).get('/api.users')
        expect(response.body).toStrictEqual({})
    })
})