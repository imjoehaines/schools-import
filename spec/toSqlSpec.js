'use strict'

import test from 'ava'

const toSql = require('../lib/toSql')

test('it should convert some data to an SQL insert', t => {
  let expected = "INSERT INTO test (beep, boop, bap) VALUES ('beep', 'boop', 'bap');\n\n"
  let data = [{'beep': 'beep', 'boop': 'boop', 'bap': 'bap'}]

  t.same(expected, toSql(data))
})

test('it should handle multiple data types', t => {
  let expected = "INSERT INTO test (beep, boop, bap) VALUES ('beep', 'boop', 'bap'), ('test', 123, NULL);\n\n"
  let data = [
    {'beep': 'beep', 'boop': 'boop', 'bap': 'bap'},
    {'beep': 'test', 'boop': 123, 'bap': null}
  ]

  t.same(expected, toSql(data))
})

test('it should handle single quotes', t => {
  let expected = "INSERT INTO test (beep, boop, bap) VALUES ('beep\\'s', 'boop', 'bap'), ('test', 123, NULL);\n\n"
  let data = [
    {'beep': "beep's", 'boop': 'boop', 'bap': 'bap'},
    {'beep': 'test', 'boop': 123, 'bap': null}
  ]

  t.same(expected, toSql(data))
})
