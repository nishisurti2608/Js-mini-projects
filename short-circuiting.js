const accountBalanceUsd = "$45,000,000,000 🤑💰";
const swissBankPassCodesArr = [1234, 5678, 9876, 3434];

function authenticationCheck(passCode) {
  swissBankPassCodesArr.includes(passCode) && console.log(accountBalanceUsd);
}

authenticationCheck(1234);

/*
Challenge:
1. If the passcode passed into authenticationCheck 
   exists in swissBankPassCodesArr, authenticationCheck 
   should log out accountBalanceUsd. 
   
   If the passcode does not exist in swissBankPassCodesArr 
   then authenticationCheck need not do anything.
   
⚠️ Make sure you short-circuit with &&
   hint.md for help!
*/

const jobHunter = {
  // name: 'Tom Chant',
  username: "TChant44",
  workLocation: "Europe",
};

// const jobHunterName = jobHunter.name || jobHunter.username

console.log(`Hey ${jobHunter.name || jobHunter.username}!`);
