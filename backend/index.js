const express = require('express')
const MongoDbConnect = require('./mongodbConn')
const cors = require('cors')

const jobModel = require('./model/EmployerData')
const app = express()

app.use(cors())
app.use(express.json())

MongoDbConnect()

app.get('/getData', async (req, res) => {
    const getJob = await jobModel.find({})

 
    
    res.send(getJob)

})

app.get('/', async (req, res) => {

    let getData = await jobModel.find({})


    console.log(count)


    res.send('success')
})

app.post('/addJob', (req, res) => {
    console.log(req.body.jobName)
    console.log(req.body.location)
    console.log(req.body.salary)

    let currentDate = new Date()
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const getDate = formattedDate.split(' ')
    const setDateFormat = [getDate[0].slice(0, 3), getDate[1], getDate[2]]
    const FormattedDate = setDateFormat.join(' ')

    const addJob = new jobModel({
        jobDomain: req.body.jobDomain,
        jobName: req.body.jobName,
        location: req.body.location,
        salary: req.body.salary,
        date: FormattedDate
    })
    addJob.save()
    res.send(addJob)
})

app.listen(4500, () => {
    console.log("Server is running!!!")
})

// app.get('/getData', async (req, res) => {
//     const getJob = await jobModel.find({})

//     const totalJob = []
//     const count = {};

//     getJob.forEach(element => {
//         count[element.location] = (count[element.location] || 0) + 1;
//     });

//     totalJob.push(count)
    
//     res.json({ featuredJob: getJob, jobForEachCountry: totalJob })

// })