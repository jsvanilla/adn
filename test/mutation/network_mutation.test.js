const dataForTest = require('../dataForTest')
const testServer = require('../testServer')

describe("primer test",() =>{
  it("mutation true", done => {
    testServer().post('/mutation').send(dataForTest.mutationTrue).then(response => {
      console.log(response.text);
      expect(response.statusCode).toBe(200)
      // console.log(response.status)
      //expect(response.body).toHaveProperty('message', 'cualquier mensaje')
      // { boolean: true, text: '¡ Se encontró una mutación en la cadena de ADN !', status: 200 }}
      done()
    })
  })
  it("mutation false", done => {
    testServer().post('/mutation').send(dataForTest.mutationFalse).then(response => {
      console.log(response.text);
      expect(response.statusCode).toBe(403)
      done()
    })
  })
})