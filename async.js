import fetch from "node-fetch";
const apiKey = generateKey();
const itemURL = getURL();
const domain = 'api.boot.dev';
const bootdevURL = 'https://boot.dev/learn/learn-python';
const bootdevAPIDomain = 'api.boot.dev'

// fetch IP Address associated with a domain
const ipAddress = await fetchIPAddress(domain)
if (!ipAddress) {
  console.log('something went wrong in fetchIPAddress')
} else {
  console.log(`found IP address for domain ${domain}: ${ipAddress}`)
}

// get domain (host) name
const domainName = getDomainNameFromURL(bootdevURL)
console.log(`The domain name for ${bootdevURL} is ${domainName}`);

function getDomainNameFromURL(url) {
  // return the domain(or host) name
  const urlObj = new URL(url);
  return urlObj.hostname;
}

// async function code
const getItemData = async function(domain) {
  const response = await fetch(`https://${domain}/v1/courses_rest_api/learn-http/items`, getSettings);
  return response.json();
};

// Refactor to add getUrl() and getSettings()
const getSettings = function () {
  return {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': apiKey,
      'Content-Type': 'application/json'
    }
  }
}

// parse a URL and print all the different parts
const printURLParts = function (urlString) {
  const urlObj = new URL(urlString)
  console.log("protocol:", urlObj.protocol);
  console.log("username:", urlObj.username);
  console.log("password:", urlObj.password);
  console.log("hostname",  urlObj.hostname);
  console.log("port", urlObj.port);
  console.log("pathname", urlObj.pathname);
  console.log("search", urlObj.search);
  console.log("hash", urlObj.hash);
  
}

// mailto link
function getMailtoLinkForEmail(email) {
  return (`mailto:${email}`);
}

// update URL to fetch some location data
const logLocations = function (locations) {
  for (const location of locations) {
    console.log(`Location: ${location.name}, Recommended Character Level: ${location.recommendedLevel}`)
  } 
}
const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/locations';

const response = await fetch(url, getSettings);
const responseData = await response.json();
logLocations(responseData);


let email = 'slayer@fquest.app'
console.log(`The mailto link for ${email} is: ${getMailtoLinkForEmail(email)}`)
email = 'killer@fquest.app'
console.log(`The mailto link for ${email} is: ${getMailtoLinkForEmail(email)}`)


const fantasyQuestURL = 'http://dragonslayer:pwn3d@fantasyquest.com:8080/maps?sort=rank#id';
printURLParts(fantasyQuestURL);

function getURL() {
  return 'https://api.boot.dev/v1/courses_rest_api/learn-http/items'
}

// return IP Address associated with a domain
async function fetchIPAddress(domain) {
  const resp = await fetch(`https://cloudflare-dns.com/dns-query?name=${domain}&type=A`, {
    headers: {
      'accept': 'application/dns-json'
    }
  })
  const respObject = await resp.json()

  return(respObject.Answer[0].data);
}

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
    const items = await getItemData(bootdevAPIDomain);
    logItems(items);
    return items;
  };


  
  start();



