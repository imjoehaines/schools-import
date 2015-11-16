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

test('it should convert the "date" fields to actual date fields', t => {
  let expected = [
    {
      'organisation_code': 'isdhfisd',
      'name': 'oisjfiofse',
      'national_grouping': 'ijs',
      'high_level_health_geography': 'asd',
      'address_line_1': 'sfoisef',
      'address_line_2': 'sofhi',
      'address_line_3': 'ksegj',
      'address_line_4': 'fse',
      'address_line_5': 'gseioj',
      'postcode': 'an1 1ne',
      'open_date': '1900-01-01',
      'close_date': '1990-05-23',
      'local_authority': 'sdf',
      'contact_telephone_number': '32497',
      'amended_record_indicator': '1',
      'current_care_organisation': 'sgsgd',
      'type_of_establishment': 'dhdrs'
    }
  ]

  let data = [
    [
      'isdhfisd',
      'oisjfiofse',
      'ijs',
      'asd',
      'sfoisef',
      'sofhi',
      'ksegj',
      'fse',
      'gseioj',
      'an1 1ne',
      '19000101',
      '19900523',
      '',
      '',
      'sdf',
      '',
      '',
      '32497',
      '',
      '',
      '',
      '1',
      '',
      'sgsgd',
      'dhdrs',
      '',
      '',
    ]
  ]

  t.same(expected, transform(data))
  t.end()
})
