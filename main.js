const xBttn = document.getElementById('mobileMenuIndx');
const mobMenuIndex = document.getElementById('mobMenuIndex');
const xMenuBttn = document.getElementById('xMenuBttn');
const mainProgram = document.getElementById('mainProgramLink');
const featuredSpeakers = document.getElementById('featuredLink');

function openMobMenu() {
  mobMenuIndex.classList.add('lr-menu');
  mobMenuIndex.style.visibility = 'visible';
}

function closeMobMenu() {
  mobMenuIndex.style.visibility = 'hidden';
  mobMenuIndex.classList.remove('lr-menu');
}

xBttn.addEventListener('click', openMobMenu);
xMenuBttn.addEventListener('click', closeMobMenu);
mainProgram.addEventListener('click', closeMobMenu);
featuredSpeakers.addEventListener('click', closeMobMenu);
