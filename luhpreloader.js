 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(TextPlugin)
  
  document.querySelector(".preloader")

gsap.to(".preloader", {
    y:'100vh',
    delay:13,
    ease:"expo.inOut",
    duration:2,
  });

  gsap.fromTo("#zo", {
    delay:1,
    y:'6rem',
    opacity:0,
    },
    {
    opacity:1,
    y:'-0.5rem',
    ease:"expo.inOut",
    duration:3,
});

gsap.fromTo("#r", {
    delay:1.2,
    y:'6.7rem',
    opacity:0,
    },
    {
    opacity:1,
    y:'-0.5rem',
    ease:"expo.inOut",
    duration:3.3,
});
gsap.fromTo("#a", {
    delay:0.8,
    y:'3rem',
    opacity:0,
    },
    {
    opacity:1,
    y:'-0.5rem',
    ease:"expo.inOut",
    duration:2.5,
});




gsap.to("#zo", {
    delay:12,
    opacity:0,
    y:'6rem',
    ease:"expo.inOut",
    duration:3,
    });

gsap.to("#r", {
    delay:12.2,
    y:'6.7rem',
    opacity:0,
    ease:"expo.inOut",
    duration:3.3,
    });
gsap.to("#a", {
    delay:11.8,
    y:'3rem',
    opacity:0,
    ease:"expo.inOut",
    duration:2.5,
    });
  });
  

$('#demo1').t();

  

