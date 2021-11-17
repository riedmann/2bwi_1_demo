let config = {
  month: 0,
  startday: 4,
  months: [
    { name: "Jan", days: 31 },
    { name: "Feb", days: 28 },
    { name: "Mar", days: 31 },
    { name: "Apr", days: 30 },
    { name: "Mai", days: 31 },
    { name: "Jun", days: 30 },
    { name: "Jul", days: 31 },
    { name: "Aug", days: 31 },
  ],
  days: ["mo", "di", "mi", "do", "fr", "sa", "so"],
};

function printWeekdays() {
  let days = "";
  for (let day = 0; day < config.days.length; day++) {
    const element = config.days[day];
    days += element + " | ";
  }
  console.log(days);
}

function printCalendar() {
  printWeekdays();
  let week = "";
  for (let dayOfMonth = 0; dayOfMonth <= config.months[0].days; dayOfMonth++) {
    if (dayOfMonth < config.startday) {
      week += "   |";
    } else {
      week += getDayOfMonth(dayOfMonth) + " | ";
    }
    if (dayOfMonth % 7 == 0) {
      console.log(week);
      week = "";
    }
  }
  console.log(week);
}

function getDayOfMonth(day) {
  if (day < 10) {
    return " " + day;
  } else return day;
}

printCalendar();
