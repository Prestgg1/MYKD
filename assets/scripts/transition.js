document.querySelector(".lds-ring").classList.remove("lds-hidden");
document.querySelector(".lds-ring").style.display = "none";
barba.init({
  schema: {
    prefix: "data-custom",
    wrapper: "wrap",
  },
  transitions: [
    {
      name: "opacity-transition",
      leave(data) {
        document.querySelector(".lds-ring").classList.remove("lds-hidden");
        document.querySelector(".lds-ring").style.display = "block";
        return gsap.to(data.current.container, {
          opacity: 0,
        });
      },
      enter(data) {
        document.querySelector(".lds-ring").classList.add("lds-hidden");
        document.querySelector(".lds-ring").style.display = "none";
        return gsap.from(data.next.container, {
          opacity: 0,
        });
      },
    },
  ],
});
