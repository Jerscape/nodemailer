const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000;

//middleware
app.use(express.static('public'));

//res is an instance of the server response class (express) http.ServerResponse
app.get('/', (req, res) =>{
  res.send('hello!!')
}) 

app.listen(PORT, ()=>{
  console.log(`Sever running on a port ${PORT}`)
})

