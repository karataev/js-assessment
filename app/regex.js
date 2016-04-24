exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    return str.search(/\d/) >= 0;
  },

  containsRepeatingLetter : function(str) {
    return /([a-zA-Z])\1/.test(str);
  },

  endsWithVowel : function(str) {
    return /[aeiou]$/i.test(str);
  },

  captureThreeNumbers : function(str) {
    var res = /\d{3}/.exec(str);
    return res ? res[0] : false;
  },

  matchesPattern : function(str) {
    return /^\d{3}-\d{3}-\d{4}$/.test(str);
  },
  isUSD : function(str) {
    return /^\$\d+(,\d{3})*(\.\d{2})?$/.test(str);
  }
};
