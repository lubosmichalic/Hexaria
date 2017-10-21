process.env.NODE_ENV = 'test'
import {expect} from 'chai'
let config = require('config')

describe('TDD your TDD', () => {
  it('2 + 2 = 5', () => {
    expect(2 + 2).to.equal(4)
  })
})

describe('config', () => {
  it('switches the config to test variables', () => {
    expect(config.MONGODB_SERVERURI).to.include('test')
  })
})
