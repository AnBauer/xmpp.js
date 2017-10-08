'use strict'

const util = require('util')
const Mechanism = require('./Mechanism')

/**
 * @see https://developers.google.com/talk/jep_extensions/oauth
 */
function XOAuth2 () {}

util.inherits(XOAuth2, Mechanism)

XOAuth2.prototype.name = 'X-OAUTH2'
XOAuth2.id = 'X-OAUTH2'

XOAuth2.prototype.extractSasl = function (auth) {
  const params = auth.split('\x00')
  const authRequest = {
    'jid': params[1],
    'oauth_token': params[2],
  }
  return authRequest
}

module.exports = XOAuth2
