/* The Button needs to be set visible from hidden, so that it doesn't appear at the start
of the animation */
gsap.set('#tour-button', {visibility: "visible"})
gsap.set('#tour-button', {autoAlpha: 0});

/* Animate title in with textAnimation */

gsap.to("#title", {duration: 2, text: "PRIDE HISTORY <br>MUSEUM", delay: 1});

/* Set autoAlpha to 1 to make button appear */

gsap.to('#tour-button', {duration: 2, autoAlpha: 1, delay: 3});

