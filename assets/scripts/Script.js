const cursor = document.querySelector('.cursor')


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


document.addEventListener('DOMContentLoaded',()=>{
  setTimeout(()=>{
    document.querySelector('.lds-ring').classList.toggle('lds-hidden');
  },500)
  setTimeout(()=>{
    document.querySelector('.lds-ring').style.display = 'none';
  },700)
})
window.addEventListener("scroll",()=>{
  console.log('Sasda')
})