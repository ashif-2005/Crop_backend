const database = require('mongoose')

const schema = new database.Schema({
    img:{
        type:String 
    },
    desc: {
        type:String
    },
    price:{
        type:String
    },
    postedOn:{
        type:String
    },
    postedBy:{
        type:String
    },
    location:{
        type:String
    },
    quantity:{
        type:String
    }
})

Crop = database.model("cropInfo",schema)

module.exports = {Crop}