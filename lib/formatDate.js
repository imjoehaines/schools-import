'use strict'

const util = require('util')

module.exports = function (date) {
  if (!date) return date

  if (date.length < 8) throw new Error('Invalid date given')

  const year = date.slice(0, 4)
  const month = date.slice(4, 6)
  const day = date.slice(6, 8)

  return util.format('%s-%s-%s', year, month, day)
}
