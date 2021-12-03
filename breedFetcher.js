const request = require('request');

// const catBreed= process.argv[2]

const fetchBreedDescription = function(catBreed, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`, (error, body) => {

    if (!error)  { // !error = good! It works!
      const data = JSON.parse(body.body);
      if (data.length === 0) {
        callback(`Woops! Looks like the ${catBreed} got away from us. Maybe try psspsspss?`, null);
      } else {
        callback(null, data[0].description);
      }
    } else {
      callback("Woops! Looks like the website doesnt exist :( The details are below:");
      callback(error, null);
    }
  });
};


module.exports = { fetchBreedDescription };

