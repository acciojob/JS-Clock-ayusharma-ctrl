const secondsHand = document.querySelector(".second-hand")
const minsHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")

function setDate()
{
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = 6 * seconds;
    secondsHand.style.transform = `rotate(${secondsDegrees + 90}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = 6 * mins;
    minsHand.style.transform = `rotate(${minsDegrees + 90}deg)`;

    const hour = now.getHours();
    const hourDegrees = (30 * hour + mins / 2) % 360;
    hourHand.style.transform = `rotate(${hourDegrees + 90}deg)`;
}

setInterval(setDate, 1000)

setDate();