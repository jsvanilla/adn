const db = {
  dna: [
    {
      id: 0,
      chain: ['jaguar', 'mma', 'ufc'],
      mutation: true
	  }
  ]
}

// para poder listar cosas
async function list (collection) {
  return db[collection]
}

// para actualizar o insertar
async function upsert (collection, data) {
  db[collection].push(data)
}

module.exports = {
  list,
  upsert
}
