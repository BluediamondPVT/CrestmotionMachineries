(function () {
    //===== Preloader
    window.onload = function () {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        var preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            preloader.style.display = 'none';
        }
    }

    /*=====================================
    Sticky Navbar & Scroll Top
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        if (header_navbar) {
            var sticky = header_navbar.offsetTop;
            if (window.pageYOffset > sticky) {
                header_navbar.classList.add("sticky");
            } else {
                header_navbar.classList.remove("sticky");
            }
        }

        // Show or hide scroll-to-top button
        var backToTo = document.querySelector(".scroll-top");
        if (backToTo) {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                backToTo.style.display = "flex";
            } else {
                backToTo.style.display = "none";
            }
        }
    };

    // WOW active
    if (typeof WOW !== 'undefined') {
        new WOW().init();
    }

    // Portfolio filters (if exists)
    let filterButtons = document.querySelectorAll('.portfolio-btn-wrapper button');
    if (filterButtons.length > 0 && typeof iso !== 'undefined') {
        filterButtons.forEach(e =>
            e.addEventListener('click', (event) => {
                let filterValue = event.target.getAttribute('data-filter');
                iso.arrange({
                    filter: filterValue
                });
            })
        );
    }

    var elements = document.getElementsByClassName("portfolio-btn");
    for (var i = 0; i < elements.length; i++) {
        elements[i].onclick = function () {
            var el = elements[0];
            while (el) {
                if (el.tagName === "BUTTON") {
                    el.classList.remove("active");
                }
                el = el.nextSibling;
            }
            this.classList.add("active");
        };
    }

    // Safe smooth scroll for anchor links
    var pageLink = document.querySelectorAll('.page-scroll');
    pageLink.forEach(elem => {
        elem.addEventListener('click', e => {
            var targetHref = elem.getAttribute('href');
            if (targetHref && targetHref.startsWith('#') && targetHref.length > 1) {
                var targetElem = document.querySelector(targetHref);
                if (targetElem) {
                    e.preventDefault();
                    targetElem.scrollIntoView({
                        behavior: 'smooth',
                        offsetTop: 1 - 60,
                    });
                }
            }
        });
    });

    // Mobile menu toggle
    let navbarToggler = document.querySelector(".mobile-menu-btn");
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function () {
            navbarToggler.classList.toggle("active");
        });
    }

})();