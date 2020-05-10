const supertest = require('supertest')
// const app = require('../../api/index')
// const express = require('express')
const dataForTest = require('../dataForTest')

const testServer = require('../testServer')
const request = supertest.agent(testServer)
// controller_mutation.test.js
//const request = testServer('/')
describe("primer test",() =>{
  it("", done => {
    request.post('/mutation',dataForTest.mutationTrue).expect(200).then(response => {
      expect(response.status).toEqual(200)
      // console.log(response.status)
      //expect(response.body).toHaveProperty('message', 'cualquier mensaje')
      // { boolean: true, text: '¡ Se encontró una mutación en la cadena de ADN !', status: 200 }}
    })
    done()
  })
})