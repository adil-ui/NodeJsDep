
const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())

let courses  =
[
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'},
]

app.put('/course', (req, res)=>{
const course = courses.find(item => item.id == req.body.id)
if(course){
    course.name = req.body.name
    res.send(course)
    console.log(courses)
}else{
    res.status(404).send('error 404')
}
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
    })