this.addEventListener('message', (msg) => {
  console.log('Message received:', msg.data)
})

this.addEventListener('connect', (msg) => {
  let port = msg.ports[0]
  port.start()
  port.addEventListener('message', (msg) => {
    console.log('received', msg)
  })

  port.postMessage('from worker')
})