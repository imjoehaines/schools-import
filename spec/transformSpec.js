'use strict'

import test from 'ava'

const transform = require('../lib/transform')

test('it should transform data based on headings', t => {
  let expected = [{'Organisation Code': 'beep', 'Name': 'boop', 'National Grouping': 'bop'}]
  let data = [['beep', 'boop', 'bop']]

  t.same(expected, transform(data))
  t.end()
})

test('it should transform multiple rows based on headings', t => {
  let expected = [
    {'Organisation Code': 'beep', 'Name': 'boop', 'National Grouping': 'bop'},
    {'Organisation Code': 'abc', 'Name': 'def', 'National Grouping': 'ghi'},
    {'Organisation Code': 'jklmnop', 'Name': 'qrstu', 'National Grouping': 'vwxyz'},
    {'Organisation Code': 'code', 'Name': 'name', 'National Grouping': 'group'}
  ]

  let data = [
    ['beep', 'boop', 'bop'],
    ['abc', 'def', 'ghi'],
    ['jklmnop', 'qrstu', 'vwxyz'],
    ['code', 'name', 'group']
  ]

  t.same(expected, transform(data))
  t.end()
})

test('it should convert empty strings to null', t => {
  let expected = [{'Organisation Code': null, 'Name': null, 'National Grouping': 'bop'}]

  let data = [['', '', 'bop']]

  t.same(expected, transform(data))
  t.end()
})
