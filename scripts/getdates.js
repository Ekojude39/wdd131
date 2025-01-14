const lastmodified = document.querySelector("#last-modified");

const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth() + 1;
const currentYear = today.getFullYear();

const formattedDate = `${currentDay}/${currentMonth}/${currentYear}`;

if (lastmodified) lastmodified.textContent = formattedDate;