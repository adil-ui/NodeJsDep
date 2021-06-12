const request = require('axios');

const { Color } = require('chalk');
const geoCode = require('./src/utils')



geoCode('Boston', (response, error) => {
        console.log(response);
    })

// const product = {
//     label: 'Red Notebook',
//     stock : 201
// }

// const test = ({label,stock}) =>{
//     console.log(labele,stock)
// }

// test(product)
