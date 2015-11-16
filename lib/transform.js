'use strict'

const headings = require('./headings')
const formatDate = require('./formatDate')
const dateHeadings = ['open_date', 'close_date']

module.exports = function (data) {
  let transformedData = []
  data.forEach(function (row) {
    let transformedRow = {}

    row.forEach(function (column, index) {
      // skip the 'null' columns (why do they exist!?)
      if (!headings[index]) return

      // replace empty string values with nulls
      if (column.trim() === '') column = null

      // format the date columns
      if (dateHeadings.indexOf(headings[index]) !== -1) column = formatDate(column)

      transformedRow[headings[index]] = column
    })

    transformedData.push(transformedRow)
  })

  return transformedData
}
