const cursor = document.querySelector('.cursor')
window.addEventListener('mousemove',(e)=>{
    cursor.style.left = -10+e.pageX + 'px'
    cursor.style.top = -10+e.pageY + 'px'
})

let bars = document.querySelector('.fa-bars')
let rightnav = document.querySelector('.rightnav')
bars.addEventListener('click',()=>{
    document.querySelector('.rightnav').classList.toggle('navactive')

})

document.querySelector('.logo-and-exit .exit').addEventListener('click',()=>{
    rightnav.classList.remove('navactive')
})

document.onclick = (e)=>{
    if(bars.contains(e.target) || rightnav.contains(e.target)){
        
    }
    else{
        rightnav.classList.remove('navactive')
    }
} 
document.querySelector('#search-sheet .exit').addEventListener('click',()=>{
    document.querySelector('#search-sheet').style.top = "-100%"
})

/* Quarter */
document.querySelectorAll('.container img.quarter').forEach((e)=>{
    e.style.top =`${Math.floor(Math.random()*100)}%`
    e.style.left =`${Math.floor(Math.random()*100)}%`
})