// console.log('worked !!!');


var config = require('./config');
var axios = require('axios');

var url = `https://newsapi.org/v2/everything?q=apple&from=2019-04-29&to=2019-04-29&sortBy=popularity&apiKey=${config.apiKey}`;


axios
// .get(url)
// .then(res => res.data)
// .then(data => console.log(data));

// .then(function(res) { return res.data })
// .then(function(data) {
//     console.log(res.data)
// });

// console.log(url);

    .get(url)
    .then(function(res) {
        console.log(res.data);
    });