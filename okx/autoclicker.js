// ==UserScript==
// @name        OKX Autoclicker
// @match       *://www.okx.com/*
// @grant       none
// @version     1.0
// @author      void_undefined
// @homepage    https://github.com/void-undefined/hamster-kombat-bot-from-browser 
// @description 22.07.2024, 23:50:43
// @downloadURL https://github.com/void-undefined/hamster-kombat-bot-from-browser/raw/master/okx/autoclicker.js
// @updateURL   https://github.com/void-undefined/hamster-kombat-bot-from-browser/raw/master/okx/autoclicker.js
// ==/UserScript==


const sleep = async(time) => {
  await new Promise((resolve) => {
    setTimeout(()=> {
      resolve('')
    }, time)
  })
}

const BUTTON_UP_CLASS = '.okx-growth-up-new'
const BUTTON_DOWN_CLASS = '.okx-growth-down-new'

let CURRENT_POINTS = ''
let directionUp = true
let inRace = false
let isGamePaused = false

async function runRace() {
  if(!inRace && document.querySelector('.FuelIndicator_description__EaUsa').textContent.split('/')[0].trim() !== '0') {
      const button = directionUp ? document.querySelector(BUTTON_UP_CLASS) : document.querySelector(BUTTON_DOWN_CLASS);

      if(button.classList.contains('ButtonContainer_pressed__UDboU')) {
        return
      }

      button.click()

      inRace = true
      console.log('Go to sleep')
      await sleep(9000)
      console.log('Sleep ends')

      const newValue = document.querySelector('.UserPointCounter_points__d3HeG').textContent

      if(CURRENT_POINTS === newValue) {
        directionUp = !directionUp
      }


      CURRENT_POINTS = newValue

      inRace = false
  }
}

function toggleGamePause() {
  isGamePaused = !isGamePaused;
  pauseResumeButton.textContent = isGamePaused ? 'Resume' : 'Pause';
  pauseResumeButton.style.backgroundColor = isGamePaused ? '#e5c07b' : '#98c379';
}

function autoClick() {
  if (!isGamePaused) {
      try {
          runRace()
      } catch (error) { }
  }
  setTimeout(autoClick, 1000);
}

const settingsMenu = document.createElement('div');
settingsMenu.className = 'settings-menu';
settingsMenu.style.display = 'none';

const menuTitle = document.createElement('h3');
menuTitle.className = 'settings-title';
menuTitle.textContent = 'OKX Autoclicker';

const closeButton = document.createElement('button');
closeButton.className = 'settings-close-button';
closeButton.textContent = '×';
closeButton.onclick = () => {
  settingsMenu.style.display = 'none';
};

menuTitle.appendChild(closeButton);
settingsMenu.appendChild(menuTitle);


const pauseResumeButton = document.createElement('button');
pauseResumeButton.textContent = 'Pause';
pauseResumeButton.className = 'pause-resume-btn';
pauseResumeButton.onclick = toggleGamePause;
settingsMenu.appendChild(pauseResumeButton);

const runRaceBtn = document.createElement('button');
runRaceBtn.textContent = 'Run race manually';
runRaceBtn.className = 'pause-resume-btn';
runRaceBtn.onclick = runRace;
settingsMenu.appendChild(runRaceBtn);

document.body.appendChild(settingsMenu);

const settingsButton = document.createElement('button');
settingsButton.className = 'settings-button';
settingsButton.textContent = '⚙️';
settingsButton.onclick = () => {
  settingsMenu.style.display = settingsMenu.style.display === 'block' ? 'none' : 'block';
};
document.body.appendChild(settingsButton);

const style = document.createElement('style');
style.textContent = `
  .settings-menu {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(40, 44, 52, 0.95);
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    color: #abb2bf;
    font-family: 'Arial', sans-serif;
    z-index: 10000;
    padding: 20px;
    width: 300px;
  }
  .settings-title {
    color: #61afef;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .settings-close-button {
    background: none;
    border: none;
    color: #e06c75;
    font-size: 20px;
    cursor: pointer;
    padding: 0;
  }
  .setting-item {
    margin-bottom: 12px;
  }
  .setting-label {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  }
  .setting-label-text {
    color: #e5c07b;
    margin-right: 5px;
  }
  .help-icon {
    cursor: help;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #61afef;
    color: #282c34;
    font-size: 10px;
    font-weight: bold;
  }
  .setting-input {
    display: flex;
    align-items: center;
  }
  .setting-slider {
    flex-grow: 1;
    margin-right: 8px;
  }
  .setting-value {
    min-width: 30px;
    text-align: right;
    font-size: 11px;
  }
  .tooltip {
    position: relative;
  }
  .tooltip .tooltiptext {
    visibility: hidden;
    width: 200px;
    background-color: #4b5263;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -100px;
    opacity: 0;
    transition: opacity 0.3s;
    font-size: 11px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }
  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
  .pause-resume-btn {
    display: block;
    width: calc(100% - 10px);
    padding: 8px;
    margin: 15px 5px;
    background-color: #98c379;
    color: #282c34;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    transition: background-color 0.3s;
  }
  .pause-resume-btn:hover {
    background-color: #7cb668;
  }
  .social-buttons {
    margin-top: 15px;
    display: flex;
    justify-content: space-around;
    white-space: nowrap;
  }
  .social-button {
    display: inline-flex;
    align-items: center;
    padding: 5px 8px;
    border-radius: 4px;
    background-color: #282c34;
    color: #abb2bf;
    text-decoration: none;
    font-size: 12px;
    transition: background-color 0.3s;
  }
  .social-button:hover {
    background-color: #4b5263;
  }
  .social-button img {
    width: 16px;
    height: 16px;
    margin-right: 5px;
  }
  .settings-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: rgba(36, 146, 255, 0.8);
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 18px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 9999;
  }
`;
document.head.appendChild(style);

autoClick();