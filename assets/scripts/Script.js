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

document.querySelector('.exit').addEventListener('click',()=>{
    rightnav.classList.remove('navactive')
})

document.onclick = (e)=>{
    if(bars.contains(e.target) || rightnav.contains(e.target)){
        
    }
    else{
        rightnav.classList.remove('navactive')
    }
}
