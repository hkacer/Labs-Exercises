const express= require('express');
const cors= require('cors');

const {getHouse, deleteHouse,createHouse,updateHouse}=require('./controller.js')
const app= express()

app.use(express.json())
app.use(cors())

app.get('/api/houses',getHouse)
app.delete('/api/houses/:id', deleteHouse)
app.put('/api/houses/:id',updateHouse)
app.post('/api/houses', createHouse)




app.listen(4004, ()=> console.log('Listening on port 4004... '))