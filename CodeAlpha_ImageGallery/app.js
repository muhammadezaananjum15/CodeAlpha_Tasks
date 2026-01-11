const filterBtns = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.gallery-item');

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    items.forEach((item) => {
      if (filter === 'all') {
        item.classList.remove('hide');
      } else {
        item.classList.toggle('hide', !item.classList.contains(filter));
      }
    });
  });
});
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const closeModal = document.getElementById('closeModal');

items.forEach((item) => {
  item.addEventListener('click', () => {
    modal.classList.add('active');
    modalImg.src = item.querySelector('img').src;
  });
});


closeModal.onclick = () => modal.classList.remove('active');
modal.onclick = (e) => e.target === modal && modal.classList.remove('active');
