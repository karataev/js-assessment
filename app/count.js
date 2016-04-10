exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var current;
    var interval;

    current = start;
    console.log(current);
    interval = setInterval(function () {
      current++;
      console.log(current);
      if (current >= end) {
        clearInterval(interval);
      }
    }, 100);

    this.cancel = function() {
      clearInterval(interval);
    };

    return this;
  }
};
