const SERVICES = [
  {
    id: 'tap-repair',
    name: 'Tap & Faucet Repair',
    category: 'tap',
    categoryName: 'Tap & Faucet',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
    rating: 4.88,
    reviews: 1420,
    price: 149,
    originalPrice: 249,
    duration: '30 mins',
    desc: 'Fix dripping taps, loose handles, low flow, and leaking wall mixer valves with warranty.',
    included: [
      'Disassembly & cartridge/spindle inspection',
      'Washer & O-ring replacement',
      'De-scaling tap aerator for optimal pressure',
      'Post-repair leak test and 30-day warranty'
    ],
    excluded: [
      'Cost of new brass tap/mixer body if completely damaged'
    ]
  },
  {
    id: 'wash-basin',
    name: 'Wash Basin Installation & Repair',
    category: 'bathroom',
    categoryName: 'Bathroom Plumbing',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=600&q=80',
    rating: 4.85,
    reviews: 980,
    price: 299,
    originalPrice: 449,
    duration: '60 mins',
    desc: 'Mounting of pedestal, table-top, or counter basins with waste coupling and bottle trap alignment.',
    included: [
      'Wall bracket alignment and heavy-duty anchor drilling',
      'Waste coupling & flexible waste pipe installation',
      'Bottle trap fitting and water drain testing',
      'Silicone seal along wall perimeter'
    ],
    excluded: [
      'Ceramic wash basin or vanity counter purchase'
    ]
  },
  {
    id: 'pipe-leakage',
    name: 'Bathroom Leakage & Seepage Repair',
    category: 'leakage',
    categoryName: 'Pipe Leakage',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80',
    rating: 4.92,
    reviews: 2150,
    price: 249,
    originalPrice: 399,
    duration: '45 mins',
    desc: 'Acoustic inspection and pinpoint fix for concealed wall pipes, diverter drips, and floor trap seepage.',
    included: [
      'Multi-point acoustic and moisture leak diagnosis',
      'Concealed pipe joint tightening & seal repair',
      'Drain trap waterproofing cement check',
      '30-day workmanship guarantee'
    ],
    excluded: [
      'Extensive tile masonry or full wall plastering'
    ]
  },
  {
    id: 'drain-cleaning',
    name: 'Motorized Drain Cleaning',
    category: 'drain',
    categoryName: 'Drain Cleaning',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80',
    rating: 4.89,
    reviews: 1870,
    price: 199,
    originalPrice: 349,
    duration: '45 mins',
    desc: 'High-speed motorized snake clearance for choked bathroom drains, balconies, and floor gullies.',
    included: [
      'Electric rotary snake unclogging',
      'Extraction of hair, soap sediment, and calcified debris',
      'High-flow water flush verification',
      'Completely non-acidic and safe for CPVC'
    ],
    excluded: [
      'Municipal mainline sewer blockage outside building'
    ]
  },
  {
    id: 'shower-install',
    name: 'Shower & Diverter Installation',
    category: 'bathroom',
    categoryName: 'Bathroom Plumbing',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=600&q=80',
    rating: 4.86,
    reviews: 760,
    price: 349,
    originalPrice: 499,
    duration: '60 mins',
    desc: 'Fit overhead rain showers, handheld showers, multi-flow panels, and concealed diverter plates.',
    included: [
      'Overhead shower arm leveling & wall flange sealing',
      'Hand shower hook mounting and hose connection',
      'Water pressure spray check across all nozzles',
      'Teflon threading to prevent drips'
    ],
    excluded: [
      'Shower arm fixture, showerhead, or diverter kit'
    ]
  },
  {
    id: 'water-tank',
    name: 'Water Tank Deep Scrub & Cleaning',
    category: 'tank',
    categoryName: 'Water Tank',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80',
    rating: 4.94,
    reviews: 3120,
    price: 499,
    originalPrice: 799,
    duration: '90 mins',
    desc: 'Multi-stage de-sludging, motorized high-pressure scrubbing, and antibacterial sanitization.',
    included: [
      'Complete de-watering with submersible pump',
      'Mechanical floor and wall scrubbing',
      'Sludge vacuuming and sediment extraction',
      'Antibacterial safe sanitizing spray'
    ],
    excluded: [
      'Underground sumps exceeding 2,000 liters'
    ]
  },
  {
    id: 'geyser-service',
    name: 'Water Heater (Geyser) Service & Repair',
    category: 'heater',
    categoryName: 'Water Heater',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80',
    rating: 4.91,
    reviews: 1640,
    price: 349,
    originalPrice: 549,
    duration: '60 mins',
    desc: 'Heating coil descaling, thermostat testing, safety valve replacement, and braided pipe leak fix.',
    included: [
      'Heating element coil inspection and chemical descaling',
      'Thermostat & thermal cutout calibration',
      'Pressure relief safety valve check',
      'Braided inlet/outlet connection leak tightening'
    ],
    excluded: [
      'Cost of replacement heating element coil if burnt'
    ]
  },
  {
    id: 'kitchen-sink',
    name: 'Kitchen Sink Plumbing & Trap Fix',
    category: 'kitchen',
    categoryName: 'Kitchen Plumbing',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80',
    rating: 4.87,
    reviews: 1150,
    price: 249,
    originalPrice: 399,
    duration: '45 mins',
    desc: 'Sink coupling replacement, anti-foul trap installation, and grease blockage clearance.',
    included: [
      'Stainless steel sink waste coupling tightening & gasket seal',
      'P-trap/bottle trap cleaning and seal replacement',
      'RO purifier reject water pipe integration',
      'Leak test under maximum sink water fill'
    ],
    excluded: [
      'New granite cut-out or stainless steel sink basin'
    ]
  },
  {
    id: 'toilet-flush',
    name: 'Toilet Flush & Jet Spray Repair',
    category: 'bathroom',
    categoryName: 'Bathroom Plumbing',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
    rating: 4.88,
    reviews: 1980,
    price: 199,
    originalPrice: 349,
    duration: '45 mins',
    desc: 'Fix continuous flush tank overflow, broken flush levers, dual-flush valves, and leaking health faucets.',
    included: [
      'Flush tank syphon and inlet float valve diagnosis',
      'Health faucet / jet spray nozzle de-scaling & washer fix',
      'Angle valve leak tightening',
      'Flush volume calibration'
    ],
    excluded: [
      'Full replacement ceramic toilet bowl'
    ]
  },
  {
    id: 'emergency-clamp',
    name: '24/7 Emergency Burst Pipe Clamp',
    category: 'emergency',
    categoryName: 'Emergency Plumbing',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80',
    rating: 4.96,
    reviews: 1540,
    price: 349,
    originalPrice: 499,
    duration: '30 mins',
    desc: 'Immediate emergency dispatch across Pune to stop major pipe bursts, valve blowouts, and severe flooding.',
    included: [
      'Rapid arrival within 30-45 minutes in Pune',
      'Main water supply isolation',
      'Emergency pipe split clamp / quick-joint replacement',
      'Water damage mitigation advice'
    ],
    excluded: [
      'Extensive wall demolition or replastering'
    ]
  }
];

const LOCALITIES = [
  'Koregaon Park', 'Kothrud', 'Baner', 'Hinjewadi', 'Viman Nagar',
  'Kalyani Nagar', 'Aundh', 'Wakad', 'Magarpatta', 'Hadapsar',
  'Shivaji Nagar', 'Camp / MG Road'
];

let selectedCategory = 'all';
let searchQuery = '';
let activeLocation = localStorage.getItem('pp_loc') || 'Koregaon Park, Pune';
let selectedDate = 'Tomorrow';
let selectedTime = '10:00 AM - 12:00 PM';
let selectedPropType = 'Residential';

document.addEventListener('DOMContentLoaded', () => {
  renderLocation();
  initCategories();
  initSearch();
  initDateChips();
  initBookingForm();
  initForumForm();
  initFaq();
  initScrollEffects();
  initLucide();
});

function initLucide() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function renderLocation() {
  const el = document.getElementById('locationDisplay');
  if (el) el.textContent = activeLocation;
}

function switchLocation() {
  const current = activeLocation.replace(', Pune', '');
  const currentIndex = LOCALITIES.indexOf(current);
  const nextIndex = (currentIndex + 1) % LOCALITIES.length;
  activeLocation = `${LOCALITIES[nextIndex]}, Pune`;
  localStorage.setItem('pp_loc', activeLocation);
  renderLocation();
}

function filterServices() {
  const cards = document.querySelectorAll('#servicesGrid .uc-card');
  const q = searchQuery.toLowerCase().trim();
  let visibleCount = 0;

  cards.forEach(card => {
    const cardCat = card.dataset.category;
    const cardSearch = (card.dataset.search || '') + ' ' + (card.querySelector('.uc-card-title')?.textContent || '');
    const matchesCat = (selectedCategory === 'all' || cardCat === selectedCategory);
    const matchesQuery = (q === '' || cardSearch.toLowerCase().includes(q));

    if (matchesCat && matchesQuery) {
      card.style.display = 'flex';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  let emptyMsg = document.getElementById('servicesEmptyMessage');
  const grid = document.getElementById('servicesGrid');
  if (visibleCount === 0) {
    if (!emptyMsg && grid) {
      emptyMsg = document.createElement('div');
      emptyMsg.id = 'servicesEmptyMessage';
      emptyMsg.style.cssText = 'grid-column: 1 / -1; text-align: center; padding: 48px 24px; border: 1px dashed var(--grey-border); border-radius: var(--radius-md); background: var(--grey-light);';
      emptyMsg.innerHTML = `
        <h3 style="font-size: 1.15rem; margin-bottom: 6px;">No services matching "${searchQuery}"</h3>
        <p style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 16px;">Try searching for tap, leakage, drain, or tank.</p>
        <button type="button" class="btn btn-black btn-sm" onclick="resetSearch()">Show All Services</button>
      `;
      grid.appendChild(emptyMsg);
    }
  } else if (emptyMsg) {
    emptyMsg.remove();
  }
}

function resetSearch() {
  selectedCategory = 'all';
  searchQuery = '';
  const input = document.getElementById('heroSearchInput');
  if (input) input.value = '';
  document.querySelectorAll('.category-pill').forEach(p => p.classList.toggle('active', p.dataset.category === 'all'));
  filterServices();
}

function initCategories() {
  document.querySelectorAll('.category-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      selectedCategory = pill.dataset.category;
      filterServices();
      const s = document.getElementById('popularServicesSection');
      if (s) s.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function initSearch() {
  const input = document.getElementById('heroSearchInput');
  if (input) {
    input.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      filterServices();
    });
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        filterServices();
        const s = document.getElementById('popularServicesSection');
        if (s) s.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  document.querySelectorAll('.tag-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const q = chip.dataset.query;
      if (input) input.value = q;
      searchQuery = q;
      filterServices();
      const s = document.getElementById('popularServicesSection');
      if (s) s.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function openDetailsModal(serviceId) {
  const s = SERVICES.find(item => item.id === serviceId);
  if (!s) return;

  const modal = document.getElementById('serviceDetailModal');
  const body = document.getElementById('detailModalBody');
  if (!modal || !body) return;

  body.innerHTML = `
    <div style="height: 240px; width: 100%; position: relative; background: var(--grey-light);">
      <img src="${s.image}" alt="${s.name}" style="width: 100%; height: 100%; object-fit: cover;" />
    </div>
    <div style="padding: 28px;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px; gap: 12px;">
        <div>
          <span class="badge-tag" style="margin-bottom: 6px;">${s.categoryName}</span>
          <h2 style="font-size: 1.5rem; margin-bottom: 4px;">${s.name}</h2>
          <div style="font-size: 0.85rem; color: var(--text-secondary);">
            <strong style="color: var(--black);">★ ${s.rating}</strong> (${s.reviews.toLocaleString()} reviews) • ⏱ ${s.duration}
          </div>
        </div>
        <div style="text-align: right; flex-shrink: 0;">
          <div style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase;">Standard Rate</div>
          <div style="font-size: 1.6rem; font-weight: 800; color: var(--black);">₹${s.price}</div>
        </div>
      </div>

      <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 22px;">
        ${s.desc}
      </p>

      <div style="border: 1px solid var(--grey-border); border-radius: var(--radius-md); padding: 18px; background: var(--grey-card); margin-bottom: 24px;">
        <h4 style="font-size: 0.875rem; font-weight: 700; margin-bottom: 10px; color: var(--black);">What's Included:</h4>
        <ul style="list-style: none; font-size: 0.85rem; color: var(--text-primary); line-height: 1.8;">
          ${s.included.map(i => `<li>✓ ${i}</li>`).join('')}
        </ul>
        <h4 style="font-size: 0.875rem; font-weight: 700; margin-top: 14px; margin-bottom: 6px; color: var(--text-secondary);">What's Excluded:</h4>
        <ul style="list-style: none; font-size: 0.825rem; color: var(--text-muted); line-height: 1.6;">
          ${s.excluded.map(e => `<li>✕ ${e}</li>`).join('')}
        </ul>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--grey-border); padding-top: 18px;">
        <div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">Pay after service</div>
          <div style="font-weight: 800; font-size: 1.25rem; color: var(--black);">₹${s.price}</div>
        </div>
        <button type="button" class="btn btn-black" onclick="closeDetailsModal(); selectAndBook('${s.id}')">
          Book This Service
        </button>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeDetailsModal() {
  const modal = document.getElementById('serviceDetailModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeDetailsModal();
});

function selectAndBook(serviceId) {
  const s = SERVICES.find(item => item.id === serviceId);
  const select = document.getElementById('bookServiceSelect');
  if (select && s) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].text.includes(s.name) || select.options[i].value === s.name) {
        select.selectedIndex = i;
        break;
      }
    }
  }
  const formSection = document.getElementById('bookingSection');
  if (formSection) {
    formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function initDateChips() {
  const row = document.getElementById('bookingDateChips');
  if (!row) return;

  const days = ['Today', 'Tomorrow', 'Wed', 'Thu', 'Fri', 'Sat'];
  row.innerHTML = days.map((d, i) => `
    <div class="date-pill-opt ${i === 1 ? 'active' : ''}" data-day="${d}" onclick="pickDate(this)">
      <div style="font-size: 0.7rem; color: inherit; opacity: 0.7;">Day</div>
      <div style="font-weight: 700; font-size: 0.95rem;">${d}</div>
    </div>
  `).join('');

  document.querySelectorAll('.time-slot-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.time-slot-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedTime = btn.dataset.time;
    };
  });

  const resBtn = document.getElementById('propResBtn');
  const commBtn = document.getElementById('propCommBtn');
  if (resBtn && commBtn) {
    resBtn.onclick = () => {
      selectedPropType = 'Residential';
      resBtn.classList.add('active');
      commBtn.classList.remove('active');
    };
    commBtn.onclick = () => {
      selectedPropType = 'Commercial';
      commBtn.classList.add('active');
      resBtn.classList.remove('active');
    };
  }
}

function pickDate(el) {
  document.querySelectorAll('.date-pill-opt').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  selectedDate = el.dataset.day;
}

function initBookingForm() {
  const form = document.getElementById('appointmentForm');
  const successCard = document.getElementById('bookingSuccessCard');
  if (!form || !successCard) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('bookName').value.trim();
    const phone = document.getElementById('bookPhone').value.trim();
    const service = document.getElementById('bookServiceSelect').value;
    const address = document.getElementById('bookAddress').value.trim();
    const notes = document.getElementById('bookNotes').value.trim();

    if (name.length < 2) {
      alert('Please enter your full name');
      return;
    }
    if (!/^[6-9]\d{9}$/.test(phone.replace(/\D/g, ''))) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }
    if (!service) {
      alert('Please select a required plumbing service');
      return;
    }
    if (address.length < 4) {
      alert('Please provide your complete address');
      return;
    }

    const bookingId = `PN-${Math.floor(10000 + Math.random() * 90000)}`;

    const summaryDetails = document.getElementById('confirmedSummaryDetails');
    if (summaryDetails) {
      summaryDetails.innerHTML = `
        <strong>Booking ID:</strong> ${bookingId}<br/>
        <strong>Service:</strong> ${service}<br/>
        <strong>Schedule:</strong> ${selectedDate} (${selectedTime})<br/>
        <strong>Customer:</strong> ${name} (${phone})<br/>
        <strong>Address:</strong> ${address} (${selectedPropType})<br/>
        <strong>Payment Mode:</strong> Pay After Service (Cash / UPI)
      `;
    }

    form.style.display = 'none';
    successCard.classList.add('active');

    const msg = `🔧 *Poona Plumbers - Direct Booking Request (${bookingId})*\n\n` +
      `👤 *Customer:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `🛠️ *Service:* ${service}\n` +
      `📅 *Schedule:* ${selectedDate} (${selectedTime})\n` +
      `🏠 *Property:* ${selectedPropType}\n` +
      `📍 *Address:* ${address}, ${activeLocation}\n` +
      `${notes ? `📝 *Notes:* ${notes}\n` : ''}\n` +
      `_Please confirm technician dispatch. Thank you!_`;

    const waBtn = document.getElementById('openWhatsAppBookingBtn');
    if (waBtn) {
      waBtn.onclick = () => {
        window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, '_blank');
      };
    }

    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, '_blank');
  });

  const resetBtn = document.getElementById('bookAnotherBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      form.style.display = 'block';
      successCard.classList.remove('active');
    });
  }
}

function initForumForm() {
  const form = document.getElementById('forumDirectForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('forumUserName').value.trim() || 'Pune Homeowner';
    const area = document.getElementById('forumUserArea').value.trim() || activeLocation;
    const cat = document.getElementById('forumUserCat').value;
    const query = document.getElementById('forumUserQuery').value.trim();

    if (!query) {
      alert('Please describe your plumbing issue');
      return;
    }

    const msg = `💬 *Poona Plumbers - Consultation Query*\n\n` +
      `👤 *Name:* ${name}\n` +
      `📍 *Area:* ${area}\n` +
      `🏷️ *Category:* ${cat}\n` +
      `❓ *Question:* ${query}\n\n` +
      `_Please provide diagnosis and approximate quote._`;

    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, '_blank');
    form.reset();
  });
}

function initFaq() {
  document.querySelectorAll('.faq-trigger-btn').forEach(btn => {
    btn.onclick = () => {
      const card = btn.closest('.faq-minimal-card');
      const isOpen = card.classList.contains('active');
      document.querySelectorAll('.faq-minimal-card').forEach(c => c.classList.remove('active'));
      if (!isOpen) card.classList.add('active');
    };
  });
}

function toggleMoreAreas() {
  const hiddenPills = document.querySelectorAll('.area-pill-item.hidden-pill');
  const btn = document.getElementById('toggleMoreAreasBtn');
  if (!hiddenPills.length || !btn) return;

  const isExpanded = hiddenPills[0].classList.contains('show');
  hiddenPills.forEach(p => p.classList.toggle('show', !isExpanded));
  btn.textContent = isExpanded ? 'View All Localities (+12)' : 'Show Fewer Localities';
}

function toggleMobileMenu() {
  const drawer = document.getElementById('mobileNavDrawer');
  if (drawer) {
    drawer.classList.toggle('open');
  }
}

function initScrollEffects() {
  const bar = document.getElementById('scrollProgressBar');
  const nav = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    const st = window.scrollY || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (bar && height > 0) {
      const p = (st / height) * 100;
      bar.style.width = `${p}%`;
    }
    if (nav) {
      nav.classList.toggle('scrolled', st > 20);
    }
  }, { passive: true });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
  } else {
    document.querySelectorAll('.reveal-item').forEach(el => el.classList.add('revealed'));
  }
}