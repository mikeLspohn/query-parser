Utility functions to parser url string query parameters into usable javascript objects.

# Usage

There are 5 methods available to use. 

### compose

`compose` is the standard compose like the one included in redux and other libs. 

```javascript
compose(
 (x) => x + x,
 (x) => x * x
)(2)

// returns 8 (2*2 = 4+4 =8)
```

### queryExtractor

`queryExtractor` get's the whole string after the `?` in a url.

```javascript
queryExtractor('locahost:4000/hello?name=michael')
// returns 'name=michael'
```


### queriesExtractor
`queriesExtractor` is the same as `queryExtractor` but works for multiple params separated by `&`. This returns an array of individual query string

```javascript
queriesExtractor('localhost:4000/hello?name=michael&age=2')
// returns ['name=michael', 'age=2']
```



### queryTransformer

`queryTransformer` transforms the query param given into a usable javascript object.

```javascript
queryTransformer('name=michael%20spohn')
// returns {name: 'michael spohn'}
```


### queryParser

`queryParser` take a query string or array of query strings and transforms them into usable js objects using queryTransformer.

```javascript
queryParser('name=michael')
// returns {name: 'michael'}
queryParser(['name=michael', 'age=26'])
// returns {name: 'michael', age: '26'}
```


### getQueryParams

`getQueryParams` is the full function which takes a full url and spits out the query params as a normalized js object.

```javascript
getQueryParams('localhost:4000/hello?name=michael%20spohn&age=26')

// returns {name: 'michael spohn', age: '26'}
```
