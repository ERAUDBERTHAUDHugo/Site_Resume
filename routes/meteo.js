var express = require('express');
var router = express.Router();
var request = require('request');

const fs = require('fs');

var location=[['48.8001251,2.2632556'],['47.997542,-4.097899'],['50.62925,3.057256']];

/*var uri_tomorow='';

fs.readFile('/home/admin/API_KEY/KEY', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  data_array=data.split(",");
  console.log(data_array);
  uri_tomorow =data_array[0].split(":")[1]+data_array[0].split(":")[2]+location[0]+data_array[1]+data_array[2];

});


console.log(uri_tomorow);


request({
  uri: uri_tomorow,
  function(error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log(body)
    }
  }
});
*/

router.get('/', function(req, res, next) {
  res.render('meteo', { pagetitle: 'meteo here' });
});

module.exports = router;