const express = require('express')
const supertest = require('supertest')
const swaggerUi = require('swagger-ui-express')
const geneticMutation = require('../api/components/mutation/network_mutation')
const swaggerDoc = require('../api/swagger.json')
const bodyParser = require('body-parser')

function testServer(){
  const app = express()
  app.use(bodyParser.json())
  app.use('/mutation', geneticMutation)
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
  return supertest(app)
}

module.exports = testServer;
