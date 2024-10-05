const{countryName,starPlayers,aboutIndianTeam} = require ("./cricket.js");

const{pushpaTitle,pushpaStarCast,aboutPushpaMovie} = require ("./pushpa.js");

let stateName = "Telangana";
let stateCMName = "Revanth Reddy";
let stateCapital = "Hyderabad";

let aboutHyderabad = () => {
    console.log("Hyderabad is a Capital of Telangana.")
};

aboutHyderabad();

console.log(stateName);
console.log(stateCMName);
console.log(stateCapital);

console.log(countryName);
console.log(starPlayers);
aboutIndianTeam();


console.log(pushpaTitle);
console.log(pushpaStarCast);
aboutPushpaMovie();
