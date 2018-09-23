# component

XMPP component for JavaScript

Includes `@xmpp/component-core` and `@xmpp/reconnect`.

Much like a client, a component is an entity that connects to an XMPP server.
However components are granted special permissions. If you'd like to extend an
XMPP server with additional features a component is a good choice.

`@xmpp/component` package includes component-core and ships with most commonly
used features. This is the recommended package for newcomers.

`@xmpp/component-core` package provides a bare component connection and allows
to hand-pick additional features. It is recommend to start with the `@xmpp/component`
package and switch to this once you feel comfortable with `xmpp.js`.

## Install

```
npm install @xmpp/component
```

## Usage

```js
const {xmpp} = require('@xmpp/component')

const {component} = xmpp({
  uri: 'xmpp://localhost:5347',
  jid: 'component.localhost',
  password: 'mysecretcomponentpassword',
})

component.start()

component.on('error', err => {
  console.error('❌', err.toString())
})

component.on('status', (status, value) => {
  console.log('🛈', status, value ? value.toString() : '')
})

component.on('online', jid => {
  console.log('🗸', 'online as', jid.toString())
})

component.on('stanza', stanza => {
  console.log('⮈', stanza.toString())
})
```
