/* ============================================
   Auth — Login & Register Validation
   ============================================ */

'use strict';

/* ---------- Toggle password visibility ---------- */
document.querySelectorAll('.toggle-pass').forEach(btn => {
  btn.addEventListener('click', () => {
    const input = document.getElementById(btn.dataset.target);
    if (!input) return;
    const isPass = input.type === 'password';
    input.type = isPass ? 'text' : 'password';
    btn.innerHTML = isPass
      ? '<i class="fa-solid fa-eye-slash"></i>'
      : '<i class="fa-solid fa-eye"></i>';
  });
});

/* ---------- Helpers ---------- */
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const showError = (id, msg) => {
  const el = document.getElementById(id);
  if (el) { el.textContent = msg; el.classList.add('show'); }
};
const clearError = (id) => {
  const el = document.getElementById(id);
  if (el) { el.textContent = ''; el.classList.remove('show'); }
};

/* ============================================
   LOGIN FORM
   ============================================ */
const loginForm = document.getElementById('loginForm');

loginForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  clearError('emailError');
  clearError('passError');

  const email = document.getElementById('loginEmail').value.trim();
  const pass = document.getElementById('loginPassword').value;
  let valid = true;

  if (!email) { showError('emailError', 'Email is required'); valid = false; }
  else if (!isEmail(email)) { showError('emailError', 'Enter a valid email'); valid = false; }

  if (!pass) { showError('passError', 'Password is required'); valid = false; }
  else if (pass.length < 8) { showError('passError', 'Password must be at least 8 characters'); valid = false; }

  if (!valid) return;

  // Simulate login → redirect to dashboard
  const btn = loginForm.querySelector('button[type="submit"]');
  const original = btn.innerHTML;
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Signing in...';
  btn.disabled = true;

  setTimeout(() => {
    localStorage.setItem('du_user', JSON.stringify({ email }));
    window.location.href = 'dashboard.html';
  }, 1200);
});

/* ============================================
   REGISTER FORM
   ============================================ */
const registerForm = document.getElementById('registerForm');
const regPassword = document.getElementById('regPassword');
const strengthFill = document.getElementById('strengthFill');

/* Password strength meter */
regPassword?.addEventListener('input', () => {
  const val = regPassword.value;
  let score = 0;
  if (val.length >= 8) score++;
  if (/[A-Z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[^A-Za-z0-9]/.test(val)) score++;

  const colors = ['#ef4444', '#f59e0b', '#3b82f6', '#10b981'];
  const widths = ['25%', '50%', '75%', '100%'];
  if (strengthFill) {
    strengthFill.style.width = val ? widths[score - 1] || '0%' : '0%';
    strengthFill.style.background = colors[score - 1] || 'transparent';
  }
});

registerForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  ['nameError', 'regEmailError', 'regPassError', 'confirmError']
    .forEach(clearError);

  const name = document.getElementById('fullName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const pass = regPassword.value;
  const confirm = document.getElementById('confirmPassword').value;
  const terms = document.getElementById('terms').checked;
  let valid = true;

  if (name.length < 3) { showError('nameError', 'Enter your full name (min 3 chars)'); valid = false; }
  if (!isEmail(email)) { showError('regEmailError', 'Enter a valid email'); valid = false; }
  if (pass.length < 8) { showError('regPassError', 'Password must be at least 8 characters'); valid = false; }
  if (pass !== confirm) { showError('confirmError', 'Passwords do not match'); valid = false; }
  if (!terms) { showError('confirmError', 'You must accept the terms'); valid = false; }

  if (!valid) return;

  const btn = registerForm.querySelector('button[type="submit"]');
  const original = btn.innerHTML;
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Creating account...';
  btn.disabled = true;

  setTimeout(() => {
    localStorage.setItem('du_user', JSON.stringify({ name, email }));
    window.location.href = 'dashboard.html';
  }, 1400);
});