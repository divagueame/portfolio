
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



//Arrow hide function
const backBtnRoom =  document.getElementById('back-btn-room');
const projectsContainerRoom =  document.getElementById('projects-container-room');
const projectCards = document.querySelectorAll('.project-card');
backBtnRoom.addEventListener('click', ()=>{
  projectCards.forEach((projectCard)=>{
    projectCard.classList.remove('project-info-card-hidden');
  })
  projectsContainerRoom.classList.add('project-info-card-hidden');
});

// More info btn functionality
const moreInfoBtn = document.getElementById('more-info-btn-room');
moreInfoBtn.addEventListener('click', ()=>{
  
  projectsContainerRoom.classList.remove('project-info-card-hidden');
  projectCards.forEach((projectCard)=>{
    projectCard.classList.add('project-info-card-hidden');
  })
  

})



setInterval(()=>{
  const pageSkills = document.getElementById('page-skills');
  const pageProjects = document.getElementById('page-projects');
  const pageAbout = document.getElementById('page-about');
  const docContainer = document.querySelector('.container');
  
  let currentPosition = docContainer.scrollTop;
  let enterValue = 1.5*(pageSkills.offsetTop - pageAbout.offsetHeight);
  let exitValue = 1.15*(pageProjects.offsetTop - pageAbout.offsetHeight)
  console.log(exitValue,currentPosition)
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