let galleryItems = document.querySelectorAll('.gal-img');
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    galleryItems.forEach(item => item.classList.remove('active'));
    item.classList.add('active');
  });
});
