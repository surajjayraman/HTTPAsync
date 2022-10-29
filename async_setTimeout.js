const craftingCompleteWait = 750;
const combiningMaterialsWait = 250;
const smeltingIronBarsWait = 0;
const shapingIronWait = 500;

// Don't touch below this line

setTimeout(() => console.log('Iron Longsword Complete!'), craftingCompleteWait);
setTimeout(() => console.log('Combining Materials...'), combiningMaterialsWait);
setTimeout(() => console.log('Smelting Iron Bars...'), smeltingIronBarsWait);
setTimeout(() => console.log('Shaping Iron...'), shapingIronWait);

console.log('Firing up the forge...');

const sleep = function(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
const sleepPromise = await sleep(2500);

// prints:
// The promise finally resolved!
// or
// the promise finally rejected!
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (getRandomBool()) {
      resolve("resolved!");
    } else {
      reject("rejected!");
    }
  }, 1000);
});
  
const getRandomBool = function() {
  return Math.random() < .5;
};

promise.then((message) => {
  console.log(`The promise finally ${message}`);
}).catch((message) => {
  console.log(`The promise finally ${message}`);
});

// applyDamage function that takes two parameters:damage, currentHP
const applyDamage = (damage, currentHP) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // ?
        const newHP = currentHP - damage;
        if(newHP > 0){
          resolve(`The player suffers ${damage} points of damage and has ${newHP} hit points remaining`);
        } else {
          reject(`The player suffers ${damage} points of damage and has fallen unconscious.`);
        }
      }, 1000)
    })
  }
  
  // Don't touch below this line
  
  function runApplyDamageTest(damage, currentHP) {
    console.log(`Applying ${damage} damage to player with ${currentHP} HP...`)
    applyDamage(damage, currentHP).then((message) => {
      console.log(`...applyDamage resolved with: ${message}`)
    }).catch((message) => {
      console.log(`...applyDamage rejected with: ${message}`)
    })
  }
  
  runApplyDamageTest(27, 50)
  await applySleep(1100)
  runApplyDamageTest(50, 50)
  await applySleep(1100)
  runApplyDamageTest(110, 100)
  await applySleep(1100)
  
  function applySleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
  