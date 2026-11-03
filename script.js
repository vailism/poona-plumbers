document.addEventListener('DOMContentLoaded', () => {
  const WHATSAPP_NUMBER = '919876543210';
  const PHONE_NUMBER = '+919876543210';
  const navbar = document.getElementById('navbar');
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (scrollProgressBar) {
      scrollProgressBar.style.width = scrolled + '%';
    }
    if (winScroll > 25) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  function openDrawer() {
    mobileDrawer.classList.add('open');
    drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    mobileDrawer.classList.remove('open');
    drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 85;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  const countUpElements = document.querySelectorAll('.counter-val');
  let hasAnimatedCounters = false;
  function runCounters() {
    countUpElements.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const suffix = counter.getAttribute('data-suffix') || '';
      const prefix = counter.getAttribute('data-prefix') || '';
      let count = 0;
      const step = Math.max(1, Math.floor(target / 45));
      const updateCount = () => {
        count += step;
        if (count < target) {
          counter.innerText = prefix + count.toLocaleString() + suffix;
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = prefix + target.toLocaleString() + suffix;
        }
      };
      updateCount();
    });
  }
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });
  const toggleAreasBtn = document.getElementById('toggleAreasBtn');
  const hiddenAreas = document.querySelectorAll('.hidden-area');
  let areasExpanded = false;
  if (toggleAreasBtn) {
    toggleAreasBtn.addEventListener('click', () => {
      areasExpanded = !areasExpanded;
      hiddenAreas.forEach(area => {
        if (areasExpanded) {
          area.classList.add('show');
        } else {
          area.classList.remove('show');
        }
      });
      toggleAreasBtn.innerHTML = areasExpanded 
        ? 'Show Less Areas ↑' 
        : `Show All 34+ Pune Localities ↓`;
    });
  }
  const forumForm = document.getElementById('forumForm');
  if (forumForm) {
    forumForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('forumName').value.trim() || 'Pune Resident';
      const area = document.getElementById('forumArea').value.trim() || 'Pune';
      const category = document.getElementById('forumCategory').value;
      const question = document.getElementById('forumQuestion').value.trim();
      if (!question) {
        alert('Please describe your plumbing query.');
        return;
      }
      const submitBtn = forumForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = 'Connecting to WhatsApp...';
      submitBtn.disabled = true;
      const waText = `💬 *Poona Plumbers - Direct Forum Query*\n\n` +
        `👤 *Name:* ${name}\n` +
        `📍 *Location:* ${area}\n` +
        `🏷️ *Category:* ${category}\n` +
        `❓ *Plumbing Query:* ${question}\n\n` +
        `_I am reaching out via the Poona Plumbers Q&A Forum. Please provide advice/estimate._`;
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;
      setTimeout(() => {
        window.open(waUrl, '_blank');
        forumForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 600);
    });
  }
  const bookingForm = document.getElementById('bookingForm');
  const bookingSuccessBox = document.getElementById('bookingSuccessBox');
  const resetBookingBtn = document.getElementById('resetBookingBtn');
  let selectedPropertyType = 'Residential';
  const propResBtn = document.getElementById('propResBtn');
  const propCommBtn = document.getElementById('propCommBtn');
  if (propResBtn && propCommBtn) {
    propResBtn.addEventListener('click', () => {
      selectedPropertyType = 'Residential';
      propResBtn.classList.add('active');
      propCommBtn.classList.remove('active');
    });
    propCommBtn.addEventListener('click', () => {
      selectedPropertyType = 'Commercial';
      propCommBtn.classList.add('active');
      propResBtn.classList.remove('active');
    });
  }
  const bookingDateInput = document.getElementById('bookingDate');
  if (bookingDateInput) {
    const today = new Date().toISOString().split('T')[0];
    bookingDateInput.min = today;
  }
  function validateField(inputEl, condition, errorMsg) {
    const parent = inputEl.closest('.form-group');
    const errorEl = parent.querySelector('.error-msg');
    if (!condition) {
      parent.classList.add('has-error');
      if (errorEl) errorEl.textContent = errorMsg;
      return false;
    } else {
      parent.classList.remove('has-error');
      return true;
    }
  }
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('bookingName');
      const phoneInput = document.getElementById('bookingPhone');
      const emailInput = document.getElementById('bookingEmail');
      const serviceInput = document.getElementById('bookingService');
      const addressInput = document.getElementById('bookingAddress');
      const dateInput = document.getElementById('bookingDate');
      const timeInput = document.getElementById('bookingTime');
      const descInput = document.getElementById('bookingDesc');
      let isValid = true;
      if (!validateField(nameInput, nameInput.value.trim().length >= 2, 'Please enter your full name')) {
        isValid = false;
      }
      const cleanPhone = phoneInput.value.replace(/\D/g, '');
      const phoneValid = /^[6-9]\d{9}$/.test(cleanPhone);
      if (!validateField(phoneInput, phoneValid, 'Enter a valid 10-digit mobile number')) {
        isValid = false;
      }
      if (emailInput.value.trim() !== '') {
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());
        if (!validateField(emailInput, emailValid, 'Enter a valid email address')) {
          isValid = false;
        }
      } else {
        emailInput.closest('.form-group').classList.remove('has-error');
      }
      if (!validateField(serviceInput, serviceInput.value !== '', 'Please select a required plumbing service')) {
        isValid = false;
      }
      if (!validateField(addressInput, addressInput.value.trim().length >= 4, 'Please enter complete service address')) {
        isValid = false;
      }
      if (!validateField(dateInput, dateInput.value !== '', 'Please choose a preferred service date')) {
        isValid = false;
      }
      if (!isValid) return;
      const submitBtn = bookingForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.innerHTML = 'Connecting to WhatsApp...';
      submitBtn.disabled = true;
      const bookingMessage = `🔧 *NEW APPOINTMENT BOOKING - POONA PLUMBERS*\n\n` +
        `👤 *Customer Name:* ${nameInput.value.trim()}\n` +
        `📞 *Phone Number:* ${phoneInput.value.trim()}\n` +
        `${emailInput.value.trim() ? `📧 *Email:* ${emailInput.value.trim()}\n` : ''}` +
        `🛠️ *Service Required:* ${serviceInput.value}\n` +
        `🏢 *Property Type:* ${selectedPropertyType}\n` +
        `📍 *Service Address:* ${addressInput.value.trim()}\n` +
        `📅 *Preferred Date:* ${dateInput.value}\n` +
        `⏰ *Preferred Time:* ${timeInput.value || 'Earliest Available'}\n` +
        `${descInput.value.trim() ? `📝 *Issue Notes:* ${descInput.value.trim()}\n` : ''}\n` +
        `_Please confirm my service appointment. Thank you!_`;
      const waBookingUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(bookingMessage)}`;
      setTimeout(() => {
        window.open(waBookingUrl, '_blank');
        bookingForm.style.display = 'none';
        bookingSuccessBox.classList.add('visible');
        bookingSuccessBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
      }, 700);
    });
  }
  if (resetBookingBtn) {
    resetBookingBtn.addEventListener('click', () => {
      bookingForm.reset();
      bookingForm.style.display = 'block';
      bookingSuccessBox.classList.remove('visible');
    });
  }
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  const revealElements = document.querySelectorAll('.reveal');
  const counterContainer = document.querySelector('.hero-trust-row');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });
    revealElements.forEach(el => observer.observe(el));
    if (counterContainer) {
      const counterObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !hasAnimatedCounters) {
          hasAnimatedCounters = true;
          runCounters();
        }
      }, { threshold: 0.2 });
      counterObserver.observe(counterContainer);
    }
  } else {
    revealElements.forEach(el => el.classList.add('active'));
    runCounters();
  }
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});
