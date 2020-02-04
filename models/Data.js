const { Schema, model} = require('mongoose')

const dataSchema  = new Schema({
    options:{
        type:[{
            name:String
        }]
    },
    links:{
        website:String,
        facebook:String,
        twitter:String
    }
})

const Data = model('Data', dataSchema)

module.exports = Data