gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".two",
      start: "0% 95%",
      end: "70% 50%",
      scrub: true,
    },
  });
  
  tl.to(
    "#fanta",
    {
      top: "155%",
      left: "10%",
    },
    "orange"
  );
  tl.to(
    "#orange-cut",
    {
      top: "170%",
      left: "30%",
    },
    "orange"
  );
  tl.to(
    "#orange",
    {
      width: "13%",
      top: "185%",
      right: "5%",
      left: "75%",
    },
    "orange"
  );
  tl.to(
    "#leaf",
    {
      top: "125%",
      rotate: "135deg",
      left: "82%",
    },
    "orange"
  );
  tl.to(
    "#leaf2",
    {
      top: "110%",
      rotate: "130deg",
      left: "0%",
    },
    "orange"
  );
  


  // Form animation with ScrollTrigger: fade-in and slide up
  gsap.from(".contact-form", {
    opacity: 0,
    y: 90,
    duration: 1.5,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".contact-form",
      start: "top 85%", // Trigger when the top of the form reaches 85% of the viewport height
      end: "bottom 20%", // End when the bottom of the form reaches 20% of the viewport height
      scrub: true
    }
  });




  // var tl2 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".three",
  //     start: "0% 95%",
  //     end: "20% 50%",
  //     scrub: true,
  //   },
  // });
  
  // tl2.from(
  //   ".lemon1",
  //   {
  //     rotate: "-90deg",
  //     left: "-100%",
  //     top: "110%",
  //   },
  //   "ca"
  // );
  // tl2.from(
  //   "#cocacola",
  //   {
  //     rotate: "-90deg",
  //     top: "110%",
  //     left: "-100%",
  //   },
  //   "ca"
  // );
  
  // tl2.from(
  //   ".lemon2",
  //   {
  //     rotate: "90deg",
  //     left: "100%",
  //     top: "110%",
  //   },
  //   "ca"
  // );
  // tl2.from(
  //   "#pepsi",
  //   {
  //     rotate: "90deg",
  //     top: "110%",
  //     left: "100%",
  //   },
  //   "ca"
  // );
  
  // tl2.to(
  //   "#orange-cut",
  //   {
  //     width: "18%",
  //     left: "50%",
  //     top: "220%",
  //   },
  //   "ca"
  // );
  // tl2.to(
  //   "#fanta",
  //   {
  //     width: "27%",
  //     top: "240%",
  //     left: "50%",
  //   },
  //   "ca"
  // );