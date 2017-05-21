var compose = function() {
  var fns = arguments;

  function f(result) {
    for (var i = fns.length - 1; i > -1; i--) {
      try {
        result = fns[i].call(this, result);
      } catch(e) {
        e.message = f.toString()+' blew up on '+fns[i].toString()
        throw(e)
      }
    }
    return result;
  };

  f.toString = function() {
    return 'compose('+[].slice.call(fns).map(function(f){ return f.toString() }).join(', ')+')';
  }

  return f;
};

module.exports = compose;
