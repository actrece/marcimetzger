document.addEventListener("DOMContentLoaded", function () {
    
  // ==========================================
  // 1. NAVIGATION DROPDOWN
  // ==========================================
  const menuToggle = document.getElementById('menuToggle');
  const dropdownMenu = document.getElementById('dropdownMenu');

  if (menuToggle && dropdownMenu) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      menuToggle.classList.toggle('active');
      dropdownMenu.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!menuToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
        menuToggle.classList.remove('active');
        dropdownMenu.classList.remove('open');
      }
    });
  }

  // ==========================================
  // 2. SEAMLESS RISING CIRCLE SCROLL ANIMATION (Page 3 & Page 8 domes)
  // ==========================================
<script>
  window.addEventListener('scroll', () => {
    const section = document.getElementById('circleSection');
    const dome = document.getElementById('risingCircle');
    
    if (!section || !dome) return;

    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calculates how far Page 3 has scrolled into the viewport from the bottom
    let progress = (windowHeight - rect.top) / windowHeight;
    progress = Math.max(0, Math.min(1, progress));

    // Smoothly translates the dome from 40% down up to 0% as you scroll into the page
    const translateY = (1 - progress) * 40;
    const scale = 0.95 + (progress * 0.05);

    dome.style.transform = `translateY(${translateY}%) scale(${scale})`;
  });
</script>
  // ==========================================
  // 3. HORIZONTAL PHOTO GALLERY (Screen 6) — MOUSE WHEEL TO HORIZONTAL SCROLL
  // ==========================================
  // ==========================================
// 3. HORIZONTAL PHOTO GALLERY (Screen 6) — SMART SCROLL HANDLER
// ==========================================
const scroller = document.getElementById('customScroller');

if (scroller) {
  scroller.addEventListener('wheel', (evt) => {
    const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
    const currentScroll = scroller.scrollLeft;
    
    // Check if we are trying to scroll past the boundaries
    const atStart = currentScroll <= 0 && evt.deltaY < 0;
    const atEnd = currentScroll >= maxScrollLeft && evt.deltaY > 0;

    // If we aren't stuck at an edge, hijack the scroll for horizontal movement
    if (!atStart && !atEnd) {
      evt.preventDefault();
      scroller.scrollLeft += evt.deltaY * 2.5; // Adjust speed multiplier here if needed
    }
    // If we hit the boundary (start/end), it naturally lets the window scroll vertically!
  }, { passive: false });
}
  // ==========================================
  // 4. SCREEN 7 — MOVING CLOUDS ANIMATION
  // ==========================================
  const track = document.querySelector('.cloud-track-images');
  if (track) {
    let currentX = 0;
    const speed = 0.8; // Increase to 2 or 3 to test faster movement

    function step() {
      currentX -= speed;

      const totalWidth = track.offsetWidth;
      const halfWidth = totalWidth > 0 ? totalWidth / 2 : window.innerWidth;

      if (Math.abs(currentX) >= halfWidth) {
        currentX = 0;
      }

      track.style.transform = `translateX(${currentX}px)`;
      requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }
});
const domeSections = [
  { section: document.getElementById('circleSection'), element: document.getElementById('risingCircle') }
  // removed: circleSection8 / risingCircle8
];