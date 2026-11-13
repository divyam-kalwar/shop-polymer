const header = document.querySelector(".site-header");

if (header) {
  let previousScrollY = window.scrollY;
  let accumulatedScroll = 0;
  let scrollDirection = 0;
  const directionThreshold = 8;

  window.addEventListener(
    "scroll",
    () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - previousScrollY;
      previousScrollY = currentScrollY;

      const menuToggle = header.querySelector(".menu-toggle");
      if (currentScrollY <= 0 || menuToggle?.checked) {
        header.classList.remove("is-hidden");
        accumulatedScroll = 0;
        scrollDirection = 0;
        return;
      }

      const nextDirection = Math.sign(delta);
      if (!nextDirection) return;

      if (nextDirection !== scrollDirection) {
        scrollDirection = nextDirection;
        accumulatedScroll = 0;
      }
      accumulatedScroll += Math.abs(delta);

      if (accumulatedScroll < directionThreshold) return;

      if (scrollDirection > 0 && currentScrollY > header.offsetHeight) {
        header.classList.add("is-hidden");
      } else if (scrollDirection < 0) {
        header.classList.remove("is-hidden");
      }
    },
    { passive: true },
  );
}
