const express = require("express")
const path = require("path")
const app = express()

const router = express.Router()

router.get("/", (req, res)=> {
res.sendFile("/home.html")
})



app.use(router)

app.listen(3000, ()=>{
    console.log("Servidor rodando")
})