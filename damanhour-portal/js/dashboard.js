/* ============================================
   Dashboard — Load user, sidebar, logout
   ============================================ */

'use strict';

/* ---------- Load user from localStorage ---------- */
const user = JSON.parse(localStorage.getItem('du_user') || '{}');
const nameEl = document.getElementById('userName');
const avatarEl = document.querySelector('.avatar');

if (user.name) {
  nameEl.textContent = user.name.split(' ')[0];
  avatarEl.textContent = user.name.charAt(0).toUpperCase();
} else if (user.email) {
  nameEl.textContent = user.email.split('@')[0];
  avatarEl.textContent = user.email.charAt(0).toUpperCase();
}

/* ---------- Sidebar toggle (mobile) ---------- */
const dashToggle = document.getElementById('dashToggle');
const sidebar = document.getElementById('sidebar');

dashToggle?.addEventListener('click', () => {
  sidebar?.classList.toggle('open');
});

/* ---------- Active sidebar link ---------- */
document.querySelectorAll('.sidebar-nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    document.querySelectorAll('.sidebar-nav a').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

/* ---------- Logout ---------- */
document.getElementById('logoutBtn')?.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.removeItem('du_user');
  window.location.href = 'index.html';
});

/* ---------- Protect page (redirect if not logged in) ---------- */
if (!user.email && !user.name) {
  // Uncomment in production:
  // window.location.href = 'login.html';
}