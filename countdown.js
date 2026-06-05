const birthdayDate = new Date("2027-03-15T00:00:00");

const monthsBox = document.getElementById("months");
const daysBox = document.getElementById("days");
const hoursBox = document.getElementById("hours");
const minutesBox = document.getElementById("minutes");
const secondsBox = document.getElementById("seconds");
const message = document.getElementById("message");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const modal = document.getElementById("welcomeModal");
const closeModal = document.getElementById("closeModal");

let countdownInterval;

const addZero = (number) => {
  return number < 10 ? `0${number}` : number;
};

const updateCountdown = () => {
  const now = new Date();
  const difference = birthdayDate - now;

  if (difference <= 0) {
    clearInterval(countdownInterval);
    monthsBox.textContent = "00";
    daysBox.textContent = "00";
    hoursBox.textContent = "00";
    minutesBox.textContent = "00";
    secondsBox.textContent = "00";
    message.textContent = "🎉 Happy Birthday! 🎂";
    return;
  }

  const totalSeconds = Math.floor(difference / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);

  const months = Math.floor(totalDays / 30);
  const days = totalDays % 30;
  const hours = totalHours % 24;
  const minutes = totalMinutes % 60;
  const seconds = totalSeconds % 60;

  monthsBox.textContent = addZero(months);
  daysBox.textContent = addZero(days);
  hoursBox.textContent = addZero(hours);
  minutesBox.textContent = addZero(minutes);
  secondsBox.textContent = addZero(seconds);
};

const startCountdown = () => {
  clearInterval(countdownInterval);
  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);
};

const pauseCountdown = () => {
  clearInterval(countdownInterval);
};

startBtn.addEventListener("click", startCountdown);
pauseBtn.addEventListener("click", pauseCountdown);

setTimeout(() => {
  modal.classList.add("show");
}, 5000);

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});

startCountdown();