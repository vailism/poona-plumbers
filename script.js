const SERVICES_DATA = [
  {
    id: 'tap-repair',
    name: 'Tap & Mixer Repair',
    category: 'tap-repair',
    categoryName: 'Tap & Faucet Repair',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=700&q=80',
    rating: 4.88,
    reviewsCount: 1420,
    price: 149,
    originalPrice: 249,
    duration: '30 mins',
    shortDesc: 'Fix dripping taps, loose handles, low flow, and leaking wall mixer valves with warranty.',
    longDesc: 'Comprehensive repair service for single lever basin taps, quarter-turn taps, bib taps, and wall mixers. Includes spindle repair, washer replacement, and pressure calibration.',
    included: [
      'Disassembly & cartridge/spindle inspection',
      'Washer & O-ring replacement',
      'De-scaling tap aerator for optimal pressure',
      'Post-repair leak and flow test',
      '30-day service warranty'
    ],
    notIncluded: [
      'New brass mixer body or tap fixture (if completely broken)',
      'Major wall chipping or concealed internal pipe alteration'
    ],
    faqs: [
      { q: 'Will the technician bring replacement washers and spindles?', a: 'Yes, our certified plumbers carry multi-brand standard spindles, washers, and cartridges.' },
      { q: 'What if the tap is beyond repair?', a: 'The plumber will advise replacement and can install a new tap of your choice for a nominal installation fee.' }
    ]
  },
  {
    id: 'wash-basin-install',
    name: 'Wash Basin Installation & Repair',
    category: 'bathroom',
    categoryName: 'Bathroom Plumbing',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=700&q=80',
    rating: 4.85,
    reviewsCount: 980,
    price: 299,
    originalPrice: 449,
    duration: '60 mins',
    shortDesc: 'Mounting of pedestal, table-top, or wall-hung basins with waste coupling and bracket check.',
    longDesc: 'Professional installation of ceramic wash basins including bracket drilling, waste pipe alignment, bottle trap setup, and silicone waterproofing along wall edges.',
    included: [
      'Wall bracket alignment and heavy-duty anchor bolt drilling',
      'Waste coupling & flexible waste pipe installation',
      'Bottle trap fitting and water drain testing',
      'Waterproof silicone sealing to prevent wall seepage',
      '30-day installation warranty'
    ],
    notIncluded: [
      'Ceramic wash basin and designer bottle trap fixture',
      'Granite or marble slab cutting for counter basins'
    ],
    faqs: [
      { q: 'Do you install table top ceramic counter basins?', a: 'Yes, our technicians specialize in both wall-hung and counter vanity wash basins.' }
    ]
  },
  {
    id: 'bathroom-leakage',
    name: 'Bathroom Leakage & Seepage Repair',
    category: 'leakage',
    categoryName: 'Pipe Leakage',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=700&q=80',
    rating: 4.92,
    reviewsCount: 2150,
    price: 249,
    originalPrice: 399,
    duration: '45 mins',
    shortDesc: 'Acoustic inspection and pinpoint fix for concealed wall pipes, diverter drips, and floor trap seepage.',
    longDesc: 'Specialized leakage detection and diagnosis. Our plumbers identify the root cause of dampness, concealed pipe joint breaches, and faulty sanitary traps before repairing them with minimal tile disruption.',
    included: [
      'Multi-point acoustic and moisture leak diagnosis',
      'Concealed pipe joint tightening & seal repair',
      'Drain trap waterproofing cement check',
      'Detailed repair report and warranty'
    ],
    notIncluded: [
      'Extensive tile replacement or complete civil masonry',
      'External building terrace waterproof coating'
    ],
    faqs: [
      { q: 'Can you detect leaks without breaking tiles?', a: 'Yes, we perform acoustic pressure tests to pinpoint the exact leak location first.' }
    ]
  },
  {
    id: 'drain-cleaning',
    name: 'Motorized Drain Cleaning',
    category: 'drain',
    categoryName: 'Drain Cleaning',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=700&q=80',
    rating: 4.89,
    reviewsCount: 1870,
    price: 199,
    originalPrice: 349,
    duration: '45 mins',
    shortDesc: 'High-speed motorized snake clearance for choked bathroom drains, balconies, and floor gullies.',
    longDesc: 'Clear stubborn hair clogs, grease buildup, and sediment choke-ups using motorized flexible snakes and pressurized water clearing. Completely non-acidic and safe for CPVC pipes.',
    included: [
      'Heavy-duty electric rotary snake unclogging',
      'Extraction of hair, soap sediment, and calcified debris',
      'High-flow water flush verification',
      'Disinfection of drain trap'
    ],
    notIncluded: [
      'Municipal underground mainline sewer blockage (outside society perimeter)'
    ],
    faqs: [
      { q: 'Do you use acid?', a: 'Never. We strictly avoid toxic acid cleaners because they corrode plumbing seals and ruin PVC joints.' }
    ]
  },
  {
    id: 'shower-installation',
    name: 'Shower & Diverter Installation',
    category: 'bathroom',
    categoryName: 'Bathroom Plumbing',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=700&q=80',
    rating: 4.86,
    reviewsCount: 760,
    price: 349,
    originalPrice: 499,
    duration: '60 mins',
    shortDesc: 'Fit overhead rain showers, handheld showers, multi-flow panels, and concealed diverter plates.',
    longDesc: 'Precise installation of modern shower systems, shower arms, flow restrictor calibration, diverter cartridge alignment, and seal check for uniform, soothing water pressure.',
    included: [
      'Overhead shower arm leveling and wall flange sealing',
      'Hand shower hook mounting and flexible hose connection',
      'Water pressure spray check across all nozzles',
      'Teflon threading to prevent threaded joint drips'
    ],
    notIncluded: [
      'Shower arm fixture, showerhead, or diverter kit'
    ],
    faqs: [
      { q: 'Can you install concealed rain showers from Jaquar and Kohler?', a: 'Yes, our technicians are trained across Jaquar, Grohe, Kohler, Hindware, and Cera fittings.' }
    ]
  },
  {
    id: 'water-tank-cleaning',
    name: 'Water Tank Deep Scrub & Cleaning',
    category: 'water-tank',
    categoryName: 'Water Tank',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=700&q=80',
    rating: 4.94,
    reviewsCount: 3120,
    price: 499,
    originalPrice: 799,
    duration: '90 mins',
    shortDesc: 'Multi-stage de-sludging, motorized high-pressure scrubbing, and antibacterial sanitization.',
    longDesc: 'Thorough cleaning for overhead plastic and RCC water tanks (up to 1,000L). Removes algae, rust sediment, and bacterial biofilm using food-grade sanitizing solutions and submersible de-watering pumps.',
    included: [
      'Complete de-watering with submersible pump',
      'Heavy-duty floor and wall mechanical scrubbing',
      'Sludge vacuuming and sediment extraction',
      'Antibacterial safe UV/potassium permanganate spray'
    ],
    notIncluded: [
      'Underground sumps exceeding 2,000 liters (separate commercial quote)'
    ],
    faqs: [
      { q: 'How often should the water tank be cleaned?', a: 'We recommend tank cleaning every 6 months to prevent sediment build-up and bacterial growth.' }
    ]
  },
  {
    id: 'geyser-service',
    name: 'Water Heater (Geyser) Service & Repair',
    category: 'water-heater',
    categoryName: 'Water Heater',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=700&q=80',
    rating: 4.91,
    reviewsCount: 1640,
    price: 349,
    originalPrice: 549,
    duration: '60 mins',
    shortDesc: 'Inspection for heating coil scaling, thermostat testing, safety valve replacement, and inlet leaks.',
    longDesc: 'Comprehensive geyser diagnostic and descaling service. Solves lukewarm water, electrical trips, whistling noises, and pressure valve leakage across instant and storage water heaters.',
    included: [
      'Heating element coil inspection and chemical descaling',
      'Thermostat & thermal cutout calibration',
      'Pressure relief safety valve check',
      'Braided inlet/outlet connection leak tightening'
    ],
    notIncluded: [
      'Cost of replacement heating element coil or thermostat if burnt'
    ],
    faqs: [
      { q: 'Do you service solar water heaters?', a: 'Yes, we service solar backup heating elements and plumbing manifold connections.' }
    ]
  },
  {
    id: 'kitchen-sink-drain',
    name: 'Kitchen Sink Plumbing & Trap Fix',
    category: 'kitchen',
    categoryName: 'Kitchen Plumbing',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=700&q=80',
    rating: 4.87,
    reviewsCount: 1150,
    price: 249,
    originalPrice: 399,
    duration: '45 mins',
    shortDesc: 'Sink coupling replacement, anti-foul trap installation, and grease blockage clearance.',
    longDesc: 'Complete under-sink plumbing overhaul. We repair leaking waste couplings, install anti-cockroach traps, align flexible drains, and clear stubborn food oil buildup.',
    included: [
      'Stainless steel sink waste coupling tightening & gasket seal',
      'P-trap/bottle trap cleaning and seal replacement',
      'RO purifier reject water pipe integration',
      'Leak test under maximum sink water fill'
    ],
    notIncluded: [
      'New granite cut-out or stainless steel sink basin'
    ],
    faqs: [
      { q: 'Can you stop foul smells from coming up the kitchen sink?', a: 'Yes, installing a proper water-sealed P-trap completely prevents sewage gases and insects.' }
    ]
  },
  {
    id: 'western-commode-repair',
    name: 'Western Toilet Flush & Jet Spray Repair',
    category: 'bathroom',
    categoryName: 'Bathroom Plumbing',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=700&q=80',
    rating: 4.88,
    reviewsCount: 1980,
    price: 199,
    originalPrice: 349,
    duration: '45 mins',
    shortDesc: 'Fix continuous flush tank overflow, broken flush levers, dual-flush valves, and leaking health faucets.',
    longDesc: 'Diagnosis and repair for concealed or ceramic flush tanks, syphon valves, ball-valves, angle cock valves, and bidet sprayers. Stops water waste and noisy tank refills.',
    included: [
      'Flush tank syphon and inlet float valve diagnosis',
      'Health faucet / jet spray nozzle de-scaling & washer fix',
      'Angle valve leak tightening',
      'Flush volume calibration'
    ],
    notIncluded: [
      'Full replacement ceramic toilet bowl or concealed wall cistern frame'
    ],
    faqs: [
      { q: 'Why does my toilet tank keep running water constantly?', a: 'A faulty flapper valve or misaligned inlet float valve is usually the culprit and is easily repaired on-site.' }
    ]
  },
  {
    id: 'pipeline-installation',
    name: 'New Pipe Line Installation & Rerouting',
    category: 'installation',
    categoryName: 'Installation Services',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=700&q=80',
    rating: 4.9,
    reviewsCount: 620,
    price: 399,
    originalPrice: 599,
    duration: '90 mins',
    shortDesc: 'CPVC, UPVC, and PPR fresh water and drainage pipeline fitting with pressure-tight solvent welds.',
    longDesc: 'Expert pipeline layout and rerouting for washing machines, water purifiers, balconies, and bathroom renovations. Clean pipe clamping and pressure-tested leak-free joints.',
    included: [
      'Pipe layout measurement and wall clip anchoring',
      'Precision cutting and high-grade solvent weld bonding',
      'Control ball valve installation',
      'High pressure leak test'
    ],
    notIncluded: [
      'Cost of pipes, elbows, tees, and union fittings (billed transparently at actuals)'
    ],
    faqs: [
      { q: 'Which pipe material do you recommend for hot water?', a: 'We recommend CPVC (SDR 11) or PPR pipes for durability with high temperature hot water.' }
    ]
  },
  {
    id: 'ro-water-hookup',
    name: 'RO & Appliance Plumbing Hookup',
    category: 'kitchen',
    categoryName: 'Kitchen Plumbing',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=700&q=80',
    rating: 4.84,
    reviewsCount: 840,
    price: 199,
    originalPrice: 299,
    duration: '35 mins',
    shortDesc: 'Inlet diverter valve, drain waste bypass, and two-way angle valve setup for RO purifiers & dishwashers.',
    longDesc: 'Dedicated plumbing line connection for water purifiers, washing machines, and dishwashers without disrupting main sink water supply.',
    included: [
      '2-way brass angle cock valve fitting',
      'Appliance braided hose inlet connection',
      'Wastewater drain pipe channeling to prevent backflow',
      'Pressure testing'
    ],
    notIncluded: [
      'Appliance internal machinery or electrical plug point'
    ],
    faqs: [
      { q: 'Can one angle cock feed both the tap and the water purifier?', a: 'Yes, we install a dual-point angle cock valve to supply both simultaneously.' }
    ]
  },
  {
    id: 'emergency-burst-pipe',
    name: '24/7 Emergency Burst Pipe Clamp',
    category: 'emergency',
    categoryName: 'Emergency Plumbing',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=700&q=80',
    rating: 4.96,
    reviewsCount: 1540,
    price: 349,
    originalPrice: 499,
    duration: '30 mins',
    shortDesc: 'Immediate emergency dispatch across Pune to stop major pipe bursts, valve blowouts, and severe flooding.',
    longDesc: 'Priority 24/7 rapid response for residential and commercial plumbing disasters. Fast isolation, high-pressure temporary emergency clamping, and permanent pipe section welding.',
    included: [
      'Rapid arrival within 30-45 minutes in Pune',
      'Main water supply isolation',
      'Emergency pipe split clamp / quick-joint replacement',
      'Water damage mitigation advice'
    ],
    notIncluded: [
      'Extensive wall demolition or replastering'
    ],
    faqs: [
      { q: 'How fast can you reach my home?', a: 'Our emergency units reach major Pune localities within 30-45 minutes.' }
    ]
  }
];

const VERIFIED_PROS = [
  {
    id: 'pro-1',
    name: 'Rajesh More',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    rating: 4.92,
    jobsCount: 1840,
    experience: '12 Yrs Exp',
    speciality: 'Leakage & Sanitary Expert'
  },
  {
    id: 'pro-2',
    name: 'Santosh Patil',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    rating: 4.88,
    jobsCount: 1320,
    experience: '9 Yrs Exp',
    speciality: 'Drain & Tank Specialist'
  },
  {
    id: 'pro-3',
    name: 'Amit Kulkarni',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    rating: 4.95,
    jobsCount: 2150,
    experience: '14 Yrs Exp',
    speciality: 'Master Plumbing & Diverters'
  },
  {
    id: 'pro-4',
    name: 'Sandeep Shinde',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
    rating: 4.86,
    jobsCount: 980,
    experience: '8 Yrs Exp',
    speciality: 'Water Heater & Pumps'
  }
];

const PUNE_LOCALITIES = [
  'Koregaon Park', 'Kothrud', 'Baner', 'Hinjewadi', 'Viman Nagar',
  'Kalyani Nagar', 'Aundh', 'Wakad', 'Magarpatta', 'Hadapsar',
  'Shivaji Nagar', 'Camp / MG Road'
];

let appState = {
  currentLocation: localStorage.getItem('pp_location') || 'Koregaon Park, Pune',
  activeCategory: 'all',
  searchQuery: '',
  cart: JSON.parse(localStorage.getItem('pp_cart') || '[]'),
  bookings: JSON.parse(localStorage.getItem('pp_bookings') || 'null'),
  savedAddresses: JSON.parse(localStorage.getItem('pp_addresses') || 'null'),
  user: JSON.parse(localStorage.getItem('pp_user') || 'null'),
  selectedServiceForDetail: null,
  bookingWizard: {
    service: null,
    date: null,
    time: '10:00 AM - 12:00 PM',
    address: {
      name: '',
      phone: '',
      email: '',
      flat: '',
      society: '',
      locality: '',
      propType: 'Residential',
      notes: ''
    },
    paymentMethod: 'Pay After Service (Cash / UPI)',
    confirmedBooking: null
  }
};

if (!appState.bookings) {
  appState.bookings = [
    {
      id: 'PN-92841',
      serviceName: 'Tap & Mixer Repair',
      serviceId: 'tap-repair',
      date: 'Tomorrow',
      time: '10:00 AM - 12:00 PM',
      status: 'Confirmed',
      amount: 227,
      pro: VERIFIED_PROS[0],
      address: 'Flat 402, Rohan Heights, Koregaon Park, Pune',
      propType: 'Residential',
      createdAt: 'Today'
    },
    {
      id: 'PN-71029',
      serviceName: 'Motorized Drain Cleaning',
      serviceId: 'drain-cleaning',
      date: '12 Oct, 2026',
      time: '02:00 PM - 04:00 PM',
      status: 'Completed',
      amount: 277,
      pro: VERIFIED_PROS[1],
      address: 'Flat 402, Rohan Heights, Koregaon Park, Pune',
      propType: 'Residential',
      createdAt: '12 Oct, 2026'
    }
  ];
  localStorage.setItem('pp_bookings', JSON.stringify(appState.bookings));
}

if (!appState.savedAddresses) {
  appState.savedAddresses = [
    { id: 'addr-1', title: 'Home', line: 'Flat 402, Rohan Heights, Koregaon Park, Pune' },
    { id: 'addr-2', title: 'Office', line: 'Plot 18, Phase 1, Hinjewadi IT Park, Pune' }
  ];
  localStorage.setItem('pp_addresses', JSON.stringify(appState.savedAddresses));
}

if (!appState.user) {
  appState.user = {
    name: 'Anand Kulkarni',
    phone: '9876543210',
    email: 'anand.k@example.com',
    locality: 'Koregaon Park'
  };
  localStorage.setItem('pp_user', JSON.stringify(appState.user));
}

document.addEventListener('DOMContentLoaded', () => {
  renderLocationDisplay();
  renderUserDisplay();
  renderCartBadge();
  renderServicesGrid();
  initCategoryFilter();
  initSearch();
  initModals();
  initDateOptions();
  initFaqAccordion();
  initLucide();
});

function initLucide() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function renderLocationDisplay() {
  const locEl = document.getElementById('currentLocationText');
  if (locEl) {
    locEl.textContent = appState.currentLocation;
  }
}

function renderUserDisplay() {
  const userBtn = document.getElementById('navUserBtn');
  if (userBtn) {
    if (appState.user) {
      userBtn.innerHTML = `<i data-lucide="user" style="width: 14px; height: 14px;"></i><span>${appState.user.name.split(' ')[0]}</span>`;
    } else {
      userBtn.innerHTML = `<i data-lucide="log-in" style="width: 14px; height: 14px;"></i><span>Sign In</span>`;
    }
    initLucide();
  }
}

function renderCartBadge() {
  const badge = document.getElementById('navCartCount');
  if (badge) {
    badge.textContent = appState.cart.length;
    badge.style.display = appState.cart.length > 0 ? 'flex' : 'none';
  }
  const bookingsBadge = document.getElementById('navBookingsCount');
  if (bookingsBadge) {
    const upcomingCount = appState.bookings.filter(b => b.status === 'Confirmed').length;
    bookingsBadge.textContent = upcomingCount;
  }
}

function renderServicesGrid() {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;

  let filtered = SERVICES_DATA;
  if (appState.activeCategory !== 'all') {
    filtered = filtered.filter(s => s.category === appState.activeCategory);
  }
  if (appState.searchQuery.trim() !== '') {
    const q = appState.searchQuery.toLowerCase();
    filtered = filtered.filter(s => 
      s.name.toLowerCase().includes(q) || 
      s.shortDesc.toLowerCase().includes(q) ||
      s.categoryName.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: var(--grey-card); border: 1px solid var(--grey-border); border-radius: var(--radius-md);">
        <i data-lucide="search-x" style="width: 48px; height: 48px; color: var(--text-muted); margin: 0 auto 16px auto;"></i>
        <h3 style="font-size: 1.25rem; margin-bottom: 8px;">No plumbing services found</h3>
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 20px;">Try searching for "tap", "leakage", "drain", or reset the category filter.</p>
        <button class="btn btn-black" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    initLucide();
    return;
  }

  grid.innerHTML = filtered.map(service => `
    <div class="service-card-urban" onclick="openServiceDetail('${service.id}')">
      <div class="service-card-img-wrap">
        <img src="${service.image}" alt="${service.name}" loading="lazy" />
        <span class="service-card-duration-tag">
          <i data-lucide="clock" style="width: 12px; height: 12px;"></i>
          ${service.duration}
        </span>
      </div>
      <div class="service-card-body">
        <div class="service-rating-row">
          <span>★ ${service.rating}</span>
          <span style="color: var(--text-muted); font-weight: 400;">(${service.reviewsCount.toLocaleString()} reviews)</span>
        </div>
        <h3 class="service-card-title">${service.name}</h3>
        <p class="service-card-desc">${service.shortDesc}</p>
        <div class="service-card-footer">
          <div class="service-pricing">
            <span class="price-sub">Starting at</span>
            <span class="price-main">₹${service.price}</span>
          </div>
          <div class="card-actions-row">
            <button type="button" class="btn btn-outline btn-sm" onclick="event.stopPropagation(); openServiceDetail('${service.id}')">
              Details
            </button>
            <button type="button" class="btn btn-black btn-sm" onclick="event.stopPropagation(); startBookingForService('${service.id}')">
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  initLucide();
}

function resetFilters() {
  appState.activeCategory = 'all';
  appState.searchQuery = '';
  const searchInput = document.getElementById('heroSearchInput');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.category-pill-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === 'all');
  });
  renderServicesGrid();
}

function initCategoryFilter() {
  const container = document.getElementById('categoryScrollWrapper');
  if (!container) return;

  const categories = [
    { id: 'all', name: 'All Services', icon: 'grid' },
    { id: 'tap-repair', name: 'Tap & Faucet Repair', icon: 'wrench' },
    { id: 'bathroom', name: 'Bathroom Plumbing', icon: 'bath' },
    { id: 'kitchen', name: 'Kitchen Plumbing', icon: 'utensils' },
    { id: 'leakage', name: 'Pipe Leakage', icon: 'droplet' },
    { id: 'drain', name: 'Drain Cleaning', icon: 'filter' },
    { id: 'water-heater', name: 'Water Heater (Geyser)', icon: 'flame' },
    { id: 'water-tank', name: 'Water Tank', icon: 'box' },
    { id: 'installation', name: 'Installation Services', icon: 'git-commit' },
    { id: 'emergency', name: 'Emergency Plumbing', icon: 'siren' }
  ];

  container.innerHTML = categories.map(cat => `
    <button type="button" class="category-pill-btn ${cat.id === appState.activeCategory ? 'active' : ''}" data-category="${cat.id}">
      <i data-lucide="${cat.icon}" style="width: 14px; height: 14px;"></i>
      <span>${cat.name}</span>
    </button>
  `).join('');

  container.querySelectorAll('.category-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.category-pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      appState.activeCategory = btn.dataset.category;
      renderServicesGrid();
      const el = document.getElementById('popularServicesSection');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function initSearch() {
  const searchInput = document.getElementById('heroSearchInput');
  const dropdown = document.getElementById('searchResultsDropdown');
  if (!searchInput || !dropdown) return;

  searchInput.addEventListener('input', (e) => {
    const val = e.target.value.trim();
    appState.searchQuery = val;
    renderServicesGrid();

    if (val.length >= 2) {
      const matches = SERVICES_DATA.filter(s => 
        s.name.toLowerCase().includes(val.toLowerCase()) ||
        s.categoryName.toLowerCase().includes(val.toLowerCase())
      );
      if (matches.length > 0) {
        dropdown.innerHTML = matches.slice(0, 5).map(m => `
          <div class="search-result-item" onclick="selectSearchResult('${m.id}')">
            <div>
              <div style="font-weight: 600; font-size: 0.9rem; color: var(--black);">${m.name}</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">${m.categoryName} • ${m.duration}</div>
            </div>
            <div style="font-weight: 800; font-size: 0.95rem; color: var(--black);">₹${m.price}</div>
          </div>
        `).join('');
        dropdown.classList.add('active');
      } else {
        dropdown.classList.remove('active');
      }
    } else {
      dropdown.classList.remove('active');
    }
  });

  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
    }
  });

  document.querySelectorAll('.quick-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      const q = tag.dataset.query;
      searchInput.value = q;
      appState.searchQuery = q;
      renderServicesGrid();
      const el = document.getElementById('popularServicesSection');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function selectSearchResult(serviceId) {
  const dropdown = document.getElementById('searchResultsDropdown');
  if (dropdown) dropdown.classList.remove('active');
  openServiceDetail(serviceId);
}

function openServiceDetail(serviceId) {
  const service = SERVICES_DATA.find(s => s.id === serviceId);
  if (!service) return;

  appState.selectedServiceForDetail = service;
  const modal = document.getElementById('serviceDetailModal');
  const container = document.getElementById('serviceDetailContent');
  if (!modal || !container) return;

  container.innerHTML = `
    <div class="detail-hero-media">
      <img src="${service.image}" alt="${service.name}" />
    </div>
    <div class="detail-content-wrap">
      <div class="detail-header-row">
        <div>
          <span class="badge-pill" style="margin-bottom: 8px;">
            <i data-lucide="tag" style="width: 12px; height: 12px;"></i>
            ${service.categoryName}
          </span>
          <h2 style="font-size: 1.75rem; margin-bottom: 6px;">${service.name}</h2>
          <div style="display: flex; align-items: center; gap: 12px; font-size: 0.85rem; color: var(--text-secondary);">
            <span style="font-weight: 700; color: var(--black);">★ ${service.rating} (${service.reviewsCount} verified reviews)</span>
            <span>•</span>
            <span>⏱ ${service.duration}</span>
          </div>
        </div>
        <div class="detail-price-box">
          <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600;">Standard Price</div>
          <div style="font-size: 1.85rem; font-weight: 800; color: var(--black);">₹${service.price}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted); text-decoration: line-through;">₹${service.originalPrice}</div>
        </div>
      </div>

      <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 24px;">
        ${service.longDesc}
      </p>

      <div class="detail-includes-grid">
        <div>
          <h4 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 14px; display: flex; align-items: center; gap: 6px;">
            <i data-lucide="check" style="width: 16px; height: 16px; color: var(--black);"></i>
            What's Included
          </h4>
          ${service.included.map(inc => `
            <div class="include-item">
              <i data-lucide="check" style="width: 14px; height: 14px; color: var(--black); flex-shrink: 0; margin-top: 3px;"></i>
              <span>${inc}</span>
            </div>
          `).join('')}
        </div>
        <div>
          <h4 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 14px; display: flex; align-items: center; gap: 6px;">
            <i data-lucide="x" style="width: 16px; height: 16px; color: var(--text-muted);"></i>
            What's Not Included
          </h4>
          ${service.notIncluded.map(exc => `
            <div class="exclude-item">
              <i data-lucide="x" style="width: 14px; height: 14px; color: var(--text-muted); flex-shrink: 0; margin-top: 3px;"></i>
              <span>${exc}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div style="margin-bottom: 28px;">
        <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 14px;">Available Verified Professionals in Pune</h4>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px;">
          ${VERIFIED_PROS.slice(0, 2).map(pro => `
            <div style="display: flex; align-items: center; gap: 12px; padding: 12px; border: 1px solid var(--grey-border); border-radius: var(--radius-sm); background: var(--grey-card);">
              <img src="${pro.photo}" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover;" />
              <div>
                <div style="font-weight: 700; font-size: 0.9rem;">${pro.name} <span class="badge-verified">✓</span></div>
                <div style="font-size: 0.75rem; color: var(--text-secondary);">${pro.experience} • ★ ${pro.rating}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div style="margin-bottom: 32px;">
        <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 12px;">Frequently Asked Questions</h4>
        ${service.faqs.map(faq => `
          <div style="margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid var(--grey-border);">
            <div style="font-weight: 600; font-size: 0.875rem; margin-bottom: 4px;">${faq.q}</div>
            <div style="font-size: 0.825rem; color: var(--text-secondary); line-height: 1.6;">${faq.a}</div>
          </div>
        `).join('')}
      </div>

      <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--grey-border); padding-top: 20px;">
        <div>
          <span style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600;">Total Estimate</span>
          <div style="font-size: 1.5rem; font-weight: 800; color: var(--black);">₹${service.price}</div>
        </div>
        <div style="display: flex; gap: 10px;">
          <button type="button" class="btn btn-outline" onclick="addToCart('${service.id}')">
            <i data-lucide="shopping-bag" style="width: 16px; height: 16px;"></i>
            Add to Basket
          </button>
          <button type="button" class="btn btn-black" onclick="closeServiceDetail(); startBookingForService('${service.id}')">
            Proceed to Schedule
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  initLucide();
}

function closeServiceDetail() {
  const modal = document.getElementById('serviceDetailModal');
  if (modal) modal.classList.remove('active');
}

function addToCart(serviceId) {
  const service = SERVICES_DATA.find(s => s.id === serviceId);
  if (!service) return;

  const existing = appState.cart.find(item => item.id === serviceId);
  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    appState.cart.push({
      id: service.id,
      name: service.name,
      price: service.price,
      duration: service.duration,
      quantity: 1
    });
  }

  localStorage.setItem('pp_cart', JSON.stringify(appState.cart));
  renderCartBadge();
  closeServiceDetail();
  openCartDrawer();
}

function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('modalBackdropOverlay');
  if (!drawer) return;

  renderCartItems();
  drawer.classList.add('active');
  if (overlay) overlay.classList.add('active');
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('modalBackdropOverlay');
  if (drawer) drawer.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
}

function renderCartItems() {
  const list = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('cartSubtotal');
  if (!list || !subtotalEl) return;

  if (appState.cart.length === 0) {
    list.innerHTML = `
      <div style="text-align: center; padding: 48px 12px; color: var(--text-muted);">
        <i data-lucide="shopping-bag" style="width: 44px; height: 44px; margin-bottom: 12px;"></i>
        <div style="font-size: 0.95rem; font-weight: 600; color: var(--black);">Your basket is empty</div>
        <div style="font-size: 0.8rem; margin-top: 4px;">Select from our verified plumbing services to get started.</div>
      </div>
    `;
    subtotalEl.textContent = '₹0';
    initLucide();
    return;
  }

  let total = 0;
  list.innerHTML = appState.cart.map((item, index) => {
    total += item.price * (item.quantity || 1);
    return `
      <div class="cart-item-row">
        <div>
          <div style="font-weight: 700; font-size: 0.9rem; color: var(--black);">${item.name}</div>
          <div style="font-size: 0.775rem; color: var(--text-secondary);">₹${item.price} each • ${item.duration}</div>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-weight: 700; font-size: 0.9rem;">₹${item.price * (item.quantity || 1)}</span>
          <button type="button" onclick="removeFromCart(${index})" style="background: none; border: none; cursor: pointer; color: var(--text-muted); padding: 4px;">
            <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  subtotalEl.textContent = `₹${total}`;
  initLucide();
}

function removeFromCart(index) {
  appState.cart.splice(index, 1);
  localStorage.setItem('pp_cart', JSON.stringify(appState.cart));
  renderCartBadge();
  renderCartItems();
}

function startBookingFromCart() {
  if (appState.cart.length === 0) {
    alert('Please select a service first.');
    return;
  }
  const firstItem = appState.cart[0];
  const service = SERVICES_DATA.find(s => s.id === firstItem.id) || SERVICES_DATA[0];
  closeCartDrawer();
  startBookingForService(service.id);
}

function startBookingForService(serviceId) {
  const service = SERVICES_DATA.find(s => s.id === serviceId) || SERVICES_DATA[0];
  appState.bookingWizard.service = service;
  
  if (appState.user) {
    appState.bookingWizard.address.name = appState.user.name;
    appState.bookingWizard.address.phone = appState.user.phone;
    appState.bookingWizard.address.email = appState.user.email;
  }
  appState.bookingWizard.address.locality = appState.currentLocation;

  setWizardStep(1);
  const modal = document.getElementById('bookingWizardModal');
  if (modal) modal.classList.add('active');
}

function closeBookingWizard() {
  const modal = document.getElementById('bookingWizardModal');
  if (modal) modal.classList.remove('active');
}

function setWizardStep(stepNum) {
  for (let i = 1; i <= 5; i++) {
    const pane = document.getElementById(`wizardStepPane${i}`);
    const node = document.getElementById(`wizardNode${i}`);
    if (pane) pane.style.display = i === stepNum ? 'block' : 'none';
    if (node) {
      node.classList.toggle('active', i === stepNum);
      node.classList.toggle('completed', i < stepNum);
    }
  }

  if (stepNum === 1) renderStep1();
  if (stepNum === 2) renderStep2();
  if (stepNum === 3) renderStep3();
  if (stepNum === 4) renderStep4();
  if (stepNum === 5) renderStep5();

  initLucide();
}

function renderStep1() {
  const s = appState.bookingWizard.service;
  if (!s) return;
  const el = document.getElementById('step1ServiceSummary');
  if (el) {
    el.innerHTML = `
      <div style="display: flex; gap: 16px; align-items: center; padding: 18px; border: 1px solid var(--grey-border); border-radius: var(--radius-md); background: var(--grey-card); margin-bottom: 24px;">
        <img src="${s.image}" style="width: 72px; height: 72px; border-radius: var(--radius-sm); object-fit: cover;" />
        <div style="flex: 1;">
          <span class="badge-pill" style="margin-bottom: 4px;">${s.categoryName}</span>
          <div style="font-weight: 800; font-size: 1.1rem; color: var(--black);">${s.name}</div>
          <div style="font-size: 0.8rem; color: var(--text-secondary);">⏱ Est. Duration: ${s.duration} • ★ ${s.rating}</div>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Service Fee</div>
          <div style="font-weight: 800; font-size: 1.35rem; color: var(--black);">₹${s.price}</div>
        </div>
      </div>
    `;
  }
}

function initDateOptions() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const today = new Date();
  
  const options = [];
  for (let i = 0; i < 6; i++) {
    const d = new Date();
    d.setDate(today.getDate() + i);
    options.push({
      label: i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : days[d.getDay()],
      dateStr: `${d.getDate()} ${months[d.getMonth()]}`,
      iso: d.toISOString().split('T')[0]
    });
  }

  const container = document.getElementById('wizardDateRow');
  if (!container) return;

  container.innerHTML = options.map((opt, idx) => `
    <div class="date-chip ${idx === 0 ? 'active' : ''}" data-date="${opt.label}, ${opt.dateStr}" onclick="selectDateChip(this)">
      <div class="day-name">${opt.label}</div>
      <div class="day-num">${opt.dateStr.split(' ')[0]}</div>
      <div style="font-size: 0.65rem; color: inherit; opacity: 0.7;">${opt.dateStr.split(' ')[1]}</div>
    </div>
  `).join('');

  appState.bookingWizard.date = `${options[0].label}, ${options[0].dateStr}`;
}

function selectDateChip(el) {
  document.querySelectorAll('.date-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  appState.bookingWizard.date = el.dataset.date;
}

function renderStep2() {
  document.querySelectorAll('.time-chip').forEach(chip => {
    chip.onclick = function() {
      document.querySelectorAll('.time-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      appState.bookingWizard.time = chip.dataset.slot;
    };
  });
}

function renderStep3() {
  const u = appState.user;
  if (u) {
    const nameInput = document.getElementById('step3Name');
    const phoneInput = document.getElementById('step3Phone');
    const emailInput = document.getElementById('step3Email');
    const locInput = document.getElementById('step3Locality');
    if (nameInput && !nameInput.value) nameInput.value = u.name;
    if (phoneInput && !phoneInput.value) phoneInput.value = u.phone;
    if (emailInput && !emailInput.value) emailInput.value = u.email;
    if (locInput) locInput.value = appState.currentLocation;
  }

  const resBtn = document.getElementById('step3PropRes');
  const commBtn = document.getElementById('step3PropComm');
  if (resBtn && commBtn) {
    resBtn.onclick = () => {
      appState.bookingWizard.address.propType = 'Residential';
      resBtn.classList.add('active');
      commBtn.classList.remove('active');
    };
    commBtn.onclick = () => {
      appState.bookingWizard.address.propType = 'Commercial';
      commBtn.classList.add('active');
      resBtn.classList.remove('active');
    };
  }
}

function validateStep3AndProceed() {
  const name = document.getElementById('step3Name').value.trim();
  const phone = document.getElementById('step3Phone').value.trim();
  const flat = document.getElementById('step3Flat').value.trim();
  const society = document.getElementById('step3Society').value.trim();
  const locality = document.getElementById('step3Locality').value.trim();
  const notes = document.getElementById('step3Notes').value.trim();
  const email = document.getElementById('step3Email').value.trim();

  if (name.length < 2) {
    alert('Please enter your full name.');
    return;
  }
  if (!/^[6-9]\d{9}$/.test(phone.replace(/\D/g, ''))) {
    alert('Please enter a valid 10-digit mobile number.');
    return;
  }
  if (flat.length < 1 || society.length < 2) {
    alert('Please provide your flat/house number and building name.');
    return;
  }

  appState.bookingWizard.address.name = name;
  appState.bookingWizard.address.phone = phone;
  appState.bookingWizard.address.email = email;
  appState.bookingWizard.address.flat = flat;
  appState.bookingWizard.address.society = society;
  appState.bookingWizard.address.locality = locality;
  appState.bookingWizard.address.notes = notes;

  setWizardStep(4);
}

function renderStep4() {
  const s = appState.bookingWizard.service;
  const w = appState.bookingWizard;
  const receiptEl = document.getElementById('step4Receipt');
  if (!s || !receiptEl) return;

  const basePrice = s.price;
  const safetyFee = 49;
  const platformFee = 29;
  const total = basePrice + safetyFee + platformFee;

  receiptEl.innerHTML = `
    <div style="font-weight: 700; font-size: 1rem; color: var(--black); margin-bottom: 12px; display: flex; justify-content: space-between;">
      <span>${s.name}</span>
      <span>₹${basePrice}</span>
    </div>
    <div class="receipt-row">
      <span>Scheduled Date & Time</span>
      <span style="font-weight: 600; color: var(--black);">${w.date} • ${w.time}</span>
    </div>
    <div class="receipt-row">
      <span>Service Address</span>
      <span style="font-weight: 600; color: var(--black);">${w.address.flat}, ${w.address.society}, ${w.address.locality}</span>
    </div>
    <div class="receipt-row">
      <span>Safety & Material Protection Fee</span>
      <span>₹${safetyFee}</span>
    </div>
    <div class="receipt-row">
      <span>Taxes & Doorstep Platform Fee</span>
      <span>₹${platformFee}</span>
    </div>
    <div class="receipt-row total-row">
      <span>Total Amount Payable</span>
      <span>₹${total}</span>
    </div>
  `;
}

function confirmAndPlaceBooking() {
  const s = appState.bookingWizard.service;
  const w = appState.bookingWizard;
  const bookingId = `PN-${Math.floor(10000 + Math.random() * 90000)}`;
  const assignedPro = VERIFIED_PROS[Math.floor(Math.random() * VERIFIED_PROS.length)];
  const total = s.price + 49 + 29;

  const newBooking = {
    id: bookingId,
    serviceName: s.name,
    serviceId: s.id,
    date: w.date,
    time: w.time,
    status: 'Confirmed',
    amount: total,
    pro: assignedPro,
    address: `${w.address.flat}, ${w.address.society}, ${w.address.locality}`,
    propType: w.address.propType,
    notes: w.address.notes,
    createdAt: 'Just now'
  };

  appState.bookings.unshift(newBooking);
  localStorage.setItem('pp_bookings', JSON.stringify(appState.bookings));
  appState.bookingWizard.confirmedBooking = newBooking;

  appState.cart = appState.cart.filter(item => item.id !== s.id);
  localStorage.setItem('pp_cart', JSON.stringify(appState.cart));
  renderCartBadge();

  setWizardStep(5);
}

function renderStep5() {
  const b = appState.bookingWizard.confirmedBooking;
  const wrap = document.getElementById('step5ConfirmationWrap');
  if (!b || !wrap) return;

  wrap.innerHTML = `
    <div style="width: 60px; height: 60px; border-radius: 50%; background: var(--black); color: var(--white); display: flex; align-items: center; justify-content: center; margin: 0 auto 16px auto;">
      <i data-lucide="check" style="width: 32px; height: 32px;"></i>
    </div>
    <h2 style="font-size: 1.75rem; margin-bottom: 6px;">Booking Confirmed!</h2>
    <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 20px;">
      Booking ID: <strong style="color: var(--black);">${b.id}</strong> • Notification sent to registered WhatsApp
    </div>

    <div style="text-align: left; background: var(--grey-light); border: 1px solid var(--grey-border); border-radius: var(--radius-md); padding: 18px; margin-bottom: 24px;">
      <div style="font-weight: 700; font-size: 0.95rem; margin-bottom: 8px;">${b.serviceName}</div>
      <div style="font-size: 0.825rem; color: var(--text-secondary); margin-bottom: 4px;">📅 Schedule: <strong>${b.date} • ${b.time}</strong></div>
      <div style="font-size: 0.825rem; color: var(--text-secondary); margin-bottom: 12px;">📍 Address: ${b.address}</div>
      
      <div style="display: flex; align-items: center; gap: 12px; border-top: 1px solid var(--grey-border); padding-top: 12px;">
        <img src="${b.pro.photo}" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;" />
        <div>
          <div style="font-weight: 700; font-size: 0.85rem;">${b.pro.name} <span class="badge-verified">✓</span></div>
          <div style="font-size: 0.75rem; color: var(--text-secondary);">${b.pro.speciality} • ★ ${b.pro.rating}</div>
        </div>
      </div>
    </div>

    <div class="tracking-timeline-box">
      <div style="font-weight: 700; font-size: 0.9rem; margin-bottom: 14px;">Live Booking Status</div>
      <div class="timeline-event-item">
        <div class="timeline-dot">✓</div>
        <div>
          <div style="font-weight: 700; font-size: 0.85rem;">Booking Accepted</div>
          <div style="font-size: 0.75rem; color: var(--text-secondary);">Your request is registered in the Pune network.</div>
        </div>
      </div>
      <div class="timeline-event-item">
        <div class="timeline-dot">✓</div>
        <div>
          <div style="font-weight: 700; font-size: 0.85rem;">Verified Professional Assigned</div>
          <div style="font-size: 0.75rem; color: var(--text-secondary);">${b.pro.name} will arrive at the scheduled slot.</div>
        </div>
      </div>
      <div class="timeline-event-item">
        <div class="timeline-dot" style="background: var(--grey-border); color: var(--black);">•</div>
        <div>
          <div style="font-weight: 600; font-size: 0.85rem; color: var(--text-secondary);">Doorstep Service & Inspection</div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">Scheduled for ${b.date}.</div>
        </div>
      </div>
    </div>

    <div style="display: flex; gap: 12px; margin-top: 24px;">
      <button type="button" class="btn btn-outline" style="flex: 1;" onclick="closeBookingWizard(); openDashboard('bookings');">
        View in Dashboard
      </button>
      <button type="button" class="btn btn-black" style="flex: 1;" onclick="shareBookingOnWhatsApp('${b.id}')">
        <i data-lucide="message-circle" style="width: 16px; height: 16px;"></i>
        WhatsApp Dispatch
      </button>
    </div>
  `;

  initLucide();
}

function shareBookingOnWhatsApp(bookingId) {
  const b = appState.bookings.find(item => item.id === bookingId);
  if (!b) return;

  const msg = `🔧 *Poona Plumbers Marketplace - Booking ${b.id}*\n\n` +
    `👤 Customer: ${b.address.split(',')[0]}\n` +
    `🛠️ Service: ${b.serviceName}\n` +
    `📅 Schedule: ${b.date} (${b.time})\n` +
    `📍 Address: ${b.address}\n` +
    `👨‍🔧 Assigned Pro: ${b.pro.name} (★ ${b.pro.rating})\n` +
    `💰 Total: ₹${b.amount} (Pay After Service)\n\n` +
    `_Please confirm dispatch status._`;

  window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, '_blank');
}

function openDashboard(initialTab = 'bookings') {
  const modal = document.getElementById('dashboardModal');
  if (!modal) return;
  modal.classList.add('active');
  switchDashboardTab(initialTab);
}

function closeDashboard() {
  const modal = document.getElementById('dashboardModal');
  if (modal) modal.classList.remove('active');
}

function switchDashboardTab(tabName) {
  document.querySelectorAll('.dash-nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.tab === tabName);
  });

  const content = document.getElementById('dashboardContentArea');
  if (!content) return;

  if (tabName === 'bookings') {
    renderDashboardBookings('all');
  } else if (tabName === 'addresses') {
    renderDashboardAddresses();
  } else if (tabName === 'profile') {
    renderDashboardProfile();
  }

  initLucide();
}

function renderDashboardBookings(filter = 'all') {
  const content = document.getElementById('dashboardContentArea');
  if (!content) return;

  let list = appState.bookings;
  if (filter === 'upcoming') list = list.filter(b => b.status === 'Confirmed');
  if (filter === 'past') list = list.filter(b => b.status === 'Completed');
  if (filter === 'cancelled') list = list.filter(b => b.status === 'Cancelled');

  content.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; flex-wrap: wrap; gap: 12px;">
      <h3 style="font-size: 1.25rem;">My Bookings</h3>
      <div style="display: flex; gap: 8px;">
        <button class="btn btn-sm ${filter === 'all' ? 'btn-black' : 'btn-outline'}" onclick="renderDashboardBookings('all')">All</button>
        <button class="btn btn-sm ${filter === 'upcoming' ? 'btn-black' : 'btn-outline'}" onclick="renderDashboardBookings('upcoming')">Upcoming</button>
        <button class="btn btn-sm ${filter === 'past' ? 'btn-black' : 'btn-outline'}" onclick="renderDashboardBookings('past')">Completed</button>
        <button class="btn btn-sm ${filter === 'cancelled' ? 'btn-black' : 'btn-outline'}" onclick="renderDashboardBookings('cancelled')">Cancelled</button>
      </div>
    </div>

    ${list.length === 0 ? `
      <div style="text-align: center; padding: 48px 12px; color: var(--text-muted); border: 1px dashed var(--grey-border); border-radius: var(--radius-md);">
        <i data-lucide="calendar-x" style="width: 40px; height: 40px; margin-bottom: 12px;"></i>
        <div>No ${filter !== 'all' ? filter : ''} bookings found.</div>
      </div>
    ` : list.map(b => `
      <div class="dash-booking-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
          <div>
            <span class="dash-status-pill ${
              b.status === 'Confirmed' ? 'dash-status-confirmed' : 
              b.status === 'Completed' ? 'dash-status-completed' : 'dash-status-cancelled'
            }">${b.status}</span>
            <span style="font-size: 0.75rem; color: var(--text-muted); margin-left: 8px;">ID: ${b.id}</span>
          </div>
          <div style="font-weight: 800; font-size: 1.1rem;">₹${b.amount}</div>
        </div>

        <h4 style="font-size: 1.05rem; margin-bottom: 4px;">${b.serviceName}</h4>
        <div style="font-size: 0.825rem; color: var(--text-secondary); margin-bottom: 12px;">
          📅 ${b.date} • ⏱ ${b.time}
        </div>
        <div style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 14px;">
          📍 ${b.address}
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--grey-border); padding-top: 12px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <img src="${b.pro.photo}" style="width: 32px; height: 32px; border-radius: 50%; object-fit: cover;" />
            <span style="font-size: 0.825rem; font-weight: 600;">${b.pro.name} (★ ${b.pro.rating})</span>
          </div>
          <div style="display: flex; gap: 8px;">
            ${b.status === 'Confirmed' ? `
              <button class="btn btn-outline btn-sm" onclick="cancelBooking('${b.id}')">Cancel</button>
            ` : ''}
            <button class="btn btn-black btn-sm" onclick="shareBookingOnWhatsApp('${b.id}')">Contact Pro</button>
          </div>
        </div>
      </div>
    `).join('')}
  `;

  initLucide();
}

function cancelBooking(bookingId) {
  if (!confirm('Are you sure you want to cancel this booking?')) return;
  const b = appState.bookings.find(item => item.id === bookingId);
  if (b) {
    b.status = 'Cancelled';
    localStorage.setItem('pp_bookings', JSON.stringify(appState.bookings));
    renderCartBadge();
    renderDashboardBookings('all');
  }
}

function renderDashboardAddresses() {
  const content = document.getElementById('dashboardContentArea');
  if (!content) return;

  content.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
      <h3 style="font-size: 1.25rem;">Saved Addresses</h3>
      <button class="btn btn-black btn-sm" onclick="addNewAddressPrompt()">+ Add Address</button>
    </div>

    ${appState.savedAddresses.map((addr, idx) => `
      <div style="border: 1px solid var(--grey-border); border-radius: var(--radius-md); padding: 18px; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <div style="font-weight: 700; font-size: 0.95rem; margin-bottom: 4px;">${addr.title}</div>
          <div style="font-size: 0.825rem; color: var(--text-secondary);">${addr.line}</div>
        </div>
        <button class="btn btn-outline btn-sm" onclick="deleteAddress(${idx})">Delete</button>
      </div>
    `).join('')}
  `;
}

function addNewAddressPrompt() {
  const title = prompt('Address Label (e.g. Home, Office, Villa):', 'Home');
  if (!title) return;
  const line = prompt('Full address in Pune:');
  if (!line) return;

  appState.savedAddresses.push({
    id: `addr-${Date.now()}`,
    title,
    line
  });
  localStorage.setItem('pp_addresses', JSON.stringify(appState.savedAddresses));
  renderDashboardAddresses();
}

function deleteAddress(idx) {
  appState.savedAddresses.splice(idx, 1);
  localStorage.setItem('pp_addresses', JSON.stringify(appState.savedAddresses));
  renderDashboardAddresses();
}

function renderDashboardProfile() {
  const content = document.getElementById('dashboardContentArea');
  if (!content) return;
  const u = appState.user || { name: '', phone: '', email: '', locality: '' };

  content.innerHTML = `
    <h3 style="font-size: 1.25rem; margin-bottom: 20px;">Profile Settings</h3>
    <form onsubmit="saveUserProfile(event)">
      <div class="input-field-group">
        <label>Full Name</label>
        <input type="text" id="profName" class="input-ctrl" value="${u.name}" required />
      </div>
      <div class="input-field-group">
        <label>Mobile Number</label>
        <input type="tel" id="profPhone" class="input-ctrl" value="${u.phone}" required />
      </div>
      <div class="input-field-group">
        <label>Email Address</label>
        <input type="email" id="profEmail" class="input-ctrl" value="${u.email}" />
      </div>
      <div class="input-field-group">
        <label>Preferred Pune Locality</label>
        <input type="text" id="profLoc" class="input-ctrl" value="${u.locality}" />
      </div>
      <button type="submit" class="btn btn-black" style="margin-top: 12px;">Save Profile</button>
    </form>
  `;
}

function saveUserProfile(e) {
  e.preventDefault();
  const name = document.getElementById('profName').value.trim();
  const phone = document.getElementById('profPhone').value.trim();
  const email = document.getElementById('profEmail').value.trim();
  const locality = document.getElementById('profLoc').value.trim();

  appState.user = { name, phone, email, locality };
  localStorage.setItem('pp_user', JSON.stringify(appState.user));
  renderUserDisplay();
  alert('Profile saved successfully!');
}

function openLocationModal() {
  const modal = document.getElementById('locationModal');
  const grid = document.getElementById('locationModalGrid');
  if (!modal || !grid) return;

  grid.innerHTML = PUNE_LOCALITIES.map(loc => `
    <div class="location-area-chip ${loc === appState.currentLocation.replace(', Pune', '') ? 'active' : ''}" onclick="selectLocation('${loc}')">
      ${loc}
    </div>
  `).join('');

  modal.classList.add('active');
}

function closeLocationModal() {
  const modal = document.getElementById('locationModal');
  if (modal) modal.classList.remove('active');
}

function selectLocation(loc) {
  appState.currentLocation = `${loc}, Pune`;
  localStorage.setItem('pp_location', appState.currentLocation);
  renderLocationDisplay();
  closeLocationModal();
}

function openAuthModal() {
  const modal = document.getElementById('authModal');
  if (modal) modal.classList.add('active');
}

function closeAuthModal() {
  const modal = document.getElementById('authModal');
  if (modal) modal.classList.remove('active');
}

function handleAuthSubmit(e) {
  e.preventDefault();
  const phone = document.getElementById('authPhone').value.trim();
  const name = document.getElementById('authName').value.trim() || 'Valued Customer';

  appState.user = {
    name,
    phone,
    email: '',
    locality: appState.currentLocation
  };
  localStorage.setItem('pp_user', JSON.stringify(appState.user));
  renderUserDisplay();
  closeAuthModal();
}

function initModals() {
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove('active');
      }
    });
  });
}

function initFaqAccordion() {
  document.querySelectorAll('.faq-minimal-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.faq-minimal-item');
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-minimal-item').forEach(i => i.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });
}
