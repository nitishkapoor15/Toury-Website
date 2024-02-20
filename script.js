let tl = gsap.timeline();


tl.from("#nav h1, #nav h4, #nav button",{
 y:-30,
 opacity:0,
 delay:0.5,
 duration:0.5,
 stagger:0.5

})

tl.from("#page1-content h1,#page1-content p,#page1-content button",{
 y:100,
 opacity:0,
 duration:0.5,
 stagger:0.5


})

gsap.from("#page2 h1",{
    x:-100,
    duration:1,
    delay:0.3,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        // markers:true,
        start:"top 70%"
    }
})


gsap.from("#page2-div",{
    x:300,
    duration:2,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2-div",
        scroller:"body",
        // markers:true,
        start:"top 70%"
    }
})