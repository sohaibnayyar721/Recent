const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    jobDomain:String,
    jobName:String,
    location:String,
    salary:String,
    date:String
})

const jobModel = mongoose.model('jobs',jobSchema)

module.exports = jobModel