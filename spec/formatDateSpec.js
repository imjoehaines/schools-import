'use strict'

import test from 'ava'

const formatDate = require('../lib/formatDate')

test('it should format a "date" into a MySQL formatted date', t => {
  let expected = '2015-01-01'
  let date = '20150101'

  t.same(expected, formatDate(date))
  t.end()
})

test('it should do nothing when not given a date', t => {
  t.same(undefined, formatDate())
  t.same(null, formatDate(null))
  t.same(false, formatDate(false))
  t.end()
})

test('it should throw when given a date that\'s too short', t => {
  let invalidDate = 'no'

  t.throws(() => formatDate(invalidDate), 'Invalid date given')
  t.end()
})
