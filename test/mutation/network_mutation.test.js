const dataForTest = require('../dataForTest')
const testServer = require('../testServer')

describe("primer test",() =>{
  it("mutation true", done => {
    testServer().post('/mutation',dataForTest.mutationTrue).expect(200).then(response => {
      expect(response.statusCode).toBe(200)
      // console.log(response.status)
      //expect(response.body).toHaveProperty('message', 'cualquier mensaje')
      // { boolean: true, text: '¡ Se encontró una mutación en la cadena de ADN !', status: 200 }}
      done()
    })
  })
  it("mutation false", done => {
    testServer().post('/mutation',dataForTest.mutationFalse).then(response => {
      expect(response.statusCode).toBe(500)
      done()
    })
  })
})