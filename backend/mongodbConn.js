const mongoose = require('mongoose')

function MongoDbConnect(){
    try{
       mongoose.connect('mongodb+srv://sohaibnayyar721:I6lm3MRu0iERRjsd@cluster0.sdxf3ne.mongodb.net/?retryWrites=true&w=majority')
       console.log('Mongodb is Connected')
    }
    catch(err){
        console.log('Mongodb Connection Failed')
    }
}

module.exports = MongoDbConnect