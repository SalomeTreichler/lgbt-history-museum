/* Function to return html element according to their selector */
function qs(selector, all = false) {
  return all
    ? document.querySelectorAll(selector)
    : document.querySelector(selector);
}

/* Define variables from selectors */
const sections = qs(".timeline-section", true);
const timeline = qs(".timeline");
const line = qs(".timeline-line");

/* Define other variables */
line.style.bottom = `calc(100% - 20px)`;
let prevScrollY = window.scrollY; // returns number of pixels that the document is currently scrolled vertically
let up, down;
let full = false;
let set = 0;
const targetY = window.innerHeight * 0.8;

function scrollHandler(e) {
  const { scrollY } = window;

  /* Determine wether the user is scrolling up or down*/
  up = scrollY < prevScrollY;
  down = !up;

  const timelineRect = timeline.getBoundingClientRect(); // returns the smalles rectangle the element can contain
  const dist = targetY - timelineRect.top;

  console.log(dist);

  /* Calculates the bottom distance when scrolling down */
  if (down && !full) {
    set = Math.max(set, dist); // Returns the 'max'imum of the two numbers
    line.style.bottom = `calc(100% - ${set}px)`;
  }

  /* Calculates the bottom distance when scrolling up */
  if (dist > timeline.offsetHeight + 50 && !full) {
    full = true;
    line.style.bottom = `-50px`;
  }

  /* For each section item, calculates if the top and offset height divided by 5 is more than
  targetY to determine if they are in view. If they are, the show-me class is added */
  sections.forEach((item) => {
    const rect = item.getBoundingClientRect();

    if (rect.top + item.offsetHeight / 5 < targetY) {
      item.classList.add("show-me");
    }
  });

  /* Sets prevScrollY to current scrollY */
  prevScrollY = window.scrollY;
}

/* Call scrollHandler and add scroll EventListener */

scrollHandler();
line.style.display = "block";
window.addEventListener("scroll", scrollHandler);
