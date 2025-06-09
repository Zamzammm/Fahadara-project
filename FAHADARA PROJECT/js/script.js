// script.js untuk FAHADARA PROJECT

// Scroll transition ke halaman utama setelah video selesai
const video = document.getElementById("opening-video");
video.addEventListener("ended", () => {
  document.querySelector(".intro-video").style.display = "none";
});

// Highlight anggota aktif di slider
const slider = document.querySelector(".anggota-slider");
if (slider) {
  slider.addEventListener("scroll", () => {
    const cards = document.querySelectorAll(".anggota-card");
    let center = slider.scrollLeft + slider.clientWidth / 2;

    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      card.classList.remove("active");
      if (Math.abs(cardCenter - slider.clientWidth / 2) < rect.width / 2) {
        card.classList.add("active");
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Fade-in on scroll
  const fadeElements = document.querySelectorAll('.fade-element');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        obs.unobserve(entry.target); // hanya sekali muncul
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => observer.observe(el));

  // Navbar scroll hide/show
  const navbar = document.querySelector(".navbar");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      navbar.classList.add("hidden");
    } else {
      navbar.classList.remove("hidden");
    }

    lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
  });
});


  function scrollReadable(direction) {
  const container = document.getElementById("readableGallery");
  const scrollAmount = 320; // card width + margin

  container.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

const container = document.getElementById('readableGallery');
const speed = 1; // kecepatan scroll per frame

function loopScroll() {
  const maxScrollLeft = container.scrollWidth - container.clientWidth;

  if (container.scrollLeft >= maxScrollLeft) {
    container.scrollLeft = 0; // reset langsung tanpa smooth
  } else {
    container.scrollLeft += speed; // scroll perlahan ke kanan
  }
  requestAnimationFrame(loopScroll);
}

requestAnimationFrame(loopScroll);




