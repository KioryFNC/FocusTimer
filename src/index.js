const buttonStop = document.querySelector('.stop')
const buttonPlay = document.querySelector('.play')
const buttonSumMinutes = document.querySelector('.up')
const buttonSubMinutes = document.querySelector('.down')
const buttonFlorest = document.querySelector('.florest')
const buttonRain = document.querySelector('.rain')
const buttonCafe = document.querySelector('.cafe')
const buttonFlame = document.querySelector('.flame')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const florestAudio = new Audio('https://github.com/demon1094/Focus-Timer--Dark-Mode/blob/master/sounds/forest.mp3?raw=true')
const rainAudio = new Audio('https://github.com/demon1094/Focus-Timer--Dark-Mode/blob/master/sounds/rain.mp3?raw=true')
const cafeAudio = new Audio('https://github.com/demon1094/Focus-Timer--Dark-Mode/blob/master/sounds/lofi.mp3?raw=true')
const flameAudio = new Audio('https://github.com/demon1094/Focus-Timer--Dark-Mode/blob/master/sounds/fire.mp3?raw=true')
  

function buttonPressFlorest() {
  florestAudio.loop = true
  florestAudio.play()
}

function buttonPressRain() {
  rainAudio.loop = true
  rainAudio.play()
}

function buttonPressCafe() {
  cafeAudio.loop = true
  cafeAudio.play()
}

function buttonPressFlame() {
  flameAudio.loop = true
  flameAudio.play()
}

let isTimerRunning = false
let timerTimeOut
let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)

const timer = function() {
  timerTimeOut = setTimeout(() => {
    if (minutes <= 0 && seconds <= 0) {
      return
    }

    if (seconds == 0 ) {
      minutes--
      seconds = 60
      updateTimerDisplay(minutes, seconds)
    }

    seconds--

    updateTimerDisplay(minutes, seconds)
    
    timer()
  }, 1000)
}

function handlePlayTimer() {
  if(!isTimerRunning) {
    isTimerRunning = true
    timer()
  } else {
    alert("Você ja iniciou o timer")
  }
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.innerText = String(minutes).padStart(2, '00')
  secondsDisplay.innerText = String(seconds).padStart(2, '00')
}

function stopTimer() {
  isTimerRunning = false
  clearTimeout(timerTimeOut)
  updateTimerDisplay(minutes = 25, seconds = 0)
}

function addMinutes() {
  if (minutes > 85) {
    minutes = 90
    seconds = 0
    updateTimerDisplay(minutes, seconds)
  } else {
    minutes = minutes + 5
    updateTimerDisplay(minutes, seconds)
  }
}

function subMinutes() {
  if (minutes < 5) {
    minutes = 0
    seconds = 0
    updateTimerDisplay(minutes, seconds)
  } else {
    minutes = minutes - 5
    updateTimerDisplay(minutes, seconds) 
  }
}

buttonPlay.addEventListener('click', handlePlayTimer)
buttonStop.addEventListener('click', stopTimer)
buttonSumMinutes.addEventListener('click', addMinutes)
buttonSubMinutes.addEventListener('click', subMinutes)
buttonFlorest.addEventListener('click', buttonPressFlorest)
buttonRain.addEventListener('click', buttonPressRain)
buttonCafe.addEventListener('click', buttonPressCafe)
buttonFlame.addEventListener('click', buttonPressFlame)