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
  },
  {
    id: 'custom-service',
    name: 'Custom Plumbing Request & Consultation',
    category: 'custom',
    categoryName: 'Custom Solution',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=600&q=80',
    rating: 4.97,
    reviews: 640,
    price: 99,
    originalPrice: 199,
    duration: '45 mins',
    desc: 'Bespoke diagnostic visit and technical consultation for unique or unlisted plumbing requirements across Pune.',
    included: [
      'Comprehensive inspection by senior technician',
      'Instant written estimate and component breakdown',
      'Diagnostic fee adjusted if full repair is booked',
      'Direct WhatsApp and phone priority support'
    ],
    excluded: [
      'Materials and spare parts (charged transparently per MRP)'
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
let countersAnimated = false;
let selectedCalcItems = new Set(['tap-repair', 'drain-cleaning']);
const GOOGLE_SHEET_WEBHOOK_URL = '';

let latestBookingId = '';
let detectedGpsLink = '';
let attachedPhotoName = '';
let attachedPhotoDataUrl = '';
let currentSelectedHub = 'baner';

const PUNE_HUBS = {
  'baner': {
    name: 'Baner & Balewadi Hub',
    shortName: 'Baner',
    sub: 'High-rise societies, modern conceal diverters, booster pump maintenance & sensor tap servicing.',
    arrival: '20-25 Min',
    societies: 'Pan Card Club Rd, Baner-Pashan Link Rd, Rohan Leher, Palladio, Supreme Amadore, VTP Urban Nest.',
    services: 'Grohe & Jaquar concealed thermostatic diverters, pressure boosting systems, kitchen sink waste couplings.',
    plumbers: '4 Licensed Plumbers with fully stocked mobile vans (o-rings, spindles, PPR pipes, drain snakes).',
    emergency: 'Direct patch to on-call Baner plumber: <a href="tel:7030009191" style="color: var(--black); font-weight: 700;">+91 70300 09191</a>',
    waText: 'Hello Poona Plumbers, I need an emergency technician in Baner / Balewadi'
  },
  'kothrud': {
    name: 'Kothrud & Karve Nagar Hub',
    shortName: 'Kothrud',
    sub: 'Old bungalow re-piping, heritage society GI to CPVC upgrades, overhead Sintex tank cleaning.',
    arrival: '20-30 Min',
    societies: 'Paud Road, Ideal Colony, Mayur Colony, Dahanukar Colony, Cummins College Rd, Gujrat Colony.',
    services: 'Wall-crack leak detection, overhead float valve replacement, motorized borewell line fixes.',
    plumbers: '3 Senior Master Plumbers with heavy pipe cutters, threading machines & hydro-pressure pumps.',
    emergency: 'Direct patch to on-call Kothrud plumber: <a href="tel:7030009191" style="color: var(--black); font-weight: 700;">+91 70300 09191</a>',
    waText: 'Hello Poona Plumbers, I need a plumber in Kothrud / Karve Nagar'
  },
  'hinjewadi': {
    name: 'Hinjewadi IT Park Hub',
    shortName: 'Hinjewadi',
    sub: 'Phase 1, 2 & 3 tech campuses, township high-rises, RO water purifier & instant geyser connections.',
    arrival: '25-35 Min',
    societies: 'Megapolis, Blue Ridge, Life Republic, Godrej 24, Joyville, Rama Fusion Towers, Phase 1 Maan Rd.',
    services: 'RO membrane flushing, geyser heating element replacement, washing machine inlet/outlet lines.',
    plumbers: '5 Mobile Techs equipped for gated high-rises with security badges and standard safety kit.',
    emergency: 'Direct patch to on-call Hinjewadi plumber: <a href="tel:7030009191" style="color: var(--black); font-weight: 700;">+91 70300 09191</a>',
    waText: 'Hello Poona Plumbers, I need a technician in Hinjewadi Phase 1/2/3'
  },
  'wakad': {
    name: 'Wakad & Pimple Saudagar Hub',
    shortName: 'Wakad',
    sub: 'Modern residential towers, commode jet spray fixes, dual-flush cistern repairs, kitchen blockages.',
    arrival: '20-25 Min',
    societies: 'Dutta Mandir Rd, Kaspate Wasti, Kunal Icon Rd, Roseland Residency, Park Royale, Signature Park.',
    services: 'Parryware & Hindware flush valves, kitchen sink siphon bottlenecks, motorized drain snakes.',
    plumbers: '4 Certified Technicians on patrol along Mumbai-Pune highway corridor.',
    emergency: 'Direct patch to on-call Wakad plumber: <a href="tel:7030009191" style="color: var(--black); font-weight: 700;">+91 70300 09191</a>',
    waText: 'Hello Poona Plumbers, I need a plumbing technician in Wakad / Pimple Saudagar'
  },
  'koregaon-park': {
    name: 'Koregaon Park & KP Hub',
    shortName: 'Koregaon Park',
    sub: 'Luxury villas, European designer bath suites, water softener plants & high-flow rain showers.',
    arrival: '15-25 Min',
    societies: 'North Main Rd, Lane 5 to 7, South Main Rd, Ganga Orchard, Atur Park, Vascon Windermere.',
    services: 'Kohler & Hansgrohe ceramic discs, jacuzzi lines, central hot-water circulation loops.',
    plumbers: '3 Premium Fixture Specialists trained on luxury German & American bathroom fittings.',
    emergency: 'Direct patch to on-call KP plumber: <a href="tel:7030009191" style="color: var(--black); font-weight: 700;">+91 70300 09191</a>',
    waText: 'Hello Poona Plumbers, I need a plumber in Koregaon Park'
  },
  'viman-nagar': {
    name: 'Viman Nagar & Kharadi Hub',
    shortName: 'Viman Nagar',
    sub: 'Airport corridor & EON Free Zone, rental tenant moves, instant fixture repair, leakage arrest.',
    arrival: '20-30 Min',
    societies: 'Clover Park, Mistas, Ganga Constella, Marvel Cerise, World Trade Center Kharadi, Forest County.',
    services: 'Balcony drainage clearing, tap washer replacement, basin bottle trap cleaning, water meter fitting.',
    plumbers: '4 Licensed Plumbers available 24/7 for emergency tenant plumbing.',
    emergency: 'Direct patch to on-call Viman Nagar plumber: <a href="tel:7030009191" style="color: var(--black); font-weight: 700;">+91 70300 09191</a>',
    waText: 'Hello Poona Plumbers, I need a plumber in Viman Nagar / Kharadi'
  },
  'aundh': {
    name: 'Aundh & Pashan Hub',
    shortName: 'Aundh',
    sub: 'Established residential societies, main pipeline pressure regulators, underground sump motor fixes.',
    arrival: '20-25 Min',
    societies: 'DP Road, Sindh Society, Anand Park, Medipoint Hospital lane, Pashan Lake Rd, Abhimanshree.',
    services: 'Submersible sump pumps, non-return check valves, main water line gate valves, PPR hot lines.',
    plumbers: '3 Senior Mechanics with heavy plumbing equipment and diagnostic cameras.',
    emergency: 'Direct patch to on-call Aundh plumber: <a href="tel:7030009191" style="color: var(--black); font-weight: 700;">+91 70300 09191</a>',
    waText: 'Hello Poona Plumbers, I need a technician in Aundh / Pashan'
  },
  'magarpatta': {
    name: 'Magarpatta & Hadapsar Hub',
    shortName: 'Magarpatta',
    sub: 'Cybercity IT township, Amanora Park Town, mega-gated societies & commercial plumbing.',
    arrival: '25-35 Min',
    societies: 'Amanora Future Towers, Roystonea, Jasminium, Cosmos, SP Infocity, Magarpatta Sector 1-12.',
    services: 'High-rise main line descaling, commercial urinal flush sensors, kitchen grease trap clearing.',
    plumbers: '4 Industrial & Domestic Plumbers stationed right at Magarpatta South Gate.',
    emergency: 'Direct patch to on-call Magarpatta plumber: <a href="tel:7030009191" style="color: var(--black); font-weight: 700;">+91 70300 09191</a>',
    waText: 'Hello Poona Plumbers, I need a plumber in Magarpatta City / Amanora'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  renderLocation();
  initCategories();
  initSearch();
  initAutocomplete();
  initDateChips();
  initBookingForm();
  initFaq();
  initScrollEffects();
  initServiceButtons();
  initCalculator();
  initComparisonSlider();
  updateBookingHistoryCount();
  initLocalityHubs();
  setLanguage(currentLanguage);
  renderDiagSymptoms();
  initLucide();
});

function sendToGoogleSheet(data) {
  if (!GOOGLE_SHEET_WEBHOOK_URL) return;
  try {
    fetch(GOOGLE_SHEET_WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).catch(() => {});
  } catch (err) {}
}

function initLucide() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function renderLocation() {
  const el = document.getElementById('locationDisplay');
  if (el) el.textContent = activeLocation;
  const navLoc = document.getElementById('activeLocLabel');
  if (navLoc) navLoc.textContent = activeLocation;
  const pillName = document.getElementById('locAvailabilityName');
  if (pillName) pillName.textContent = activeLocation;
}

function switchLocation() {
  const current = activeLocation.replace(', Pune', '');
  const currentIndex = LOCALITIES.indexOf(current);
  const nextIndex = (currentIndex + 1) % LOCALITIES.length;
  activeLocation = `${LOCALITIES[nextIndex]}, Pune`;
  localStorage.setItem('pp_loc', activeLocation);
  renderLocation();
}

function setServiceMode(mode) {
  const stdBtn = document.getElementById('modeStandardBtn');
  const emgBtn = document.getElementById('modeEmergencyBtn');
  const banner = document.getElementById('emergencyBanner');
  const heading = document.getElementById('heroHeading');
  const subtitle = document.getElementById('heroSubtitle');

  if (mode === 'emergency') {
    if (stdBtn) stdBtn.classList.remove('active');
    if (emgBtn) emgBtn.classList.add('active');
    if (banner) banner.classList.add('active');
    if (heading) heading.textContent = '⚡ 30-Minute Priority Emergency Plumbing Dispatch';
    if (subtitle) subtitle.textContent = 'Rapid-response isolation vans stationed in Koregaon Park, Baner, Kothrud & Hinjewadi. Guaranteed doorstep arrival under 30–45 mins.';
    selectedCategory = 'emergency';
    document.querySelectorAll('.category-pill').forEach(p => p.classList.toggle('active', p.dataset.category === 'emergency'));
    filterServices();
    scrollToServices();
  } else {
    if (stdBtn) stdBtn.classList.add('active');
    if (emgBtn) emgBtn.classList.remove('active');
    if (banner) banner.classList.remove('active');
    if (heading) heading.textContent = 'Professional Plumbing Services. Booked in Minutes.';
    if (subtitle) subtitle.textContent = 'Discover trusted plumbing professionals for your home. Transparent pricing, convenient scheduling, and quality service at your doorstep across Pune.';
    resetSearch();
  }
}

function scrollToServices() {
  const target = document.getElementById('popularServicesSection');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
    target.classList.remove('section-flash-highlight');
    void target.offsetWidth;
    target.classList.add('section-flash-highlight');
  }
  const drawer = document.getElementById('mobileNavDrawer');
  if (drawer && drawer.classList.contains('open')) {
    drawer.classList.remove('open');
  }
}

function initServiceButtons() {
  document.querySelectorAll('a[href="#popularServicesSection"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToServices();
    });
  });
}

function filterServices() {
  const cards = document.querySelectorAll('#servicesGrid .uc-card');
  const q = searchQuery.toLowerCase().trim();
  let visibleCount = 0;

  cards.forEach(card => {
    const cardCat = card.dataset.category;
    const cardSearch = (card.dataset.search || '') + ' ' + (card.querySelector('.uc-card-title')?.textContent || '') + ' ' + (card.querySelector('.uc-custom-title')?.textContent || '');
    const isCustom = card.classList.contains('uc-card-custom');
    const matchesCat = (selectedCategory === 'all' || cardCat === selectedCategory || (isCustom && (selectedCategory === 'all' || selectedCategory === 'custom')));
    const matchesQuery = (q === '' || cardSearch.toLowerCase().includes(q));

    if (matchesCat && matchesQuery) {
      card.style.display = 'flex';
      card.style.animation = 'none';
      void card.offsetWidth;
      card.style.animation = 'cardEntrance 0.45s cubic-bezier(0.16, 1, 0.3, 1) both';
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
        <button type="button" class="btn btn-black btn-sm" onclick="resetSearch(); scrollToServices();">Show All Services</button>
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
      pill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      filterServices();
      scrollToServices();
    });
  });
}

function initSearch() {
  const input = document.getElementById('heroSearchInput');
  if (input) {
    input.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      filterServices();
      renderAutocomplete(searchQuery);
    });
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        filterServices();
        scrollToServices();
        hideAutocomplete();
      }
    });
  }

  document.querySelectorAll('.tag-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const q = chip.dataset.query;
      if (input) input.value = q;
      searchQuery = q;
      filterServices();
      scrollToServices();
      hideAutocomplete();
    });
  });
}

function initAutocomplete() {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.hero-search-wrapper')) {
      hideAutocomplete();
    }
  });
}

function renderAutocomplete(query) {
  const box = document.getElementById('searchAutocomplete');
  if (!box) return;

  const q = query.toLowerCase().trim();
  if (q.length === 0) {
    hideAutocomplete();
    return;
  }

  const matches = SERVICES.filter(s => 
    s.name.toLowerCase().includes(q) || 
    s.desc.toLowerCase().includes(q) || 
    s.categoryName.toLowerCase().includes(q)
  ).slice(0, 4);

  if (matches.length === 0) {
    hideAutocomplete();
    return;
  }

  box.innerHTML = matches.map(s => `
    <div class="autocomplete-item" onclick="openDetailsModal('${s.id}'); hideAutocomplete();">
      <div style="display: flex; align-items: center; gap: 10px;">
        <img src="${s.image}" style="width: 38px; height: 38px; border-radius: var(--radius-xs); object-fit: cover;" alt="${s.name}" />
        <div>
          <div style="font-weight: 700; font-size: 0.875rem; color: var(--black);">${s.name}</div>
          <div style="font-size: 0.75rem; color: var(--text-secondary);">${s.categoryName} • ⏱ ${s.duration}</div>
        </div>
      </div>
      <div style="text-align: right;">
        <span class="badge-tag" style="padding: 2px 8px; font-weight: 700;">₹${s.price}</span>
      </div>
    </div>
  `).join('');

  box.classList.add('active');
}

function hideAutocomplete() {
  const box = document.getElementById('searchAutocomplete');
  if (box) box.classList.remove('active');
}

function initCalculator() {
  const grid = document.getElementById('calcItemsGrid');
  if (!grid) return;

  grid.innerHTML = SERVICES.map(s => {
    const isChecked = selectedCalcItems.has(s.id);
    return `
      <div class="calc-item-card ${isChecked ? 'selected' : ''}" data-id="${s.id}" onclick="toggleCalcItem('${s.id}')">
        <div style="display: flex; align-items: center; gap: 10px;">
          <div class="calc-check-box">${isChecked ? '✓' : ''}</div>
          <div>
            <div style="font-weight: 700; font-size: 0.875rem; color: var(--black);">${s.name}</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary);">⏱ ${s.duration}</div>
          </div>
        </div>
        <div style="font-weight: 800; font-size: 0.95rem; color: var(--black);">₹${s.price}</div>
      </div>
    `;
  }).join('');

  updateCalculatorSummary();
}

function toggleCalcItem(serviceId) {
  if (selectedCalcItems.has(serviceId)) {
    selectedCalcItems.delete(serviceId);
  } else {
    selectedCalcItems.add(serviceId);
  }

  document.querySelectorAll('.calc-item-card').forEach(card => {
    const id = card.getAttribute('data-id');
    const isSelected = selectedCalcItems.has(id);
    card.classList.toggle('selected', isSelected);
    const box = card.querySelector('.calc-check-box');
    if (box) box.textContent = isSelected ? '✓' : '';
  });

  updateCalculatorSummary();
}

function updateCalculatorSummary() {
  const listEl = document.getElementById('calcSummaryList');
  const countBadge = document.getElementById('calcCountBadge');
  const totalVal = document.getElementById('calcTotalVal');
  const discountText = document.getElementById('calcDiscountText');
  if (!listEl || !countBadge || !totalVal) return;

  const items = SERVICES.filter(s => selectedCalcItems.has(s.id));
  countBadge.textContent = `${items.length} ${items.length === 1 ? 'service' : 'services'}`;

  if (items.length === 0) {
    listEl.innerHTML = `<li style="font-size: 0.85rem; color: var(--text-muted); padding: 12px 0;">No services selected yet. Click any service card on the left.</li>`;
    totalVal.textContent = '₹0';
    if (discountText) discountText.textContent = '';
    return;
  }

  listEl.innerHTML = items.map(i => `
    <li class="calc-summary-item">
      <span>${i.name}</span>
      <strong>₹${i.price}</strong>
    </li>
  `).join('');

  const rawTotal = items.reduce((sum, item) => sum + item.price, 0);
  let finalTotal = rawTotal;
  let discount = 0;

  if (items.length >= 2) {
    discount = 99;
    finalTotal = Math.max(rawTotal - discount, 99);
    if (discountText) discountText.textContent = '⚡ ₹99 Multi-Service Bundle Discount Applied!';
  } else if (discountText) {
    discountText.textContent = '';
  }

  totalVal.textContent = `₹${finalTotal}`;
}

function dispatchCalculatorWhatsApp() {
  const items = SERVICES.filter(s => selectedCalcItems.has(s.id));
  if (items.length === 0) {
    alert('Please select at least one service in the calculator.');
    return;
  }

  const rawTotal = items.reduce((sum, item) => sum + item.price, 0);
  const discount = items.length >= 2 ? 99 : 0;
  const finalTotal = Math.max(rawTotal - discount, 99);

  const listText = items.map(i => `• ${i.name} (₹${i.price})`).join('\n');
  const msg = `📦 *Poona Plumbers - Custom Package Booking*\n\n` +
    `🛠️ *Selected Services (${items.length}):*\n${listText}\n\n` +
    `${discount > 0 ? `🎉 *Bundle Discount:* -₹${discount}\n` : ''}` +
    `💰 *Estimated Total:* ₹${finalTotal}\n` +
    `📍 *Location:* ${activeLocation}\n\n` +
    `_Please check technician availability for this package visit._`;

  window.open(`https://wa.me/917030009191?text=${encodeURIComponent(msg)}`, '_blank');
}

function transferCalculatorToBooking() {
  const items = SERVICES.filter(s => selectedCalcItems.has(s.id));
  if (items.length === 0) {
    alert('Please select at least one service in the calculator.');
    return;
  }

  const select = document.getElementById('bookServiceSelect');
  if (select) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].text.includes(items[0].name)) {
        select.selectedIndex = i;
        break;
      }
    }
  }

  const notes = document.getElementById('bookNotes');
  if (notes) {
    const names = items.map(i => i.name).join(', ');
    notes.value = `Custom Multi-Service Bundle: ${names}`;
  }

  const bookingSection = document.getElementById('bookingSection');
  if (bookingSection) {
    bookingSection.scrollIntoView({ behavior: 'smooth' });
    const nameInput = document.getElementById('bookName');
    if (nameInput) setTimeout(() => nameInput.focus(), 600);
  }
}

function initComparisonSlider() {
  const slider = document.getElementById('comparisonSlider');
  const beforeWrap = document.getElementById('beforeWrap');
  const handle = document.getElementById('sliderHandle');
  if (!slider || !beforeWrap || !handle) return;

  let isDragging = false;

  function setSliderPos(clientX) {
    const rect = slider.getBoundingClientRect();
    let pos = (clientX - rect.left) / rect.width;
    pos = Math.max(0.05, Math.min(0.95, pos));
    const pct = pos * 100;
    beforeWrap.style.width = `${pct}%`;
    handle.style.left = `${pct}%`;
  }

  slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    setSliderPos(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    setSliderPos(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  slider.addEventListener('touchstart', (e) => {
    isDragging = true;
    setSliderPos(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    setSliderPos(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
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

      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--grey-border); padding-top: 18px; gap: 12px; flex-wrap: wrap;">
        <div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">Pay after service</div>
          <div style="font-weight: 800; font-size: 1.25rem; color: var(--black);">₹${s.price}</div>
        </div>
        <div style="display: flex; gap: 8px;">
          <a href="https://wa.me/917030009191?text=${encodeURIComponent(`Hi Poona Plumbers, I would like to book ${s.name} (₹${s.price}). Please dispatch a technician to ${activeLocation}.`)}" target="_blank" class="btn btn-outline btn-sm" style="display: inline-flex; align-items: center; gap: 6px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z"/></svg>
            <span>WhatsApp</span>
          </a>
          <button type="button" class="btn btn-black btn-sm" onclick="closeDetailsModal(); selectAndBook('${s.id}')">
            Schedule Visit
          </button>
        </div>
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

function openCallModal() {
  const modal = document.getElementById('phoneCallModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function closeCallModal() {
  const modal = document.getElementById('phoneCallModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function copyPhoneNumber(btn) {
  navigator.clipboard.writeText('7030009191').then(() => {
    const origHtml = btn.innerHTML;
    btn.innerHTML = `<i data-lucide="check" style="width: 14px; height: 14px;"></i><span>Copied!</span>`;
    if (typeof lucide !== 'undefined') lucide.createIcons();
    setTimeout(() => {
      btn.innerHTML = origHtml;
      if (typeof lucide !== 'undefined') lucide.createIcons();
    }, 2000);
  }).catch(() => {
    alert('Phone number: +91 70300 09191');
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeDetailsModal();
    closeCallModal();
  }
});

let currentBookingStep = 1;

function goToStep(step) {
  if (step === 3) {
    if (!validateStep2()) return;
  }
  currentBookingStep = step;

  document.querySelectorAll('.booking-step').forEach(s => s.classList.remove('active'));
  const activeStepEl = document.getElementById(`bookingStep${step}`);
  if (activeStepEl) activeStepEl.classList.add('active');

  for (let i = 1; i <= 3; i++) {
    const item = document.getElementById(`progStep${i}`);
    if (item) {
      item.classList.remove('active', 'completed');
      if (i === step) {
        item.classList.add('active');
      } else if (i < step) {
        item.classList.add('completed');
      }
    }
  }

  const line1 = document.getElementById('progLine1');
  const line2 = document.getElementById('progLine2');
  if (line1) {
    if (step > 1) line1.classList.add('active');
    else line1.classList.remove('active');
  }
  if (line2) {
    if (step > 2) line2.classList.add('active');
    else line2.classList.remove('active');
  }

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function validateStep2() {
  const name = document.getElementById('bookName').value.trim();
  const phone = document.getElementById('bookPhone').value.trim();

  if (name.length < 2) {
    alert('Please enter your full name');
    document.getElementById('bookName').focus();
    return false;
  }
  let cleanPhone = phone.replace(/\D/g, '');
  if (cleanPhone.length === 12 && cleanPhone.startsWith('91')) {
    cleanPhone = cleanPhone.slice(2);
  } else if (cleanPhone.length === 11 && cleanPhone.startsWith('0')) {
    cleanPhone = cleanPhone.slice(1);
  }
  if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
    alert('Please enter a valid 10-digit mobile number');
    document.getElementById('bookPhone').focus();
    return false;
  }
  document.getElementById('bookPhone').value = cleanPhone;
  return true;
}

function validateAndGoToStep3() {
  if (!validateStep2()) return;

  const select = document.getElementById('bookServiceSelect');
  const serviceName = select ? select.value : 'General Plumbing';
  const opt = select ? select.options[select.selectedIndex] : null;
  const price = opt && opt.dataset.price ? `Starting at ₹${opt.dataset.price}` : 'Starting at ₹149';

  const name = document.getElementById('bookName').value.trim();
  const phone = document.getElementById('bookPhone').value.trim();
  const address = (document.getElementById('bookAddress')?.value || '').trim();

  const rService = document.getElementById('reviewServiceName');
  const rSchedule = document.getElementById('reviewSchedule');
  const rAddress = document.getElementById('reviewAddress');
  const rContact = document.getElementById('reviewContact');
  const rPrice = document.getElementById('reviewPrice');

  let displayAddress = address;
  if (!displayAddress) {
    if (detectedGpsLink) {
      displayAddress = 'GPS Coordinates Captured';
    } else {
      displayAddress = `${activeLocation} (Shared via WhatsApp)`;
    }
  } else {
    displayAddress = `${address} (${selectedPropType})`;
  }
  if (attachedPhotoName) {
    displayAddress += ` • 📸 Photo: ${attachedPhotoName}`;
  }

  if (rService) rService.textContent = serviceName;
  if (rSchedule) rSchedule.textContent = `${selectedDate} (${selectedTime})`;
  if (rAddress) rAddress.textContent = displayAddress;
  if (rContact) rContact.textContent = `${name} (+91 ${phone})`;
  if (rPrice) rPrice.textContent = price;

  goToStep(3);
}

function submitMultiStepBooking() {
  if (!validateStep2()) {
    goToStep(2);
    return;
  }

  const name = document.getElementById('bookName').value.trim();
  const phone = document.getElementById('bookPhone').value.trim();
  const select = document.getElementById('bookServiceSelect');
  const service = select ? select.value : 'General Plumbing';
  const address = (document.getElementById('bookAddress')?.value || '').trim();
  const notes = document.getElementById('bookNotes').value.trim();

  const bookingId = `PN-${Math.floor(10000 + Math.random() * 90000)}`;
  latestBookingId = bookingId;

  const bookingPayload = {
    bookingId,
    timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    service,
    schedule: `${selectedDate} (${selectedTime})`,
    customerName: name,
    customerPhone: phone,
    propertyType: selectedPropType,
    address: address || (detectedGpsLink ? `GPS: ${detectedGpsLink}` : 'Shared on WhatsApp'),
    locality: activeLocation,
    notes: notes || 'None',
    hasPhoto: !!attachedPhotoName,
    gpsLink: detectedGpsLink || '',
    status: 'Confirmed'
  };

  sendToGoogleSheet(bookingPayload);
  saveBookingToHistory(bookingPayload);

  const summaryDetails = document.getElementById('confirmedSummaryDetails');
  if (summaryDetails) {
    summaryDetails.innerHTML = `
      <strong>Booking ID:</strong> ${bookingId}<br/>
      <strong>Service:</strong> ${service}<br/>
      <strong>Schedule:</strong> ${selectedDate} (${selectedTime})<br/>
      <strong>Customer:</strong> ${name} (+91 ${phone})<br/>
      <strong>Address:</strong> ${address ? address : (detectedGpsLink ? 'GPS Pin Captured' : 'Confirmed via WhatsApp')} (${selectedPropType})<br/>
      ${detectedGpsLink ? `<strong>GPS Coordinates:</strong> <a href="${detectedGpsLink}" target="_blank" rel="noopener noreferrer" style="color: var(--black); text-decoration: underline;">Open Google Maps Location</a><br/>` : ''}
      ${attachedPhotoName ? `<strong>Issue Photo:</strong> Attached (${attachedPhotoName})<br/>` : ''}
      <strong>Payment Mode:</strong> Pay After Service (Cash / UPI)
    `;
  }

  const wizard = document.getElementById('bookingWizardForm');
  const progBar = document.querySelector('.booking-progress-bar');
  const successCard = document.getElementById('bookingSuccessCard');

  if (wizard) wizard.style.display = 'none';
  if (progBar) progBar.style.display = 'none';
  if (successCard) successCard.classList.add('active');

  let msg = `🔧 *Poona Plumbers - Direct Booking Request (${bookingId})*\n\n` +
    `👤 *Customer:* ${name}\n` +
    `📞 *Phone:* ${phone}\n` +
    `🛠️ *Service:* ${service}\n` +
    `📅 *Schedule:* ${selectedDate} (${selectedTime})\n` +
    `🏠 *Property:* ${selectedPropType}\n` +
    `📍 *Address:* ${address ? address : 'Will share location on WhatsApp'}, ${activeLocation}\n`;

  if (detectedGpsLink) {
    msg += `🗺️ *GPS Pin:* ${detectedGpsLink}\n`;
  }
  if (attachedPhotoName) {
    msg += `📸 *Fixture Photo:* Attached in chat (${attachedPhotoName})\n`;
  }
  if (notes) {
    msg += `📝 *Notes:* ${notes}\n`;
  }
  msg += `\n_Please confirm technician dispatch. Thank you!_`;

  const waBtn = document.getElementById('openWhatsAppBookingBtn');
  if (waBtn) {
    waBtn.onclick = () => {
      window.open(`https://wa.me/917030009191?text=${encodeURIComponent(msg)}`, '_blank');
    };
  }

  window.open(`https://wa.me/917030009191?text=${encodeURIComponent(msg)}`, '_blank');
}

function resetMultiStepBooking() {
  const wizard = document.getElementById('bookingWizardForm');
  const progBar = document.querySelector('.booking-progress-bar');
  const successCard = document.getElementById('bookingSuccessCard');

  if (wizard) wizard.style.display = 'block';
  if (progBar) progBar.style.display = 'flex';
  if (successCard) successCard.classList.remove('active');

  const bName = document.getElementById('bookName');
  const bPhone = document.getElementById('bookPhone');
  const bAddress = document.getElementById('bookAddress');
  const bNotes = document.getElementById('bookNotes');

  if (bName) bName.value = '';
  if (bPhone) bPhone.value = '';
  if (bAddress) bAddress.value = '';
  if (bNotes) bNotes.value = '';

  removeUploadedPhoto();
  detectedGpsLink = '';
  const gpsPill = document.getElementById('gpsSuccessPill');
  if (gpsPill) {
    gpsPill.style.display = 'none';
    gpsPill.innerHTML = '';
  }
  const gpsLabel = document.getElementById('detectGpsLabel');
  if (gpsLabel) gpsLabel.textContent = 'Auto-Detect GPS Pin';

  goToStep(1);
}

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
  goToStep(1);
  const formSection = document.getElementById('bookingSection');
  if (formSection) {
    formSection.scrollIntoView({ behavior: 'smooth' });
    formSection.classList.remove('section-flash-highlight');
    void formSection.offsetWidth;
    formSection.classList.add('section-flash-highlight');
  }
}

function initDateChips() {
  const row = document.getElementById('bookingDateChips');
  if (!row) return;

  const days = ['Today', 'Tomorrow', 'Wed', 'Thu', 'Fri'];
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
  initDateChips();
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

function animateCounters() {
  if (countersAnimated) return;
  const elements = document.querySelectorAll('.counter-val');
  if (!elements.length) return;
  countersAnimated = true;

  elements.forEach(el => {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const duration = 1600;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * target);
      el.textContent = current.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        el.textContent = target.toLocaleString();
      }
    }

    requestAnimationFrame(updateCounter);
  });
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
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-item').forEach(el => revealObserver.observe(el));

    const counterSection = document.getElementById('heroCounters');
    if (counterSection) {
      const counterObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          counterObserver.disconnect();
        }
      }, { threshold: 0.2 });
      counterObserver.observe(counterSection);
    }
  } else {
    document.querySelectorAll('.reveal-item').forEach(el => el.classList.add('revealed'));
    animateCounters();
  }
}

function getBookingHistory() {
  try {
    return JSON.parse(localStorage.getItem('pp_bookings') || '[]');
  } catch (e) {
    return [];
  }
}

function saveBookingToHistory(item) {
  const list = getBookingHistory();
  list.unshift(item);
  localStorage.setItem('pp_bookings', JSON.stringify(list.slice(0, 20)));
  updateBookingHistoryCount();
}

function updateBookingHistoryCount() {
  const count = getBookingHistory().length;
  const navBadge = document.getElementById('navBookingCount');
  const mobBadge = document.getElementById('mobileBookingCount');
  if (navBadge) {
    navBadge.textContent = count;
    navBadge.style.display = count > 0 ? 'inline-flex' : 'none';
  }
  if (mobBadge) {
    mobBadge.textContent = count;
  }
}

function openBookingsHistoryModal() {
  const modal = document.getElementById('bookingsHistoryModal');
  const container = document.getElementById('bookingHistoryListContainer');
  if (!modal || !container) return;

  const history = getBookingHistory();
  if (history.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 32px 16px; color: var(--text-secondary);">
        <i data-lucide="calendar-x" style="width: 32px; height: 32px; margin: 0 auto 10px auto; display: block; opacity: 0.4;"></i>
        <div style="font-weight: 700; margin-bottom: 4px; color: var(--black);">No Bookings Yet</div>
        <div style="font-size: 0.8rem;">Your scheduled doorstep services will appear here.</div>
      </div>
    `;
  } else {
    container.innerHTML = history.map(b => `
      <div class="history-card-item">
        <div class="history-card-header">
          <strong style="color: var(--black); font-size: 0.9rem;">${b.service}</strong>
          <span class="badge-tag">${b.bookingId}</span>
        </div>
        <div class="history-card-body">
          <div>📅 ${b.schedule}</div>
          <div>📍 ${b.address} (${b.locality})</div>
          <div>👤 ${b.customerName} • +91 ${b.customerPhone}</div>
        </div>
        <button type="button" class="btn btn-black btn-sm" onclick="closeBookingsHistoryModal(); rebookFromHistory('${b.service}')" style="width: 100%;">
          Re-Book This Service
        </button>
      </div>
    `).join('');
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function closeBookingsHistoryModal() {
  const modal = document.getElementById('bookingsHistoryModal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

function rebookFromHistory(serviceName) {
  const select = document.getElementById('bookServiceSelect');
  if (select) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].value === serviceName || select.options[i].text.includes(serviceName)) {
        select.selectedIndex = i;
        break;
      }
    }
  }
  goToStep(1);
  const formSection = document.getElementById('bookingSection');
  if (formSection) formSection.scrollIntoView({ behavior: 'smooth' });
}

function detectGPSLocation() {
  const addrInput = document.getElementById('bookAddress');
  const label = document.getElementById('detectGpsLabel');
  const pill = document.getElementById('gpsSuccessPill');

  if (!navigator.geolocation) {
    alert('Geolocation is not supported by your browser. Please enter your society or area name.');
    return;
  }

  if (label) label.textContent = 'Detecting GPS...';

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude.toFixed(6);
      const lng = pos.coords.longitude.toFixed(6);
      detectedGpsLink = `https://maps.google.com/?q=${lat},${lng}`;
      if (addrInput) {
        if (!addrInput.value.trim() || addrInput.value.includes('maps.google.com')) {
          addrInput.value = `GPS Pin: ${detectedGpsLink}`;
        } else {
          addrInput.value = `${addrInput.value.trim()} [GPS: ${detectedGpsLink}]`;
        }
      }
      if (label) label.textContent = 'GPS Captured ✓';
      if (pill) {
        pill.innerHTML = `<i data-lucide="check-circle" style="width: 14px; height: 14px; flex-shrink: 0;"></i><span>Exact GPS captured (${lat}, ${lng}). Dispatch van routed directly.</span>`;
        pill.style.display = 'flex';
        if (typeof lucide !== 'undefined') lucide.createIcons();
      }
    },
    (err) => {
      if (label) label.textContent = 'Auto-Detect GPS Pin';
      alert('Unable to detect location. Please check browser location permissions or type your society address.');
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
  );
}

function setWhatsAppPinNote() {
  const addrInput = document.getElementById('bookAddress');
  const pill = document.getElementById('gpsSuccessPill');
  if (addrInput) {
    addrInput.value = 'Will drop live WhatsApp GPS pin on confirmation';
  }
  if (pill) {
    pill.innerHTML = `<i data-lucide="message-circle" style="width: 14px; height: 14px; flex-shrink: 0;"></i><span>Noted! You can drop your live WhatsApp location pin immediately after booking.</span>`;
    pill.style.display = 'flex';
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }
}

function shareLiveLocationOnWhatsApp() {
  const bId = latestBookingId || 'Doorstep Service';
  let text = `Hello Poona Plumbers, here is my location update for Booking ${bId}.`;
  if (detectedGpsLink) {
    text += ` My exact GPS Pin: ${detectedGpsLink}`;
  } else {
    text += ` Dropping my live WhatsApp location pin below:`;
  }
  window.open(`https://wa.me/917030009191?text=${encodeURIComponent(text)}`, '_blank');
}

function handlePhotoUpload(input) {
  if (!input.files || input.files.length === 0) return;
  const file = input.files[0];
  attachedPhotoName = file.name;

  const reader = new FileReader();
  reader.onload = function(e) {
    attachedPhotoDataUrl = e.target.result;
    const promptView = document.getElementById('photoPromptView');
    const previewView = document.getElementById('photoPreviewView');
    const thumbImg = document.getElementById('photoThumbImg');
    const thumbName = document.getElementById('photoThumbName');

    if (thumbImg) thumbImg.src = attachedPhotoDataUrl;
    if (thumbName) thumbName.textContent = file.name;
    if (promptView) promptView.style.display = 'none';
    if (previewView) previewView.style.display = 'flex';
  };
  reader.readAsDataURL(file);
}

function removeUploadedPhoto() {
  attachedPhotoName = '';
  attachedPhotoDataUrl = '';
  const input = document.getElementById('issuePhotoInput');
  if (input) input.value = '';
  const promptView = document.getElementById('photoPromptView');
  const previewView = document.getElementById('photoPreviewView');
  const thumbImg = document.getElementById('photoThumbImg');
  if (thumbImg) thumbImg.src = '';
  if (promptView) promptView.style.display = 'block';
  if (previewView) previewView.style.display = 'none';
}

function selectLocalityHub(key) {
  if (!PUNE_HUBS[key]) return;
  currentSelectedHub = key;
  const data = PUNE_HUBS[key];

  document.querySelectorAll('.locality-hub-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-hub') === key);
  });

  const title = document.getElementById('localityDetailTitle');
  const sub = document.getElementById('localityDetailSub');
  const arrival = document.getElementById('localityArrivalTime');
  const societies = document.getElementById('localitySocietiesText');
  const services = document.getElementById('localityServicesText');
  const plumbers = document.getElementById('localityPlumbersText');
  const emergency = document.getElementById('localityEmergencyText');
  const ctaCity = document.getElementById('localityCtaCity');
  const waBtn = document.getElementById('localityWaBtn');

  if (title) title.textContent = data.name;
  if (sub) sub.textContent = data.sub;
  if (arrival) arrival.textContent = data.arrival;
  if (societies) societies.textContent = data.societies;
  if (services) services.textContent = data.services;
  if (plumbers) plumbers.textContent = data.plumbers;
  if (emergency) emergency.innerHTML = data.emergency;
  if (ctaCity) ctaCity.textContent = data.shortName;
  if (waBtn) {
    waBtn.href = `https://wa.me/917030009191?text=${encodeURIComponent(data.waText)}`;
    const span = waBtn.querySelector('span');
    if (span) span.textContent = `WhatsApp ${data.shortName} Team`;
  }

  activeLocation = `${data.shortName}, Pune`;
  renderLocation();
}

function bookFromLocalityHub() {
  const data = PUNE_HUBS[currentSelectedHub] || PUNE_HUBS['baner'];
  activeLocation = `${data.shortName}, Pune`;
  renderLocation();
  const addrInput = document.getElementById('bookAddress');
  if (addrInput && !addrInput.value) {
    addrInput.value = `${data.shortName}, Pune`;
  }

  goToStep(1);
  const bookingSec = document.getElementById('bookingSection');
  if (bookingSec) {
    bookingSec.scrollIntoView({ behavior: 'smooth' });
  }
}

function initLocalityHubs() {
  const hash = window.location.hash.replace('#', '').toLowerCase();
  if (hash && PUNE_HUBS[hash]) {
    selectLocalityHub(hash);
  }
  window.addEventListener('hashchange', () => {
    const newHash = window.location.hash.replace('#', '').toLowerCase();
    if (newHash && PUNE_HUBS[newHash]) {
      selectLocalityHub(newHash);
    }
  });
}

let currentLanguage = localStorage.getItem('pp_lang') || 'en';

const TRANSLATIONS = {
  en: {
    heroHeading: 'Professional Plumbing Services. Booked in Minutes.',
    heroSubtitle: 'Discover trusted plumbing professionals for your home. Transparent pricing, convenient scheduling, and quality service at your doorstep across Pune.',
    modeStandard: 'Standard Visit',
    modeEmergency: '⚡ 30-Min Emergency',
    servicesBtn: 'Services',
    diagnosticBtn: 'Diagnosis',
    rateCardBtn: 'Rate Card',
    calcBtn: 'Price Calculator',
    qualityBtn: 'Quality',
    whyUsBtn: 'Why Us',
    howBtn: 'How It Works',
    reviewsBtn: 'Reviews',
    faqBtn: 'FAQ',
    navHistory: 'My Bookings',
    navCall: 'Call Now',
    dockEta: '30-Min Fast Arrival',
    dockBook: 'Book Plumber',
    diagBadge: 'Visual Troubleshooter',
    diagTitle: "Not Sure What's Leaking? 3-Tap Diagnosis",
    diagSub: 'Select where the issue is occurring and your symptom to get an instant root cause, required parts, and repair price estimate.',
    diagStep1: '1. Select Area',
    diagStep2: '2. Select Problem Symptom',
    diagAreaBath: 'Bathroom & Toilet',
    diagAreaKitchen: 'Kitchen & Sink',
    diagAreaTank: 'Tank & Pump',
    diagAreaWalls: 'Walls & Seepage',
    diagTime: 'Estimated Time',
    diagParts: 'Required Spares',
    diagCost: 'Fixed Labor Cost',
    diagBook: 'Book Plumber for This Fix',
    rateCardTitle: 'Official 2026 Pune Rate Card',
    rateCardSub: 'Standardized labor charges with 30-day service warranty across all Pune localities. Zero hidden fees.'
  },
  mr: {
    heroHeading: 'पुण्यातील अग्रगण्य घरपोच प्लंबिंग सेवा.',
    heroSubtitle: 'विश्वसनीय आणि कुशल प्लंबर आता फक्त एका क्लिकवर. पारदर्शक दर, वेळेवर सेवा आणि ३० दिवसांची काम वॉरंटी संपूर्ण पुणे शहरात.',
    modeStandard: 'नियमित भेट',
    modeEmergency: '⚡ ३० मिनिटांत तातडीची सेवा',
    servicesBtn: 'सेवा',
    diagnosticBtn: 'समस्या शोधा',
    rateCardBtn: 'दरपत्रक',
    calcBtn: 'किंमत अंदाज',
    qualityBtn: 'गुणवत्ता',
    whyUsBtn: 'आम्हीच का',
    howBtn: 'कसे कार्य करते',
    reviewsBtn: 'अभिप्राय',
    faqBtn: 'प्रश्न उत्तरे',
    navHistory: 'माझे बुकिंग',
    navCall: 'कॉल करा',
    dockEta: '३० मिनिटांत जलद आगमन',
    dockBook: 'प्लंबर बुक करा',
    diagBadge: 'जलद समस्या निवारण',
    diagTitle: 'गळती कुठे आहे? ३-टॅप मध्ये समस्या शोधा',
    diagSub: 'समस्या कुठे आणि काय होत आहे ते निवडा आणि त्वरित कारण, लागणारे सुटे भाग व दुरुस्तीचा अंदाज मिळवा.',
    diagStep1: '१. समस्येचे ठिकाण निवडा',
    diagStep2: '२. लक्षण निवडा',
    diagAreaBath: 'बाथरूम आणि शौचालय',
    diagAreaKitchen: 'स्वयंपाकघर आणि सिंक',
    diagAreaTank: 'पाण्याची टाकी आणि मोटर',
    diagAreaWalls: 'भिंती आणि पाझर',
    diagTime: 'अंदाजे वेळ',
    diagParts: 'लागणारे सुटे भाग',
    diagCost: 'निश्चित मजुरी',
    diagBook: 'या दुरुस्तीसाठी प्लंबर बुक करा',
    rateCardTitle: 'पुणे अधिकृत २०२६ प्लंबिंग दरपत्रक',
    rateCardSub: 'संपूर्ण पुण्यासाठी निश्चित मजुरी दर आणि ३० दिवसांची सेवा हमी. कोणतेही लपवलेले शुल्क नाही.'
  }
};

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('pp_lang', lang);
  const data = TRANSLATIONS[lang] || TRANSLATIONS.en;

  const codeEn = document.getElementById('langCodeEn');
  const codeMr = document.getElementById('langCodeMr');
  const mobCodeEn = document.getElementById('mobLangCodeEn');
  const mobCodeMr = document.getElementById('mobLangCodeMr');

  if (codeEn) codeEn.classList.toggle('active', lang === 'en');
  if (codeMr) codeMr.classList.toggle('active', lang === 'mr');
  if (mobCodeEn) mobCodeEn.classList.toggle('active', lang === 'en');
  if (mobCodeMr) mobCodeMr.classList.toggle('active', lang === 'mr');

  const heroHeading = document.getElementById('heroHeading');
  const heroSubtitle = document.getElementById('heroSubtitle');
  const navServices = document.getElementById('navServicesBtn');
  const navDiagnostic = document.getElementById('navDiagnosticBtn');
  const navRateCard = document.getElementById('navRateCardBtn');
  const navCalc = document.getElementById('navCalcBtn');
  const navQuality = document.getElementById('navQualityBtn');
  const navWhyUs = document.getElementById('navWhyUsBtn');
  const navHow = document.getElementById('navHowBtn');
  const navReviews = document.getElementById('navReviewsBtn');
  const navFaq = document.getElementById('navFaqBtn');
  const navHistoryText = document.getElementById('navHistoryText');
  const navCallText = document.getElementById('navCallText');

  const dockEtaText = document.getElementById('dockEtaText');
  const dockBookText = document.getElementById('dockBookText');

  const diagBadge = document.getElementById('diagBadge');
  const diagTitle = document.getElementById('diagTitle');
  const diagSub = document.getElementById('diagSub');
  const diagStep1 = document.getElementById('diagStep1Label');
  const diagStep2 = document.getElementById('diagStep2Label');
  const diagAreaBath = document.getElementById('diagAreaBath');
  const diagAreaKitchen = document.getElementById('diagAreaKitchen');
  const diagAreaTank = document.getElementById('diagAreaTank');
  const diagAreaWalls = document.getElementById('diagAreaWalls');
  const diagTime = document.getElementById('diagTimeLabel');
  const diagParts = document.getElementById('diagPartsLabel');
  const diagCost = document.getElementById('diagCostLabel');
  const diagBook = document.getElementById('diagBookBtnText');

  const rateCardTitle = document.getElementById('rateCardHeaderTitle');
  const rateCardSub = document.getElementById('rateCardHeaderSub');

  if (heroHeading) heroHeading.textContent = data.heroHeading;
  if (heroSubtitle) heroSubtitle.textContent = data.heroSubtitle;
  if (navServices) navServices.textContent = data.servicesBtn;
  if (navDiagnostic) navDiagnostic.textContent = data.diagnosticBtn;
  if (navRateCard) navRateCard.textContent = data.rateCardBtn;
  if (navCalc) navCalc.textContent = data.calcBtn;
  if (navQuality) navQuality.textContent = data.qualityBtn;
  if (navWhyUs) navWhyUs.textContent = data.whyUsBtn;
  if (navHow) navHow.textContent = data.howBtn;
  if (navReviews) navReviews.textContent = data.reviewsBtn;
  if (navFaq) navFaq.textContent = data.faqBtn;
  if (navHistoryText) navHistoryText.textContent = data.navHistory;
  if (navCallText) navCallText.textContent = data.navCall;

  if (dockEtaText) dockEtaText.textContent = data.dockEta;
  if (dockBookText) dockBookText.textContent = data.dockBook;

  if (diagBadge) diagBadge.textContent = data.diagBadge;
  if (diagTitle) diagTitle.textContent = data.diagTitle;
  if (diagSub) diagSub.textContent = data.diagSub;
  if (diagStep1) diagStep1.textContent = data.diagStep1;
  if (diagStep2) diagStep2.textContent = data.diagStep2;
  if (diagAreaBath) diagAreaBath.textContent = data.diagAreaBath;
  if (diagAreaKitchen) diagAreaKitchen.textContent = data.diagAreaKitchen;
  if (diagAreaTank) diagAreaTank.textContent = data.diagAreaTank;
  if (diagAreaWalls) diagAreaWalls.textContent = data.diagAreaWalls;
  if (diagTime) diagTime.textContent = data.diagTime;
  if (diagParts) diagParts.textContent = data.diagParts;
  if (diagCost) diagCost.textContent = data.diagCost;
  if (diagBook) diagBook.textContent = data.diagBook;

  if (rateCardTitle) rateCardTitle.textContent = data.rateCardTitle;
  if (rateCardSub) rateCardSub.textContent = data.rateCardSub;
}

function toggleLanguage() {
  const nextLang = currentLanguage === 'en' ? 'mr' : 'en';
  setLanguage(nextLang);
}

const DIAGNOSTIC_DATA = {
  bathroom: {
    label: 'Bathroom & Toilet',
    symptoms: [
      {
        id: 'b-tap-drip',
        name: 'Tap / Wall Mixer Dripping Continuously',
        cause: 'Worn internal spindle cartridge, faulty rubber gasket or mineral scale deposit.',
        time: '20 - 30 Mins',
        parts: '1/2" brass spindle, O-ring washer, Teflon tape',
        cost: '₹149 - ₹249',
        serviceId: 'tap-repair',
        serviceName: 'Tap & Faucet Repair'
      },
      {
        id: 'b-flush-leak',
        name: 'Toilet Flush Cistern Continuously Running',
        cause: 'Worn siphon washer, misaligned ball valve or calcified flush discharge seal.',
        time: '30 - 45 Mins',
        parts: 'Dual-flush siphon kit, inlet valve float',
        cost: '₹249 - ₹349',
        serviceId: 'toilet-seat',
        serviceName: 'Toilet Flush & Jet Spray Repair'
      },
      {
        id: 'b-shower-low',
        name: 'Low Shower / Diverter Flow',
        cause: 'Calcified shower aerator nozzles or diverter cartridge airlock.',
        time: '25 - 35 Mins',
        parts: 'Diverter cartridge, descaling solution',
        cost: '₹199 - ₹299',
        serviceId: 'tap-repair',
        serviceName: 'Shower & Diverter Installation'
      },
      {
        id: 'b-drain-choke',
        name: 'Bathroom Floor Drain Water Backing Up',
        cause: 'Hair and soap accumulation in the P-trap water barrier.',
        time: '30 - 40 Mins',
        parts: 'Heavy-duty drain snake, bio-enzyme clearer',
        cost: '₹299 - ₹399',
        serviceId: 'drain-cleaning',
        serviceName: 'Motorized Drain Cleaning'
      }
    ]
  },
  kitchen: {
    label: 'Kitchen Sink & Utility',
    symptoms: [
      {
        id: 'k-sink-choke',
        name: 'Kitchen Sink Water Draining Very Slowly',
        cause: 'Grease and food sediment clogging the corrugated waste pipe and bottle trap.',
        time: '25 - 35 Mins',
        parts: 'Heavy drain auger, flexible waste pipe replacement',
        cost: '₹249 - ₹349',
        serviceId: 'drain-cleaning',
        serviceName: 'Kitchen Sink Plumbing & Trap Fix'
      },
      {
        id: 'k-tap-leak',
        name: 'Swan Neck / Sink Mixer Base Leaking',
        cause: 'Damaged ceramic disc or loose braided connection hose beneath counter.',
        time: '20 - 30 Mins',
        parts: 'Braided stainless steel inlet hose, washer',
        cost: '₹149 - ₹249',
        serviceId: 'tap-repair',
        serviceName: 'Tap & Faucet Repair'
      },
      {
        id: 'k-ro-inlet',
        name: 'Water Purifier (RO) / Washing Machine Line Leak',
        cause: 'Loose push-fit connector or cracked angle valve nipple.',
        time: '20 - 30 Mins',
        parts: 'Angle cock valve, 1/4" RO diverter connector',
        cost: '₹199 - ₹299',
        serviceId: 'pipe-leakage',
        serviceName: 'Bathroom Leakage & Seepage Repair'
      }
    ]
  },
  tank: {
    label: 'Water Tank & Motor',
    symptoms: [
      {
        id: 't-tank-overflow',
        name: 'Overhead Sintex Tank Overflowing Continuously',
        cause: 'Faulty mechanical ball valve or stuck electronic water level sensor.',
        time: '30 - 45 Mins',
        parts: 'Heavy-duty brass float valve with ball',
        cost: '₹299 - ₹399',
        serviceId: 'water-tank',
        serviceName: 'Water Tank Deep Scrub & Cleaning'
      },
      {
        id: 't-pump-airlock',
        name: 'Water Pump Running but No Water Reaching Tank',
        cause: 'Suction line airlock or clogged foot valve at the underground sump.',
        time: '40 - 60 Mins',
        parts: 'Brass foot valve, priming connection',
        cost: '₹349 - ₹499',
        serviceId: 'water-tank',
        serviceName: 'Water Tank Deep Scrub & Cleaning'
      },
      {
        id: 't-tank-sludge',
        name: 'Muddy or Foul-Smelling Water from Taps',
        cause: 'Sediment and microbial biofilm accumulated at tank bottom.',
        time: '60 - 90 Mins',
        parts: 'UV disinfectant, rotary tank scrub',
        cost: 'Starting ₹799',
        serviceId: 'water-tank',
        serviceName: 'Water Tank Deep Scrub & Cleaning'
      }
    ]
  },
  pipeline: {
    label: 'Walls & Concealed Lines',
    symptoms: [
      {
        id: 'p-wall-damp',
        name: 'Wall Dampness, Peeling Paint or Seepage',
        cause: 'Micro-crack in concealed CPVC joint or loose wall mixer concealed elbow.',
        time: '45 - 90 Mins',
        parts: 'CPVC solvent cement, pressure testing plug, coupler',
        cost: '₹399 - ₹699',
        serviceId: 'pipe-leakage',
        serviceName: 'Bathroom Leakage & Seepage Repair'
      },
      {
        id: 'p-main-burst',
        name: 'High Pressure Water Gushing from Main Pipe',
        cause: 'Sheared PVC union or ruptured booster line.',
        time: 'Emergency (~20 Mins)',
        parts: 'High-pressure CPVC union, brass gate valve',
        cost: '₹349 - ₹549',
        serviceId: 'pipe-leakage',
        serviceName: '24/7 Emergency Burst Pipe Clamp'
      }
    ]
  }
};

let currentDiagArea = 'bathroom';
let currentDiagSymptom = null;

function selectDiagArea(areaKey) {
  if (!DIAGNOSTIC_DATA[areaKey]) return;
  currentDiagArea = areaKey;

  document.querySelectorAll('.diag-area-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-area') === areaKey);
  });

  renderDiagSymptoms();
}

function renderDiagSymptoms() {
  const container = document.getElementById('diagSymptomsWrap');
  if (!container) return;
  const areaData = DIAGNOSTIC_DATA[currentDiagArea];
  if (!areaData) return;

  container.innerHTML = areaData.symptoms.map((s, index) => `
    <button type="button" class="diag-symptom-btn ${index === 0 ? 'active' : ''}" data-sym="${s.id}" onclick="selectDiagSymptom('${s.id}')">
      ${s.name}
    </button>
  `).join('');

  if (areaData.symptoms.length > 0) {
    selectDiagSymptom(areaData.symptoms[0].id);
  }
}

function selectDiagSymptom(symId) {
  const areaData = DIAGNOSTIC_DATA[currentDiagArea];
  if (!areaData) return;
  const sym = areaData.symptoms.find(item => item.id === symId);
  if (!sym) return;

  currentDiagSymptom = sym;

  document.querySelectorAll('.diag-symptom-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-sym') === symId);
  });

  const title = document.getElementById('diagResultTitle');
  const cause = document.getElementById('diagResultCause');
  const time = document.getElementById('diagResultTime');
  const parts = document.getElementById('diagResultParts');
  const cost = document.getElementById('diagResultCost');
  const waBtn = document.getElementById('diagWaBtn');

  if (title) title.textContent = sym.name;
  if (cause) cause.textContent = sym.cause;
  if (time) time.textContent = sym.time;
  if (parts) parts.textContent = sym.parts;
  if (cost) cost.textContent = sym.cost;

  if (waBtn) {
    const text = `Hi Poona Plumbers, I used your diagnostic tool for: ${sym.name} in Pune. Root cause identified: ${sym.cause}. Estimated labor: ${sym.cost}. Please dispatch a technician.`;
    waBtn.href = `https://wa.me/917030009191?text=${encodeURIComponent(text)}`;
  }
}

function bookFromDiagnostic() {
  if (!currentDiagSymptom) return;
  const sym = currentDiagSymptom;

  const select = document.getElementById('bookServiceSelect');
  if (select) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].value === sym.serviceName || select.options[i].text.includes(sym.serviceName)) {
        select.selectedIndex = i;
        break;
      }
    }
  }

  const notesInput = document.getElementById('bookNotes');
  if (notesInput) {
    notesInput.value = `Diagnosed Issue: ${sym.name} (${sym.cause}). Est. Cost: ${sym.cost}`;
  }

  goToStep(1);
  const bookingSec = document.getElementById('bookingSection');
  if (bookingSec) {
    bookingSec.scrollIntoView({ behavior: 'smooth' });
  }
}

const RATE_CARD_ITEMS = [
  { name: 'Tap / Faucet Washer & Spindle Replacement', cat: 'tap', time: '20-30 mins', price: '₹149', warranty: '30-Day Warranty', desc: 'Fix dripping taps, loose knobs, worn spindle cartridges' },
  { name: 'Wall Mixer / Diverter Repair', cat: 'tap', time: '30-45 mins', price: '₹249', warranty: '30-Day Warranty', desc: 'Concealed diverter cartridge replacement, pressure balancing' },
  { name: 'New Tap / Angle Cock Installation', cat: 'tap', time: '15-25 mins', price: '₹149', warranty: '30-Day Warranty', desc: 'Mounting brass/CP bib cock, angle valve for geyser/jet' },
  { name: 'Overhead Shower Fitting & Descaling', cat: 'tap', time: '20-30 mins', price: '₹199', warranty: '30-Day Warranty', desc: 'Shower arm fitting, high-pressure rain shower descaling' },
  { name: 'Health Faucet / Jet Spray Replacement', cat: 'toilet', time: '15-20 mins', price: '₹149', warranty: '30-Day Warranty', desc: 'Fix leaking trigger, flexible hose, or angle cock valve' },
  { name: 'Toilet Flush Cistern Internal Mechanism Repair', cat: 'toilet', time: '30-40 mins', price: '₹249', warranty: '30-Day Warranty', desc: 'Replace dual flush siphon, inlet ball valve, flush button' },
  { name: 'Western Commode Seat Cover Replacement', cat: 'toilet', time: '20 mins', price: '₹199', warranty: '30-Day Warranty', desc: 'Soft-close hydraulic or standard seat cover installation' },
  { name: 'Full Western / Indian Toilet Installation', cat: 'toilet', time: '60-90 mins', price: '₹799', warranty: '30-Day Warranty', desc: 'Floor mounting, wax ring seal, waste pipe connection' },
  { name: 'Kitchen Sink Waste Coupling & Pipe Fix', cat: 'drain', time: '25-35 mins', price: '₹199', warranty: '30-Day Warranty', desc: 'Install stainless waste coupling, flexible waste pipe' },
  { name: 'Kitchen Sink Drain Clog Removal', cat: 'drain', time: '30-40 mins', price: '₹299', warranty: '30-Day Warranty', desc: 'Grease, food residue removal using mechanical drain snake' },
  { name: 'Bathroom Floor Drain / Trap Choke Clearing', cat: 'drain', time: '30-45 mins', price: '₹299', warranty: '30-Day Warranty', desc: 'P-trap hair, soap scum and mineral unblocking' },
  { name: 'Main Society Sewer Line Clearing (Auger)', cat: 'drain', time: '60-90 mins', price: '₹599', warranty: '30-Day Warranty', desc: 'Heavy-duty motorized drain machine line descaling' },
  { name: 'Wash Basin Mounting & Bottle Trap Repair', cat: 'pipe', time: '30-45 mins', price: '₹299', warranty: '30-Day Warranty', desc: 'Pedestal or wall-mount basin fitting, silicone perimeter seal' },
  { name: 'Concealed CPVC Pipe Leakage Joint Repair', cat: 'pipe', time: '45-60 mins', price: '₹399', warranty: '30-Day Warranty', desc: 'Leak detection, precision tile cutting, CPVC coupler welding' },
  { name: 'Main Water Line Gate Valve / Ball Valve Fix', cat: 'pipe', time: '30-40 mins', price: '₹299', warranty: '30-Day Warranty', desc: 'Replace stuck or sheared isolation ball valves' },
  { name: 'Water Pressure Booster Pump Plumbing Line', cat: 'tank', time: '60-90 mins', price: '₹499', warranty: '30-Day Warranty', desc: 'Inlet/outlet bypass valves, non-return valve fitting' },
  { name: 'Overhead Tank Ball Float Valve Replacement', cat: 'tank', time: '30-45 mins', price: '₹299', warranty: '30-Day Warranty', desc: 'Heavy brass float valve replacement to prevent overflow' },
  { name: 'Underground Sump Foot Valve Replacement', cat: 'tank', time: '45-60 mins', price: '₹349', warranty: '30-Day Warranty', desc: 'Submersible suction check valve replacement & line priming' },
  { name: '500L - 1000L Overhead Water Tank Cleaning', cat: 'tank', time: '60-90 mins', price: '₹799', warranty: '30-Day Warranty', desc: 'Sludge evacuation, high-pressure rotary scrub, UV sterilization' },
  { name: 'Instant / Storage Geyser Plumbing Connection', cat: 'pipe', time: '30-40 mins', price: '₹299', warranty: '30-Day Warranty', desc: 'Hot & cold flexible braided connection, non-return safety valve' }
];

let currentRateCategory = 'all';

function openRateCardModal() {
  const modal = document.getElementById('rateCardModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderRateCardList();
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }
}

function closeRateCardModal() {
  const modal = document.getElementById('rateCardModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function filterRateCategory(cat) {
  currentRateCategory = cat;
  document.querySelectorAll('.rate-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-cat') === cat);
  });
  renderRateCardList();
}

function filterRateCard() {
  renderRateCardList();
}

function renderRateCardList() {
  const container = document.getElementById('rateItemsList');
  if (!container) return;

  const query = (document.getElementById('rateCardSearchInput')?.value || '').toLowerCase().trim();

  const filtered = RATE_CARD_ITEMS.filter(item => {
    const matchesCat = currentRateCategory === 'all' || item.cat === currentRateCategory;
    const matchesQuery = !query || item.name.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 24px; color: var(--text-secondary);">
        No exact job matches found. Call <a href="tel:7030009191" style="color: var(--black); font-weight: 700;">+91 70300 09191</a> for a custom quote.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="rate-row-item">
      <div class="rate-item-main">
        <div class="rate-item-title">${item.name}</div>
        <div class="rate-item-desc">${item.desc} • ⏱️ ${item.time}</div>
      </div>
      <div class="rate-item-price-col">
        <div class="rate-item-price">${item.price}</div>
        <div class="rate-item-warranty">${item.warranty}</div>
      </div>
      <button type="button" class="btn btn-black btn-sm" onclick="closeRateCardModal(); bookFromRateCard('${item.name.replace(/'/g, "\\'")}', '${item.price}')" style="flex-shrink: 0; padding: 6px 12px; font-size: 0.75rem;">
        Book Fix
      </button>
    </div>
  `).join('');

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function bookFromRateCard(serviceName, price) {
  const notesInput = document.getElementById('bookNotes');
  if (notesInput) {
    notesInput.value = `Rate Card Service: ${serviceName} (${price} Fixed Labor)`;
  }
  const select = document.getElementById('bookServiceSelect');
  if (select) {
    const sLower = serviceName.toLowerCase();
    for (let i = 0; i < select.options.length; i++) {
      const optVal = select.options[i].value.toLowerCase();
      if ((sLower.includes('tap') || sLower.includes('faucet') || sLower.includes('angle cock')) && optVal.includes('tap')) {
        select.selectedIndex = i;
        break;
      }
      if ((sLower.includes('toilet') || sLower.includes('jet spray') || sLower.includes('flush') || sLower.includes('commode')) && optVal.includes('toilet')) {
        select.selectedIndex = i;
        break;
      }
      if (sLower.includes('drain') && optVal.includes('drain')) {
        select.selectedIndex = i;
        break;
      }
      if ((sLower.includes('geyser') || sLower.includes('heater')) && optVal.includes('heater')) {
        select.selectedIndex = i;
        break;
      }
      if (sLower.includes('tank') && optVal.includes('tank')) {
        select.selectedIndex = i;
        break;
      }
      if (sLower.includes('shower') && optVal.includes('shower')) {
        select.selectedIndex = i;
        break;
      }
      if (sLower.includes('sink') && optVal.includes('sink')) {
        select.selectedIndex = i;
        break;
      }
      if (sLower.includes('burst') && optVal.includes('burst')) {
        select.selectedIndex = i;
        break;
      }
      if ((sLower.includes('seepage') || sLower.includes('leakage')) && optVal.includes('leakage')) {
        select.selectedIndex = i;
        break;
      }
      if (sLower.includes('basin') && optVal.includes('basin')) {
        select.selectedIndex = i;
        break;
      }
    }
  }
  goToStep(1);
  const bookingSec = document.getElementById('bookingSection');
  if (bookingSec) {
    bookingSec.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToBooking() {
  goToStep(1);
  const bookingSec = document.getElementById('bookingSection');
  if (bookingSec) {
    bookingSec.scrollIntoView({ behavior: 'smooth' });
  }
}