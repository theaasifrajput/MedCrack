/* ============================================================
   MED CRACK INSTITUTE — Shared JavaScript
   ============================================================ */

/* ── Active nav link ── */
document.addEventListener('DOMContentLoaded', () => {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page || a.getAttribute('href').endsWith(page)) {
      a.classList.add('active');
    }
  });
});

/* ── Modal ── */
function openModal() {
  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
  // reset form after closing
  setTimeout(() => {
    const form = document.getElementById('modalForm');
    const success = document.getElementById('successMsg');
    if (form) form.style.display = '';
    if (success) success.style.display = 'none';
  }, 400);
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

function submitForm() {
  const name   = document.getElementById('studentName').value.trim();
  const mobile = document.getElementById('mobile').value.trim();
  const cls    = document.getElementById('classSelect').value;
  const prog   = document.getElementById('program').value;

  if (!name || !mobile || !cls || !prog) {
    alert('Please fill in all required fields (*)');
    return;
  }
  document.getElementById('modalForm').style.display = 'none';
  document.getElementById('successMsg').style.display = 'block';
  setTimeout(closeModal, 3500);
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* ── Auto popup after 15 s (home page only) ── */
if (location.pathname.endsWith('index.html') || location.pathname === '/' || location.pathname.endsWith('/')) {
  setTimeout(() => {
    const overlay = document.getElementById('modalOverlay');
    if (overlay && !overlay.classList.contains('active')) openModal();
  }, 15000);
}
