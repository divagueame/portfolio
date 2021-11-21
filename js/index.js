const projectCards = document.querySelectorAll('.project-card-content');
projectCards.forEach(projectCard=>{
  // let bodyTextLength = projectCard.childNodes[3].offsetHeight;
  console.log('lines = ', projectCard, projectCard.offsetHeight)
  let cardsize = projectCard.offsetHeight - 55;
  projectCard.style.transform = `translateY(${cardsize}px)`;
})