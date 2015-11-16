'use strict'

import test from 'ava'

const transform = require('../lib/transform')

test('it should transform data based on headings', t => {
  let expected = [{'organisation_code': 'beep', 'name': 'boop', 'national_grouping': 'bop'}]
  let data = [['beep', 'boop', 'bop']]

  t.same(expected, transform(data))
  t.end()
})

test('it should transform multiple rows based on headings', t => {
  let expected = [
    {'organisation_code': 'beep', 'name': 'boop', 'national_grouping': 'bop'},
    {'organisation_code': 'abc', 'name': 'def', 'national_grouping': 'ghi'},
    {'organisation_code': 'jklmnop', 'name': 'qrstu', 'national_grouping': 'vwxyz'},
    {'organisation_code': 'code', 'name': 'Name', 'national_grouping': 'group'}
  ]

  let data = [
    ['beep', 'boop', 'bop'],
    ['abc', 'def', 'ghi'],
    ['jklmnop', 'qrstu', 'vwxyz'],
    ['code', 'Name', 'group']
  ]

  t.same(expected, transform(data))
  t.end()
})

test('it should convert empty strings to null', t => {
  let expected = [{'organisation_code': null, 'name': null, 'national_grouping': 'bop'}]

  let data = [['', '', 'bop']]

  t.same(expected, transform(data))
  t.end()
})
