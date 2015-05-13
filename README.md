# Local Storage

A mellow localStorage implementation utilizing `JSON.stringify()` and `JSON.parse()` to allow for the storage of objects and arrays.

## Usage

[UMD](https://github.com/umdjs/umd) so use with AMD, CommonJS, or browser globals.

### `LocalStorage.set( key, value )`

```javascript
LocalStorage.set( 'array', [ 'a', 'b', 'c' ] );
```

### `LocalStorage.get( key )`

```javascript
LocalStorage.get( 'array' );
// => [ 'a', 'b', 'c' ]
```

### `LocalStorage.remove( key )`

```javascript
LocalStorage.remove( 'array' );
```

## Browser Support

- http://caniuse.com/#feat=json
- http://caniuse.com/#feat=namevalue-storage