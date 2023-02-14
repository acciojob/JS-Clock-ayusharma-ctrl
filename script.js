//your code here
var hourHand = document.querySelector('.hour-hand');
var minHand = document.querySelector('.min-hand');
var secondHand = document.querySelector('.second-hand');

document.addEventListener('DOMContentLoaded', showTime)

setInterval(showTime, 1000);

function showTime(){
  const currTime = new Date();
  const seconds = currTime.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = currTime.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
  minHand.style.transform = `rotate(${Math.floor(minutesDegrees)}deg)`;

  const hours = currTime.getHours();
  const hoursDegrees = ((hours / 12) * 360) + ((minutes/60)*30) + 90;
  hourHand.style.transform = `rotate(${Math.floor(hoursDegrees)}deg)`;
}