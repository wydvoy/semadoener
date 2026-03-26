document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Fade-in on Scroll Animation using Intersection Observer ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Unobserve after animating once
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach((section) => {
        observer.observe(section);
    });


    // --- 2. Menu Logic and Rendering ---
    const menuData = [
        {
            category: "doener",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsB6-C4rF3VZtdZYXhN9DFGTHis2uiBkxYVyvyXGDtiGZ8krleSZ8cw9DgDb286x85QV_si2oc-Zi6Szmac7VCJQTgLx7hjiiR-lcEL9ISyYOB_3U6ockB41Z6eSCPeKTTGb8tXtF2RwS0xgWlezjlYtpCTvktNGjwQk874IWejwxXqeRSIvWy8h5cAOHaxRtWh72He-7ICip1DvhDkfbcddoKp__nn_8z0g3TystSsDSwTKyKIOtaMlzbyBNAlC7QZFZjsefzJB8",
            alt: "D\u00f6ner sandwich",
            type: "image",
            title: "Klassik D\u00f6ner",
            description: "Kalbfleisch, Salat, Zwiebeln, Tomaten und Mustys Spezialsauce.",
            price: "7,50 \u20ac"
        },
        {
            category: "doener",
            icon: "kebab_dining",
            type: "icon",
            title: "Sema Teller",
            description: "Gro\u00dfe Portion Fleisch, Pommes oder Reis, Beilagensalat und Tzatziki.",
            price: "11,00 \u20ac"
        },
        {
            category: "doener",
            icon: "kebab_dining",
            type: "icon",
            title: "D\u00f6ner Box",
            description: "Fleisch nach Wahl, Pommes und Sauce in der praktischen Box.",
            price: "6,50 \u20ac"
        },
        {
            category: "duerum",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCntW-qZHCa2FLOZ_wLdK-TtcOBd9TBau0lIYm_DWSo0uJLOUHNgAlyfqLRt-PhXdjmrXBXYoy3xpnmZIncvBbnm7Ov3T0yXFgHWmuf-4NHCAhJlo-Tujg3oUUZFgoXPFeStOxvIP3uc4DBVpmLJ8jaVuVuIW8zaV-YL0otslMElXTHes-W9XOomPZM0U_N5yrZkGdmYf1xKHIJy2bPETYgaJInqmEgb0_JD29p7q8r1qXYmVkcKmFcb8xwsWNctfSED4E6k64DQe8",
            alt: "Large D\u00fcr\u00fcm wrap",
            type: "image",
            title: "Big D\u00fcr\u00fcm",
            description: "Extra viel Fleisch, d\u00fcnnes Fladenbrot, doppelt Sauce.",
            price: "8,50 \u20ac"
        },
        {
            category: "duerum",
            icon: "bakery_dining",
            type: "icon",
            title: "Lahmacun",
            description: "T\u00fcrkische Pizza mit Fleisch, Salat und Spezialsauce gerollt.",
            price: "8,00 \u20ac"
        },
        {
            category: "chili-cheese",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUsOIXEYln3K9YRKr3YJJl20Mqd6R8HRMPbjXywyBRDdmDJ99UNAzOwvc-aoGcMMspJckiP6jv3UeU3oCwqX9SrzsAwp6qqQ2bSNPIUFjuhQjo5ZaBywxXcdF82Zqm8W9Y7J3r4MaJmH_pBFuZ4FnNsF224jzrIaItLfHS0nJJbTI5Smc_LVwYE7qOeXqYl1WevXvoi1i-E-TeodTmAfBZhVoafvJcSH9eYEzGOy2i0_L5PNrryT4hJsp2bbCr09CTDAp_Z4zEZ_0",
            alt: "D\u00f6ner meat topped with melted chili cheese sauce",
            type: "image",
            title: "Chili Cheese Box",
            description: "Pommes, Fleisch und unsere legend\u00e4re Chili-Cheese Sauce.",
            price: "9,00 \u20ac"
        },
        {
            category: "chili-cheese",
            icon: "local_pizza",
            type: "icon",
            title: "Chili Cheese D\u00fcr\u00fcm",
            description: "D\u00fcr\u00fcm gef\u00fcllt mit Fleisch, Jalape\u00f1os und fl\u00fcssigem Chili Cheese.",
            price: "9,50 \u20ac"
        },
        {
            category: "vegetarisch",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0KCcf1Tp7hCjc_O5arj7GlNscs_LvVOxiMzUTY1pIaG2tzOm1X_XTnZAzNQRw90kNZwkvMOhtRIUo2E0dfzdIge1-wB_fOF-yrvJlyJB_DTTYgKP9ALS8AZ4_L4dWRhAXjv5Q5LrEi94lQckTBWvMWMWjrsOce_tLJ3ytatmEi5CuBpulstl7vXueQB527SPw-U8jOqIjZRoVYFpw8kOhJ0lNrLvVHcpG80EIgQ4oI1f7vM60e2MIWb4Kar3H8XRbw1vuPmxq1nA",
            alt: "Falafel wrap",
            type: "image",
            title: "Veggi D\u00f6ner",
            description: "Hausgemachter Halloumi, Grillgem\u00fcse und Joghurt-Minz Sauce.",
            price: "7,00 \u20ac"
        },
        {
            category: "vegetarisch",
            icon: "eco",
            type: "icon",
            title: "Falafel D\u00fcr\u00fcm",
            description: "Knusprige Falafel, frischer Salat und Hummus im d\u00fcnnen Fladenbrot.",
            price: "7,50 \u20ac"
        },
        {
            category: "getraenke",
            icon: "local_drink",
            type: "icon",
            title: "Softdrinks",
            description: "Cola, Fanta, Sprite, Ayran, Wasser",
            price: "2,50 \u20ac"
        }
    ];

    const menuGridContainer = document.getElementById('menu-grid');

    menuData.forEach(itemData => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'menu-item flex bg-surface-container group cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:bg-surface-container-high transition-all duration-300';
        itemDiv.setAttribute('data-category', itemData.category);

        const mediaDiv = document.createElement('div');
        mediaDiv.className = 'w-32 h-32 md:w-48 md:h-48 flex-shrink-0';

        if (itemData.type === 'image') {
            const img = document.createElement('img');
            img.setAttribute('loading', 'lazy');
            img.className = 'w-full h-full object-cover';
            img.setAttribute('alt', itemData.alt);
            img.setAttribute('src', itemData.image);
            mediaDiv.appendChild(img);
        } else if (itemData.type === 'icon') {
            mediaDiv.classList.add('bg-surface-container-high', 'flex', 'items-center', 'justify-center');
            const iconSpan = document.createElement('span');
            if (itemData.category === 'getraenke') {
                iconSpan.className = 'material-symbols-outlined text-4xl text-on-surface-variant';
            } else {
                iconSpan.className = 'material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-primary transition-colors';
            }
            iconSpan.textContent = itemData.icon;
            mediaDiv.appendChild(iconSpan);
        }

        itemDiv.appendChild(mediaDiv);

        const textContentDiv = document.createElement('div');
        textContentDiv.className = 'p-6 flex flex-col justify-between w-full';

        // Add title container to match original structure exactly
        const titleContainer = document.createElement('div');

        const titleH3 = document.createElement('h3');
        titleH3.className = 'font-headline font-bold text-2xl uppercase tracking-tighter group-hover:text-primary transition-colors';
        titleH3.textContent = itemData.title;
        titleContainer.appendChild(titleH3);

        const descP = document.createElement('p');
        descP.className = 'text-on-surface-variant font-body text-sm mt-2 line-clamp-2';
        descP.textContent = itemData.description;
        titleContainer.appendChild(descP);

        textContentDiv.appendChild(titleContainer);

        const priceSpan = document.createElement('span');
        priceSpan.className = 'font-headline font-black text-2xl text-primary mt-4';
        priceSpan.textContent = itemData.price;
        textContentDiv.appendChild(priceSpan);

        itemDiv.appendChild(textContentDiv);
        menuGridContainer.appendChild(itemDiv);
    });

    // --- 2. Menu Filtering Logic ---
    const tabs = document.querySelectorAll('.menu-tab');
    const items = document.querySelectorAll('.menu-item');
    const menuGrid = document.getElementById('menu-grid');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab styling
            tabs.forEach(t => {
                t.classList.remove('bg-primary', 'text-on-primary-fixed');
                t.classList.add('bg-surface-container', 'text-on-surface');
                t.setAttribute('aria-selected', 'false');
            });
            tab.classList.remove('bg-surface-container', 'text-on-surface');
            tab.classList.add('bg-primary', 'text-on-primary-fixed');
            tab.setAttribute('aria-selected', 'true');

            const filterValue = tab.getAttribute('data-filter');

            // Fade out current items
            items.forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(10px)';
            });

            setTimeout(() => {
                let visibleCount = 0;
                items.forEach((item) => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'flex';
                        // Staggered fade-in
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, visibleCount * 80);
                        visibleCount++;
                    } else {
                        item.style.display = 'none';
                    }
                });
            }, 200);
        });
    });

    // Initial stagger for menu items on page load
    const menuObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let delay = 0;
                items.forEach((item) => {
                    if (item.style.display !== 'none') {
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, delay);
                        delay += 80;
                    }
                });
                obs.disconnect();
            }
        });
    }, { threshold: 0.1 });
    menuObserver.observe(menuGrid);

    // Set initial state for menu items
    items.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(10px)';
    });

    // --- 3. Staggered fade-in for Street Vibes ---
    const vibesGrid = document.querySelector('#reviews .grid');
    if (vibesGrid) {
        const vibeItems = vibesGrid.querySelectorAll('div.aspect-square');
        vibeItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });

        const vibesObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    vibeItems.forEach((item, i) => {
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, i * 80);
                    });
                    obs.disconnect();
                }
            });
        }, { threshold: 0.1 });
        vibesObserver.observe(vibesGrid);
    }

    // --- 4. Mobile Menu Logic ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    function openMobileMenu() {
        mobileMenu.classList.remove('-translate-x-full');
        mobileMenuOverlay.classList.remove('opacity-0', 'pointer-events-none');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        mobileMenu.classList.add('-translate-x-full');
        mobileMenuOverlay.classList.add('opacity-0', 'pointer-events-none');
        document.body.style.overflow = '';
    }

    if (mobileMenuBtn && mobileMenuClose && mobileMenu && mobileMenuOverlay) {
        mobileMenuBtn.addEventListener('click', openMobileMenu);
        mobileMenuClose.addEventListener('click', closeMobileMenu);
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }

    // --- 5. Open/Closed Status Logic ---
    function updateStatusBadge() {
        // Berlin timezone offset (rough calculation for client side, handling standard/summer time simplistically for this demo)
        // A better approach would be to use a library like luxon, but for raw JS:
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: 'Europe/Berlin',
            hour: 'numeric',
            minute: 'numeric',
            hour12: false,
            weekday: 'short'
        });

        const parts = formatter.formatToParts(now);
        let hourStr = '0', minuteStr = '0', dayStr = 'Mon';

        parts.forEach(part => {
            if (part.type === 'hour') hourStr = part.value;
            if (part.type === 'minute') minuteStr = part.value;
            if (part.type === 'weekday') dayStr = part.value;
        });

        const currentHour = parseInt(hourStr, 10);
        const currentMinute = parseInt(minuteStr, 10);
        const timeInMinutes = currentHour * 60 + currentMinute;

        // Mo-Do: 11:00 - 22:00 (660 - 1320)
        // Fr-Sa: 11:00 - 23:00 (660 - 1380)
        // So: 12:00 - 22:00 (720 - 1320)

        let isOpen = false;
        let opensAt = "11:00";

        if (['Mon', 'Tue', 'Wed', 'Thu'].includes(dayStr)) {
            isOpen = timeInMinutes >= 660 && timeInMinutes < 1320;
            opensAt = "11:00";
        } else if (['Fri', 'Sat'].includes(dayStr)) {
            isOpen = timeInMinutes >= 660 && timeInMinutes < 1380;
            opensAt = "11:00";
        } else if (dayStr === 'Sun') {
            isOpen = timeInMinutes >= 720 && timeInMinutes < 1320;
            opensAt = "12:00";
        }

        const desktopBadge = document.getElementById('status-badge');
        const mobileBadge = document.getElementById('mobile-status-badge');

        function applyStatus(badge) {
            if (!badge) return;
            const dot = badge.querySelector('.status-dot');
            const text = badge.querySelector('.status-text');

            // Reset classes
            dot.classList.remove('bg-green-500', 'animate-pulse', 'bg-red-500', 'bg-gray-500');
            text.classList.remove('text-green-400', 'text-red-400', 'text-gray-400');
            badge.classList.remove('border-white/10', 'border-red-500/30', 'border-green-500/30');

            if (isOpen) {
                dot.classList.add('bg-green-500', 'animate-pulse');
                text.textContent = "Geöffnet";
                text.classList.add('text-green-400');
                badge.classList.add('border-green-500/30');
            } else {
                dot.classList.add('bg-red-500');
                text.textContent = `Geschlossen · Öffnet ${opensAt}`;
                text.classList.add('text-red-400');
                badge.classList.add('border-red-500/30');
            }
        }

        applyStatus(desktopBadge);
        applyStatus(mobileBadge);
    }

    updateStatusBadge();
    setInterval(updateStatusBadge, 60000); // Update every minute

    // --- 6. Mobile Bottom Nav Scroll Logic ---
    const bottomNav = document.getElementById('bottom-nav');
    if (bottomNav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 150) {
                bottomNav.classList.remove('translate-y-full');
            } else {
                bottomNav.classList.add('translate-y-full');
            }
        });
    }

    // --- 7. Parallax and Mouse Tilt on Desktop ---
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (window.innerWidth >= 1280 && !prefersReducedMotion) {
        const heroSection = document.getElementById('hero');
        if (heroSection) {
            const heroImgContainer = heroSection.querySelector('.z-0');
            const heroImg = heroImgContainer ? heroImgContainer.querySelector('img') : null;

            if (heroImg) {
                // Mouse tilt effect
                heroSection.addEventListener('mousemove', (e) => {
                    const { left, top, width, height } = heroSection.getBoundingClientRect();
                    const x = (e.clientX - left) / width;
                    const y = (e.clientY - top) / height;

                    // Limit to small rotation degrees
                    const rotateX = (y - 0.5) * -4;
                    const rotateY = (x - 0.5) * 4;

                    heroImg.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
                });

                heroSection.addEventListener('mouseleave', () => {
                    heroImg.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
                    heroImg.style.transition = 'transform 0.5s ease-out';
                    setTimeout(() => heroImg.style.transition = '', 500);
                });

                // Scroll Parallax effect
                window.addEventListener('scroll', () => {
                    const scrollY = window.scrollY;
                    if (scrollY < window.innerHeight) {
                        // Move container downwards slightly (up to 15% parallax)
                        heroImgContainer.style.transform = `translateY(${scrollY * 0.15}px)`;
                    }
                });
            }
        }
    }

    // Duplicate the marquee content for seamless infinite scrolling
    const marqueeContainer = document.querySelector('.marquee-container');
    const marqueeContent = document.querySelector('.marquee-content');

    if(marqueeContainer && marqueeContent) {
        // Calculate how many clones are needed to fill the screen twice (for seamless looping)
        const updateMarquee = () => {
            const containerWidth = marqueeContainer.offsetWidth;
            const contentWidth = marqueeContent.scrollWidth; // Approximate width of one content block

            // Need enough clones to cover at least 2x the container width
            const neededClones = Math.ceil((containerWidth * 2) / contentWidth) || 2;

            // Add clones if necessary
            while (marqueeContainer.children.length < neededClones) {
                const clone = marqueeContent.cloneNode(true);
                clone.setAttribute('aria-hidden', 'true'); // Hide from screen readers
                marqueeContainer.appendChild(clone);
            }
        };

        // Run initially and on resize
        updateMarquee();
        window.addEventListener('resize', updateMarquee);
    }
});
