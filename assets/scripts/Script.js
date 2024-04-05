const cursor = document.querySelector('.cursor')
window.addEventListener('mousemove',(e)=>{
    cursor.style.left = -10+e.pageX + 'px'
    cursor.style.top = -10+e.pageY + 'px'
})
document.querySelector('.fa-bars').addEventListener('click',()=>{
    document.querySelector('.rightnav').classList.toggle('navactive')

})

document.querySelector('.fa-xmark').addEventListener('click',()=>{
    document.querySelector('.rightnav').classList.remove('navactive')
})
