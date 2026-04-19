// gsap.from("#page1 #box", {
//   scale: 0,
//   delay: 1,
//   duration: 1,
//   rotate: 360,
//   scrollTrigger: {
//     trigger: "#page1 #box",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//   },
// });
// gsap.from("#page2 #box", {
//   scale: 0,
//   delay: 1,
//   duration: 1,
//   rotate: 360,
// });
// gsap.from("#page3 #box", {
//   scale: 0,
//   delay: 1,
//   duration: 1,
//   rotate: 360,
// });

// hedftgyherfgehjf
// gsap.from("#page2 h1",{
//     opacity:0,
//     duration:2,
//     x:500,
//     scrollTrigger: {
//    trigger:"#page2 h1",
//    scroller:"body",
//    markers:true,
//    start:"top 50%"
//     }

// })
// gsap.from("#page2 p",{
//     opacity:0,
//     duration:2,
//     x:-500,
//     scrollTrigger: {
//    trigger:"#page2 p",
//    scroller:"body",
//    markers:true,
//    start:"top 50%"
//     }

// })

// gsap.to("#page2 h1", {
//   transform: "translateX(-190%)",
//   scrollTrigger: {
//     trigger: "#page2",
//     scroller: "body",
//     markers: true,
//     start: "top 0%",
//     end: "top -150%",
//     scrub: 2,
//     pin: true,
//   },
// });

gsap.to("#page2 h1", {
  transform: "translateX(-190%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -150%",
    scrub: 4,
    pin: true,
  },
});
