


let cursor = document.querySelector('.cursor');
window.addEventListener('mousemove',(e)=>{
  document.querySelector('.cursor').style.transform = `translate3d(${e.pageX}px,${e.clientY}px,0px)`
})
window.addEventListener('mouseout',()=>{
  document.querySelector('.cursor').classList.add('scalehidden');
})
window.addEventListener('mouseover',()=>{
  document.querySelector('.cursor').classList.remove('scalehidden');
})

document.querySelector('.upper').onclick = ()=>{
    window.scrollTo({
      top:0,
      left:0,
      behavior:'smooth'
    })
  } 
