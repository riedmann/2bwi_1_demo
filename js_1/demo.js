let config = {
    month: 0,
    startday: 4,
    months: [
      { name: "Jan", days: 32 },
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
  
for (let index = 0; index < config.days.length; index++) {
    const element = config.days[index];
    console.log(element);
    
}



