
(() => {
  'use strict';

  const ICONS = {
    grid: '<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="8" height="8" rx="2" stroke="currentColor" stroke-width="2"/><rect x="13" y="3" width="8" height="8" rx="2" stroke="currentColor" stroke-width="2"/><rect x="3" y="13" width="8" height="8" rx="2" stroke="currentColor" stroke-width="2"/><rect x="13" y="13" width="8" height="8" rx="2" stroke="currentColor" stroke-width="2"/></svg>',
    wallet: '<svg viewBox="0 0 24 24" fill="none"><path d="M3 7a2 2 0 012-2h13a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" stroke="currentColor" stroke-width="2"/><path d="M16 12h3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    list: '<svg viewBox="0 0 24 24" fill="none"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    card: '<svg viewBox="0 0 24 24" fill="none"><rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" stroke-width="2"/><path d="M2 10h20" stroke="currentColor" stroke-width="2"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" fill="none"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    send: '<svg viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 20V10M12 20V4M20 20v-7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    bell: '<svg viewBox="0 0 24 24" fill="none"><path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    gear: '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/><path d="M19.4 15a1.7 1.7 0 00.34 1.87l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.7 1.7 0 00-1.87-.34 1.7 1.7 0 00-1 1.55V21a2 2 0 01-4 0v-.09A1.7 1.7 0 009 19.4a1.7 1.7 0 00-1.87.34l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.7 1.7 0 004.6 15a1.7 1.7 0 00-1.55-1H3a2 2 0 010-4h.09A1.7 1.7 0 004.6 9a1.7 1.7 0 00-.34-1.87l-.06-.06a2 2 0 112.83-2.83l.06.06A1.7 1.7 0 009 4.6a1.7 1.7 0 001-1.55V3a2 2 0 014 0v.09a1.7 1.7 0 001 1.55 1.7 1.7 0 001.87-.34l.06-.06a2 2 0 112.83 2.83l-.06.06A1.7 1.7 0 0019.4 9c.14.32.44.55 1.55.55H21a2 2 0 010 4h-.09a1.7 1.7 0 00-1.51 1z" stroke="currentColor" stroke-width="1.4"/></svg>',
    help: '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M9.5 9a2.5 2.5 0 015 .5c0 1.7-2.3 1.8-2.5 3.5M12 17h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    logout: '<svg viewBox="0 0 24 24" fill="none"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 3v13M6 11l6 6 6-6M4 20h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    upload: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 21V8M6 13l6-6 6 6M4 3h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none"><rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" stroke-width="2"/><path d="M11 18h2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    'user-plus': '<svg viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="4" stroke="currentColor" stroke-width="2"/><path d="M2 21v-1a6 6 0 016-6h2a6 6 0 016 6v1M19 8v6M22 11h-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    print: '<svg viewBox="0 0 24 24" fill="none"><path d="M6 9V3h12v6M6 18H4a1 1 0 01-1-1v-5a1 1 0 011-1h16a1 1 0 011 1v5a1 1 0 01-1 1h-2M6 14h12v7H6z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  };
  function paintIcons(scope = document){
    scope.querySelectorAll('i[data-ic]').forEach(el => {
      const key = el.getAttribute('data-ic');
      if (ICONS[key]) el.innerHTML = ICONS[key];
    });
  }

  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const CURRENCY_SYMBOLS = { INR: '₹', USD: '$', EUR: '€', GBP: '£' };
  function currencySymbol(){ return CURRENCY_SYMBOLS[state.settings.currency] || '₹'; }
  function fmtMoney(n, opts = {}){
    const sign = n < 0 ? '-' : '';
    const abs = Math.abs(n);
    return `${sign}${currencySymbol()}${abs.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2, ...opts })}`;
  }
  function fmtDate(d){
    const date = new Date(d);
    return date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  }
  function uid(prefix = 'TXN'){
    return `${prefix}${Date.now().toString(36).toUpperCase().slice(-5)}${Math.floor(Math.random()*900+100)}`;
  }
  function save(){ localStorage.setItem('meridian_state', JSON.stringify(state)); }
  function load(){
    try {
      const raw = localStorage.getItem('meridian_state');
      return raw ? JSON.parse(raw) : null;
    } catch(e){ return null; }
  }

  const CATEGORIES = ['Groceries','Salary','Utilities','Dining','Shopping','Transport','Entertainment','Rent','Healthcare','Transfer','Cashback','Investment'];
  const MERCHANTS = {
    Groceries: ['BigBasket','DMart','Local Grocers'], Salary: ['Meridian Payroll'], Utilities: ['State Electricity Board','City Water Works','Airtel Broadband'],
    Dining: ['Zomato','Swiggy','The Coffee House'], Shopping: ['Amazon','Myntra','Flipkart'], Transport: ['Uber','Ola','Metro Card Recharge'],
    Entertainment: ['Netflix','Spotify','PVR Cinemas'], Rent: ['Landlord — Flat 4B'], Healthcare: ['Apollo Pharmacy','City Clinic'],
    Transfer: ['To Rohit Sharma','From Priya Nair','To Beneficiary'], Cashback: ['Meridian Rewards'], Investment: ['Meridian Mutual Fund SIP']
  };

  function buildSeedTransactions(){
    const txs = [];
    let balance = 184250.50;
    const now = new Date();
    for (let i = 0; i < 27; i++){
      const daysAgo = i * 2 + Math.floor(Math.random()*2);
      const date = new Date(now); date.setDate(date.getDate() - daysAgo);
      const category = CATEGORIES[Math.floor(Math.random()*CATEGORIES.length)];
      const merchant = MERCHANTS[category][Math.floor(Math.random()*MERCHANTS[category].length)];
      const isCredit = ['Salary','Cashback'].includes(category) || Math.random() < 0.18;
      const amount = isCredit
        ? (category === 'Salary' ? 92000 + Math.random()*3000 : Math.round((Math.random()*4000+200)*100)/100)
        : Math.round((Math.random()*6500+150)*100)/100;
      balance = isCredit ? balance + amount : balance - amount;
      const status = Math.random() < 0.08 ? 'pending' : (Math.random() < 0.03 ? 'failed' : 'success');
      txs.push({
        id: uid('TXN'),
        date: date.toISOString(),
        description: merchant,
        category,
        credit: isCredit ? amount : 0,
        debit: isCredit ? 0 : amount,
        balance: Math.round(balance*100)/100,
        status
      });
    }
    return txs.sort((a,b) => new Date(b.date) - new Date(a.date));
  }

  function defaultState(){
    const transactions = buildSeedTransactions();
    const currentBalance = transactions[0].balance;
    return {
      profile: {
        name: 'Ananya Rao', customerId: 'MB-2026-88213', email: 'ananya.rao@example.com',
        phone: '+91 98765 43210', address: 'No. 42, Lake View Road, Rasipuram, Tamil Nadu'
      },
      accounts: {
        savings: 128430.75,
        current: 55819.75,
        totalBalanceOverride: null
      },
      cards: [
        { id: 'debit1', type: 'debit', holder: 'ANANYA RAO', number: '4291 88** **** 3345', expiry: '09/29', frozen: false },
        { id: 'credit1', type: 'credit', holder: 'ANANYA RAO', number: '5312 71** **** 9082', expiry: '03/28', limit: 250000, available: 168400, frozen: false }
      ],
      transactions,
      notifications: [
        { id: 'n1', type: 'credit', title: 'Salary Credited', body: `${CURRENCY_SYMBOLS.INR}92,000 credited to your Savings account.`, time: '2h ago', unread: true },
        { id: 'n2', type: 'alert', title: 'Electricity Bill Due', body: 'Your electricity bill of ₹1,840 is due in 3 days.', time: '5h ago', unread: true },
        { id: 'n3', type: 'credit', title: 'Cashback Received', body: '₹150 cashback credited from Meridian Rewards.', time: '1d ago', unread: true },
        { id: 'n4', type: 'warn', title: 'Low Balance Warning', body: 'Your Current account balance is below ₹60,000.', time: '2d ago', unread: false },
        { id: 'n5', type: 'info', title: 'Credit Card Payment Reminder', body: 'Your credit card bill is due on the 5th of next month.', time: '3d ago', unread: false }
      ],
      beneficiaries: [
        { name: 'Rohit Sharma', account: '11223344556', ifsc: 'MERB0001234', nickname: 'Rohit' }
      ],
      settings: { darkMode: true, notifications: true, language: 'en', currency: 'INR' },
      monthlyIncome: [78000, 81500, 79800, 92000, 88400, 95200],
      monthlyExpense: [52400, 60100, 47800, 58900, 61200, 49700],
      months: ['Feb','Mar','Apr','May','Jun','Jul']
    };
  }

  const state = Object.assign(defaultState(), load() || {});

  ['profile','accounts','settings'].forEach(k => { state[k] = Object.assign(defaultState()[k], (load()||{})[k] || {}); });

  function applyTheme(){
    document.documentElement.setAttribute('data-theme', state.settings.darkMode ? 'dark' : 'light');
    $('#themeIconSun').style.display = state.settings.darkMode ? 'none' : 'block';
    $('#themeIconMoon').style.display = state.settings.darkMode ? 'block' : 'none';
    $('#settingsDarkToggle').checked = state.settings.darkMode;
  }
  $('#themeToggle').addEventListener('click', () => {
    state.settings.darkMode = !state.settings.darkMode;
    applyTheme(); save();
  });
  $('#settingsDarkToggle').addEventListener('change', e => {
    state.settings.darkMode = e.target.checked; applyTheme(); save();
  });

  const TITLES = {
    dashboard: 'Dashboard', accounts: 'My Accounts', transactions: 'Transactions', cards: 'Cards',
    payments: 'Payments', transfer: 'Transfer Money', analytics: 'Analytics', notifications: 'Notifications',
    settings: 'Settings', help: 'Help & Support'
  };
  function goToSection(name){
    if (!TITLES[name]) return;
    $$('.page-section').forEach(s => s.classList.remove('active'));
    const target = $(`#section-${name}`);
    if (target) target.classList.add('active');
    $$('.nav-link[data-section]').forEach(l => l.classList.toggle('active', l.dataset.section === name));
    $('#pageTitle').textContent = TITLES[name];
    closeNotifPanel();
    closeMobileSidebar();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (name === 'analytics') renderAnalyticsCharts();
  }
  $$('[data-section]').forEach(el => el.addEventListener('click', e => {
    e.preventDefault(); goToSection(el.dataset.section);
  }));
  $$('[data-section-link]').forEach(el => el.addEventListener('click', e => {
    e.preventDefault(); goToSection(el.dataset.sectionLink);
  }));
  window.addEventListener('hashchange', () => {
    const name = location.hash.replace('#','');
    if (TITLES[name]) goToSection(name);
  });
  if (location.hash && TITLES[location.hash.replace('#','')]) goToSection(location.hash.replace('#',''));

  $('#collapseBtn').addEventListener('click', () => $('#sidebar').classList.toggle('collapsed'));
  $('#mobileNavToggle').addEventListener('click', () => {
    $('#sidebar').classList.add('mobile-open'); $('#sidebarScrim').classList.add('show');
  });
  function closeMobileSidebar(){ $('#sidebar').classList.remove('mobile-open'); $('#sidebarScrim').classList.remove('show'); }
  $('#sidebarScrim').addEventListener('click', closeMobileSidebar);
  $('#logoutBtn').addEventListener('click', e => {
    e.preventDefault();
    showToast('Logged out', 'This is a demo — no session was actually active.', 'info');
  });

  function tickClock(){
    const now = new Date();
    $('#pageDateTime').textContent = now.toLocaleString('en-IN', {
      weekday: 'short', year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
  }
  tickClock(); setInterval(tickClock, 1000);

  function showToast(title, body, type = 'success'){
    const el = document.createElement('div');
    el.className = `toast ${type === 'success' ? '' : type}`;
    el.innerHTML = `<strong>${title}</strong><p>${body}</p>`;
    $('#toastContainer').appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; el.style.transform = 'translateX(30px)'; setTimeout(() => el.remove(), 300); }, 4200);
  }

  function totalBalance(){ return state.accounts.savings + state.accounts.current; }

  function animateCounter(el, target, prefix = '', decimals = 2){
    const duration = 900; const start = performance.now(); const from = 0;
    function step(now){
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = from + (target - from) * eased;
      el.textContent = prefix + val.toLocaleString('en-IN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function renderSummaryCards(){
    const income = state.monthlyIncome[state.monthlyIncome.length-1];
    const expense = state.monthlyExpense[state.monthlyExpense.length-1];
    const cards = [
      { title: 'Total Balance', amount: totalBalance(), trend: 4.8, up: true, icon: 'wallet', color: 'var(--mint)', glow: 'var(--mint-dim)' },
      { title: 'Savings Account', amount: state.accounts.savings, trend: 2.1, up: true, icon: 'grid', color: 'var(--blue)', glow: 'var(--blue-dim)' },
      { title: 'Current Account', amount: state.accounts.current, trend: 1.4, up: false, icon: 'card', color: 'var(--amber)', glow: 'var(--amber-dim)' },
      { title: 'Monthly Income', amount: income, trend: 7.9, up: true, icon: 'download', color: 'var(--mint)', glow: 'var(--mint-dim)' },
      { title: 'Monthly Expenses', amount: expense, trend: 3.2, up: false, icon: 'upload', color: 'var(--red)', glow: 'var(--red-dim)' },
      { title: 'Reward Points', amount: 4820, decimals: 0, trend: 12.5, up: true, icon: 'bolt', color: 'var(--amber)', glow: 'var(--amber-dim)', suffix: ' pts' },
    ];
    $('#summaryGrid').innerHTML = cards.map((c, i) => `
      <div class="summary-card" style="--card-color:${c.color}; --card-glow:${c.glow}">
        <div class="summary-card-top">
          <div class="summary-icon"><i data-ic="${c.icon}"></i></div>
          <span class="summary-title">${c.title}</span>
        </div>
        <div class="summary-amount" id="counter-${i}">0</div>
        <div class="summary-trend ${c.up ? 'up' : 'down'}">
          ${c.up ? '▲' : '▼'} ${c.trend}% <span class="trend-label">vs last month</span>
        </div>
      </div>
    `).join('');
    paintIcons($('#summaryGrid'));
    cards.forEach((c, i) => {
      const el = $(`#counter-${i}`);
      if (c.suffix){
        animateCounter(el, c.amount, '', c.decimals ?? 0);
        setTimeout(() => { el.textContent += c.suffix; }, 950);
      } else {
        animateCounter(el, c.amount, currencySymbol(), c.decimals ?? 2);
      }
    });
  }

  function cardHTML(c, large){
    if (c.type === 'debit'){
      return `
      <div class="bank-card-wrap">
        <div class="bank-card debit ${c.frozen ? 'frozen' : ''}" data-card="${c.id}">
          <div class="bank-card-top"><span>MERIDIAN BANK</span><span>DEBIT</span></div>
          <div class="bank-card-chip"></div>
          <div class="bank-card-number">${c.number}</div>
          <div class="bank-card-bottom">
            <div><span class="bank-card-meta-label">CARD HOLDER</span><span class="bank-card-holder">${c.holder}</span></div>
            <div><span class="bank-card-meta-label">EXPIRES</span><span>${c.expiry}</span></div>
          </div>
        </div>
        <div class="bank-card-actions">
          <button class="btn-ghost" data-freeze="${c.id}">${c.frozen ? 'Unfreeze Card' : 'Freeze Card'}</button>
        </div>
      </div>`;
    }
    return `
      <div class="bank-card-wrap">
        <div class="bank-card credit ${c.frozen ? 'frozen' : ''}" data-card="${c.id}">
          <div class="bank-card-top"><span>MERIDIAN BANK</span><span>CREDIT</span></div>
          <div class="bank-card-chip"></div>
          <div class="bank-card-number">${c.number}</div>
          <div class="bank-card-bottom">
            <div><span class="bank-card-meta-label">AVAILABLE LIMIT</span><span>${fmtMoney(c.available)} / ${fmtMoney(c.limit)}</span></div>
            <div><span class="bank-card-meta-label">EXPIRES</span><span>${c.expiry}</span></div>
          </div>
        </div>
        <div class="bank-card-actions">
          <button class="btn-ghost" data-freeze="${c.id}">${c.frozen ? 'Unfreeze Card' : 'Freeze Card'}</button>
        </div>
      </div>`;
  }
  function renderCards(){
    const html = state.cards.map(c => cardHTML(c)).join('');
    $('#bankCardsRow').innerHTML = html;
    $('#bankCardsRowFull').innerHTML = state.cards.map(c => cardHTML(c, true)).join('');
    paintIcons();
    $$('[data-freeze]').forEach(btn => btn.addEventListener('click', () => {
      const id = btn.dataset.freeze;
      const card = state.cards.find(c => c.id === id);
      card.frozen = !card.frozen;
      save(); renderCards();
      showToast(card.frozen ? 'Card frozen' : 'Card unfrozen', `Your ${card.type} card ending ${card.number.slice(-4)} is now ${card.frozen ? 'frozen' : 'active'}.`, card.frozen ? 'info' : 'success');
    }));
  }

  const overlay = $('#modalOverlay');
  function openModal(id){
    $$('.modal').forEach(m => m.classList.remove('show'));
    const modal = $('#' + id);
    if (!modal) return;
    modal.classList.add('show');
    overlay.classList.add('show');
  }
  function closeModals(){
    $$('.modal').forEach(m => m.classList.remove('show'));
    overlay.classList.remove('show');
  }
  overlay.addEventListener('click', closeModals);
  $$('[data-close]').forEach(btn => btn.addEventListener('click', closeModals));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModals(); });
  $$('[data-modal]').forEach(btn => btn.addEventListener('click', () => openModal(btn.dataset.modal)));

  $('#depositForm').addEventListener('submit', e => {
    e.preventDefault();
    const amount = parseFloat($('#depositAmount').value);
    const remarks = $('#depositRemarks').value.trim() || 'Deposit';
    if (!amount || amount <= 0) return;
    state.accounts.savings += amount;
    addTransaction({ description: remarks, category: 'Transfer', credit: amount, debit: 0 });
    save(); renderAll();
    closeModals(); e.target.reset();
    showToast('Deposit successful', `${fmtMoney(amount)} added to your Savings account.`);
  });

  $('#withdrawForm').addEventListener('submit', e => {
    e.preventDefault();
    const amount = parseFloat($('#withdrawAmount').value);
    const remarks = $('#withdrawRemarks').value.trim() || 'Withdrawal';
    if (!amount || amount <= 0) return;
    if (amount > state.accounts.savings){
      showToast('Withdrawal failed', 'Insufficient balance in your Savings account.', 'error');
      return;
    }
    state.accounts.savings -= amount;
    addTransaction({ description: remarks, category: 'Transfer', credit: 0, debit: amount });
    save(); renderAll();
    closeModals(); e.target.reset();
    showToast('Withdrawal successful', `${fmtMoney(amount)} withdrawn from your Savings account.`);
  });

  $('#rechargeForm').addEventListener('submit', e => {
    e.preventDefault();
    const num = $('#rechargeNumber').value.trim();
    const operator = $('#rechargeOperator').value;
    const amount = parseFloat($('#rechargeAmount').value);
    if (!/^\d{10}$/.test(num)){ showToast('Invalid number', 'Enter a valid 10-digit mobile number.', 'error'); return; }
    if (amount > state.accounts.savings){ showToast('Recharge failed', 'Insufficient balance.', 'error'); return; }
    state.accounts.savings -= amount;
    addTransaction({ description: `${operator} Recharge — ${num}`, category: 'Transport', credit: 0, debit: amount });
    save(); renderAll(); closeModals(); e.target.reset();
    showToast('Recharge successful', `${fmtMoney(amount)} recharge done for ${num}.`);
  });

  $('#beneficiaryForm').addEventListener('submit', e => {
    e.preventDefault();
    const name = $('#benName').value.trim();
    const account = $('#benAccount').value.trim();
    const ifsc = $('#benIfsc').value.trim();
    const nickname = $('#benNickname').value.trim() || name;
    state.beneficiaries.push({ name, account, ifsc, nickname });
    save(); closeModals(); e.target.reset();
    showToast('Beneficiary added', `${name} has been added to your beneficiary list.`);
  });

  $('#changePassBtn').addEventListener('click', () => openModal('passwordModal'));
  $('#passwordForm').addEventListener('submit', e => {
    e.preventDefault();
    closeModals(); e.target.reset();
    showToast('Password updated', 'This is a demo — no password was actually changed.');
  });

  function addTransaction({ description, category, credit, debit }){
    const balance = totalBalance();
    state.transactions.unshift({
      id: uid('TXN'), date: new Date().toISOString(), description, category, credit, debit,
      balance: Math.round(balance*100)/100, status: 'success'
    });
  }

  function statusPill(status){
    const label = status.charAt(0).toUpperCase() + status.slice(1);
    return `<span class="status-pill ${status}">${label}</span>`;
  }

  function renderRecentTransactions(){
    const rows = state.transactions.slice(0, 6).map(t => `
      <tr>
        <td>${fmtDate(t.date)}</td>
        <td>${t.description}</td>
        <td>${t.category}</td>
        <td class="num ${t.credit ? 'amt-credit' : 'amt-debit'}">${t.credit ? '+' : '-'}${fmtMoney(t.credit || t.debit)}</td>
        <td>${statusPill(t.status)}</td>
      </tr>`).join('');
    $('#recentTxTable tbody').innerHTML = rows;
  }

  function getFilteredTransactions(){
    const q = $('#txSearch').value.trim().toLowerCase();
    const dateVal = $('#txDateFilter').value;
    const type = $('#txTypeFilter').value;
    const sort = $('#txSort').value;
    let list = state.transactions.filter(t => {
      const matchQ = !q || t.description.toLowerCase().includes(q) || t.category.toLowerCase().includes(q) || t.id.toLowerCase().includes(q);
      const matchDate = !dateVal || t.date.slice(0,10) === dateVal;
      const matchType = type === 'all' || (type === 'credit' ? t.credit > 0 : t.debit > 0);
      return matchQ && matchDate && matchType;
    });
    list.sort((a, b) => {
      if (sort === 'date-desc') return new Date(b.date) - new Date(a.date);
      if (sort === 'date-asc') return new Date(a.date) - new Date(b.date);
      const amtA = a.credit || a.debit, amtB = b.credit || b.debit;
      if (sort === 'amount-desc') return amtB - amtA;
      if (sort === 'amount-asc') return amtA - amtB;
      return 0;
    });
    return list;
  }

  function renderFullTransactions(){
    const list = getFilteredTransactions();
    $('#txEmptyMsg').style.display = list.length ? 'none' : 'block';
    $('#fullTxTable tbody').innerHTML = list.map(t => `
      <tr>
        <td>${fmtDate(t.date)}</td>
        <td>${t.description}</td>
        <td class="num">${t.id}</td>
        <td>${t.category}</td>
        <td class="num amt-credit">${t.credit ? fmtMoney(t.credit) : '—'}</td>
        <td class="num amt-debit">${t.debit ? fmtMoney(t.debit) : '—'}</td>
        <td class="num">${fmtMoney(t.balance)}</td>
        <td>${statusPill(t.status)}</td>
      </tr>`).join('');
  }
  ['txSearch','txDateFilter','txTypeFilter','txSort'].forEach(id => {
    $('#' + id).addEventListener('input', renderFullTransactions);
    $('#' + id).addEventListener('change', renderFullTransactions);
  });

  $('#txExportBtn').addEventListener('click', () => exportCSV(getFilteredTransactions(), 'meridian_transactions.csv'));
  $('#txPrintBtn').addEventListener('click', () => window.print());
  $('#reportPrintBtn').addEventListener('click', () => window.print());
  $('#reportCsvBtn').addEventListener('click', () => exportCSV(state.transactions, 'meridian_statement.csv'));

  function exportCSV(rows, filename){
    const header = ['Date','Description','Transaction ID','Category','Credit','Debit','Balance','Status'];
    const csvRows = [header.join(',')];
    rows.forEach(t => {
      csvRows.push([
        fmtDate(t.date), `"${t.description.replace(/"/g,'""')}"`, t.id, t.category,
        t.credit || 0, t.debit || 0, t.balance, t.status
      ].join(','));
    });
    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename; a.click();
    URL.revokeObjectURL(url);
    showToast('Export ready', `${filename} has been downloaded.`);
  }

  function renderAccounts(){
    $('#accountsGrid').innerHTML = `
      <div class="account-tile"><h4>Savings Account</h4><div class="acc-num">•••• •••• 4471</div><div class="acc-bal">${fmtMoney(state.accounts.savings)}</div></div>
      <div class="account-tile"><h4>Current Account</h4><div class="acc-num">•••• •••• 8820</div><div class="acc-bal">${fmtMoney(state.accounts.current)}</div></div>
      <div class="account-tile"><h4>Total Balance</h4><div class="acc-num">Combined across accounts</div><div class="acc-bal">${fmtMoney(totalBalance())}</div></div>
    `;
  }
  function initials(name){ return name.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase(); }
  function renderProfile(){
    const p = state.profile;
    $('#profileFields').innerHTML = `
      <div><strong>Full Name</strong>${p.name}</div>
      <div><strong>Customer ID</strong>${p.customerId}</div>
      <div><strong>Email</strong>${p.email}</div>
      <div><strong>Phone</strong>${p.phone}</div>
      <div style="grid-column:1/-1"><strong>Address</strong>${p.address}</div>
    `;
    $('#userNameTop').textContent = p.name;
    $('#userAvatar').textContent = initials(p.name);
    $('#profileAvatarLg').textContent = initials(p.name);
    $('#editName').value = p.name; $('#editEmail').value = p.email;
    $('#editPhone').value = p.phone; $('#editAddress').value = p.address;
  }
  $('#editProfileForm').addEventListener('submit', e => {
    e.preventDefault();
    state.profile.name = $('#editName').value.trim();
    state.profile.email = $('#editEmail').value.trim();
    state.profile.phone = $('#editPhone').value.trim();
    state.profile.address = $('#editAddress').value.trim();
    save(); renderProfile();
    $('#profileFormMsg').textContent = 'Saved ✓';
    setTimeout(() => $('#profileFormMsg').textContent = '', 2200);
  });

  const BILLERS = [
    { name: 'Electricity Bill', icon: 'bolt' }, { name: 'Water Bill', icon: 'download' },
    { name: 'Internet Bill', icon: 'wallet' }, { name: 'Mobile Recharge', icon: 'phone' },
    { name: 'Gas Bill', icon: 'bolt' }, { name: 'Credit Card Bill', icon: 'card' }
  ];
  function renderPayments(){
    $('#paymentsGrid').innerHTML = BILLERS.map(b => `
      <button class="payment-card" data-bill="${b.name}">
        <div class="payment-icon"><i data-ic="${b.icon}"></i></div>
        <h4>${b.name}</h4><p>Pay instantly, get an e-receipt.</p>
      </button>`).join('');
    paintIcons($('#paymentsGrid'));
    $$('[data-bill]').forEach(btn => btn.addEventListener('click', () => {
      $('#billPayTitle').textContent = btn.dataset.bill;
      $('#billPayBiller').value = btn.dataset.bill;
      openModal('billPayModal');
    }));
  }
  $('#billPayForm').addEventListener('submit', e => {
    e.preventDefault();
    const biller = $('#billPayBiller').value;
    const amount = parseFloat($('#billPayAmount').value);
    if (amount > state.accounts.savings){ showToast('Payment failed', 'Insufficient balance.', 'error'); return; }
    state.accounts.savings -= amount;
    addTransaction({ description: biller, category: 'Utilities', credit: 0, debit: amount });
    save(); renderAll(); closeModals(); e.target.reset();
    showToast('Payment successful', `${fmtMoney(amount)} paid towards ${biller}.`);
  });

  $('#transferForm').addEventListener('submit', e => {
    e.preventDefault();
    const name = $('#tfName').value.trim();
    const account = $('#tfAccount').value.trim();
    const ifsc = $('#tfIfsc').value.trim();
    const amount = parseFloat($('#tfAmount').value);
    const remarks = $('#tfRemarks').value.trim();
    let valid = true;
    const setErr = (id, msg) => { $('#err-' + id).textContent = msg; if (msg) valid = false; };
    setErr('tfName', name.length < 2 ? 'Enter the recipient\'s full name.' : '');
    setErr('tfAccount', !/^\d{9,18}$/.test(account) ? 'Enter a valid 9–18 digit account number.' : '');
    setErr('tfIfsc', !/^[A-Za-z]{4}0[A-Z0-9]{6}$/.test(ifsc) ? 'Enter a valid IFSC code (e.g. MERB0001234).' : '');
    setErr('tfAmount', (!amount || amount <= 0) ? 'Enter a valid amount.' : (amount > state.accounts.savings ? 'Amount exceeds available balance.' : ''));
    if (!valid) return;
    state.accounts.savings -= amount;
    addTransaction({ description: `To ${name}` + (remarks ? ` — ${remarks}` : ''), category: 'Transfer', credit: 0, debit: amount });
    save(); renderAll();
    e.target.reset();
    showToast('Transfer successful', `${fmtMoney(amount)} sent to ${name}.`);
  });

  function unreadCount(){ return state.notifications.filter(n => n.unread).length; }
  function notifIconType(t){ return { credit: 'type-credit', alert: 'type-alert', warn: 'type-warn', info: 'type-info' }[t] || 'type-info'; }
  function renderNotifications(){
    const count = unreadCount();
    $('#bellBadge').textContent = count;
    $('#bellBadge').style.display = count ? 'flex' : 'none';
    $('#navNotifBadge').textContent = count;
    $('#navNotifBadge').style.display = count ? 'inline-block' : 'none';
    const itemHTML = n => `
      <div class="notif-item ${n.unread ? 'unread' : ''}" data-notif="${n.id}">
        <div class="notif-icon ${notifIconType(n.type)}"><i data-ic="bell"></i></div>
        <div class="notif-body"><strong>${n.title}</strong><p>${n.body}</p><span class="notif-time">${n.time}</span></div>
      </div>`;
    $('#notifList').innerHTML = state.notifications.map(itemHTML).join('');
    $('#notifListPage').innerHTML = state.notifications.map(itemHTML).join('');
    paintIcons($('#notifList')); paintIcons($('#notifListPage'));
    $$('[data-notif]').forEach(el => el.addEventListener('click', () => {
      const n = state.notifications.find(x => x.id === el.dataset.notif);
      n.unread = false; save(); renderNotifications();
    }));
  }
  function markAllRead(){ state.notifications.forEach(n => n.unread = false); save(); renderNotifications(); }
  $('#markAllRead').addEventListener('click', markAllRead);
  $('#markAllReadPage').addEventListener('click', markAllRead);

  function closeNotifPanel(){ $('#notifPanel').classList.remove('show'); }
  $('#notifBellBtn').addEventListener('click', e => {
    e.stopPropagation(); $('#notifPanel').classList.toggle('show');
  });
  document.addEventListener('click', e => {
    if (!$('#notifPanel').contains(e.target) && e.target !== $('#notifBellBtn')) closeNotifPanel();
  });

  function renderSettings(){
    $('#settingsNotifToggle').checked = state.settings.notifications;
    $('#settingsLanguage').value = state.settings.language;
    $('#settingsCurrency').value = state.settings.currency;
  }
  $('#settingsNotifToggle').addEventListener('change', e => { state.settings.notifications = e.target.checked; save(); });
  $('#settingsLanguage').addEventListener('change', e => {
    state.settings.language = e.target.value; save();
    showToast('Language preference saved', 'This demo keeps all copy in English, but your preference is stored.');
  });
  $('#settingsCurrency').addEventListener('change', e => {
    state.settings.currency = e.target.value; save(); renderAll();
    showToast('Currency updated', `Amounts now display in ${e.target.value}.`);
  });

  let chartInstances = {};
  function destroyChart(key){ if (chartInstances[key]){ chartInstances[key].destroy(); delete chartInstances[key]; } }

  function chartColors(){
    const dark = state.settings.darkMode;
    return {
      grid: dark ? 'rgba(255,255,255,0.06)' : 'rgba(10,20,40,0.08)',
      text: dark ? '#8B93A7' : '#5B6478',
      mint: '#3ECF8E', amber: '#F2A93B', blue: '#4CA3F5', red: '#F2545B'
    };
  }

  function renderDashboardCharts(){
    const c = chartColors();
    destroyChart('balanceGrowth');
    const ctx1 = $('#balanceGrowthChart');
    if (ctx1){
      chartInstances['balanceGrowth'] = new Chart(ctx1, {
        type: 'line',
        data: {
          labels: state.months,
          datasets: [{
            label: 'Balance', data: cumulativeBalanceSeries(),
            borderColor: c.mint, backgroundColor: 'rgba(62,207,142,0.12)', fill: true, tension: 0.35, pointRadius: 3
          }]
        },
        options: baseChartOptions(c)
      });
    }
    destroyChart('spendingDonut');
    const ctx2 = $('#spendingDonutChart');
    if (ctx2){
      const { labels, data } = spendingByCategory();
      chartInstances['spendingDonut'] = new Chart(ctx2, {
        type: 'doughnut',
        data: { labels, datasets: [{ data, backgroundColor: [c.mint, c.amber, c.blue, c.red, '#9b8cf2', '#f28cd0'], borderWidth: 0 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { color: c.text, boxWidth: 10, font: { size: 11 } } } } }
      });
    }
  }
  function renderAnalyticsCharts(){
    const c = chartColors();
    destroyChart('incomeBar');
    const i1 = $('#incomeBarChart');
    if (i1) chartInstances['incomeBar'] = new Chart(i1, {
      type: 'bar', data: { labels: state.months, datasets: [{ label: 'Income', data: state.monthlyIncome, backgroundColor: c.mint, borderRadius: 6 }] },
      options: baseChartOptions(c)
    });
    destroyChart('expenseBar');
    const i2 = $('#expenseBarChart');
    if (i2) chartInstances['expenseBar'] = new Chart(i2, {
      type: 'bar', data: { labels: state.months, datasets: [{ label: 'Expenses', data: state.monthlyExpense, backgroundColor: c.red, borderRadius: 6 }] },
      options: baseChartOptions(c)
    });
    destroyChart('spendingDonut2');
    const i3 = $('#spendingDonutChart2');
    if (i3){
      const { labels, data } = spendingByCategory();
      chartInstances['spendingDonut2'] = new Chart(i3, {
        type: 'doughnut', data: { labels, datasets: [{ data, backgroundColor: [c.mint, c.amber, c.blue, c.red, '#9b8cf2', '#f28cd0'], borderWidth: 0 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { color: c.text, boxWidth: 10, font: { size: 11 } } } } }
      });
    }
    destroyChart('balanceGrowth2');
    const i4 = $('#balanceGrowthChart2');
    if (i4) chartInstances['balanceGrowth2'] = new Chart(i4, {
      type: 'line', data: { labels: state.months, datasets: [{ label: 'Balance', data: cumulativeBalanceSeries(), borderColor: c.blue, backgroundColor: 'rgba(76,163,245,0.12)', fill: true, tension: 0.35, pointRadius: 3 }] },
      options: baseChartOptions(c)
    });
    renderReports();
  }
  function baseChartOptions(c){
    return {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { color: c.grid }, ticks: { color: c.text, font: { size: 11 } } },
        y: { grid: { color: c.grid }, ticks: { color: c.text, font: { size: 11 } } }
      }
    };
  }
  function cumulativeBalanceSeries(){
    const startBalance = totalBalance() - state.monthlyIncome.reduce((a,b)=>a+b,0) + state.monthlyExpense.reduce((a,b)=>a+b,0);
    let running = startBalance;
    return state.monthlyIncome.map((inc, i) => { running += inc - state.monthlyExpense[i]; return Math.round(running); });
  }
  function spendingByCategory(){
    const totals = {};
    state.transactions.forEach(t => {
      if (t.debit > 0){ totals[t.category] = (totals[t.category] || 0) + t.debit; }
    });
    const sorted = Object.entries(totals).sort((a,b) => b[1]-a[1]).slice(0,6);
    return { labels: sorted.map(s => s[0]), data: sorted.map(s => Math.round(s[1])) };
  }

  function renderReports(){
    const income = state.monthlyIncome.reduce((a,b)=>a+b,0);
    const expense = state.monthlyExpense.reduce((a,b)=>a+b,0);
    $('#reportsGrid').innerHTML = `
      <div class="report-tile"><h4>Monthly Statement</h4><div class="report-value">${state.transactions.length} entries</div></div>
      <div class="report-tile"><h4>Income Summary (6mo)</h4><div class="report-value">${fmtMoney(income)}</div></div>
      <div class="report-tile"><h4>Expense Summary (6mo)</h4><div class="report-value">${fmtMoney(expense)}</div></div>
      <div class="report-tile"><h4>Net Savings (6mo)</h4><div class="report-value">${fmtMoney(income - expense)}</div></div>
    `;
  }

  const searchInput = $('#globalSearch');
  const suggestBox = $('#searchSuggestions');
  const SEARCHABLE_SECTIONS = Object.entries(TITLES).map(([key, label]) => ({ key, label }));
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    if (!q){ suggestBox.classList.remove('show'); return; }
    const sectionMatches = SEARCHABLE_SECTIONS.filter(s => s.label.toLowerCase().includes(q)).map(s => ({ label: s.label, type: 'Section', action: () => goToSection(s.key) }));
    const txMatches = state.transactions.filter(t => t.description.toLowerCase().includes(q) || t.category.toLowerCase().includes(q)).slice(0,5)
      .map(t => ({ label: `${t.description} — ${fmtMoney(t.credit || t.debit)}`, type: 'Transaction', action: () => { goToSection('transactions'); $('#txSearch').value = t.description; renderFullTransactions(); } }));
    const results = [...sectionMatches, ...txMatches].slice(0,8);
    suggestBox.innerHTML = results.length
      ? results.map((r,i) => `<div class="sugg-item" data-idx="${i}"><span>${r.label}</span><span style="color:var(--text-faint)">${r.type}</span></div>`).join('')
      : `<div class="sugg-empty">No matches for "${searchInput.value}"</div>`;
    suggestBox.classList.add('show');
    $$('.sugg-item', suggestBox).forEach((el, i) => el.addEventListener('click', () => { results[i].action(); suggestBox.classList.remove('show'); searchInput.value = ''; }));
  });
  document.addEventListener('click', e => { if (!$('.topbar-search').contains(e.target)) suggestBox.classList.remove('show'); });

  const backToTop = $('#backToTop');
  $('.content').addEventListener('scroll', () => {});
  window.addEventListener('scroll', () => backToTop.classList.toggle('show', window.scrollY > 400));
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  function renderAll(){
    renderSummaryCards();
    renderCards();
    renderRecentTransactions();
    renderFullTransactions();
    renderAccounts();
    renderProfile();
    renderPayments();
    renderNotifications();
    renderSettings();
    renderDashboardCharts();
    paintIcons();
  }

  applyTheme();
  renderAll();
  setTimeout(() => $('#loadingOverlay').classList.add('hide'), 700);

})();
