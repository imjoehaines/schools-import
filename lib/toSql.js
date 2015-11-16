'use strict'

const squel = require('squel')

function toSql (data, table) {
  table = table || 'test'

  let sql = squel.insert()
    .into(table)
    .setFieldsRows(data)

  return sql.toString()
}

module.exports = toSql
