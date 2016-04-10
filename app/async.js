exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return new Promise(function (resolve, reject) {
      resolve(value);
    });
  },

  manipulateRemoteData : function(url) {
    var p = new Promise(function (resolve, reject) {
      $.ajax({
          url: url
        })
        .done(function (res) {
          var names = res.people.map(function (x) {
            return x.name;
          });

          resolve(names.sort());
        })
    })

    return p;

  }
};
