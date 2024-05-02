const cursor = document.querySelector('.cursor')
window.addEventListener('mousemove',(e)=>{
  cursor.style.transform = `translate3d(${e.pageX}px,${e.pageY}px,0px)`
})
/* 
let mouseX = 0;
let mouseY = 0;
let circleX = 0;
let circleY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

function animateCircle() {
  const dx = mouseX - circleX;
  const dy = mouseY - circleY;
  const distance = Math.sqrt(dx * dx + dy * dy);
  if (distance > 1) {
    circleX += dx / 5;
    circleY += dy / 5;
  }
  cursor.style.left = circleX + 'px';
  cursor.style.top = circleY + 'px';
  requestAnimationFrame(animateCircle);
}

animateCircle();

 */
document.addEventListener('DOMContentLoaded',()=>{
  setTimeout(()=>{
    document.querySelector('.lds-ring').classList.toggle('lds-hidden');
  },500)
  setTimeout(()=>{
    document.querySelector('.lds-ring').style.display = 'none';
  },700)
  
})
let lastScrollY;
document.body.onscroll=()=>{
  console.log(window.scrollY)
  let currentScroll = window.scrollY;
  if(currentScroll<=87){
    document.querySelector('header').classList.remove('header-hidden')
    document.querySelector('header').classList.remove('header-visible')
    document.querySelector('.upper').classList.remove('upper-show')
}
if(currentScroll>=lastScrollY && !document.querySelector('header').classList.contains('header-hidden') ){
    document.querySelector('header').classList.add('header-hidden')
    document.querySelector('header').classList.remove('header-visible')
}
if(currentScroll<lastScrollY && !document.querySelector('header').classList.contains('header-visible') && currentScroll>=87){
    document.querySelector('header').classList.add('header-visible')
    document.querySelector('header').classList.remove('header-hidden')
}
if(currentScroll>=100){
  document.querySelector('.upper').classList.add('upper-show')
}
lastScrollY=currentScroll;
}
document.querySelector('.upper').onclick = ()=>{
  window.scrollTo({
    top:0,
    left:0,
    behavior:'smooth'
  })
}
let allimages = document.querySelectorAll('.swiper-slide img');
console.log(allimages)
allimages.forEach(element => {
  element.addEventListener('mousemove',()=>{
    cursor.classList.add('cursor-pointer')
    cursor.innerText = 'VIEW IMAGE'
  });
  element.addEventListener('mouseleave',()=>{
    cursor.classList.remove('cursor-pointer')
    cursor.innerText = ''
  });
});