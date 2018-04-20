function add (a, b) {
  return a + b
}

function subtract (a, b) {
  return a - b
}

function post (fn, args) {
  this.postMessage(fn(...args))
}

// main reducer
this.addEventListener('message', (e) => {
  switch (e.data.type) {
    case 'add': 
      post(add, e.data.args)
      break
    case 'subtract':
      post(subtract, e.data.args)
      break
  }
})