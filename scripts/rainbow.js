let tl = new TimelineMax();

gsap.fromTo(
  "#red",
  {
    y: -700,
  },
  {
    duration: 3,
    stagger: 0,
    y: 0,
  }
);

gsap.fromTo(
    "#orange",
    {
      y: -700,
    },
    {
      duration: 3,
      delay: 0.2,
      y: 0,
    }
);

gsap.fromTo(
    "#yellow",
    {
      y: -700,
    },
    {
      duration: 3,
      delay: 0.4,
      y: 0,
    }
);

gsap.fromTo(
    "#green",
    {
      y: -700,
    },
    {
      duration: 3,
      delay: 0.6,
      y: 0,
    }
);

gsap.fromTo(
    "#blue",
    {
      y: -700,
    },
    {
      duration: 3,
      delay: 0.8,
      y: 0,
    }
);

gsap.fromTo(
    "#purple",
    {
      y: -700,
    },
    {
      duration: 3,
      delay: 1,
      y: 0,
    }
)