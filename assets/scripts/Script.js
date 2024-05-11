  const cursor = document.querySelector('.cursor')
window.addEventListener('mousemove',(e)=>{
  document.querySelector('.cursor').style.transform = `translate3d(${e.pageX}px,${e.clientY}px,0px)`
})
window.addEventListener('mouseout',()=>{
  document.querySelector('.cursor').classList.add('scalehidden');
})
window.addEventListener('mouseover',()=>{
  document.querySelector('.cursor').classList.remove('scalehidden');
})

window.addEventListener('load',()=>{
  setTimeout(()=>{
    document.querySelector('.lds-ring').classList.toggle('lds-hidden');
  })
  setTimeout(()=>{
    document.querySelector('.lds-ring').style.display = 'none';
  })
  
})
let lastScrollY;
window.addEventListener('scroll',()=>{
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
})
document.querySelector('.upper').onclick = ()=>{
  window.scrollTo({
    top:0,
    left:0,
    behavior:'smooth'
  })
}
let allimages = document.querySelectorAll('.mySwiper .swiper-slide img');
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
var swiper = new Swiper(".mySwiper", {
  watchSlidesProgress: true,
  slidesPerView: window.innerWidth>768? 3:1,
  spaceBetween: 30,
  effect: "coverflow",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
      coverflowEffect: {
      },
      
});


const options = {
};

let lastlastScroll;
const element = document.querySelector('#roadmap');
let sum =0;
function imageActing(){
   let currentScroll = window.scrollY;
   if(currentScroll>=lastlastScroll){
      sum++;
   }
   else{
    sum--;
   }
  element.style.transform = `translateY(${sum}px)`
  lastlastScroll=currentScroll;
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      window.addEventListener('scroll',imageActing)
    }
    else{
      window.removeEventListener('scroll',imageActing)
      element.style.transform = "translateY(0px)"
    }
  });
}, options);


observer.observe(element);
