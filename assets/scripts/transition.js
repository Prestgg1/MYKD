var links = document.querySelectorAll('a[href]');
var cbk = function(e) {
 if(e.currentTarget.href === window.location.href) {
   e.preventDefault();
   e.stopPropagation();
 }
};
for(var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', cbk);
}
let loading = document.querySelector('.lds-ring');
barba.init({
  sync:true,
  transitions: [{
    name: 'opacity-transition',
    once(){
      return gsap.to('.lds-ring', {
        duration: 0.5,
        opacity: 0,
        onComplete: () => {
          loading.style.opacity = 0;
          loading.style.display = "none";
        }
      })
    },
     leave() {
      return gsap.to('.lds-ring', {
        duration: 0.5,
        opacity: 0,
        onComplete: () => {
          loading.style.opacity = 1;
          loading.style.display = "flex";
        }
      });
    },
    enter() {
      return gsap.from('.lds-ring', {
        duration: 0.5,
        opacity: 0,
        onComplete: () => {
          loading.style.opacity = 0;
          loading.style.display = "none";
        }
      });
    }
  }]
});