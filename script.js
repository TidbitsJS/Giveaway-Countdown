const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

let tempDate = new Date()
let tempYear = tempDate.getFullYear()
console.log("tempYear", tempYear);
let tempMonth = tempDate.getMonth()
console.log("tempMonth", tempMonth);
let tempDay = tempDate.getDate()
console.log("tempDay", tempDay);

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0)

const year = futureDate.getFullYear()
console.log("year", year);
const hours = futureDate.getHours()
console.log("hours", hours);
const minutes = futureDate.getMinutes()
console.log("minutes", minutes);

let month = futureDate.getMonth()
console.log("month", month);
month = months[month]

const weekday = weekdays[futureDate.getDay()]
console.log("weekday", weekday);

const date = futureDate.getDate()
console.log("date", date);

giveaway.textContent = `Giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`

const futureTime = futureDate.getTime()
function getRemaindingTime() {
  const today = new Date().getTime()
  const t = futureTime - today

  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMinute = 60 * 1000

  let days = t / oneDay
  days = Math.floor(days)

  let hours = Math.floor((t % oneDay) / oneHour)
  let minutes = Math.floor((t % oneHour) / oneMinute)
  let seconds = Math.floor((t % oneMinute) / 1000)

  const values = [days, hours, minutes, seconds]

  function format(item) {
    if (item < 10) {
      return ( item = `0${item}`)
    }

    return item
  }

  items.forEach((item, index) => {
    item.innerHTML = format(values[index])
  })

  if(t < 0) {
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class="expired"> Sorry, the Giveaway is no more ! </h4>`
  }
}

let countdown = setInterval(getRemaindingTime, 1000)
getRemaindingTime()
