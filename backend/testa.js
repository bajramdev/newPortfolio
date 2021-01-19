const fetch =  require("node-fetch");

const image =  fetch(`http://openweathermap.org/img/wn/09n@2x.png`)
    .then(el => console.log(el.url))