'use strict'

const squel = require('squel')

function toSql (data, table) {
  table = table || 'test'

  // make sure we escape single quotes
  let sql = squel.insert({ replaceSingleQuotes: true, singleQuoteReplacement: '\\\'' })
    .into(table)
    .setFieldsRows(data)

  return sql.toString()
}

module.exports = toSql
