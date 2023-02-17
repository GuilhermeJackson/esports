import express from 'express'

const app = express()

app.get('/games', (request, response) => {
    return response.json([])
})

app.post('/ads', (request, response) => {
    return response.json([])
})

app.get('/ads', (request, response) => {
    return response.json([
        {id:1, name:"TESTE"},
        {id:2, name:"TESTE"},
        {id:3, name:"TESTE2131231"}
    ])
})

app.listen(3333)