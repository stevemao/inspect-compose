var compose = function() {
  var fns = arguments;

  function f(result) {
    for (var i = fns.length - 1; i > -1; i--) {
      result = fns[i].call(this, result);
    }
    return result;
  };

  f.toString = function() {
    return 'compose('+[].slice.call(fns).map(function(f){ return f.toString() }).join(', ')+')';
  }

  return f;
};

module.exports = compose;
