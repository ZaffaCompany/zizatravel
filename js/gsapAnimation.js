gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

// SCROLL SMOOTHER EFFECT
if (ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true
    })

    // IMG ROTATE EFFECT
    const imgRotate = gsap.timeline({
        scrollTrigger: {
            scrub: 1,
            trigger: ".about__content",
            start: "10% 70%",
            endTrigger: ".about__content",
            end: "bottom 60%",
        },
    });

    imgRotate.to(".about__img1", {
        rotateZ: 15,
    });


    const imgRotate2 = gsap.timeline({
        scrollTrigger: {
            scrub: 1,
            trigger: ".about__content",
            start: "10% 70%",
            endTrigger: ".about__content",
            end: "bottom 60%",
        },
    });

    imgRotate2.to(".about__img2", {
        rotateZ: -30,
    });
}

// FADE UP EFFECT ON OPEN WINDOW
const fadeOpen = gsap.timeline({ defaults: { duration: .25 } });
fadeOpen.from(".logo_item", { opacity: 0, y: -100 })
    .from(".navbar_content > ul > .nav__link1", { opacity: 0, y: -100 })
    .from(".navbar_content > ul > .nav__link2", { opacity: 0, y: -100 })
    .from(".navbar_content > ul > .nav__link3", { opacity: 0, y: -100 })
    .from(".navbar_content > ul > .nav__link4", { opacity: 0, y: -100 })
    .from(".navbar > select", { opacity: 0, y: -100 })
    .from(".about__title > h1", { opacity: 0, y: -100 })
    .from(".about__title > div", { opacity: 0, y: -100 })


const fadeOpen2 = gsap.timeline({ defaults: { duration: .25 } });
fadeOpen2.from(".head__ziza1", { opacity: 0, y: 200 })
    .from(".head__ziza2", { opacity: 0, y: 200 })
    .from(".head__ziza3", { opacity: 0, y: 200 })
    .from(".head__ziza4", { opacity: 0, y: 200 })
    .from(".head__content > h1", { opacity: 0, x: -200 })
    .from(".head__line", { opacity: 0, x: 200 })


const fadeOpen3 = gsap.timeline({ defaults: { duration: .25 } });
fadeOpen3.from(".air__img1", { opacity: 0, y: 200 })
    .from(".air__img2", { opacity: 0, y: 200 })
    .from(".air__img3", { opacity: 0, y: 200 })
    .from(".cloud__img1", { opacity: 0, y: -200 })
    .from(".cloud__img2", { opacity: 0, y: -200 })
    .from(".cloud__img3", { opacity: 0, y: -200 })
    .from(".cloud__img4", { opacity: 0, y: -200 })


const fadeOpen4 = gsap.timeline({ defaults: { duration: .5 } });
fadeOpen4.from(".fadeOpen1", { opacity: 0, y: -100 })
    .from(".fadeOpen2", { opacity: 0, y: -100 })
    .from(".fadeOpen3", { opacity: 0, y: -100 })
    .from(".about__list", { opacity: 0, y: -100 })
    .from(".about__images", { opacity: 0, y: -100 })






// HEADER PARALLAX EFFECT 
const headParallax = gsap.timeline({
    scrollTrigger: {
        scrub: 1,
        pin: true,
        trigger: ".head__content",
        start: "50% 50%",
        endTrigger: ".head__content",
        end: "bottom 30%",
    },
});


// FADE UP ON SCROLL EFFECT
gsap.utils.toArray('.animate-up').forEach((el, index) => {
    let fade = gsap.timeline({
        scrollTrigger: {
            trigger: el,
            start: "top bottom",
            toggleActions: "play none none reverse",
        }
    })

    fade
        .set(el, { transformOrigin: 'center center' })
        .fromTo(el, { opacity: 0, scale: 0.8, y: "+=100" }, { opacity: 1, scale: 1, y: 0, duration: 1, immediateRender: false })
})