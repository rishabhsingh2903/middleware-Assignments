const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3001

const apiVersion = "/api/v1"

//if(process.env.NODE_ENV === 'development'){
    
    app.use(morgan('dev'))
//}
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); // Specify the directory where your views are located


app.get('/', (req, res) =>{
    console.log(req.requestTime)
    res.send("YOu have reached the ROOT")
})

const studentRoute = require('./routes/studentRoute')
app.use(`${apiVersion}/student`,studentRoute)

const gradeRoute = require('./routes/gradeRoute')
app.use(`${apiVersion}/grade`,gradeRoute)

app.get(`${apiVersion}/assignment`,(req,res) => {
    res.send(`YOu have reached assignment`)
})


app.listen(port, () => {
    console.log(`Example app listening on ${port}`)
})