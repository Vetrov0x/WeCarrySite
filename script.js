document.addEventListener('DOMContentLoaded', function () {
    // Pricing Tabs
    const tabs = document.querySelectorAll('.pricing-tabs button');
    const tables = document.querySelectorAll('.pricing-table-container table');

    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.getAttribute('data-target');

                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                tables.forEach(table => {
                    if (table.id === target) {
                        table.style.display = 'table';
                    } else {
                        table.style.display = 'none';
                    }
                });
            });
        });

        // Set the first tab as active by default
        tabs[0].click();
    }

    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeMenu = document.querySelector('.close-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

    hamburger.addEventListener('click', () => {
        mobileNav.classList.add('open');
    });

    closeMenu.addEventListener('click', () => {
        mobileNav.classList.remove('open');
    });

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('open');
        });
    });
});
