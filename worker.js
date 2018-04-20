let ports = [],
    count = 0

this.addEventListener('message', (msg) => {
  console.log('Message received:', msg.data)
})

this.addEventListener('connect', (msg) => {
  let port = msg.ports[0]
  ports.push(port)

  port.start()
  port.addEventListener('message', (msg) => {
    console.log('received', msg)
  })
})

setInterval(() => {
  count++
  ports.forEach((p) => {
    p.postMessage(`from worker: ${count}`)
  })
}, 500)
