import fetch from "node-fetch";
try {
  const speed = car.speed;
} catch (err) {
  console.log(`An error was thrown: ${err}`);
  // the code cleanly logs:
  // "An error was thrown: ReferenceError: car is not defined"
}

try {
  printCharacterStats(4);
  printCharacterStats('ten');
  printCharacterStats(10);
    
} catch (err) {
  console.log(`An error was thrown: ${err}`);
  // the code cleanly logs:
  // "An error was thrown: Parameter is not a number!"
}
  
  
// don't touch below this line
  
function printCharacterStats(level) {
  if (isNaN(level)) {
    throw 'Parameter is not a number!';
  }
  console.log(`Your character is level ${level}!`);
}
  
// Example with .then and .catch callbacks
const fetchUser = async function () {
    const response = await fetch('https://fantasyquest.servers')
    return response.json()
  }

fetchUser().then(function(user) {
  console.log(`user fetched: ${user}`);
}).catch(function(err) {
  console.log(`an error was thrown: ${err}`);
});

// Example of awaiting a promise
try {
    const user = await fetchUser()
    console.log(`user fetched: ${user}`)
  } catch (err) {
    console.log(`an error was thrown: ${err}`);
  }


try{
    const leaderboard = await fetchLeaderBoard();
    console.log(leaderboard);
} catch(err) {
    console.log(`Our servers are down, but we will be up and running soon`);
}  


// don't touch below this line

async function fetchLeaderBoard() {
  const response = await fetch('https://fantasyquest.servers')
  return response.json()
}
