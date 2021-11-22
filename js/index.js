//Offset the content by its size
const projectCards = document.querySelectorAll('.project-card-content');
projectCards.forEach(projectCard=>{
  let cardsize = projectCard.offsetHeight - 55;
  projectCard.style.transform = `translateY(${cardsize}px)`;
})


// ROOM
//Update gallery items
const galleryRoomMain =  document.getElementById('gallery-room-main');
const galleryRoomImgs = document.querySelectorAll('.gallery-room-img');

galleryRoomImgs.forEach((img,i)=>{
  img.addEventListener('click', ()=>{
    let newUrl = `../img/projects/room/${1+i}.jpg`;
    galleryRoomMain.style.backgroundImage = `url(${newUrl})`;
  })
})

//Arrow hide function
const backBtnRoom =  document.getElementById('back-btn-room');
const projectsContainerRoom =  document.getElementById('projects-container-room');
backBtnRoom.addEventListener('click', ()=>{
  projectsContainerRoom.classList.add('project-info-card-hidden');
});

// More info btn functionality
const moreInfoBtn = document.getElementById('more-info-btn-room');
moreInfoBtn.addEventListener('click', ()=>{
  projectsContainerRoom.classList.remove('project-info-card-hidden');
})
