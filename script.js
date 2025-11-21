function toggleMenu() {
  const menu = document.getElementById('menuList');
  menu.classList.toggle('show');
}

// Scroll Reveal Animation
window.addEventListener('scroll', () => {
  document.querySelectorAll('.reveal').forEach(el => {
    const top = el.getBoundingClientRect().top;
    const trigger = window.innerHeight - 100;

    if (top < trigger) {
      el.classList.add('active');
    }
  });
});
