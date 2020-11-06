import '../src/styles.css'
import { template } from "handlebars";
import CardTmp from './template/cards.hbs'
import menu from '../src/menu.json'
const list = CardTmp(menu)

const menuList = document.querySelector('.js-menu')
console.log(menuList)
menuList.innerHTML = list
 
const switchControl = document.querySelector('#theme-switch-toggle')
const body = document.querySelector('body')

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

switchControl.addEventListener('change', onSwitch)
switchControl.addEventListener('change', localSave)
document.addEventListener('DOMContentLoaded', saveTheme);


function onSwitch(evt) {
    if (switchControl.checked) {
        setDarkTheme()
          } else {
            setLightTheme()
          }
    }

    
function setDarkTheme() {
  body.classList.add(Theme.DARK);
  body.classList.remove(Theme.LIGHT);
}

function setLightTheme() {
  body.classList.add(Theme.LIGHT);
  body.classList.remove(Theme.DARK);
}

function localSave() {
     if (switchControl.checked) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function saveTheme () {
    const dark = localStorage.getItem('theme');
    if (dark === Theme.DARK) {
       body.classList.add(Theme.DARK);
         switchControl.checked = true;
    }
}


