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
  },1000)
  setTimeout(()=>{
    document.querySelector('.lds-ring').style.display = 'none';
  },1000)
  
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
  element.addEventListener('pointermove',()=>{
    cursor.classList.add('cursor-pointer')
    cursor.innerText = 'VIEW IMAGE'
  });
  element.addEventListener('mouseleave',()=>{
    cursor.classList.remove('cursor-pointer')
    cursor.innerText = ''
  });
  element.addEventListener('click',()=>{
    cursor.classList.remove('cursor-pointer')
    cursor.innerText = ''
    document.querySelector('.popup').style.display = 'flex';
    document.querySelector('.popup .container .picture').innerHTML=`
    <img src="${element.src}" alt="">
    `
    document.onclick=(e)=>{
      if(e.target.tagName!='IMG'){
        document.querySelector('.popup').style.display = 'none';
        e.stopPropagation();
      }
    }
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
document.querySelector('main .video__area svg').addEventListener('click',()=>{
  document.querySelector('.popup').style.display = 'flex';
  document.querySelector('.popup .container .picture').innerHTML=`
  <iframe width="560" height="315" src="https://www.youtube.com/embed/ssrNcwxALS4?si=RcTfBNuyIvrwh_IU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  `
  document.onclick=(e)=>{
    console.log(e.target.tagName)
    if(e.target.tagName=="DIV" || e.target.tagName=='I'){
      document.querySelector('.popup').style.display = 'none';
      e.stopPropagation();
    }
  }
})
