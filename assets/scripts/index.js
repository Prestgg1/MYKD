var allimages = document.querySelectorAll(".mySwiper .swiper-slide img");
var swipper = new Swiper(".Swipper", {
  slidesPerView: (() => {
    if (window.innerWidth > 1000) {
      return 3;
    } else if (window.innerWidth > 768 && window.innerWidth < 1000) {
      return 2;
    } else {
      return 1;
    }
  })(),
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-sag",
    prevEl: ".swiper-sol",
  },
});

allimages.forEach((element) => {
  element.addEventListener("pointermove", () => {
    cursor.classList.add("cursor-pointer");
    cursor.innerText = "VIEW IMAGE";
  });
  element.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursor-pointer");
    cursor.innerText = "";
  });
  element.addEventListener("click", () => {
    cursor.classList.remove("cursor-pointer");
    cursor.innerText = "";
    document.querySelector(".popup").style.display = "flex";
    document.querySelector(".popup .container .picture").innerHTML = `
    <img src="${element.src}" alt="">
    `;
    document.onclick = (e) => {
      if (e.target.tagName != "IMG") {
        document.querySelector(".popup").style.display = "none";
        e.stopPropagation();
      }
    };
  });
});
var swiper = new Swiper(".mySwiper", {
  watchSlidesProgress: true,
  slidesPerView: window.innerWidth > 768 ? 3 : 1,
  spaceBetween: 30,
  effect: "coverflow",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  coverflowEffect: {},
});

var options = {};

var lastlastScroll;
var element = document.querySelector("#roadmap");
var sum = 0;
function imageActing() {
  let currentScroll = window.scrollY;
  if (currentScroll >= lastlastScroll) {
    sum++;
  } else {
    sum--;
  }
  element.style.transform = `translateY(${sum}px)`;
  lastlastScroll = currentScroll;
}
var observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      window.addEventListener("scroll", imageActing);
    } else {
      window.removeEventListener("scroll", imageActing);
      element.style.transform = "translateY(0px)";
    }
  });
}, options);

observer.observe(element);
document
  .querySelector("main .video__area svg")
  .addEventListener("click", () => {
    document.querySelector(".popup").style.display = "flex";
    document.querySelector(".popup .container .picture").innerHTML = `
  <iframe width="560" height="315" src="https://www.youtube.com/embed/ssrNcwxALS4?si=RcTfBNuyIvrwh_IU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  `;
    document.onclick = (e) => {
      console.log(e.target.tagName);
      if (e.target.tagName == "DIV" || e.target.tagName == "I") {
        document.querySelector(".popup").style.display = "none";
        e.stopPropagation();
      }
    };
  });
