const app = require('../app')
const mongoose = require('mongoose')
const supertest = require('supertest')
const User = require('../models/user')

const api = supertest(app)
const Mouse = require('../models/mouse')
const testmice = require('./testmice')

const USER = { username: "user", password: "password" }
const OTHER_USER = { username: "otheruser", password: "password" }

beforeAll(async () => {
    await User.deleteMany({})
    await Mouse.deleteMany({})
})

describe('testing user schema', () => {

    test('POST add user to database, expect status 200', async () => {
        const userRes = await api
            .post('/api/users')
            .send(USER)
            .expect(200)

        expect(userRes.body.username === USER.username)
    })

    test('POST add otheruser to database, expecting status 200', async () => {
        const userRes = await api
            .post('/api/users')
            .send(OTHER_USER)
            .expect(200)

        expect(userRes.body.username === OTHER_USER.username)
        expect(userRes.body.username !== USER.username)
    })

    test('POST add already existing user should give status 400', async () => {
        const userRes = await api
            .post('/api/users')
            .send(OTHER_USER)
            .expect(400)
    })
})



describe('testing mice schema', () => {
    test('POST add test mouse chungo to database', async () => {
        await api
            .post('/api/mice')
            .send(testmice.chungo)
            .expect(200)
    })

    test('get all mice from mongodb', async () => {

    })
})

afterAll(() => {
    mongoose.connection.close()
})