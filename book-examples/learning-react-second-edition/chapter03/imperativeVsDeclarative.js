// Imperative
const string = "Restaurants in Hanalei";
const urlFriendly = "";

for (var i = 0; i < string.length; i++) {
  if (string[i] === " ") {
    urlFriendly += "-";
} else {
  urlFriendly += string[i];
}
}

console.log(urlFriendly); // "Restaurants-in-Hanalei"


// Declarative
const string2 = "Restaurants in Hanalei";
const urlFriendly2 = string2.replace(/ /g, "-");

console.log(urlFriendly2);