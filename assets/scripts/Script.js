const cursor = document.querySelector('.cursor')
window.addEventListener('mousemove',(e)=>{
    cursor.style.left = -10+e.pageX + 'px'
    cursor.style.top = -10+e.pageY + 'px'
})

let bars = document.querySelector('.fa-bars')
let rightnav = document.querySelector('.rightnav')
let rightnavpc = document.querySelector('.rightnavpc')
bars.addEventListener('click',()=>{
    document.querySelector('.rightnav').classList.toggle('navactive')

})

document.querySelector('.logo-and-exit .exit').addEventListener('click',()=>{
    rightnav.classList.remove('navactive')
})

/* rightnavmobile */

document.onclick = (e)=>{
    if(bars.contains(e.target) || rightnav.contains(e.target)){
        
    }
    else{
        rightnav.classList.remove('navactive')
    }
    if(document.querySelector('.burger').contains(e.target) || rightnavpc.contains(e.target)){

    }
    else{
        rightnavpc.style.right = '-100%'
    }
} 

/* rightnavmobile */


/* rightnavpc */
document.querySelector('.burger').addEventListener('click',()=>{
    rightnavpc.style.right = 0
})
document.querySelector('.rightnavpc .logo-and-exit .exit').onclick = ()=>{
    rightnavpc.style.right = "-100%"
}

