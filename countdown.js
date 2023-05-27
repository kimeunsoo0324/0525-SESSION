const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  let tempDate = new Date();

  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();

  const futureDate = new Date(tempYear, tempMonth, tempDay + 25, 17, 45, 0);

  let year = futureDate.getFullYear();
  let month = futureDate.getMonth();
  let weekday = futureDate.getDay();
  let date = futureDate.getDate();
  let hours = futureDate.getHours();
  let minutes = futureDate.getMinutes();

  weekday = weekdays[weekday];
  month = months[month];

  const lastday = document.querySelector(".lastday");
  const items = document.querySelectorAll(".deadline-format h4");
  const deadline = document.querySelector(".deadline");

  lastday.textContent = `End of Class : ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}`;

  let futureTime = futureDate.getTime();

  function getRemainingTime(){
        
        let today = new Date().getTime();
        let t = futureTime - today;

        const oneDay = 60 * 60 * 24 * 1000;
        const oneHour = 60 * 60 * 1000;
        const oneMinute = 60 * 1000;

        let days = Math.floor(t / oneDay);
        let hours = Math.floor((t % oneDay) / oneHour);
        let minutes = Math.floor((t % oneHour) / oneMinute);
        let seconds = Math.floor((t % oneMinute) / 1000);

        console.log(days);
        console.log(hours);
        console.log(minutes);
        console.log(seconds);

        function format(item){
            if(item < 10){
              return (item = `0${item}`);
            }
            return item;
        };

        let values = [days, hours, minutes, seconds];

        items.forEach(function(item, index){
          item.innerHTML = format(values[index]);
        });

        if(t < 0){
          clearInterval(countdown);
          deadline.innerHTML = `<h4 class="end">종강 축하드려요!</h4>`;
        }
  }

  let countdown = setInterval(getRemainingTime, 1000);

  getRemainingTime();