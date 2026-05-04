const days = document.getElementById("day");
const clock = document.getElementById("clock");
const dateBox = document.getElementById("date");
const greetBox = document.getElementById("greet");
const toggleBtn = document.getElementById("toggle");
const stopBtn = document.getElementById("stop");
const startBtn = document.getElementById("start");

let is24Hour = false;

function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let day = now.getDate();
  let month = now.getMonth() + 1;
  const year = now.getFullYear();

  // day
  const dayIndex = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  days.innerText = dayIndex[now.getDay()];

  // for greetind
  if (hours > 12 && hours < 16) greetBox.innerText = "☀️Good Afternoon";
  else if (hours > 16 && hours < 19) greetBox.innerText = "🌇Good Evening";
  else if (hours > 19 && hours < 24) greetBox.innerText = "🌃Good Night";
  else greetBox.innerText = "🌄Good Morning";

  // for session
  let session = "AM";
  if (hours >= 12) session = "PM";

  //   12/24

  let displayHour = hours;
  if (!is24Hour) {
    displayHour = hours % 12;
    displayHour = displayHour ? displayHour : 12;
  }
  //   leading
  displayHour = displayHour.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");
  day = day.toString().padStart(2, "0");
  month = month.toString().padStart(2, "0");
  //clock
  clock.innerText = is24Hour
    ? `${displayHour}:${minutes}:${seconds}`
    : `${displayHour}:${minutes}:${seconds}:${session}`;
  dateBox.innerText = `📅 ${day} / ${month} / ${year}`;
}

let intervalId = null;
intervalId = setInterval(updateClock, 1000);
// for toggle button
toggleBtn.addEventListener("click", () => {
  is24Hour = !is24Hour;
});

// stop button
stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});

// start button

startBtn.addEventListener("click", () => {
  if (!intervalId) {
    intervalId = setInterval(updateClock, 1000);
  }
});
