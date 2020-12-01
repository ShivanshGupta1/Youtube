const express = require('express');
const request = require('request');
const app = express();
const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', { info: null, error: null })

});
app.listen(3000, () => {
    console.log("server ")
})

    app.post('/', (req, res) => {

let youtube_url = req.body.url
var options = {
    method: 'GET',
    url: 'https://youtube-video-info1.p.rapidapi.com/youtube-info/',
    qs: {url: youtube_url},
    headers: {
      'x-rapidapi-host': 'youtube-video-info1.p.rapidapi.com',
      'x-rapidapi-key': '3c5652e1bcmsh6b58e18266de2c0p1437bdjsn6dfb08d48596',
    }
  };
  request(options, function (error, response, body) {
    if (error) {
        res.render('index', { info: null, error: 'Error Please try again' })
    }
    else {
        info = JSON.parse(body)
        res.render('index', { info: info, error: null,  })
    }
});
})



