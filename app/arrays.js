exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function (acc, curr) {
      return acc + curr;
    }, 0);
  },

  remove : function(arr, item) {
    return arr.filter(function (x) {
      return x != item;
    })
  },

  removeWithoutCopy : function(arr, item) {
    for (var i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === item) arr.splice(i, 1);
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    return arr.filter(function (x) {
      return x === item;
    }).length;
  },

  duplicates : function(arr) {
    var dupes = [];
    arr.forEach(function (x) {
      if (arr.indexOf(x) != arr.lastIndexOf(x) && dupes.indexOf(x) === -1) {
        dupes.push(x);
      }
    });

    return dupes;
  },

  square : function(arr) {
    return arr.map(function (x) {
      return x * x;
    })
  },

  findAllOccurrences : function(arr, target) {
    var indeces = [];
    arr.forEach(function (x, i) {
      if (x === target) indeces.push(i);
    });

    return indeces;
  }
};
