const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    //res.send(`Reached Grades!`)
    res.render('gradeView', {title:'Grade View'})
})

router.post('/', (req,res) => {
    res.send(`Reached Grades!`)
})

router.put('/', (req,res) => {
    res.send(`Reached Grades!`)
})

router.delete('/', (req,res) => {
    res.send(`Reached Grades!`)
})

module.exports = router