import { noop } from './basic';
import { isPromise } from './validate';
export function callInterceptor(interceptor, _ref) {
  var {
    args = [],
    done,
    canceled
  } = _ref;

  if (interceptor) {
    // eslint-disable-next-line prefer-spread
    var returnVal = interceptor.apply(null, args);

    if (isPromise(returnVal)) {
      returnVal.then(value => {
        if (value) {
          done();
        } else if (canceled) {
          canceled();
        }
      }).catch(noop);
    } else if (returnVal) {
      done();
    } else if (canceled) {
      canceled();
    }
  } else {
    done();
  }
}