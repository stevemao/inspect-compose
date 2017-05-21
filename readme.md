# Problem

```js
var add = curry(function add(x, y){ return x + y });
var map = curry(function map(f, xs){ return xs.map(f) });
var head = function(xs){ return xs[0] };

var inc = add(1);
var incFirst = compose(head, map(inc))
```

When trying to `console.log` a function we’re presented with the guts of some internal compose implementation that tells us nothing.

# Before

```js
console.log(incFirst)
// function f(result) {
//   for (var i = fns.length - 1; i > -1; i--) {
//     result = fns[i].call(this, result);
//   }
//   return result;
// }
```

# After

```js
console.log(incFirst)
// compose(function (xs){ return xs[0] }, map(add(1)))
```

See https://medium.com/@drboolean/debugging-functional-7deb4688a08c

# Related

- [inspect-curry](https://github.com/stevemao/inspect-curry)
- [composition-trace](https://github.com/stevemao/composition-trace)
