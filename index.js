'use strict'

const fs = require('fs')
const parse = require('csv-parse')

const toSql = require('./lib/toSql')
const transform = require('./lib/transform')

const args = process.argv.slice(2)

// input csv file
const input = args[0] || 'eschools.csv'

// output sql file
const output = args[1] || 'schools.sql'

// table to insert into
const table = args[2] || 'test'

const parser = parse(function (err, data) {
  if (err) throw err

  // transform the CSV data to an object of 'Column Name': 'Value'
  let transformedData = transform(data)

  // convert transformed data to an SQL insert
  let sql = toSql(transformedData, table)

  // write the SQL to an output file
  fs.writeFile(__dirname + '/' + output, sql, function (err) {
    if (err) throw err

    console.log('Successfully created "%s" (inserting to "%s")', output, table)
  })
})

fs.createReadStream(__dirname + '/' + input).pipe(parser)
