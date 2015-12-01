'use strict'

const squel = require('squel')

function toSql (data, table) {
  table = table || 'test'

  let sql = ''

  // size of chunks the array should be split into for separate inserts
  let chunkSize = 1000

  for (let i = 0; i < data.length; i += chunkSize) {
    let chunk = data.slice(i, i + chunkSize)

    // make sure we escape single quotes
    sql += squel.insert({ replaceSingleQuotes: true, singleQuoteReplacement: '\\\'' })
      .into(table)
      .setFieldsRows(chunk)
      .toString()

    sql += ';\n\n'
  }

  return sql
}

module.exports = toSql
