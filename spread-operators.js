const lunchMenu = [
  "Greek Salad",
  "Open Sandwich",
  "Parsnip Soup",
  "Flatbread and Dip",
];
const dinnerMenu = ["Lasagne", "Strogonoff", "Tagine", "Katsu Curry"];
const sweetMenu = [
  "Mixed Berry Ice Cream",
  "Chocolate Brownie",
  "Orange Cheesecake",
];

console.log(...lunchMenu); // epanding individual element
// Greek Salad,"Open Sandwich","Parsnip Soup","Flatbread and Dip"

console.log(lunchMenu);
// ["Greek Salad", "Open Sandwich", "Parsnip Soup", "Flatbread and Dip"]

const Menu = [...lunchMenu, ...dinnerMenu, ...sweetMenu];
console.log(Menu);

const averageSharePriceByMonthQ1 = [109.6, 103.3, 89.4];
const averageSharePriceByMonthQ2 = [109.3, 126.1, 103.3];
const averageSharePriceByMonthQ3 = [120.8, 102.3, 106.8];
const averageSharePriceByMonthQ4 = [110.9, 119.8, 113.7];

const finalYear = [
  ...averageSharePriceByMonthQ1,
  ...averageSharePriceByMonthQ2,
  ...averageSharePriceByMonthQ3,
  ...averageSharePriceByMonthQ4,
];
function findPriceExtremes(arr) {
  /*
Challenge:
2. Find the highest number from the array 
   and store it in the const 'highest'. 
3. Find the lowest number from the array 
   and store it in the const 'lowest'. 
*/
  const highest = Math.max(...arr);
  const lowest = Math.min(...arr);
  console.log(`The highest average share price was ${highest}`);
  console.log(`The lowest average share price was ${lowest}`);
}

/*
Challenge:
1. Call this function with one array holding 
   all of the data from the 4 arrays above.
*/
findPriceExtremes(finalYear);
