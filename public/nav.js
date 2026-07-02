document.querySelectorAll('.nav__link').forEach(function(link) {
  link.addEventListener('click', function() {
    document.getElementById('nav-toggle').checked = false;
  });
});