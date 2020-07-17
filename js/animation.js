gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({defaults: {duration: 1}});

tl.from(".navbar-brand", {opacity: 0.5, x: -300, ease: "bounce"})
    .from(".hero-image", {scale: 0.3, opacity: 0.2, ease: "slow"}, "-=0.7")
    .from(".hero-text h1", {x: 700, ease: "slow"}, "-=0.2")
    .from(".hero-text p", {x: 700, ease: "slow"}, "-=0.2")
    .from("form", {opacity: 0, scale: 0.2})
