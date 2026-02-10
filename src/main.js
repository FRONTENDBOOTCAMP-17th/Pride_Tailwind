import './style.css';

// 앱 다운로드 파트 버튼 애니메이션
const cards = document.querySelectorAll('.download-card');

cards.forEach((card) => {
  const arrow = card.querySelector('.download-arrow');

  card.addEventListener('mouseenter', () => {
    card.classList.add('transition-all', 'duration-300', 'ease-out', '-translate-y-1', 'shadow-lg');

    arrow?.classList.add('transition-transform', 'duration-300', 'translate-x-1');
  });

  card.addEventListener('mouseleave', () => {
    card.classList.remove('-translate-y-1', 'shadow-lg');

    arrow?.classList.remove('translate-x-1');
  });
});
