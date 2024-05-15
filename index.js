
let today_date_element = document.getElementById("today_date");
let today_time_element = document.getElementById("today_time");
let today_date_work = document.getElementById("today_work");
const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const activities = [
  "Work on SMLL", 
  "Write some docs", 
  "Design the Hexarevison website", 
  "Work on some products for Hexarevison", 
  "Take a break", 
  "Study!!", 
  "Check for quizzes"
]; 

let date = new Date(); 
let dt = date.getDate(); 
let day = weekdays[date.getDay()];
let month= months[date.getMonth()]; 
let year = date.getFullYear(); 

let random_act = getRndInteger(1, 7);

today_date_element.innerText = `${dt} ${day} - ${month} / ${year}`;
today_date_work.innerText = activities[random_act - 1]; 

const make_time = () => {
  var seconds = date.getSeconds(); 
  var minutes = date.getMinutes(); 
  var hours = date.getHours(); 

  seconds = seconds < 10 ? `0${seconds}` : `${seconds}`; 
  minutes = minutes < 10 ? `0${minutes}` : `${minutes}`; 
  hours = hours < 10 ? `0${hours}` : `${hours}`; 

  // today_time_element.innerText = `${hours} : ${minutes} : ${seconds} / 00 : 00 : 00`;
};


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
