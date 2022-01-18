window.addEventListener('scroll', e => {
    var scroll = document.getElementById('jsScroll');
    if(window.scrollY > 200) {
      scroll.classList.add('visible');
    } else {
      scroll.classList.remove('visible');
    }
  });
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
