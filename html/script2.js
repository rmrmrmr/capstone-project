const mobMenuAbt = document.getElementById('mobileMenuAbt');
const mobMenuIndex = document.getElementById('mobMenuAbt');
const xMenuBttn = document.getElementById('xMenuBttn');
const logo = document.getElementById('logoLink');
const pastSummits = document.getElementById('summitsLink');
const partners = document.getElementById('partnersLink');

function openMobMenu() {
  mobMenuIndex.classList.add('lr-menu');
  mobMenuIndex.style.visibility = 'visible';
}

function closeMobMenu() {
  mobMenuIndex.style.visibility = 'hidden';
  mobMenuIndex.classList.remove('lr-menu');
}

mobMenuAbt.addEventListener('click', openMobMenu);
xMenuBttn.addEventListener('click', closeMobMenu);
logo.addEventListener('click', closeMobMenu);
pastSummits.addEventListener('click', closeMobMenu);
partners.addEventListener('click', closeMobMenu);