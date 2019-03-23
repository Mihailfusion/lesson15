function modal() {
  let more = document.querySelector('.more'),
    click = document.querySelector('#about'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

  function showModal(a) {
    overlay.style.display = 'block';
    a.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  }

  click.addEventListener('click', (event) => {
    if (event.target && event.target.matches('.description-btn') || event.target == more) {
      showModal(event.target);
    }
  });

  close.addEventListener('click', () => {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  });
  
}

module.exports = modal;