const cursor = document.querySelector('.cursor')
window.addEventListener('mousemove',(e)=>{
    cursor.style.left = -10+e.pageX + 'px'
    cursor.style.top = -10+e.pageY + 'px'
})

document.querySelectorAll('.container img.quarter').forEach((e)=>{
    e.style.top =`${Math.floor(Math.random()*100)}%`
    e.style.left =`${Math.floor(Math.random()*100)}%`
})

