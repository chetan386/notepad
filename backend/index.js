const express = require("express")
const dotenv = require('dotenv')
const { connectDB } = require("./database/database")
connectDB()

const app = express()

const bodyParser = require('body-parser')

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
dotenv.config({path: "backend/config/config.env"})
const list = require('./routes/listRoute')

app.use("/api/v1",list)

const PORT = process.env.PORT || 8000
app.listen(PORT,()=>{
    console.log(`Server is runnning on port ${PORT}`)
})