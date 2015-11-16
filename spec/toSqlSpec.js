'use strict'

import test from 'ava'

const toSql = require('../lib/toSql')

test('it should convert some data to an SQL insert', t => {
  let expected = "INSERT INTO test (beep, boop, bap) VALUES ('beep', 'boop', 'bap')"
  let data = [{'beep': 'beep', 'boop': 'boop', 'bap': 'bap'}]

  t.same(expected, toSql(data))
  t.end()
})

test('it should handle multiple data types', t => {
  let expected = "INSERT INTO test (beep, boop, bap) VALUES ('beep', 'boop', 'bap'), ('test', 123, NULL)"
  let data = [
    {'beep': 'beep', 'boop': 'boop', 'bap': 'bap'},
    {'beep': 'test', 'boop': 123, 'bap': null}
  ]

  t.same(expected, toSql(data))
  t.end()
})
