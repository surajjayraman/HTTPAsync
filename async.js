import fetch from "node-fetch";
const apiKey = generateKey();
const itemURL = 'https://api.boot.dev/v1/courses_rest_api/learn-http/items';

// async function code
const getItemData = async function(url) {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': apiKey,
      'Content-Type': 'application/json'
    }
  });
  return response.json();
};

function generateKey() {
  const characters = 'ABCDEF0123456789';
  let result = '';
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function logItems(items) {
  for (const item of items) {
    console.log(item.name);
  }
}

const start = async function() {
    const items = await getItemData(itemURL);
    logItems(items);
    return items;
  };
  
  start();