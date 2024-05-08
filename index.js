const express = require('express')
const db = require('mongoose')
const parser = require('body-parser')
const cors = require('cors')
const {Crop} = require('./model.js')

const port = process.env.PORT || 8000

const url = "mongodb+srv://Lingesh:Lingesh@linga.xjscauz.mongodb.net/Cropdb?retryWrites=true&w=majority&appName=Linga"

const app = express()
app.use(parser.json())
app.use(cors())

app.get('/test',(req,res)=>{
    try{
        res.status(200).json({'status':'success'})
    }catch(err){
        res.status(500).status({'error':err})
    }
})

app.get('/getdata',async (req,res)=>{
    try{
        let data = await Crop.find()
        res.status(200).json(data)
        console.log(data)
    }catch(error){
        res.status(500).json({
            "status":"Cannot fetch data"
        })
    }
})

app.post('/add',async (req,res)=>{
    try{
        await Expense.create({
            "img":req.body.img,
            "desc":req.body.desc,
            "price":req.body.price,
            "postedOn":req.body.on,
            "postedBy":req.body.by,
            "location":req.body.location,
            "quantity":req.body.quantity
        })
        res.status(200).json({
            "status":"Success fully added to database"
        })
    }catch(error){
        res.status(500).json({
            "status":error
        })
    }
})

async function connectToDb(){
    try{
     await db.connect(url)
     console.log('DB connected successfully...')
     app.listen(port,()=>{
         console.log(`Listening on port ${port}...`)
     })
    }
    catch(error){
     console.log(error)
    }
 }
 
 connectToDb()