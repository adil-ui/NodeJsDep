//const request = require('axios')

// const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1Ijoiam9obnNubm5ubm93IiwiYSI6ImNrZmNwNm5sYzFpMzAyeW1xcXU3ZDljZ2kifQ.xNSnP7mlEM3ymg9ukY-EBA&limit=3'

// request.get(url).then(function (response) {
//     const res = response.data.features.find(f => f.id === 'poi.644245154969')
//     if (res === undefined) {
//         console.log('Unable to find location. Try another search.')
//     } else {
//         const latitude = res.center[0]
//         const longitude = res.center[1]
//         console.log(latitude, longitude)
//     }
// }).catch(function (error) {
//     error && console.log('Enable to connect to the server');
// });


const geoCode = ((address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + 
                '.json?access_token=pk.eyJ1Ijoiam9obnNubm5ubm93IiwiYSI6ImNrZmNwNm5sYzFpMzAyeW1xcXU3ZDljZ2kifQ.xNSnP7mlEM3ymg9ukY-EBA&limit=1'
    request.get(url).then( (response) => {
        if (response.data.features.length <= 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback({
                latitude: response.data.features[0].center[0],
                longitude: response.data.features[0].center[1],
                location: response.data.features[0].place_name
            })
            
        }
    }).catch( (error) => {
        callback('Enable to connect to the server', undefined);
    });
})

module.exports = geoCode
















