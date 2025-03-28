// Fucntion declarations are hoisted : moved to top of their scope before code exe

console.log(getSpendAlert(150));
getspendAlert(100);

const getSpendAlert = function (amount) {
  return `Warning! You just spent £${amount}!`;
}; //function expression not hoisted

function getspendAlert(amount) {
  return `Warning! You just spent £${amount}!`;
} // function declaration
