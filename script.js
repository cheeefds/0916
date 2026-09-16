document.addEventListener('DOMContentLoaded', () => {
  // State
  let is24HourFormat = true;

  // DOM Elements
  const clockHoursEl = document.getElementById('clockHours');
  const clockMinutesEl = document.getElementById('clockMinutes');
  const clockSecondsEl = document.getElementById('clockSeconds');
  const clockAmpmEl = document.getElementById('clockAmpm');
  const clockMillisEl = document.getElementById('clockMillis');

  const fullDateTextEl = document.getElementById('fullDateText');
  const dayOfWeekTextEl = document.getElementById('dayOfWeekText');
  const timezoneTextEl = document.getElementById('timezoneText');

  const yearProgressFillEl = document.getElementById('yearProgressFill');
  const yearProgressTextEl = document.getElementById('yearProgressText');
  const dayProgressFillEl = document.getElementById('dayProgressFill');
  const dayProgressTextEl = document.getElementById('dayProgressText');
  const unixTimestampEl = document.getElementById('unixTimestamp');

  const timeGreetingEl = document.getElementById('timeGreeting');
  const formatBadgeEl = document.getElementById('formatBadge');
  const clockFormatBtn = document.getElementById('clockFormatBtn');
  const themeToggleBtn = document.getElementById('themeToggleBtn');

  const timeTaipeiEl = document.getElementById('timeTaipei');
  const timeTokyoEl = document.getElementById('timeTokyo');
  const timeLondonEl = document.getElementById('timeLondon');
  const timeNewYorkEl = document.getElementById('timeNewYork');

  const quoteTextEl = document.getElementById('quoteText');
  const newQuoteBtn = document.getElementById('newQuoteBtn');
  const currentYearEl = document.getElementById('currentYear');
  const shareBtn = document.getElementById('shareBtn');

  // Quotes Array
  const timeQuotes = [
    "「時間是世界上最平等的資源，我們如何度過它，便如何塑造自己。」",
    "「逝者如斯夫，不舍晝夜。把握當下的每一分每一秒。」",
    "「專注於當下，未來自然會為你綻放。」",
    "「時間不留痕跡，但努力會留下印記。」",
    "「每一秒都是全新的開始，創造屬於吳誠哲的無限可能。」"
  ];

  // Helper: Format number with leading zero
  const padZero = (num, length = 2) => String(num).padStart(length, '0');

  // Days of Week in Chinese
  const daysOfWeek = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

  // Update Main Clock & Metrics
  function updateClock() {
    const now = new Date();

    // Hours, Minutes, Seconds, Millis
    let rawHours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const millis = now.getMilliseconds();

    let displayHours = rawHours;
    let ampm = '';

    if (!is24HourFormat) {
      ampm = rawHours >= 12 ? 'PM' : 'AM';
      displayHours = rawHours % 12 || 12;
      clockAmpmEl.style.display = 'inline-block';
      clockAmpmEl.textContent = ampm;
    } else {
      clockAmpmEl.style.display = 'none';
    }

    clockHoursEl.textContent = padZero(displayHours);
    clockMinutesEl.textContent = padZero(minutes);
    clockSecondsEl.textContent = padZero(seconds);
    clockMillisEl.textContent = '.' + padZero(Math.floor(millis / 10), 2);

    // Full Date
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const dayIndex = now.getDay();

    fullDateTextEl.textContent = `${year} 年 ${padZero(month)} 月 ${padZero(date)} 日`;
    dayOfWeekTextEl.textContent = daysOfWeek[dayIndex];

    if (currentYearEl) currentYearEl.textContent = year;

    // Timezone
    const tzOffsetHours = -now.getTimezoneOffset() / 60;
    const tzFormatted = `UTC${tzOffsetHours >= 0 ? '+' : ''}${tzOffsetHours}`;
    timezoneTextEl.textContent = `Local Time (${tzFormatted})`;

    // Dynamic Greeting
    updateGreeting(rawHours);

    // Metrics calculation
    calculateMetrics(now);

    // World Clock calculation
    updateWorldClock(now);
  }

  // Update Greeting based on Hour
  function updateGreeting(hour) {
    let iconClass = 'fa-sun';
    let greetingText = '你好';

    if (hour >= 5 && hour < 12) {
      iconClass = 'fa-sun';
      greetingText = '早安';
    } else if (hour >= 12 && hour < 18) {
      iconClass = 'fa-cloud-sun';
      greetingText = '午安';
    } else {
      iconClass = 'fa-moon';
      greetingText = '晚安';
    }

    timeGreetingEl.innerHTML = `<i class="fa-solid ${iconClass}"></i> ${greetingText}，歡迎光臨`;
  }

  // Progress Metrics
  function calculateMetrics(now) {
    // Unix timestamp
    unixTimestampEl.textContent = Math.floor(now.getTime() / 1000);

    // Day Progress
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const msInDay = 86400000;
    const dayProgress = ((now - startOfDay) / msInDay) * 100;
    dayProgressFillEl.style.width = `${dayProgress.toFixed(1)}%`;
    dayProgressTextEl.textContent = `${dayProgress.toFixed(1)}%`;

    // Year Progress
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const endOfYear = new Date(now.getFullYear() + 1, 0, 1);
    const yearProgress = ((now - startOfYear) / (endOfYear - startOfYear)) * 100;
    yearProgressFillEl.style.width = `${yearProgress.toFixed(1)}%`;
    yearProgressTextEl.textContent = `${yearProgress.toFixed(1)}%`;
  }

  // World Clock
  function updateWorldClock(now) {
    const getTimeForTZ = (timeZone) => {
      try {
        const options = {
          timeZone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: !is24HourFormat
        };
        return new Intl.DateTimeFormat('en-US', options).format(now);
      } catch (e) {
        return '--:--:--';
      }
    };

    timeTaipeiEl.textContent = getTimeForTZ('Asia/Taipei');
    timeTokyoEl.textContent = getTimeForTZ('Asia/Tokyo');
    timeLondonEl.textContent = getTimeForTZ('Europe/London');
    timeNewYorkEl.textContent = getTimeForTZ('America/New_York');
  }

  // Event Listeners
  clockFormatBtn.addEventListener('click', () => {
    is24HourFormat = !is24HourFormat;
    formatBadgeEl.textContent = is24HourFormat ? '24H' : '12H';
    updateClock();
  });

  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const icon = themeToggleBtn.querySelector('i');
    if (document.body.classList.contains('light-theme')) {
      icon.className = 'fa-solid fa-sun';
    } else {
      icon.className = 'fa-solid fa-moon';
    }
  });

  let quoteIndex = 0;
  newQuoteBtn.addEventListener('click', () => {
    quoteIndex = (quoteIndex + 1) % timeQuotes.length;
    quoteTextEl.style.opacity = '0';
    setTimeout(() => {
      quoteTextEl.textContent = timeQuotes[quoteIndex];
      quoteTextEl.style.opacity = '1';
    }, 200);
  });

  if (shareBtn) {
    shareBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href);
        alert('連結已複製至剪貼簿！');
      } else {
        alert('吳誠哲的個人首頁');
      }
    });
  }

  // Smooth opacity transition for quotes
  quoteTextEl.style.transition = 'opacity 0.2s ease';

  // Tick loop
  updateClock();
  setInterval(updateClock, 50); // 20fps for millisecond precision display
});
