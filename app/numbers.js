exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var binary = num.toString(2);
    return Number(binary[binary.length - bit]);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var binary = num.toString(2);
    if (binary.length < 8) {
      var zeros = new Array(8 - binary.length + 1).join('0');
      binary = zeros + binary;
    }
    return binary;
  },

  multiply: function(a, b) {
    return Number((a * b).toPrecision(1));
  }
};
