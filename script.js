console.log('Hello World')

function foo () {
  const i = 100
  function c00 () {
    return i + 'c0000'
  }
  return c00() + 'foo'
}

function bar () {
  const b00 = 100 + foo()
  return `${b00}-bar`
}

console.log(bar())
