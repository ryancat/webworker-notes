this.addEventListener('message', (msg) => {
  console.log('Message received', msg.data)
})


let i = 0
setInterval(() => {
  this.postMessage(`counter: ${i}`)
  i++
}, 1000)