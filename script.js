/* AccessBridge prototype interactions. Only checklist completion is persisted in localStorage. */
(() => {
  'use strict';

  const icons = {
    home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
    building: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 21V9h6v12M7 7h.01M17 7h.01M7 11h.01M17 11h.01M7 15h.01M17 15h.01"/>',
    badge: '<circle cx="12" cy="8" r="6"/><path d="M8.2 13 7 22l5-3 5 3-1.2-9M9.5 8l1.7 1.7L14.5 6"/>',
    receipt: '<path d="M4 2v20l4-2 4 2 4-2 4 2V2l-4 2-4-2-4 2zM8 9h8M8 13h6"/>',
    checklist: '<path d="M9 6h11M9 12h11M9 18h11M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    help: '<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3m.1 4h.01"/>',
    sparkle: '<path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3zM19 14l1 2.5 2 1-2 1L19 21l-1-2.5-2-1 2-1z"/>',
    arrow: '<path d="M5 12h14m-7-7 7 7-7 7"/>',
    'arrow-right': '<path d="M5 12h14m-7-7 7 7-7 7"/>',
    'arrow-up-right': '<path d="M7 17 17 7M7 7h10v10"/>',
    'arrow-down-right': '<path d="M7 7 17 17m0-10v10H7"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z"/><path d="m9 12 2 2 4-4"/>',
    map: '<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3zM9 3v15m6-12v15"/>',
    chart: '<path d="M3 3v18h18M8 15l4-4 4 4 5-7"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
    user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    landmark: '<path d="m3 10 9-7 9 7M4 10h16M5 10v9m4-9v9m6-9v9m4-9v9M3 21h18M2 19h20"/>',
    'folder-check': '<path d="M3 7V5a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v3M3 7h18l-2 11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7zM8 14l2 2 5-5"/>',
    'map-pin': '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.5"/>',
    layers: '<path d="m12 2 9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 17l9 5 9-5"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>',
    compass: '<circle cx="12" cy="12" r="10"/><path d="m16.2 7.8-2.8 6.4-6.4 2.8 2.8-6.4 6.4-2.8z"/>',
    lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4m0-4h.01"/>',
    fingerprint: '<path d="M12 11a2 2 0 0 0-2 2c0 2.5-.5 4.5-1.5 6M14 13c0 4-.5 6.5-1.5 8M8 15c-.2 1.2-.5 2.2-1 3.2M16 15c0 2 .2 3.5.8 5M6 13a6 6 0 1 1 12 0v1M4 13a8 8 0 1 1 16 0"/>',
    'shopping-bag': '<path d="M5 8h14l1 13H4L5 8zM9 8a3 3 0 0 1 6 0"/>',
    wallet: '<rect x="3" y="5" width="18" height="15" rx="2"/><path d="M3 9h18M16 14h2"/><path d="M3 5l13-2"/>',
    'book-open': '<path d="M12 7v14m0-14C10 5 7 4 3 5v14c4-1 7 0 9 2m0-14c2-2 5-3 9-2v14c-4-1-7 0-9 2"/>',
    lightbulb: '<path d="M9 18h6m-5 4h4M8.2 14.5A7 7 0 1 1 16 14c-.9.8-1 1.4-1 2h-6c0-.7-.1-1.1-.8-1.5z"/>',
    rotate: '<path d="M3 12a9 9 0 0 1 15.4-6.4L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.4 6.4L3 16m0 5v-5h5"/>',
    confetti: '<path d="m4 20 7-7m2-2 3-3m-5 12 2-6 4 4-6 2zM5 4l.8 2.2L8 7l-2.2.8L5 10l-.8-2.2L2 7l2.2-.8L5 4zm14 9 .8 2.2L22 16l-2.2.8L19 19l-.8-2.2L16 16l2.2-.8L19 13zm-2-10 .6 1.4L19 5l-1.4.6L17 7l-.6-1.4L15 5l1.4-.6L17 3z"/>',
    'shield-check': '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z"/><path d="m9 12 2 2 4-4"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'
  };

  document.querySelectorAll('[data-icon]').forEach((node) => {
    const name = node.getAttribute('data-icon');
    if (!icons[name]) return;
    node.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true">${icons[name]}</svg>`;
  });

  const checklistSteps = [
    ['Choose a business name', 'Make a shortlist and check the current official naming process.'],
    ['Select a business structure', 'Compare common options and decide what suits your plans.'],
    ['Identify registration requirements', 'Read the BRS guidance for your chosen registration.'],
    ['Prepare the necessary documents', 'Follow the official instructions; keep private documents secure.'],
    ['Complete the business registration process', 'Use the current official registration service.'],
    ['Obtain relevant registration documents', 'Keep official confirmations and records somewhere safe.'],
    ['Identify applicable business permits', 'Ask your county and any relevant sector authority.'],
    ['Understand tax registration requirements', 'Check the latest guidance directly with KRA.'],
    ['Review ongoing compliance obligations', 'Confirm current obligations with each responsible authority.']
  ];
  const STORAGE_KEY = 'accessbridge-checklist-v1';
  const listNode = document.getElementById('checklist-list');
  const safeGetProgress = () => {
    try {
      const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      return Array.isArray(value) ? value.filter((n) => Number.isInteger(n) && n >= 0 && n < checklistSteps.length) : [];
    } catch (_) { return []; }
  };
  let checked = new Set(safeGetProgress());

  function renderChecklist() {
    listNode.innerHTML = checklistSteps.map(([title, description], index) => `
      <label class="checklist-item${checked.has(index) ? ' is-checked' : ''}">
        <input type="checkbox" data-step="${index}" ${checked.has(index) ? 'checked' : ''} aria-label="Mark ${title} as explored">
        <span class="check-item-copy"><strong>${title}</strong><small>${description}</small></span>
      </label>`).join('');
    listNode.querySelectorAll('input[type="checkbox"]').forEach((input) => {
      input.addEventListener('change', (event) => {
        const index = Number(event.currentTarget.dataset.step);
        if (event.currentTarget.checked) checked.add(index); else checked.delete(index);
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify([...checked].sort((a, b) => a - b))); }
        catch (_) { showToast('Progress could not be saved in this browser.'); }
        updateProgress();
      });
    });
  }

  function updateProgress() {
    const done = checked.size;
    const percent = Math.round((done / checklistSteps.length) * 100);
    document.getElementById('dashboard-percent').textContent = `${percent}%`;
    document.getElementById('completed-count').textContent = done;
    document.getElementById('remaining-count').textContent = checklistSteps.length - done;
    document.getElementById('progress-ring').style.setProperty('--progress', `${percent}%`);
    document.getElementById('nav-progress').textContent = `${percent}%`;
    document.getElementById('checklist-percent').textContent = `${percent}%`;
    document.getElementById('checklist-done-label').textContent = `${done} of ${checklistSteps.length} explored`;
    document.getElementById('checklist-progress-fill').style.width = `${percent}%`;
    document.getElementById('checklist-progressbar').setAttribute('aria-valuenow', percent);
    document.getElementById('hero-progress-label').textContent = `${percent}%`;
    document.getElementById('hero-progress-fill').style.width = `${percent}%`;
    document.getElementById('hero-remaining').textContent = `${checklistSteps.length - done} ${checklistSteps.length - done === 1 ? 'step' : 'steps'}`;
    document.getElementById('completion-message').hidden = done !== checklistSteps.length;
    updateDashboardTasks();
  }

  function updateDashboardTasks() {
    const next = checklistSteps.map((step, index) => ({ step, index })).filter(({ index }) => !checked.has(index)).slice(0, 2);
    const node = document.getElementById('dashboard-tasks');
    if (!next.length) {
      node.innerHTML = '<div class="task-preview"><span class="task-bullet"></span><span><strong>Every starter step explored</strong><small>Keep checking current official sources</small></span></div>';
      return;
    }
    node.innerHTML = next.map(({ step, index }) => `<div class="task-preview"><span class="task-bullet"></span><span><strong>${step[0]}</strong><small>${index === 0 ? 'Your next checklist step' : 'Coming up in your checklist'}</small></span></div>`).join('');
  }

  document.getElementById('reset-checklist').addEventListener('click', () => {
    if (!checked.size) { showToast('Your checklist is already clear.'); return; }
    checked = new Set();
    try { localStorage.removeItem(STORAGE_KEY); } catch (_) { /* Reset still works for this page view. */ }
    renderChecklist();
    updateProgress();
    showToast('Checklist progress reset.');
  });
  renderChecklist();
  updateProgress();

  const guidanceBySector = {
    retail: ['Check which county authority handles business permits at your operating location.', 'If selling regulated goods, ask the relevant sector regulator whether an additional approval applies.', 'Confirm current tax registration and reporting steps with KRA.'],
    food: ['Ask your county which public-health, premises or food-handling guidance applies to your activity.', 'Confirm whether a specialist food or hospitality regulator has a role in your specific case.', 'Check county permit procedures and renewal information directly with the county.'],
    professional: ['Describe your exact services when asking the county whether any business permit applies.', 'Some professions have their own registration or conduct rules. Confirm with the relevant professional body.', 'Check KRA guidance for your legal structure and activity.'],
    technology: ['Confirm with your county whether your business location or operating model needs a county permit.', 'If your service handles regulated activities or customer data, ask the relevant authority about applicable rules.', 'Check KRA guidance for your specific income and business setup.'],
    manufacturing: ['Ask the county about premises and business-permit guidance for your location.', 'Ask the relevant national regulator whether your product or production activity needs additional approvals.', 'Check current KRA requirements and keep records of business transactions.'],
    transport: ['Ask the relevant transport authority which licences apply to the exact service and vehicle or operating model.', 'Check with your county about permits for your place of operation.', 'Confirm KRA obligations for your business arrangement.'],
    other: ['Describe the exact activity and location to the county authority to identify relevant permits.', 'Search the official Kenya Trade Portal and ask any sector regulator whether extra approvals apply.', 'Confirm tax obligations and current steps directly with KRA.']
  };

  document.getElementById('explorer-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const type = document.getElementById('business-type').value;
    const county = document.getElementById('county').value;
    const sector = document.getElementById('sector').value;
    const size = document.getElementById('team-size').value;
    const results = document.getElementById('explorer-results');
    const explorerError = document.getElementById('explorer-error');
    if (!type || !county || !sector || !size) {
      explorerError.hidden = false;
      explorerError.textContent = 'Choose an option in each field to see your guidance. Fields that need a selection are marked.';
      results.innerHTML = '<div class="results-empty"><span class="results-empty-icon" data-icon="info" aria-hidden="true"></span><h3>A couple more details.</h3><p>Please select an option in each field to see tailored prompts for your next official conversation.</p><span class="result-source-hint"><span data-icon="shield" aria-hidden="true"></span> Your selections are not stored.</span></div>';
      hydrateIcons(results);
      const explorerSelects = [...document.querySelectorAll('.explorer-form select')];
      const emptyFields = explorerSelects.filter((select) => !select.value);
      explorerSelects.forEach((select) => {
        if (select.value) select.removeAttribute('aria-invalid');
        else select.setAttribute('aria-invalid', 'true');
      });
      emptyFields[0]?.focus();
      return;
    }
    explorerError.hidden = true;
    explorerError.textContent = '';
    document.querySelectorAll('.explorer-form select').forEach((select) => select.removeAttribute('aria-invalid'));
    const structureText = type === 'not-sure' ? 'Compare business structures through the BRS Companies Registry before you decide.' : `Use the official BRS guidance for your selected setup (${document.getElementById('business-type').selectedOptions[0].text}).`;
    const countyText = county === 'Other / not decided' ? 'Once you know where you will operate, check the county government website for current permit information.' : `Ask ${county} County directly which permit steps, if any, fit your business activity and location.`;
    const teamText = size === 'solo' ? 'If you start employing people later, check the current employer obligations with KRA and the relevant agencies.' : 'Because your team includes other people, check applicable employer registrations and responsibilities with the relevant authorities.';
    const guidance = [structureText, countyText, ...guidanceBySector[sector], teamText];
    const context = county === 'Other / not decided' ? 'a location you are still deciding on' : `${county} County`;
    results.innerHTML = `<div class="guidance-result"><span class="card-kicker">YOUR EXPLORER NOTES</span><h3>Questions worth checking next.</h3><p>For a ${document.getElementById('sector').selectedOptions[0].text.toLowerCase()} business in ${context}.</p><ul class="guidance-list">${guidance.map((item) => `<li><span data-icon="arrow-right" aria-hidden="true"></span><span>${item}</span></li>`).join('')}</ul><div class="guidance-links"><a href="https://brs.go.ke/" target="_blank" rel="noopener noreferrer">BRS resources ↗</a><a href="https://www.kra.go.ke/" target="_blank" rel="noopener noreferrer">KRA resources ↗</a><a href="https://eprocedures.investkenya.go.ke/objective/12?l=en&amp;includeSearch=false&amp;embed=false" target="_blank" rel="noopener noreferrer">Kenya procedures ↗</a></div><div class="guidance-disclaimer">These are general prompts, not a confirmed list of requirements. Verify with each responsible authority before acting.</div></div>`;
    hydrateIcons(results);
  });

  const supportForm = document.getElementById('support-form');
  const messageField = document.getElementById('support-message');
  const feedback = document.getElementById('support-feedback');
  messageField.addEventListener('input', () => {
    document.getElementById('message-count').textContent = `${messageField.value.length} / 800 characters. Please don't include sensitive information.`;
    messageField.removeAttribute('aria-invalid');
  });
  supportForm.addEventListener('submit', (event) => {
    event.preventDefault();
    feedback.className = 'form-feedback';
    feedback.textContent = '';
    const topic = document.getElementById('support-topic');
    const email = document.getElementById('support-email');
    const invalid = !topic.value || messageField.value.trim().length < 10 || messageField.value.trim().length > 800 || (email.value.trim() && !email.validity.valid);
    if (invalid) {
      const invalidField = !topic.value ? topic : messageField.value.trim().length < 10 || messageField.value.trim().length > 800 ? messageField : email;
      invalidField.setAttribute('aria-invalid', 'true');
      feedback.id = 'support-feedback';
      invalidField.setAttribute('aria-describedby', `${invalidField.id === 'support-message' ? 'message-count ' : ''}support-feedback`);
      feedback.classList.add('is-visible', 'is-error');
      feedback.textContent = !topic.value ? 'Please choose a topic.' : messageField.value.trim().length < 10 ? 'Please write at least 10 characters so your question is clear.' : messageField.value.trim().length > 800 ? 'Please keep your question to 800 characters or fewer.' : 'Please enter a valid email address or leave the optional field blank.';
      invalidField.focus();
      return;
    }
    [topic, messageField, email].forEach((field) => { field.removeAttribute('aria-invalid'); field.removeAttribute('aria-describedby'); });
    feedback.classList.add('is-visible');
    feedback.innerHTML = '<strong>Your question is drafted.</strong> This demo does not send or save it. For help with an official application, please contact the relevant agency directly using the official links on this page.';
    supportForm.reset();
    messageField.setAttribute('aria-describedby', 'message-count');
    document.getElementById('message-count').textContent = '10–800 characters. Please don\'t include sensitive information.';
  });

  const toast = document.getElementById('toast');
  let toastTimer;
  function showToast(text) {
    toast.textContent = text;
    toast.classList.add('show');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('show'), 2600);
  }
  function hydrateIcons(root = document) {
    root.querySelectorAll('[data-icon]').forEach((node) => {
      const name = node.getAttribute('data-icon');
      if (icons[name] && !node.querySelector('svg')) node.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true">${icons[name]}</svg>`;
    });
  }

  const sidebar = document.getElementById('site-sidebar');
  const menuToggle = document.getElementById('menu-toggle');
  menuToggle.addEventListener('click', () => {
    const open = sidebar.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  sidebar.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    sidebar.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  }));
  document.addEventListener('keydown', (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      document.getElementById('search-input').focus();
    }
    if (event.key === 'Escape') {
      sidebar.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
    }
  });

  document.querySelectorAll('.nav-link').forEach((link) => link.addEventListener('click', () => {
    document.querySelectorAll('.nav-link').forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
  }));

  const searchInput = document.getElementById('search-input');
  document.getElementById('site-search').addEventListener('submit', (event) => event.preventDefault());
  searchInput.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;
    event.preventDefault();
    const query = searchInput.value.trim().toLocaleLowerCase();
    if (!query) { showToast('Type a topic to search the guide.'); return; }
    const sections = [...document.querySelectorAll('main > section')];
    const target = sections.find((section) => section.innerText.toLocaleLowerCase().includes(query));
    if (!target) { showToast('No match found. Try “tax”, “permit” or “business”.'); return; }
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    target.classList.add('search-highlight');
    window.setTimeout(() => target.classList.remove('search-highlight'), 1600);
    const navLink = document.querySelector(`.nav-link[href="#${target.id}"]`);
    if (navLink) {
      document.querySelectorAll('.nav-link').forEach((item) => item.classList.remove('active'));
      navLink.classList.add('active');
    }
    searchInput.blur();
  });

  document.getElementById('current-year').textContent = new Date().getFullYear();
  const sections = [...document.querySelectorAll('main > section[id]')];
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (!activeLink) return;
        document.querySelectorAll('.nav-link').forEach((item) => item.classList.remove('active'));
        activeLink.classList.add('active');
      });
    }, { rootMargin: '-25% 0px -65% 0px', threshold: 0 });
    sections.forEach((section) => observer.observe(section));
  }
})();
