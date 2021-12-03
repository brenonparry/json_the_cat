const request = require('request');

const arr = process.argv.slice(2);
const catBreed = arr[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`, (error, body) => {
  if (!error)  { // !error = good! It works!
    const data = JSON.parse(body.body);
    if (data.length === 0) {
      console.log(`Woops! Looks like the ${catBreed} got away from us. Maybe try psspsspss?`)
    } else {
    console.log(data[0].description);
  };
} else {
  console.log("Woops! Looks like the website doesnt exist :( The details are below:")
  console.log(error);
}
  //   console.log(`Woops! Looks like the ${catBreed} got away from us. Maybe try psspsspss?`)
  // }

  // const data = JSON.parse(body);
  // console.log(data);

  // if (catBreed === undefined ) {
  //   console.log(`Woops! Looks like the ${catBreed} got away from us. Maybe try psspsspss?`)
  // }
  
  // const catDescription = data[0].description;
  

  // console.log(`${catDescription}`)
  
});

