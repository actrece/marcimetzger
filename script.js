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
  // 2. SEAMLESS RISING CIRCLE SCROLL ANIMATION
  // ==========================================
  const circleSection = document.getElementById('circleSection');
  const risingCircle = document.getElementById('risingCircle');

  if (circleSection && risingCircle) {
    risingCircle.style.transformOrigin = 'bottom center';

    window.addEventListener('scroll', () => {
      const rect = circleSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight * 1.2), 0), 1);

      const translateY = (1 - progress) * 45;
      const scale = 0.90 + (progress * 0.10);

      risingCircle.style.transform = `translateY(${translateY}%) scale(${scale})`;
    });
  }

  // ==========================================
  // 3. SCREEN 4 3-IMAGE SLIDER & DYNAMIC TEXT
  // ==========================================
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const currentNum = document.getElementById("currentNum");
  const progressFill = document.getElementById("progressFill");
  const locationDesc = document.getElementById("locationDesc");
  const locationTagline = document.getElementById("locationTagline");

  // Custom slide text mapping matching your requested copy
  const slideData = [
    {
      desc: "Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.",
      tagline: "Top Residential Sales Last 5 Years"
    },
    {
      desc: "Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.",
      tagline: "Don't Just List it..."
    },
    {
      desc: "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!",
      tagline: "Guide to Buyers"
    }
  ];

  if (slides.length > 0 && prevBtn && nextBtn) {
    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSlider(index) {
      // Toggle active slide image
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
      
      // Update numbers and progress bar
      if (currentNum) {
        currentNum.textContent = index + 1;
      }
      
      if (progressFill) {
        const progressPercent = ((index + 1) / totalSlides) * 100;
        progressFill.style.width = progressPercent + "%";
      }

      // Update description and tagline text dynamically
      if (locationDesc && locationTagline && slideData[index]) {
        locationDesc.textContent = slideData[index].desc;
        locationTagline.textContent = slideData[index].tagline;
      }
    }

    nextBtn.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider(currentIndex);
    });

    prevBtn.addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlider(currentIndex);
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector('.cloud-track-images');
  if (!track) return;

  let currentX = 0;
  const speed = 0.8; // Increase this to 2 or 3 temporarily if you want to test faster movement

  function step() {
    currentX -= speed;
    
    // Safely calculate the width of one panel
    const totalWidth = track.offsetWidth;
    const halfWidth = totalWidth > 0 ? totalWidth / 2 : window.innerWidth;

    // Seamless reset loop
    if (Math.abs(currentX) >= halfWidth) {
      currentX = 0;
    }

    track.style.transform = `translateX(${currentX}px)`;
    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
});
document.addEventListener("DOMContentLoaded", function () {
  const scroller = document.getElementById('mediaScroller');
  const prevBtn = document.querySelector('.screen-6 .prev-btn-6');
  const nextBtn = document.querySelector('.screen-6 .next-btn-6');

  if (!scroller || !prevBtn || !nextBtn) return;

  nextBtn.addEventListener('click', () => {
    const itemWidth = scroller.querySelector('.media-element').offsetWidth + 20; // width + gap
    scroller.scrollBy({ left: itemWidth * 3, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    const itemWidth = scroller.querySelector('.media-element').offsetWidth + 20;
    scroller.scrollBy({ left: -(itemWidth * 3), behavior: 'smooth' });
  });
});
<script>
  const scroller = document.getElementById('customScroller');

  if (scroller) {
    let targetScroll = scroller.scrollLeft;
    let isAnimating = false;

    scroller.addEventListener('wheel', (evt) => {
      evt.preventDefault();

      // Increased sensitivity
      const scrollForce = Math.abs(evt.deltaY) < 50
        ? evt.deltaY * 30
        : evt.deltaY * 8;

      targetScroll += scrollForce;

      // Clamp to scroller bounds
      const maxScroll = scroller.scrollWidth - scroller.clientWidth;
      targetScroll = Math.max(
        0,
        Math.min(targetScroll, maxScroll)
      );
<script>
  const scroller = document.getElementById('customScroller');

  if (scroller) {
    let targetScroll = scroller.scrollLeft;
    let isAnimating = false;

    scroller.addEventListener('wheel', (evt) => {
      evt.preventDefault();

      // High sensitivity
      const sensitivity = 5;

      targetScroll += evt.deltaY * sensitivity;

      // Keep within scrolling limits
      const maxScroll = scroller.scrollWidth - scroller.clientWidth;

      targetScroll = Math.max(
        0,
        Math.min(targetScroll, maxScroll)
      );

      if (!isAnimating) {
        isAnimating = true;

        function smoothScroll() {
          const current = scroller.scrollLeft;
          const difference = targetScroll - current;

          if (Math.abs(difference) > 0.5) {
            // Smooth glide
            scroller.scrollLeft += difference * 0.08;
            requestAnimationFrame(smoothScroll);
          } else {
            scroller.scrollLeft = targetScroll;
            isAnimating = false;
          }
        }

        requestAnimationFrame(smoothScroll);
      }
    }, { passive: false });
  }
</script>
// Handles rising dome animation for both Page 3 and Page 8
  const domeSections = [
    { section: document.getElementById('circleSection'), element: document.getElementById('risingCircle') },
    { section: document.getElementById('circleSection8'), element: document.getElementById('risingCircle8') }
  ];

  window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;

    domeSections.forEach(({ section, element }) => {
      if (section && element) {
        const rect = section.getBoundingClientRect();
        const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight * 1.2), 0), 1);

        const translateY = (1 - progress) * 45;
        const scale = 0.90 + (progress * 0.10);

        element.style.transform = `translateY(${translateY}%) scale(${scale})`;
      }
    });
  });
