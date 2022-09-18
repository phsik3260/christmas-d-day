const title = document.querySelector(".title");
const dDay = document.querySelector(".christmas-d-day");

function calculateDays() {
  const christmasDate = new Date("2022-12-25T00:00:00");
  const todayDate = new Date();
  const diff = christmasDate - todayDate;

  const diffDay = String(Math.floor(diff / (1000 * 60 * 60 * 24)));
  const diffHours = String(Math.floor((diff / (1000 * 60 * 60)) % 24));
  const diffMinutes = String(Math.floor((diff / (1000 * 60)) % 60));
  const diffSeconds = String(Math.floor((diff / 1000) % 60));

  const days = diffDay !== "1" ? "days" : "day";
  const hours = diffHours !== "1" ? "hours" : "hour";
  const mins = diffMinutes !== "1" ? "mins" : "min";
  const secs = diffSeconds !== "1" ? "secs" : "sec";

  dDay.innerText = `${diffDay}${days} ${diffHours}${hours} ${diffMinutes}${mins} ${diffSeconds}${secs}`;

  if (Number(diffDay) === 0) {
    // Chirstmas Eve!
    title.innerText = "Today is Happy Chirstmas Eve :)";
  }
  if (Number(diffDay) === -1) {
    // Chirstmas!
    title.innerText = "Today is Happy Chirstmas :)";
    dDay.innerText = "Have a happy time with your lovers!";
  }
  if (Number(diffDay) < -1) {
    // Chirstmas Gone
    title.innerText = "Chirstmas is Come Back Soon :)";
    dDay.innerText = "Love yourself!";
  }
}

calculateDays();
setInterval(calculateDays, 1000);
