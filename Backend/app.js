

const express = require("express")
const bodyParser = require("body-parser")
let cors=require("cors")
const app = express()
const userRouter = require("./router/router.js")
app.use(cors())
app.use(bodyParser.json())
app.use("/", userRouter)

app.listen(3000,()=>{
    console.log("port is ok")
})
