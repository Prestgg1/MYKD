var links = document.querySelectorAll("a[href]");
var cbk = function (e) {
  if (e.currentTarget.href === window.location.href) {
    e.preventDefault();
    e.stopPropagation();
  }
};
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", cbk);
}
let loading = document.querySelector(".lds-ring");
barba.init({
  sync: true,
  transitions: [
    {
      name: "home",
      once() {
        return gsap.to(".lds-ring", {
          opacity: 0,
          onComplete: () => {
            loading.style.opacity = 0;
            loading.style.display = "none";
          },
        });
      },
      leave() {
        return gsap.to(".lds-ring", {
          opacity: 1,
          onComplete: () => {
            loading.style.opacity = 1;
            loading.style.display = "flex";
          },
        });
      },
      enter() {
        return gsap.from(".lds-ring", {
          opacity: 1,
          onComplete: () => {
              loading.style.opacity = 0;
              loading.style.display = "none";
          },
        });
      },
    },
  ],
  views: [
    {
      namespace: "home",
      beforeEnter() {
        // update the menu based on user navigation
        document.querySelectorAll(".main-menu li").forEach((element) => {
          element.classList.remove("current");
        });
        document.querySelectorAll(".main-menu li")[0].classList.add("current");
        document.querySelectorAll(".main-menu li")[1].classList.add("current");
      },
      afterEnter() {
        var bottomDOM = document.querySelector("body main");
        var newScript = document.createElement("script");
        var oldScript = document.querySelector(".main-script");
        newScript.src = "/assets/scripts/index.js";
        newScript.className = "main-script";
        oldScript.remove();
        bottomDOM.append(newScript);
        newScript.setAttribute("defer", true);
      },
    },
    {
      namespace: "about",
      beforeEnter() {
        document.querySelectorAll(".main-menu li").forEach((element) => {
          element.classList.remove("current");
        });
        document.querySelectorAll(".main-menu li")[3].classList.add("current");
      },
    },
    {
      namespace: "hometwo",
      beforeEnter() {
        document.querySelectorAll(".main-menu li").forEach((element) => {
          element.classList.remove("current");
        });
        document.querySelectorAll(".main-menu li")[0].classList.add("current");
        document.querySelectorAll(".main-menu li")[2].classList.add("current");
      },
    },
    {
      namespace: "contact",
      beforeEnter() {
        document.querySelectorAll(".main-menu li").forEach((element) => {
          element.classList.remove("current");
        });
        document.querySelectorAll(".main-menu li")[19].classList.add("current");
      },
    },
  ],
});
