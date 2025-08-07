// Instagram Profile Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Tab switching functionality
    const tabs = document.querySelectorAll('.instagram-posts-tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            console.log('Tab clicked:', this.textContent.trim());
        });
    });

    const posts = document.querySelectorAll('.instagram-post');
    
    posts.forEach(post => {
        post.addEventListener('click', function() {
            console.log('Post clicked:', this.dataset.testid);
        });
    });

    const highlights = document.querySelectorAll('.instagram-highlight');

    highlights.forEach(highlight => {
        highlight.addEventListener('click', function() {
            console.log('Highlight clicked:', this.dataset.testid);
        });
    });

    const followBtn = document.querySelector('.instagram-follow-btn');
    
    if (followBtn) {
        followBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (this.textContent === 'Seguindo') {
                this.textContent = 'Seguir';
                this.style.backgroundColor = '#0095f6';
                console.log('Unfollowed');
            } else {
                this.textContent = 'Seguindo';
                this.style.backgroundColor = '#262626';
                console.log('Followed');
            }
        });
    }

    const messageBtn = document.querySelector('.instagram-message-btn');

    if (messageBtn) {
        messageBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Message button clicked');
        });
    }

    const moreBtn = document.querySelector('.instagram-more-btn');

    if (moreBtn) {
        moreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('More options clicked');
        });
    }

    const navItems = document.querySelectorAll('.sidebar-nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            console.log('Navigation clicked:', this.dataset.testid);
        });
    });

    const highlightsContainer = document.querySelector('.instagram-highlights-container');

    if (highlightsContainer) {
        let isDown = false;
        let startX;
        let scrollLeft;

        highlightsContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - highlightsContainer.offsetLeft;
            scrollLeft = highlightsContainer.scrollLeft;
        });

        highlightsContainer.addEventListener('mouseleave', () => isDown = false);
        highlightsContainer.addEventListener('mouseup', () => isDown = false);

        highlightsContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - highlightsContainer.offsetLeft;
            const walk = (x - startX) * 2;
            highlightsContainer.scrollLeft = scrollLeft - walk;
        });
    }

    // 🔄 SUBSTITUÍDO: Lazy loading + animação de fade-in
    const postImages = document.querySelectorAll('.instagram-post img');

    postImages.forEach((img, index) => {
        img.style.opacity = '0';
        img.style.transform = 'scale(0.8)';
        img.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

        setTimeout(() => {
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
        }, index * 100);
    });

    // Mobile menu toggle (future use)
    function toggleMobileMenu() {
        const sidebar = document.querySelector('.instagram-sidebar');
        sidebar.classList.toggle('mobile-open');
    }

    function animateStats() {
        const stats = document.querySelectorAll('.instagram-stat-number');
        stats.forEach(stat => {
            stat.style.opacity = '0';
            setTimeout(() => {
                stat.style.transition = 'opacity 0.5s ease';
                stat.style.opacity = '1';
            }, 200);
        });
    }

    setTimeout(animateStats, 300);
    console.log('Instagram profile page loaded successfully!');
});
