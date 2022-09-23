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

const speakersInfo = [
  {
    id: 'speaker1',
    image: 'images/speaker1.png',
    speakerName: 'Yochai Benkler',
    resume: 'Berkham Professor of Environmental Legal Studies at Harvard Law School',
    info: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Forests in 2007',
  },
  {
    id: 'speaker2',
    image: 'images/speaker2.png',
    speakerName: 'SohYeong Noh',
    resume: 'Director of BioArt Centre and a Board member of CC Korea',
    info: 'As the main venue for bioart production in Korea, Nabi promotes cross-disciplinary collaboration and understanding of climate change among the humanities and science',
  },
  {
    id: 'speaker3',
    image: 'images/speaker3.png',
    speakerName: 'Lila Tretikov',
    resume: 'Executive Director of the Wikimedia Foundation',
    info: 'Lorem three ipsum dolor sit amet consectetur adipisicing elepellendus ea vitae earum!',
  },
  {
    id: 'speaker4',
    image: 'images/speaker4.png',
    speakerName: 'Kilnam Chon',
    resume: 'Lorem, ipsum dolor.',
    info: 'Lorem four ipsum dolor sit amet consectetur adipisicing elit. Eligendi reprehenderi stias quibusdam facilis voluptatibus repellendus ea vitae earum!',
  },
  {
    id: 'speaker5',
    image: 'images/speaker5.png',
    speakerName: 'Julia Leda',
    resume: 'Lorem ipsum dolor sit amet.',
    info: 'Lorem five ipsum dolor sit amet elit. Eligendi reprehenderit quaerat, incidunt molestias quibusdam facilis voluptatibus repellendus ea vitae earum!',
  },
  {
    id: 'speaker6',
    image: 'images/speaker6.png',
    speakerName: 'Ryan Merkley',
    resume: 'Lorem ipsum dolor sit amet.',
    info: 'Lorem six ipsum dolor sitelit. Eligendi reprehenderit quaerat, iacilis voluptatibus repellendus ea vitae earum!',
  },
];
const morBttn = document.getElementById('moreBttn');
const lessBttn = document.getElementById('lessBttn');
const listPH = document.getElementById('speakersList');

function moreSpeakers() {
  for (let i = 2; i < speakersInfo.length; i += 1) {
    const spId = speakersInfo[i].id;
    const spImg = speakersInfo[i].image;
    const spName = speakersInfo[i].speakerName;
    const spRes = speakersInfo[i].resume;
    const spInfo = speakersInfo[i].info;
    const speakerCard = document.createElement('div');
    speakerCard.setAttribute('id', spId);
    speakerCard.classList.add('speakerCard');
    const imgdiv = document.createElement('img');
    imgdiv.classList.add('speakerImage');
    imgdiv.setAttribute('src', spImg);
    imgdiv.setAttribute('alt', 'Speaker Image');
    speakerCard.append(imgdiv);
    const textPH = document.createElement('div');
    textPH.classList.add('speakerTxt');
    const nomine = document.createElement('p');
    nomine.classList.add('speakerName');
    nomine.innerHTML = spName;
    textPH.append(nomine);
    const resum = document.createElement('p');
    resum.classList.add('speakerRes');
    resum.innerHTML = spRes;
    textPH.append(resum);
    const divBar = document.createElement('div');
    divBar.classList.add('speakerBar');
    textPH.append(divBar);
    const desc = document.createElement('p');
    desc.classList.add('speakerDesc');
    desc.innerHTML = spInfo;
    textPH.append(desc);
    speakerCard.append(textPH);
    listPH.append(speakerCard);
  }
  morBttn.style.display = 'none';
  lessBttn.style.display = 'flex';
}

function lessSpeakers() {
  const morBttn = document.getElementById('moreBttn');
  morBttn.style.display = 'flex';
  lessBttn.style.display = 'none';

  const sp3 = document.getElementById('speaker3');
  sp3.remove();
  const sp4 = document.getElementById('speaker4');
  sp4.remove();
  const sp5 = document.getElementById('speaker5');
  sp5.remove();
  const sp6 = document.getElementById('speaker6');
  sp6.remove();
}

morBttn.addEventListener('click', moreSpeakers);
lessBttn.addEventListener('click', lessSpeakers);


function hideSpeakersDesk() {
  if(window.innerWidth > 768) {
    
    morBttn.style.display = 'none';
    lessBttn.style.display = 'none';

  }
  else {
    lessSpeakers();
    // morBttn.style.display = 'flex';
    // lessBttn.style.display = 'none';
  }
}

window.addEventListener('resize', hideSpeakersDesk);