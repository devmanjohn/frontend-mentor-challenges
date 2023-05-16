const expandDetails = document.getElementById('expand-details');
const extraDetails = document.getElementById('extra-details');
const mainDetails = document.querySelector('.main-wrapper');

expandDetails.addEventListener('click', () => {
  expandDetails.classList.toggle('flip');
  extraDetails.classList.toggle('open-details');
  mainDetails.classList.toggle('translate-timezone');
});

const IP_BASE_API_URL = `https://api.ipbase.com/v2/info?apikey=${process.env.IP_BASE_API_KEY}`;

let currentIp = '';
let timezoneID = '';
let timezoneCode = '';
let currentCity = '';
let currentCountry = '';

async function fetchIp() {
  const response = await fetch('https://api.iplocation.net/?cmd=get-ip');
  const data = await response.json();

  currentIp = data.ip;

  fetchIpDetails();
}

async function fetchIpDetails() {
  const response = await fetch(`${IP_BASE_API_URL}&ip=${currentIp}`);
  const data = await response.json();

  timezoneID = data.data.timezone.id;
  timezoneCode = data.data.timezone.code;
  currentCity = data.data.location.city.name;
  currentCountry = data.data.location.country.fips;

  getWorldData();
}

async function getWorldData() {
  const response = await fetch(
    `http://worldtimeapi.org/api/timezone/${timezoneID}`
  );
  const data = await response.json();

  const { day_of_week, day_of_year, timezone, week_number } = data;

  // set location
  document.getElementById('current-country').innerHTML = currentCountry;
  document.getElementById('current-city').innerHTML = currentCity;

  // set extra details
  document.getElementById('current-timezone').innerHTML = timezone;
  document.getElementById('day-of-the-week').innerHTML = day_of_week;
  document.getElementById('day-of-the-year').innerHTML = day_of_year;
  document.getElementById('week-number').innerHTML = week_number;
}

async function updateQuote() {
  const response = await fetch('https://api.quotable.io/random');
  const data = await response.json();

  document.querySelector('.author').innerHTML = data.author;
  document.querySelector('.quote').innerHTML = data.content;
}

// Keep updating the time based on users system.
function updateTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();

  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}`;

  document.querySelector(
    '.current-time'
  ).innerHTML = `${formattedTime}<span class="timezone">${timezoneCode}</span>`;

  if (hours >= 5 && hours < 12) {
    document.getElementById('theme-icon').src = '/assets/desktop/icon-sun.svg';
    document.getElementById(
      'theme-message'
    ).innerHTML = `Good morning<span class="tablet-only">, it's currently</span>`;
    document.querySelector('body').classList.add('morning');
  } else if (hours >= 12 && hours < 18) {
    document.getElementById('theme-icon').src = '/assets/desktop/icon-sun.svg';
    document.getElementById(
      'theme-message'
    ).innerHTML = `Good afternoon<span class="tablet-only">, it's currently</span>`;
    document.querySelector('body').classList.add('morning');
  } else {
    document.getElementById('theme-icon').src = '/assets/desktop/icon-moon.svg';
    document.getElementById(
      'theme-message'
    ).innerHTML = `Good evening<span class="tablet-only">, it's currently</span>`;
    document.querySelector('body').classList.add('evening');
  }
}

document.querySelector('.refresh-btn').addEventListener('click', () => {
  updateQuote();
});

// Fetch IP & Data...
fetchIp();

updateTime();
setInterval(updateTime, 1000);
