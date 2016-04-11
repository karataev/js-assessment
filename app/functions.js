exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(str2) {
      return [str, str2].join(', ');
    }
  },

  makeClosures : function(arr, fn) {
    return arr.map(function (x) {
      return function() {
        return fn(x);
      }
    });
  },

  partial : function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3);
    }
  },

  useArguments : function() {
    var res = 0;
    for (var i = 0; i < arguments.length; i++) {
      res += arguments[i];
    }
    return res;
  },

  callIt : function(fn) {
    var args = [].slice.call(arguments, 1);
    return fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
