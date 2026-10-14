// Nail Artistry by Deepa - Interactive Scripts

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Drawer Navigation
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });

    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // 2. Portfolio Category Filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const categories = item.getAttribute('data-category').split(' ');
        if (filter === 'all' || categories.includes(filter)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 3. Portfolio Lightbox Modal
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxWaBtn = document.getElementById('lightboxWaBtn');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.getAttribute('data-title');
      const desc = item.getAttribute('data-desc');

      lightboxImg.src = img.src;
      lightboxImg.alt = title;
      lightboxTitle.textContent = title;
      lightboxDesc.textContent = desc;

      const waMessage = encodeURIComponent(`Hi Deepa, I am inquiring about the "${title}" design I saw on your portfolio website.`);
      lightboxWaBtn.href = `https://wa.me/918083701646?text=${waMessage}`;

      lightboxModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    if (lightboxModal) {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (lightboxClose) lightboxClose.addEventListener('click', closeModal);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeModal);

  // 4. Interactive WhatsApp Consultation Builder
  const sendCustomWaBtn = document.getElementById('sendCustomWaBtn');
  if (sendCustomWaBtn) {
    sendCustomWaBtn.addEventListener('click', () => {
      const service = document.getElementById('calcService').value;
      const shape = document.getElementById('calcShape').value;
      const note = document.getElementById('calcNote').value.trim();

      let msg = `Hi Deepa! I'd like to book an appointment at your Nirvana Country studio:\n- *Service:* ${service}\n- *Shape Preference:* ${shape}`;
      if (note) {
        msg += `\n- *Notes / Occasion:* ${note}`;
      }
      msg += `\nPlease let me know your available slots and pricing details. Thank you!`;

      const targetUrl = `https://wa.me/918083701646?text=${encodeURIComponent(msg)}`;
      window.open(targetUrl, '_blank');
    });
  }

  // 5. Header scroll styling
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
    } else {
      header.style.boxShadow = 'none';
    }
  });
});
