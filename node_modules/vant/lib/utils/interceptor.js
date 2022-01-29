"use strict";

exports.__esModule = true;
exports.callInterceptor = callInterceptor;

var _basic = require("./basic");

var _validate = require("./validate");

function callInterceptor(interceptor, _ref) {
  var {
    args = [],
    done,
    canceled
  } = _ref;

  if (interceptor) {
    // eslint-disable-next-line prefer-spread
    var returnVal = interceptor.apply(null, args);

    if ((0, _validate.isPromise)(returnVal)) {
      returnVal.then(value => {
        if (value) {
          done();
        } else if (canceled) {
          canceled();
        }
      }).catch(_basic.noop);
    } else if (returnVal) {
      done();
    } else if (canceled) {
      canceled();
    }
  } else {
    done();
  }
}