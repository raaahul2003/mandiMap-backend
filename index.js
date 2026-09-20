// import json server
const jsonserver = require('json-server')

// create server for running json file
const server = jsonserver.create()

// setup path/route for middleware
const route = jsonserver.router('db.json')

// create middleware
const middleware = jsonserver.defaults()
server.use(middleware)
server.use(route)

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`)
})