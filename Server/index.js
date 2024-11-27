const express = require('express');
const cors = require('cors');
const connectDb = require('./Models/conn');
const UrlRoutes = require('./Routes/UrlRoute')

const app = express()
app.use(cors());

connectDb()
app.use(express.json())

app.use('/api',UrlRoutes)

app.listen(8000,()=>{
    console.log("Running....")
})