const express = require('express');
const path = require('path')
const hbs = require('hbs')
const axios = require('axios')
const app = express();

const publicDirectoryPath = path.join(__dirname, '/public');
const viewsPath = path.join(__dirname, '/templates/views');
const partialsPath = path.join(__dirname, '/templates/partials');

hbs.registerPartials(partialsPath);
app.use(express.static(publicDirectoryPath));
app.set('views', viewsPath)


app.set('view engine', 'hbs')

// app.get('',(req, res)=>{
//     res.render('home', {
//         title: 'about',
//         name : 'adil'
//     })
// })

// app.get('/products',(req, res)=>{
//     res.send('your products')
// })
// app.get('*',(req, res)=>{
//     res.render('404', {
//         name: '404',
//         errorMessage : 'Page not found'
//     })
//     // res.redirect('/')

// })

// fetch(url).then((response)=>{
//     response.json().then((data)=>{
//         if(data.error){
//             console.log(data.error)
//         }else{
//             console.log(data.features[0].center[0])
//             console.log(data.features[0].place_name)
//         }
//     })
// })
app.get('/locations',(req, res)=>{
    axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/'+ req.query.address + '.json?access_token=pk.eyJ1Ijoiam9obnNubm5ubm93IiwiYSI6ImNrZmNwNm5sYzFpMzAyeW1xcXU3ZDljZ2kifQ.xNSnP7mlEM3ymg9ukY-EBA&limit=3')
    .then(function(response){
        res.end(response.data)
    }).catch( (error) => {
        res.send(error);
    }) 
})
app.listen(3000, () => {
console.log('Server is up on port 3000.')
})
