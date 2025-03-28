// 1. map() itterate over an Array and it always gives a new array
//Convert these Miles to KM!
const distanceWalkedMilesArr = [140, 153, 161, 153, 128, 148];

const conversionFactorMilesToKm = 1.6;

function convertMilesToKms() {
  return distanceWalkedMilesArr.map(function (distanceMiles, index) {
    return `Month ${index}: ${distanceMiles * conversionFactorMilesToKm}KM`;
  });
}

console.log(convertMilesToKms());

// use map() : if you need to make use of the new array returns
// use forEach() : if you don't need to create a new array
