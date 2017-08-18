import test from 'ava'
import { 
    compose, 
    getQueryParams, 
    queriesExtractor, 
    queryExtractor,
    queryTransformer,
    queryParser
} from './index'

test('compose composes functions', t => {
  const addTax = val => (val + (val * 0.07))
  const discount = val => (val - (val * 0.2))

  const actual = compose(
    addTax,
    discount
  )(6)

  t.is(actual, addTax(discount(6)))
})

test('getQueryParams returns data from window.location.search', t => {
  const actual = getQueryParams('hello?name=michael')
  t.deepEqual(actual, {name: 'michael'})
})

test('queriesExtractor returns an array of query string params', t => {
  const actual = queriesExtractor('hello?name=michael&age=27')
  t.deepEqual(actual, ['name=michael', 'age=27'])
})

test('queryExtractor returns an array of query string params', t => {
  const actual = queryExtractor('hello?name=michael&age=27')
  t.is(actual, 'name=michael&age=27')
})

test('queryTransformer returns a query string object', t => {
  const actual = queryTransformer('name=michael')
  t.deepEqual(actual, {name: 'michael'})
})

test('queryParser parses a query string array into a usable params object', t => {
  const actual = queryParser(['name=michael', 'age=27'])
  t.deepEqual(actual, {name: 'michael', age: '27'})
})

test('queryParser parses a query string into a usable params object', t => {
  const actual = queryParser('name=michael%20spohn')
  t.deepEqual(actual, {name: 'michael spohn'})
})