let cursor = document.querySelector('.cursor');
function showCoords(event) {
    let x = event.clientX;
    let y = event.clientY;
    cursor.style.left = -8+x + 'px';
    cursor.style.top = -8+y + 'px';
    console.log(x, y);
  }
 window.addEventListener('mousemove', showCoords)
 window.addEventListener('mouseout',()=>{
    cursor.style.opacity = 0;
 })
 window.addEventListener('mouseover',()=>{
    cursor.style.opacity = 1;
 })