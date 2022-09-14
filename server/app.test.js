import test from 'node:test'
import assert from 'assert/strict'
import supertest from 'supertest'
import app from './app.js'

const request = supertest(app)

test('#GET / is successful', async () => {
  await request.get('/').expect(200)
})
