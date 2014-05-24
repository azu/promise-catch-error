# promise-catch-error

Experiment: `promise.catch` could be used any browser with polyfill.

[![browser support](https://ci.testling.com/azu/promise-catch-error.png)](https://ci.testling.com/azu/promise-catch-error)

## on IE<10

`catch` is a reserved word in **IE < 10**, meaning `promise.catch(func)` throws a syntax error. 

More Detail on [jakearchibald/es6-promise](https://github.com/jakearchibald/es6-promise#usage-in-ie10 "jakearchibald/es6-promise").

## Testing

``` sh
npm install
npm test
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT