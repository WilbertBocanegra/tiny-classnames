
# A package to evaluate an array and convert to a string

A minimal package based to classNames package

## Authors

- [@WilbertBocanegra](https://www.github.com/WilbertBocanegra)


## Usage/Examples

```javascript
classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ 'foo-bar': true }); // => 'foo-bar'
classNames({ 'foo-bar': false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'

// lots of arguments of various types
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'

// other falsy values are just ignored
classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'

var arr = ['b', { c: true, d: false }];
classNames('a', arr); // => 'a b c'

let buttonType = 'primary';
classNames({ [`btn-${buttonType}`]: true });
```

