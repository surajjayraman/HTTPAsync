import fetch from "node-fetch";
const apiKey = generateKey();
const itemURL = getURL();
const domain = 'api.boot.dev';
const bootdevURL = 'https://boot.dev/learn/learn-python'

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
const getItemData = async function(url) {
  const response = await fetch(url, getSettings);
  return response.json();
};

// Refactor to add getUrl() and getSettings()
const getSettings = function getSettings() {
  return {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': apiKey,
      'Content-Type': 'application/json'
    }
  }
}

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
    const items = await getItemData(itemURL);
    logItems(items);
    return items;
  };


  
  start();



