process.env.NODE_ENV = 'test'
process.env.API_TOKEN = 'test-auth-token'

const { expect } = require('chai')
const supertest = require('supertest')

global.expect = expect
global.supertest = supertest
