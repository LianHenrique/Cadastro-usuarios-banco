import express from "express"
import cors from "cors"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors())

app.post("/usuarios", async (req, res) => {

    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age,
            password: req.body.password
        }
    })

    res.status(201).json(req.body)
})

app.get("/usuarios", async (req, res) => {

    let users = []

    if(req.query){
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,
                age: req.query.age,
                email: req.query.email,
                password: req.query.password
            }
        })
    }
    else{
        users = await prisma.user.findMany()
    }

    res.status(200).json(users)
})

app.put("/usuarios/:id", async (req, res) => {

    console.log(req)

    await prisma.user.update({
        where: {
            id: req.params.id
        },

        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age,
            password: req.body.password
        }
    })

    res.status(201).json(req.body)
})

app.delete("/usuarios/:id", async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: "Delete complete"})

})

app.listen(3000)

/*
    Criar API de usuarios

    - Criar usuarios
    - Listar usuarios
    - Editar usuarios
    - Deletar usuarios

    1) tipo de Rota / metodo HTTP
    2) endereço

    get -> Listar
    post -> Criar
    put -> Editar varios
    patch -> Editar um
    delete -> Deletar

    erros
    2xx -> concluido
    4xx -> frontend
    5xx -> backend

*/