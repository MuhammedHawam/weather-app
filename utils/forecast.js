const request= require('request')

const forecast = (latitude,longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=24793148612297e86f1eac8a909ceba8&query='
    + latitude +',' + longitude + '&units=m'

    request({url, json:true}, (error,{body}) =>{

        if (error) {
            callback('Unable to connect to weather service',undefined)
        }
        else if (body.error) {
            callback('unable to find location',undefined)
        }
        else {
            callback(undefined,
                 body.current.weather_descriptions[0] + ". It's currently " + body.current.temperature + " degrees out. It feels like "
                + body.current.feelslike + " degrees out."
            )
        }
    })
}
module.exports =forecast