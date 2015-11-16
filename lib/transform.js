'use strict'

const headings = require('./headings')

module.exports = function (data) {
  let transformedData = []
  data.forEach(function (row) {
    let transformedRow = {}

    row.forEach(function (column, index) {
      // skip the 'null' columns (why do they exist!?)
      if (!headings[index]) return

      // replace empty string values with nulls
      if (column.trim() === '') column = null

      transformedRow[headings[index]] = column
    })

    transformedData.push(transformedRow)
  })

  return transformedData
}
