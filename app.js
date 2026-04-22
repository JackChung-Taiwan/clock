// ==========================================
// 1. 畫面切換系統
// ==========================================
function showTool(toolId, clickedButton) {
  // 隱藏所有內容區塊
  const sections = document.querySelectorAll('.tool-section');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  
  // 顯示被點選的內容區塊
  document.getElementById(toolId).classList.add('active');

  // 更新左側選單的按鈕顏色狀態
  const buttons = document.querySelectorAll('.nav-btn');
  buttons.forEach(btn => {
    btn.classList.remove('active');
  });
  clickedButton.classList.add('active');
}

// ==========================================
// 2. 計數器系統
// ==========================================
let currentCount = 0;

function changeCount(amount) {
  currentCount += amount;
  document.getElementById('countDisplay').innerText = currentCount;
}

function resetCount() {
  currentCount = 0;
  document.getElementById('countDisplay').innerText = currentCount;
}

// ==========================================
// 3. 番茄鐘系統
// ==========================================
const WORK_TIME = 25 * 60; // 預設 25 分鐘 (1500 秒)
let timeLeft = WORK_TIME; 
let timerInterval = null;

// 更新畫面上的時間顯示格式 (MM:SS)
function updateTimeDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  
  // 如果數字小於 10，前面補 0 (例如 9 變成 09)
  if (minutes < 10) minutes = '0' + minutes;
  if (seconds < 10) seconds = '0' + seconds;
  
  document.getElementById('timeDisplay').innerText = `${minutes}:${seconds}`;
}

// 開始計時
function startTimer() {
  // 避免重複點擊產生多個計時器導致加速
  if (timerInterval !== null) return; 

  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimeDisplay();
    } else {
      // 時間到了！
      clearInterval(timerInterval);
      timerInterval = null;
      alert("時間到！辛苦了，休息一下吧！");
      // 學生可以挑戰在這裡加上音效：
      // new Audio('你的音效檔網址.mp3').play();
    }
  }, 1000); // 1000 毫秒 = 1 秒執行一次
}

// 暫停計時
function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

// 重置計時器
function resetTimer() {
  stopTimer(); // 先停止計時
  timeLeft = WORK_TIME; // 恢復為 25 分鐘
  updateTimeDisplay(); // 更新畫面
}