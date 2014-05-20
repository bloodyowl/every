# every

[![browser support](https://ci.testling.com/bloodyowl/every.png)](https://ci.testling.com/bloodyowl/every)

![https://travis-ci.org/bloodyowl/every](https://travis-ci.org/bloodyowl/every.svg)


## install

```sh
$ npm install bloody-every
```

## require

```
var every = require("bloody-every")
```

## api

### `every(fn, time[, immediate])`

runs `fn` every `time` milliseconds.
the optional `immediate` boolean makes the
first run as soon as possible.

`fn` receives a `stop` function as first argument,
and it definitely stops the loop.

## example

```javascript
// starts the app and stops iterating when the DOM is ready
every(
  function(stop){
    if(/interactive|complete|loaded/.test(document.readyState)) {
      app.init()
      stop()
    }
  },
  10,
  true
)
```
