const express = require('express')

const blogBackend = express()

blogBackend.get('/', (request, response) => {
    response.status(200).send('<h1>Hello Bebevinye</h1>')
})

blogBackend.listen(2000 , () => { 
    console.log("blogBackend is listening");
} );