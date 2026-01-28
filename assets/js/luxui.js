function luxToggleMenu() {
  const menu = document.querySelector('.lux-menu');
  if (!menu) return;
  menu.classList.toggle('is-open');
}

function luxShowSection(sectionKey) {
  const map = {
    home: 'section-home',
    components: 'section-components',
    documentation: 'section-documentation',
    contact: 'section-contact',
    'design-premium': 'section-design-premium',
    'code-minimal': 'section-code-minimal',
    'experience-unique': 'section-experience-unique'
  };

  const targetId = map[sectionKey];
  if (!targetId) return;

  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => sec.classList.remove('is-active'));

  const target = document.getElementById(targetId);
 // Dans luxui.js, modifie cette partie :
if (target) {
    target.classList.add('is-active');
    // On remonte direct en haut pour que la nouvelle section soit bien calée
    window.scrollTo(0, 0); 
}

  const menu = document.querySelector('.lux-menu');
  if (menu && menu.classList.contains('is-open')) {
    menu.classList.remove('is-open');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('[data-section]');
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-section');
      luxShowSection(key);
    });
  });

  luxShowSection('home');
});
