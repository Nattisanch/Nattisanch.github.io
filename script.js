document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    const headerHeight = document.querySelector('.header').offsetHeight;

    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    }
});
function toggleProjects() {
    var projects = document.getElementById('data-visualization-projects');
    if (projects.style.display === 'none' || projects.style.display === '') {
        projects.style.display = 'block';
    } else {
        projects.style.display = 'none';
    }
}