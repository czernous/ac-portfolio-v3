import { gsap, Expo } from 'gsap';

export default function animateMenu(setActive: any) {
  const toggle = document.getElementById('toggle');
  const circle = document.getElementById('bg-circle');
  const circleWidth = circle!.clientWidth;

  // Math calcul to get Height, Width, Diagonal and Circle Radius

  const getVpdr = () => {
    const vph = Math.pow(window.innerHeight, 2); // Height
    const vpw = Math.pow(window.innerWidth, 2); // Width
    const vpd = Math.sqrt(vph + vpw); // Diagonal
    return (vpd * 2) / circleWidth; // Circle radius
  };

  const openNavbar = () => {
    const openTimeline = gsap.timeline();
    openTimeline.to('.nav.mobile', 0, { display: 'flex' });
    openTimeline.to('#bg-circle', 1.5, {
      scale: getVpdr(),
      ease: Expo.easeInOut,
    });
    openTimeline.staggerFromTo(
      '.nav.mobile ul li',
      0.5,
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1 },
      0.1,
      1
    );
  };

  const closeNavbar = () => {
    const closeTimeline = gsap.timeline();
    closeTimeline.staggerFromTo(
      '.nav.mobile ul li',
      0.5,
      { y: 0, opacity: 1, delay: 0.5 },
      { y: 25, opacity: 0 },
      -0.1
    );
    closeTimeline.to('#bg-circle', 1, {
      scale: 0,
      ease: Expo.easeInOut,
      delay: -0.5,
    });
    closeTimeline.to('.nav.mobile', 0, { display: 'none' });
  };

  let isOpen = false;

  toggle!.onclick = function () {
    if (isOpen) {
      setActive('');
      closeNavbar();
    } else {
      setActive('active');
      openNavbar();
    }
    isOpen = !isOpen;
  };

  // On windows resize, recalcule circle radius and update

  window.onresize = () => {
    if (isOpen) {
      gsap.to('#bg-circle', 1, { scale: getVpdr(), ease: Expo.easeInOut });
    }
  };
}
