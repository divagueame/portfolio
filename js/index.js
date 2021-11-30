
function triggerResize (){
  let viewportWidth = window.innerWidth;
if (viewportWidth>=768){
//Offset the content by its size
const projectCards = document.querySelectorAll('.project-card-content');
projectCards.forEach(projectCard=>{
  let cardsize = 18 + projectCard.childNodes[3].scrollHeight + projectCard.childNodes[5].scrollHeight;
  projectCard.style.transform = `translateY(${cardsize}px)`;
})
}

}

window.addEventListener('resize', triggerResize); 
window.onload = triggerResize

// ROOM
//Update gallery items
const galleryRoomMain =  document.getElementById('gallery-room-main');
const galleryRoomImgs = document.querySelectorAll('.gallery-room-img');

galleryRoomImgs.forEach((img,i)=>{
  img.addEventListener('click', ()=>{
    let newUrl = `./img/projects/room/${1+i}.jpg`;
    galleryRoomMain.style.backgroundImage = `url(${newUrl})`;
  })
})
// IP TRACKER
//Update gallery items
const galleryIptrackerMain =  document.getElementById('gallery-iptracker-main');
const galleryIptrackerImgs = document.querySelectorAll('.gallery-iptracker-img');

galleryIptrackerImgs.forEach((img,i)=>{
  img.addEventListener('click', ()=>{
    let newUrl = `./img/projects/iptracker/${1+i}.jpg`;
    galleryIptrackerMain.style.backgroundImage = `url(${newUrl})`;
  })
})

// DICE 
const galleryDiceMain =  document.getElementById('gallery-dice-main');
const galleryDiceImgs = document.querySelectorAll('.gallery-dice-img');

galleryDiceImgs.forEach((img,i)=>{
  img.addEventListener('click', ()=>{
    let newUrl = `./img/projects/dice/${1+i}.jpg`;
    galleryDiceMain.style.backgroundImage = `url(${newUrl})`;
  })
})


// CHESS 
const galleryChessMain =  document.getElementById('gallery-chess-main');
const galleryChessImgs = document.querySelectorAll('.gallery-chess-img');

galleryChessImgs.forEach((img,i)=>{
  img.addEventListener('click', ()=>{
    let newUrl = `./img/projects/chess/${1+i}.jpg`;
    galleryChessMain.style.backgroundImage = `url(${newUrl})`;
  })
})


// STINGY 
const galleryStingyMain =  document.getElementById('gallery-stingy-main');
const galleryStingyImgs = document.querySelectorAll('.gallery-stingy-img');

galleryStingyImgs.forEach((img,i)=>{
  img.addEventListener('click', ()=>{
    let newUrl = `./img/projects/stingy/${1+i}.jpg`;
    galleryStingyMain.style.backgroundImage = `url(${newUrl})`;
  })
})

// PALABRAS 
const galleryPalabrasMain =  document.getElementById('gallery-palabras-main');
const galleryPalabrasImgs = document.querySelectorAll('.gallery-palabras-img');

galleryPalabrasImgs.forEach((img,i)=>{
  img.addEventListener('click', ()=>{
    let newUrl = `./img/projects/palabras/${1+i}.jpg`;
    galleryPalabrasMain.style.backgroundImage = `url(${newUrl})`;
  })
})

 


setInterval(()=>{
  const pageSkills = document.getElementById('page-skills');
  const pageProjects = document.getElementById('page-projects');
  const pageAbout = document.getElementById('page-about');
  const docContainer = document.querySelector('.container');
  
  let currentPosition = docContainer.scrollTop;
  let enterValue = 1.6*(pageSkills.offsetTop - pageAbout.offsetHeight);
  let exitValue = 1.08*(pageProjects.offsetTop - pageAbout.offsetHeight)
  // console.log(enterValue,exitValue)
  // pageSkills.offsetTop - pageAbout.offsetHeight

  // if(currentPosition-exitValue>=0){
    // console.log('SALIMOS', currentPosition, exitValue)
    document.querySelector('.skills-card-wrapper').classList.remove('skills-card-wrapper-shown')
  // }
  if(currentPosition-enterValue>=0&&currentPosition-exitValue<=0){
    // console.log('LLEGAMOS', currentPosition, enterValue)
    document.querySelector('.skills-card-wrapper').classList.add('skills-card-wrapper-shown')
  }
  // if (currentPosition-exitValue)
  // console.log(pageSkills.offsetParent.offsetTop)
},50)