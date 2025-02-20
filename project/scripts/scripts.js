// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Store last visited section in localStorage
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const landmarkName = card.querySelector('h3').textContent;
            localStorage.setItem('lastVisited', landmarkName);
            console.log(`Last visited: ${landmarkName}`);
        });
    });

    // Check if there's a last visited landmark
    const lastVisited = localStorage.getItem('lastVisited');
    if (lastVisited) {
        const notification = document.createElement('div');
        notification.textContent = `Last visited: ${lastVisited}`;
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #003366;
            color: white;
            padding: 10px;
            border-radius: 4px;
            display: none;
        `;
        document.body.appendChild(notification);
        
        // Show notification after 2 seconds
        setTimeout(() => {
            notification.style.display = 'block';
        }, 2000);

        // Hide notification after 5 seconds
        setTimeout(() => {
            notification.style.display = 'none';
        }, 7000);
    }
});