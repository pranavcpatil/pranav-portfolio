// ====== Neo Black Portfolio JavaScript ======

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('📨 Thank you! Your message has been sent.');
        form.reset();
    });

    // Optional: highlight active nav link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // ✅ Add hover effect on profile image
    const profileWrapper = document.querySelector('.profile-pic-wrapper');
    if (profileWrapper) {
        profileWrapper.addEventListener('mouseenter', () => {
            profileWrapper.classList.add('hovered');
        });

        profileWrapper.addEventListener('mouseleave', () => {
            profileWrapper.classList.remove('hovered');
        });
    }
});
