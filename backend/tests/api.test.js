const app = require('../app')
const mongoose = require('mongoose')
const supertest = require('supertest')
const User = require('../models/user')

const api = supertest(app)
const Mouse = require('../models/mouse')
const testmice = require('./testmice')

const USER = { username: "user", password: "password" }
const OTHER_USER = { username: "otheruser", password: "password" }

var token
var otherToken
var chungoId
var tatossId

beforeAll(async () => {
    await User.deleteMany({})
    await Mouse.deleteMany({})
})

describe('testing user route', () => {

    test('POST add user to database, succeeds with status 200', async () => {
        const userRes = await api
            .post('/api/users')
            .send(USER)
            .expect(200)

        expect(userRes.body.username === USER.username)
    })

    test('POST add otheruser to database, succeeds with status 200', async () => {
        const userRes = await api
            .post('/api/users')
            .send(OTHER_USER)
            .expect(200)

        expect(userRes.body.username === OTHER_USER.username)
        expect(userRes.body.username !== USER.username)
    })

    test('POST add already existing user fails with status 400', async () => {
        const userRes = await api
            .post('/api/users')
            .send(OTHER_USER)
            .expect(400)
    })
})

describe('testing login route', () => {
    test('POST login with non-existing user succeeds with status 401', async () => {
        await api
            .post('/api/login')
            .send({ username: "wronguser", password: "password" })
            .expect(401)
    })

    test('POST login with wrong password fails with status 401', async () => {
        await api
            .post('/api/login')
            .send({ username: "user", password: "pppppppppp" })
            .expect(401)
    })

    test('POST login with USER succeeds with status 200', async () => {
        const res = await api
            .post('/api/login')
            .send(USER)
            .expect(200)

        token = res.body.token
    })

    test('POST login with OTHER_USER succeeds with status 200', async () => {
        const res = await api
            .post('/api/login')
            .send(OTHER_USER)
            .expect(200)

        otherToken = res.body.token
    })
})

describe('testing mice route', () => {
    test('POST without token, add test mouse chungo to database - fails with status 401', async () => {
        await api
            .post('/api/mice')
            .send(testmice.chungo)
            .expect(401)
    })

    test('GET all mice from mongodb expecting 0 mice, succeeds with status 200', async () => {
        await api
            .get('/api/mice')
            .expect(res => {
                if (res.body.length > 0)
                    throw new Error('Database should be empty!')
            })
            .expect(200)
    })

    test('POST with token, add test mouse chungo to database - succeeds with status 200', async () => {
        const res = await api
            .post('/api/mice')
            .send(testmice.chungo)
            .set('Authorization', 'bearer ' + token)
            .expect(200)

        chungoId = res.body._id
    })

    test('POST with othertoken, add test mouse tatoss to database - succeeds with status 200', async () => {
        const res = await api
            .post('/api/mice')
            .send(testmice.tatoss)
            .set('Authorization', 'bearer ' + otherToken)
            .expect(200)
        tatossId = res.body._id
    })

    test('GET all mice from mongodb expecting 2 mice, succeeds with status 200', async () => {
        await api
            .get('/api/mice')
            .expect(res => {
                if (!(res.body[0].name === testmice.chungo.name))
                    throw new Error('First mouse should be Chungo!')
                if (!(res.body[1].name === testmice.tatoss.name))
                    throw new Error('First mouse should be Tatoss!')
            })
            .expect(200)
    })

    test('DELETE chungo without token from database - fails with 401', async () => {
        await api
            .delete('/api/mice/' + chungoId)
            .send(testmice.chungo)
            .expect(401)
    })

    test('DELETE chungo with wrong token from database - fails with 401', async () => {
        await api
            .delete('/api/mice/' + chungoId)
            .set('Authorization', 'bearer ' + otherToken)
            .expect(401)
    })

    test('DELETE chungo with correct token from database - succeeds with 200', async () => {
        await api
            .delete('/api/mice/' + chungoId)
            .set('Authorization', 'bearer ' + token)
            .expect(200)
    })

    test('DELETE tatoss with wrong token from database - fails with 401', async () => {
        await api
            .delete('/api/mice/' + tatossId)
            .set('Authorization', 'bearer ' + token)
            .expect(401)
    })

    test('DELETE tatoss with wrong token from database - succeeds with 200', async () => {
        await api
            .delete('/api/mice/' + tatossId)
            .set('Authorization', 'bearer ' + otherToken)
            .expect(200)
    })
})

afterAll(() => {
    mongoose.connection.close()
})