



        /* =====================================================
       HEADER AL HACER SCROLL
    ===================================================== */

    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });



    /* =====================================================
       MENU MOBILE
    ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navMenu.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });


    /* Cerrar menú al seleccionar enlace */

    document.querySelectorAll(".nav-link, .nav-button").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });



    /* =====================================================
       ANIMACIONES AL HACER SCROLL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                    }

                });

            },
            {
                threshold: .15
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });



    /* =====================================================
       CONTADORES
    ===================================================== */

    const counters =
        document.querySelectorAll(".stat-number");

    let countersStarted = false;


    function startCounters() {

        if (countersStarted) return;

        countersStarted = true;

        counters.forEach(counter => {

            const target =
                parseInt(counter.dataset.target);

            let current = 0;

            const duration = 1800;

            const increment =
                target / (duration / 16);


            function updateCounter() {

                current += increment;

                if (current < target) {

                    counter.textContent =
                        Math.floor(current);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.textContent =
                        target;

                }

            }

            updateCounter();

        });

    }


    const statsSection =
        document.querySelector(".stats");


    const statsObserver =
        new IntersectionObserver(
            entries => {

                if (entries[0].isIntersecting) {

                    startCounters();

                }

            },
            {
                threshold: .4
            }
        );


    statsObserver.observe(statsSection);



    /* =====================================================
       BUSCADOR
    ===================================================== */

    function buscarAuto() {

        const button =
            document.querySelector(".booking .btn");

        const originalText =
            button.innerHTML;

        button.innerHTML =
            '<i class="fa-solid fa-spinner fa-spin"></i> BUSCANDO...';

        button.disabled = true;


        setTimeout(() => {

            button.innerHTML =
                '<i class="fa-solid fa-check"></i> AUTOS ENCONTRADOS';

            button.disabled = false;


            setTimeout(() => {

                button.innerHTML =
                    originalText;

            }, 2500);

        }, 1200);

    }



    /* =====================================================
       FORMULARIO
    ===================================================== */

    const contactForm =
        document.getElementById("contactForm");

    const formSuccess =
        document.getElementById("formSuccess");


    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const button =
            contactForm.querySelector("button");

        const originalText =
            button.innerHTML;

        button.innerHTML =
            '<i class="fa-solid fa-spinner fa-spin"></i> ENVIANDO...';

        button.disabled = true;


        setTimeout(() => {

            button.innerHTML =
                '<i class="fa-solid fa-check"></i> ENVIADO';

            formSuccess.style.display =
                "block";


            contactForm.reset();


            setTimeout(() => {

                button.innerHTML =
                    originalText;

                button.disabled = false;

            }, 2500);

        }, 1200);

    });



    /* =====================================================
       PARALLAX SUAVE DEL AUTOMÓVIL
    ===================================================== */

    const heroCar =
        document.querySelector(".hero-car");


    window.addEventListener("mousemove", event => {

        if (window.innerWidth < 900) return;

        const x =
            (window.innerWidth / 2 - event.clientX) / 70;

        const y =
            (window.innerHeight / 2 - event.clientY) / 70;


        heroCar.style.transform =
            `translate(${x}px, ${y}px)`;

    });



    /* =====================================================
       FECHA MÍNIMA
    ===================================================== */

    const today =
        new Date().toISOString().split("T")[0];

    document
        .querySelectorAll('input[type="date"]')
        .forEach(input => {

            input.min = today;

        });





        