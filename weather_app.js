const request = require("request")


const url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=d83e1774cec58b1ffd8f6e1c5596dce6'

request(url,(error , response , body) => {
    const data = JSON.parse(body)
    console.log(data)
}

)