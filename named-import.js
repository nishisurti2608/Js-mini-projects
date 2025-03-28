// Why it is called named import ? Because we have to import it by it's name which was given in original file

import { interplanetaryDestinationsArr as destination } from "/data.js"; //changed name
//whatevery thing you want to export should have export keyword

// export { interplanetaryDestinationsArr, shortSpaceTripsArr } you can export at the end everything
console.log(destination);

export default function getMatchingTripsArr(arr, keyword) {
  return arr.filter(function (trip) {
    return trip.description.toLowerCase().includes(keyword);
  });
}

import filterFunction from "/searchFunction.js";

//you can call whatever you want but you can have only 1 default export from the file
