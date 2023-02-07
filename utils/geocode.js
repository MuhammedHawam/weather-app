const request= require('request')

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibXVoYW1tZWRoYXdhbSIsImEiOiJja3Q2dW9tN3MwbTZmMm9vNzFzcm9mMmdsIn0.BMO5LC0_8MrBBw3Fv-Ok9w&limit=1'
    request({ url, json: true }, (error, {body}) => {
       if (error) {
          callback('Unable To connect to location services!', undefined)
       }
       else if (body.features.length === 0) {
          callback('Unable To find location !', undefined)
       }
       else{
          callback(undefined,{
             latitude: body.features[0].center[1],
             longitude: body.features[0].center[0],
             location: body.features[0].place_name
          })
       }
    })
 }

 module.exports = geoCode