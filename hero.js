document.addEventListener("DOMContentLoaded", (event) => {
    gsap.fromTo(".header", { top:"-100vh", paused:true},{duration: 1, delay:15, ease:"expo.inOut", top:"0"})

    gsap.registerPlugin(ScrollTrigger);

    let ipad = document.querySelector('.ipadmockup');
    gsap.fromTo('.ipadmockup', {
        scale: 2,
      },{
        scale: 1, 
        scrollTrigger: {
            trigger: ipad,
            start: 'top 20%',
            end: 'bottom 50%',
            scrub: true,
            toggleActions: 'play reverse play reverse'
        },
    });
});