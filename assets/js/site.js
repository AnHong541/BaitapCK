// Central site data and cart helpers
(function(window){
    const nameMap = {
        'Áo Thun Nam Cao Cấp': 'HG Aerial',
        'Váy Ngữ Đẹp': "HG Gaia's/Ortega's Rick Dom (GQ)",
        'Giày Thể Thao': 'RG Sazabi',
        'Túi Xách Da': 'HG Hashmal'
    };

    const demoProducts = [
        {
            name: 'HG Aerial',
            price: 500000,
            img: 'https://static.wikia.nocookie.net/gunplabuilders/images/a/aa/HGTWFM-Gundam-Aerial-box.jpg/revision/latest/scale-to-width-down/1000?cb=20221002145115',
            oldPrice: 600000,
            gallery: [
                'https://static.wikia.nocookie.net/gunplabuilders/images/a/aa/HGTWFM-Gundam-Aerial-box.jpg/revision/latest/scale-to-width-down/1000?cb=20221002145115',
                'https://static.wikia.nocookie.net/gunplabuilders/images/e/e7/HGTWFM-Gundam-Aerial-1.jpg/revision/latest/scale-to-width-down/1000?cb=20221002145104',
                'https://static.wikia.nocookie.net/gunplabuilders/images/1/19/HGTWFM-Gundam-Aerial-2.jpg/revision/latest/scale-to-width-down/1000?cb=20221002145105'
            ]
        },
        {
            name: "HG Gaia's/Ortega's Rick Dom (GQ)",
            price: 700000,
            img: 'https://static.wikia.nocookie.net/gunplabuilders/images/8/8b/HGGQ-RickDoms-box.png/revision/latest/scale-to-width-down/1000?cb=20251018032323',
            oldPrice: 800000,
            gallery: [
                'https://static.wikia.nocookie.net/gunplabuilders/images/8/8b/HGGQ-RickDoms-box.png/revision/latest/scale-to-width-down/1000?cb=20251018032323',
                'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEge4pOdRLIkD28nHZZ52jAq_wTMfX9UDB_wOCQGchFNY6uuyFzpHZTCDzUkSqCYtkj5zHKBfl6z30QCqGcCuEC2IXEbLXdIfJ7csKyOaWwOO-tBr1P4TM7CoOvctaux03Gg45X__23_GXfFwba4aVpZsA8lsFU2Cbx2pJIeENWAuq1LRzzsgiCkxtuVrQ/s1200/hg%20gq%20rick%20dom%20(1).jpg',
                'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivwa03SYDtvvX6Zy0P8rY7ouI93kAFO7Z_NLrTuQXf_-qvyzT8vu3UkQAmlHTZt3eWcnjXuzdrFAaDC3NeXL6rJ3GIZYfLquVlNpcsalA2F-_VTR0_H4AygLHtgJpkhVsfuhyphenhyphenKMBvk949n6I3wPrBm583kL2OXYmdUyFPeHLS3Hm60NVWi0_yYcYJvDQ/s16000-rw/hg%20gq%20rick%20dom%20(4).jpg'
            ]
        },
        {
            name: 'RG Sazabi',
            price: 1200000,
            img: 'https://static.wikia.nocookie.net/gunplabuilders/images/3/31/RG-Sazabi-box.jpg/revision/latest/scale-to-width-down/1000?cb=20190423124656',
            oldPrice: null,
            gallery: [
                'https://static.wikia.nocookie.net/gunplabuilders/images/3/31/RG-Sazabi-box.jpg/revision/latest/scale-to-width-down/1000?cb=20190423124656',
                'https://static.wikia.nocookie.net/gunplabuilders/images/e/eb/RG-Sazabi-1.jpg/revision/latest/scale-to-width-down/1000?cb=20190423124653',
                'https://static.wikia.nocookie.net/gunplabuilders/images/7/79/RG-Sazabi-5.jpg/revision/latest/scale-to-width-down/1000?cb=20190423124655'
            ]
        },
        {
            name: 'HG Hashmal',
            price: 900000,
            img: 'https://bandai-hobby.net/images/158_1718_s_b3ogk0hnas45eb4ymqe3uyl7uumy.jpg',
            oldPrice: 1000000,
            gallery: [
                'https://bandai-hobby.net/images/158_1718_s_b3ogk0hnas45eb4ymqe3uyl7uumy.jpg',
                'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhcWgUH5LE8XqqaBNKI-3V3Nya7I7W9cmTHxJZO8njf6Hh4RmryzpEb3Um833I6kAWJUUHAw2kOsq8IMP0qax_TeG79XJS4c1xESDAQFFNlzr7VUBTRXymw-sNcn5ZTrivHKxsFjTjw_do/s16000-rw/large-mobile-suit-hg-ibo+%25281%2529.jpg',
                'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTyLUP31qmQRP5zRGGtGUQ6y5Cw0x2yoZp0t-QsachQGtxfiYgd5cM73MKPM6PZhkyueZMRRNJr-CCLKdiYju6fmHSneqmcM4Wepl-wu8zf6Z2cH1S-FIGBc3GzkB7mR5CcJfK4YJNv20/s1600-rw/hg-ibo-mobile-armor-hashmal-and-pluma+%25282%2529.jpg',
                'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPC1ULVGT94-UF-3dk5BjfhZQKCqW2gMLrfb5LK54zcU2h5wo-j9HJTepMT47uGq0qqtJPNjOF2y4CGLoL2kThOfTXtazvjpebultIhGaqdc69suwPFDIAmvZlFm7Pe9zkOwGazasuIHI/s16000-rw/large-mobile-suit-hg-ibo+%25282%2529.jpg'
            ]
        },
        {
            name: 'HG Psycho Gundam MK II',
            price: 2000000,
            img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh424wFnCa_f3P0BkKCPUfZbzcZNUk1R0oH2kIiojpMRWfPZXnplkRxu_5-vcPoPrt21rVBBiVQ_9TzVHVLBKvuD5eaGW_hVsYrWIIBoWM_aWh45uQD90Mq3Kw7gg716XeAawo0QAefT-l2_wKMpUee9ZcMJdtbAnvjfDZpOBV0efoUuS5aqS7cRxghbA/s16000/hguc%20psycho%20gundam%20mk-ii%20box%20art.jpeg',
            oldPrice: null,
            gallery: [
                'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh424wFnCa_f3P0BkKCPUfZbzcZNUk1R0oH2kIiojpMRWfPZXnplkRxu_5-vcPoPrt21rVBBiVQ_9TzVHVLBKvuD5eaGW_hVsYrWIIBoWM_aWh45uQD90Mq3Kw7gg716XeAawo0QAefT-l2_wKMpUee9ZcMJdtbAnvjfDZpOBV0efoUuS5aqS7cRxghbA/s16000/hguc%20psycho%20gundam%20mk-ii%20box%20art.jpeg',
                'https://gun-pla-world.com/wp-content/uploads/2025/04/image-49.png',
                'https://gun-pla-world.com/wp-content/uploads/2025/04/image-51.png',
                'https://gun-pla-world.com/wp-content/uploads/2025/04/image-53.png',
                'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnFD-MIyiSmvN9NmlfIdjHapGrXVIjlRNEJzyyXOldPxntVvIwJ2oZNSntPtHtLX2e3d6AdlNDNhvtFJNc01XnbEX6jH6nHkiY8i3xU6zbGJWAijxH391i3AyGkb-ipP0QlXJpaMMKf8Wp3tzLH8IgSKGMQoCCZRUF3FAV2A9ZD_XeWaqI5dcQIjfr9Q/s16000-rw/hguc%20psycho%20gundam%20mk-ii%20(3).jpg'
            ]
        },
        {
            name: 'MG Wing Zero Gundam EW ver.ka',
            price: 1400000,
            img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhrTP3ACZuuPY5aVbP0ZVDiKPrXR4nlkdy1W1WG4lE0i1xGvEtCvtp29I4ZAJvUi0gCeuJ4NrdwKo9BesSGqBb9JyFD-rCTY7vgTZ5J4CApO4zkERXcSK8ekNEUFlP1YRrPmrE6_TSNkR_J/s16000-rw/mg-wing-gundam-zero-ew-ver-ka-box-art.jpg',
            oldPrice: null,
            gallery: [
                'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhrTP3ACZuuPY5aVbP0ZVDiKPrXR4nlkdy1W1WG4lE0i1xGvEtCvtp29I4ZAJvUi0gCeuJ4NrdwKo9BesSGqBb9JyFD-rCTY7vgTZ5J4CApO4zkERXcSK8ekNEUFlP1YRrPmrE6_TSNkR_J/s16000-rw/mg-wing-gundam-zero-ew-ver-ka-box-art.jpg',
                'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgD6qZ-6sRcTBKo-GDZ5hxKikAxjLmSwOs7uLfXbEsPo44DwHFWO-4sXeVXNEMV-FhdWC-mIFZkIqiy49_WEWwGJ1EtRxIpkEFYeI2rWVRSuHOhaVtSeRwMpy9_HW8BNZiGjfNNvx7yNmiL/s16000-rw/mg-wing-gundam-zero-ew-ver-ka+%25283%2529.jpg',
                'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKmzbfZSltI7S7nGOI1D9gnqnEr8sUpQKsNgFP-AlEt9QzJ3SpKWmHL7_DpaUbzjzInJtlXDASJiM5Liq-g1BfwtV-yY4jd0ZqgPTvnjo1lgsgTTAa3tos7W3t9VPIELovrlCVj3_zvo3c/s16000-rw/mg-wing-gundam-zero-ew-ver-ka+%252810%2529.jpg',
                'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEid2d-Y2nHOOrFKOyp0iRosRTDIw9NUPNFCaRVDIr-dPy8Z4KTwhO9MpCqGCGzr5dpnvjHikwen9iUowCbtEJQMPXCcPJ-yZ9XnKO1KKGPCHknlKyhOo26OwEcmIcqL0OhdT6QuEiRnBOWE/s16000-rw/mg-wing-gundam-zero-ew-ver-ka+%25286%2529.jpg'
            ]
        },
        {
            name: 'RG Nu Gundam',
            price: 1000000,
            img: 'https://www.hlj.com/productimages/ban/banh578426-up_0.png',
            oldPrice: null,
            gallery: [
                'https://www.hlj.com/productimages/ban/banh578426-up_0.png',
                'https://www.hlj.com/productimages/ban/banh578426-up_1.png',
                'https://www.hlj.com/productimages/ban/banh578426-up_2.png'
            ]
        },
        {
            name: 'RG Hi-nu Gundam',
            price: 1300000,
            img: 'https://www.hlj.com/productimages/ban/bans61915_0.png',
            oldPrice: null,
            gallery: [
                'https://www.hlj.com/productimages/ban/bans61915_0.png',
                'https://www.hlj.com/productimages/ban/bans61915_1.jpg',
                'https://www.hlj.com/productimages/ban/bans61915_3.png'
            ]
        },
    ];

    function getCart() {
        try { return JSON.parse(localStorage.getItem('cartItems') || '[]'); } catch(e) { return []; }
    }
    function setCart(cart) {
        localStorage.setItem('cartItems', JSON.stringify(cart));
    }
    function recalcCartCount() {
        const cart = getCart();
        const count = cart.reduce((s, it) => s + (it.qty || it.quantity || 1), 0);
        localStorage.setItem('cartCount', count);
        const el = document.querySelector('.cart-icon');
        if (el) el.setAttribute('data-count', count);
        return count;
    }

    function migrateOldCartNames() {
        try {
            const cart = getCart();
            let changed = false;
            cart.forEach(it => {
                if (it && it.name && nameMap[it.name]) { it.name = nameMap[it.name]; changed = true; }
            });
            if (changed) { setCart(cart); recalcCartCount(); }
        } catch (e) { console.warn('migrateOldCartNames failed', e); }
    }

    function addToCart(product, qty) {
        if (!product) return;
        const cart = getCart();
        const q = Math.max(1, parseInt(qty || 1));
        let found = cart.find(it => it.name === product.name);
        if (found) {
            found.qty = (found.qty || found.quantity || 0) + q;
            found.quantity = found.qty;
        } else {
            cart.push({ name: product.name, price: product.price, img: product.img, oldPrice: product.oldPrice, qty: q, quantity: q });
        }
        setCart(cart);
        const count = recalcCartCount();
        return count;
    }

    // Expose
    window.SITE = window.SITE || {};
    window.SITE.demoProducts = demoProducts;
    window.SITE.nameMap = nameMap;
    window.SITE.getCart = getCart;
    window.SITE.setCart = setCart;
    window.SITE.recalcCartCount = recalcCartCount;
    window.SITE.addToCart = addToCart;
    window.SITE.migrateOldCartNames = migrateOldCartNames;

    // run migration on load
    document.addEventListener('DOMContentLoaded', function(){ migrateOldCartNames(); });

    // --- Simple client-side auth UI (simulated) ---
    function getUser() {
        try { return JSON.parse(localStorage.getItem('siteUser') || 'null'); } catch(e){ return null; }
    }
    function setUser(u) { localStorage.setItem('siteUser', JSON.stringify(u)); }
    function clearUser() { localStorage.removeItem('siteUser'); }

    function renderAuthUI() {
        var user = getUser();
        var authIcon = document.querySelector('.auth-icon');
        var authPopup = document.querySelector('.auth-popup');
        if (!authIcon || !authPopup) return;
        if (user) {
            // show initials or first letter
            var initials = (user.name || '').split(' ').map(s=>s[0]||'').join('').slice(0,2).toUpperCase();
            authIcon.textContent = initials || 'U';
            authPopup.innerHTML = `<div class="auth-name">${user.name} · ${user.provider}</div>
                <button class="auth-logout">Đăng xuất</button>`;
            authPopup.querySelector('.auth-logout').addEventListener('click', function(){ clearUser(); renderAuthUI(); authPopup.style.display='none'; });
        } else {
            authIcon.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="3" stroke="#fff" stroke-width="1.5"/><path d="M4 20c0-3.3137 2.6863-6 6-6h4c3.3137 0 6 2.6863 6 6" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
            authPopup.innerHTML = `<button class="auth-google">Đăng nhập bằng Google</button>
                <button class="auth-facebook">Đăng nhập bằng Facebook</button>`;
            // handlers
            authPopup.querySelector('.auth-google').addEventListener('click', function(){
                var name = prompt('Nhập tên hiển thị cho Google:','Khách');
                if (name) { setUser({ provider:'Google', name: name }); renderAuthUI(); authPopup.style.display='none'; }
            });
            authPopup.querySelector('.auth-facebook').addEventListener('click', function(){
                var name = prompt('Nhập tên hiển thị cho Facebook:','Khách');
                if (name) { setUser({ provider:'Facebook', name: name }); renderAuthUI(); authPopup.style.display='none'; }
            });
        }
    }

    document.addEventListener('DOMContentLoaded', function(){
        // attach click to auth icon to toggle popup
        var authWrap = document.querySelector('.auth-wrap');
        if (authWrap) {
            var icon = authWrap.querySelector('.auth-icon');
            var popup = authWrap.querySelector('.auth-popup');
            if (icon && popup) {
                icon.addEventListener('click', function(e){
                    e.stopPropagation();
                    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
                });
                // click outside closes
                document.addEventListener('click', function(){ if (popup) popup.style.display='none'; });
                popup.addEventListener('click', function(e){ e.stopPropagation(); });
            }
            renderAuthUI();
        }
    });

})(window);
