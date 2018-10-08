'use strict'

const Address = require('../lib/Address')

module.exports = function parse(s) {
  let local
  let resource

  const resourceStart = s.indexOf('/')
  if (resourceStart !== -1) {
    resource = s.substr(resourceStart + 1)
    s = s.substr(0, resourceStart)
  }

  const atStart = s.indexOf('@')
  if (atStart !== -1) {
    local = s.substr(0, atStart)
    s = s.substr(atStart + 1)
  }

  return new Address(local, s, resource)
}