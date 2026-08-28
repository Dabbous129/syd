/* =========================================================
   MUSA AL-SADR
   PREMIUM VANILLA JAVASCRIPT
========================================================= */

"use strict";


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ====================================================== */

    const body =
        document.body;

    const html =
        document.documentElement;

    const header =
        document.getElementById("siteHeader");

    const navToggle =
        document.getElementById("navToggle");

    const navMenu =
        document.getElementById("navMenu");

    const langToggle =
        document.getElementById("langToggle");

    const themeToggle =
        document.getElementById("themeToggle");

    const preloader =
        document.getElementById("preloader");

    const scrollProgress =
        document.getElementById("scrollProgress");

    const backTop =
        document.getElementById("backTop");

    const year =
        document.getElementById("year");


    /* =====================================================
       UTILITIES
    ====================================================== */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

    const finePointer =
        window.matchMedia(
            "(pointer: fine)"
        ).matches;


    /* =====================================================
       YEAR
    ====================================================== */

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       PRELOADER
    ====================================================== */

    window.addEventListener(
        "load",
        () => {

            const delay =
                prefersReducedMotion
                    ? 0
                    : 500;

            setTimeout(() => {

                preloader?.classList.add(
                    "loaded"
                );

                document.body.classList.add(
                    "page-ready"
                );

            }, delay);

        },
        {
            once: true
        }
    );


    /* =====================================================
       MOBILE NAVIGATION
    ====================================================== */

    function closeMenu() {

        navToggle?.classList.remove(
            "active"
        );

        navMenu?.classList.remove(
            "open"
        );

        navToggle?.setAttribute(
            "aria-expanded",
            "false"
        );

        body.classList.remove(
            "menu-open"
        );

    }


    function openMenu() {

        navToggle?.classList.add(
            "active"
        );

        navMenu?.classList.add(
            "open"
        );

        navToggle?.setAttribute(
            "aria-expanded",
            "true"
        );

        body.classList.add(
            "menu-open"
        );

    }


    navToggle?.addEventListener(
        "click",
        () => {

            const isOpen =
                navMenu?.classList.contains(
                    "open"
                );

            if (isOpen) {

                closeMenu();

            } else {

                openMenu();

            }

        }
    );


    navMenu?.querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                closeMenu
            );

        });


    /* =====================================================
       HEADER STATE
    ====================================================== */

    function updateHeader() {

        const scroll =
            window.scrollY;

        header?.classList.toggle(
            "scrolled",
            scroll > 35
        );

        backTop?.classList.toggle(
            "show",
            scroll > 700
        );

    }


    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );

    updateHeader();


    /* =====================================================
       SCROLL PROGRESS
    ====================================================== */

    function updateScrollProgress() {

        const scrollTop =
            window.scrollY;

        const scrollHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const progress =
            scrollHeight > 0
                ? (scrollTop / scrollHeight) * 100
                : 0;

        if (scrollProgress) {

            scrollProgress.style.width =
                `${Math.min(progress, 100)}%`;

        }

    }


    window.addEventListener(
        "scroll",
        updateScrollProgress,
        {
            passive: true
        }
    );

    updateScrollProgress();


    /* =====================================================
       BACK TO TOP
    ====================================================== */

    backTop?.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior:
                    prefersReducedMotion
                        ? "auto"
                        : "smooth"

            });

        }
    );


    /* =====================================================
       THEME
    ====================================================== */

    const savedTheme =
        localStorage.getItem(
            "musa-theme"
        );


    if (
        savedTheme === "light"
    ) {

        body.classList.add(
            "light-theme"
        );

    }


    themeToggle?.addEventListener(
        "click",
        () => {

            body.classList.toggle(
                "light-theme"
            );

            const theme =
                body.classList.contains(
                    "light-theme"
                )
                    ? "light"
                    : "dark";

            localStorage.setItem(
                "musa-theme",
                theme
            );

        }
    );


    /* =====================================================
       TRANSLATIONS
    ====================================================== */

    const translations = {

        en: {

            "brand.name":
                "Musa al-Sadr",

            "brand.tag":
                "Life • Thought • Legacy",

            "nav.about":
                "About",

            "nav.timeline":
                "Timeline",

            "nav.legacy":
                "Legacy",

            "nav.quotes":
                "Thought",

            "nav.gallery":
                "Archive",

            "nav.books":
                "Library",

            "hero.eyebrow":
                "A LIFE THAT LEFT A MARK",

            "hero.titleLine1":
                "Imam",

            "hero.titleLine2":
                "Musa al-Sadr",

            "hero.description":
                "Scholar. Reformer. Humanitarian. A voice for dignity, dialogue and social justice whose influence continues to resonate across Lebanon and beyond.",

            "hero.discover":
                "Explore his life",

            "hero.timeline":
                "Explore timeline",

            "hero.figure":
                "A FIGURE OF MODERN LEBANON",

            "hero.scroll":
                "SCROLL TO EXPLORE",

            "facts.birth":
                "Born in Qom",

            "facts.lebanon":
                "Arrived in Lebanon",

            "facts.disappearance":
                "Disappeared in Libya",

            statement:
                "His story is not only the story of a religious scholar or political figure. It is the story of a man who sought to turn faith into service, knowledge into action, and difference into dialogue.",

            "about.kicker":
                "THE MAN",

            "about.title":
                "Beyond the public figure.",

            "about.p1":
                "Sayyid Musa al-Sadr was a Lebanese Shi'a cleric, intellectual and reformer who arrived in Lebanon in 1959 and quickly became one of the most influential voices in the country's public life.",

            "about.p2":
                "His work extended far beyond religious scholarship. He championed education, social development, healthcare, interfaith dialogue and the dignity of communities that had long remained marginalized.",

            "about.p3":
                "On 31 August 1978, Musa al-Sadr disappeared in Libya alongside Sheikh Muhammad Yaacoub and journalist Abbas Badreddine. Their fate remains unresolved.",

            "about.signature":
                "A legacy measured in people, not monuments.",

            "about.card1.title":
                "Scholar & Reformer",

            "about.card1.text":
                "Religious scholarship transformed into civic responsibility and social action.",

            "about.card2.title":
                "Bridge Builder",

            "about.card2.text":
                "Dialogue across communities became a central principle of his public mission.",

            "about.card3.title":
                "An Unanswered Question",

            "about.card3.text":
                "His disappearance remains one of the enduring unresolved chapters of Lebanon's modern history.",

            "numbers.birth":
                "Year of birth",

            "numbers.lebanon":
                "Arrival in Lebanon",

            "numbers.council":
                "Supreme Islamic Shiite Council",

            "numbers.amal":
                "Amal Movement",

            "timeline.kicker":
                "THE JOURNEY",

            "timeline.title":
                "A life in motion.",

            "timeline.intro":
                "From Qom to Tyre, from scholarship to social action, his journey unfolded across decades of extraordinary change.",

            "timeline.e1.title":
                "The beginning",

            "timeline.e1.text":
                "Born in Qom into a distinguished scholarly family with deep roots in Jabal Amel, Lebanon.",

            "timeline.e2.title":
                "A new mission",

            "timeline.e2.text":
                "He settles in Tyre and begins a broad programme of social, educational and institutional development.",

            "timeline.e3.title":
                "National leadership",

            "timeline.e3.text":
                "He becomes the first president of the Supreme Islamic Shiite Council in Lebanon.",

            "timeline.e4.title":
                "Organising a community",

            "timeline.e4.text":
                "He helps establish the Amal Movement amid growing social and security challenges.",

            "timeline.e5.title":
                "The disappearance",

            "timeline.e5.text":
                "Musa al-Sadr travels to Libya and disappears on 31 August alongside Sheikh Muhammad Yaacoub and journalist Abbas Badreddine.",

            "timeline.unresolved":
                "His fate remains unresolved.",

            "legacy.kicker":
                "THE LEGACY",

            "legacy.title":
                "Faith translated into service.",

            "legacy.card1.title":
                "Dignity",

            "legacy.card1.text":
                "A conviction that every person deserves dignity, opportunity and a meaningful place in society.",

            "legacy.card2.title":
                "Dialogue",

            "legacy.card2.text":
                "An enduring commitment to communication between Lebanon's religious and social communities.",

            "legacy.card3.title":
                "Service",

            "legacy.card3.text":
                "Scholarship was never separated from responsibility toward the wider community.",

            "quotes.kicker":
                "HIS THOUGHT",

            "quote.1":
                "Man is the brother of man; he is his mirror and his support.",

            "quote.2":
                "Religion must remain connected to the dignity and reality of human life.",

            "quote.3":
                "Dialogue does not erase differences; it teaches us how to live with them.",

            "quote.4":
                "Knowledge becomes meaningful when it becomes service.",

            "gallery.kicker":
                "THE ARCHIVE",

            "gallery.title":
                "Fragments of a memory.",

            "gallery.intro":
                "A visual collection preserving moments, symbols and the atmosphere surrounding his life and work.",

            "books.kicker":
                "THE LIBRARY",

            "books.title":
                "Read the ideas.",

            "books.subtitle":
                "Selected works, publications and resources related to Musa al-Sadr and his intellectual legacy.",

            "books.open":
                "Open",

            "books.note":
                "External resources may have their own access, copyright and availability conditions.",

            "book.resource":
                "External resource",

            "book.preview":
                "Publisher preview",

            "book.1.title":
                "Islam & Society — Musa al-Sadr",

            "book.2.title":
                "أحاديث السحر — موسى الصدر",

            "book.3.title":
                "أبجدية الحوار — موسى الصدر",

            "book.4.title":
                "الإسلام وثقافة القرن العشرين",

            "book.5.title":
                "The Vanished Imam — Fouad Ajami",

            "final.kicker":
                "A STORY THAT CONTINUES",

            "final.title":
                "Remember the man. Continue the conversation.",

            "final.button":
                "Return to beginning",

            "footer.tag":
                "Life • Thought • Legacy",

            "footer.copy":
                "Tribute site for educational purposes.",

            "footer.developed":
                "Designed & developed by Jawad Dabbous"

        },


        ar: {

            "brand.name":
                "موسى الصدر",

            "brand.tag":
                "الحياة • الفكر • الإرث",

            "nav.about":
                "عنه",

            "nav.timeline":
                "الخط الزمني",

            "nav.legacy":
                "الإرث",

            "nav.quotes":
                "الفكر",

            "nav.gallery":
                "الأرشيف",

            "nav.books":
                "المكتبة",

            "hero.eyebrow":
                "حياة تركت أثراً",

            "hero.titleLine1":
                "الإمام",

            "hero.titleLine2":
                "موسى الصدر",

            "hero.description":
                "عالم ومصلح وإنساني. صوت للكرامة والحوار والعدالة الاجتماعية، ولا يزال أثره حاضراً في لبنان وخارجه.",

            "hero.discover":
                "اكتشف حياته",

            "hero.timeline":
                "استكشف الخط الزمني",

            "hero.figure":
                "شخصية من لبنان الحديث",

            "hero.scroll":
                "مرر للاستكشاف",

            "facts.birth":
                "ولد في قم",

            "facts.lebanon":
                "وصل إلى لبنان",

            "facts.disappearance":
                "اختفى في ليبيا",

            statement:
                "ليست قصته قصة عالم دين أو شخصية سياسية فحسب، بل قصة رجل سعى إلى تحويل الإيمان إلى خدمة، والمعرفة إلى عمل، والاختلاف إلى حوار.",

            "about.kicker":
                "الإنسان",

            "about.title":
                "أبعد من الشخصية العامة.",

            "about.p1":
                "كان السيد موسى الصدر رجل دين ومفكراً ومصلحاً لبنانياً، وصل إلى لبنان عام 1959 وسرعان ما أصبح أحد أبرز الأصوات تأثيراً في الحياة العامة اللبنانية.",

            "about.p2":
                "تجاوز عمله حدود الدراسة الدينية، فاهتم بالتعليم والتنمية الاجتماعية والرعاية الصحية والحوار بين الأديان وكرامة المجتمعات التي عانت من التهميش.",

            "about.p3":
                "في 31 آب 1978 اختفى الإمام موسى الصدر في ليبيا إلى جانب الشيخ محمد يعقوب والصحفي عباس بدر الدين، ولا يزال مصيرهم مجهولاً.",

            "about.signature":
                "إرث يُقاس بالإنسان، لا بالنصب.",

            "about.card1.title":
                "عالم ومصلح",

            "about.card1.text":
                "حوّل العلم الديني إلى مسؤولية مدنية وعمل اجتماعي.",

            "about.card2.title":
                "باني الجسور",

            "about.card2.text":
                "كان الحوار بين المجتمعات أحد المحاور الأساسية في رسالته العامة.",

            "about.card3.title":
                "سؤال بلا جواب",

            "about.card3.text":
                "لا يزال اختفاؤه أحد الفصول المفتوحة في تاريخ لبنان الحديث.",

            "numbers.birth":
                "سنة الولادة",

            "numbers.lebanon":
                "الوصول إلى لبنان",

            "numbers.council":
                "المجلس الإسلامي الشيعي الأعلى",

            "numbers.amal":
                "حركة أمل",

            "timeline.kicker":
                "الرحلة",

            "timeline.title":
                "حياة في حركة.",

            "timeline.intro":
                "من قم إلى صور، ومن الدراسة إلى العمل الاجتماعي، امتدت رحلته عبر عقود حافلة بالتغيرات.",

            "timeline.e1.title":
                "البداية",

            "timeline.e1.text":
                "ولد في قم لعائلة علمية عريقة ذات جذور في جبل عامل في لبنان.",

            "timeline.e2.title":
                "مهمة جديدة",

            "timeline.e2.text":
                "استقر في صور وبدأ برنامجاً واسعاً من المبادرات الاجتماعية والتعليمية والمؤسساتية.",

            "timeline.e3.title":
                "القيادة الوطنية",

            "timeline.e3.text":
                "أصبح أول رئيس للمجلس الإسلامي الشيعي الأعلى في لبنان.",

            "timeline.e4.title":
                "تنظيم المجتمع",

            "timeline.e4.text":
                "ساهم في تأسيس حركة أمل وسط تحديات اجتماعية وأمنية متزايدة.",

            "timeline.e5.title":
                "الاختفاء",

            "timeline.e5.text":
                "سافر الإمام موسى الصدر إلى ليبيا واختفى في 31 آب مع الشيخ محمد يعقوب والصحفي عباس بدر الدين.",

            "timeline.unresolved":
                "لا يزال مصيره مجهولاً.",

            "legacy.kicker":
                "الإرث",

            "legacy.title":
                "إيمان تُرجم إلى خدمة.",

            "legacy.card1.title":
                "الكرامة",

            "legacy.card1.text":
                "إيمان بأن لكل إنسان حقاً في الكرامة والفرصة والمكانة الحقيقية في المجتمع.",

            "legacy.card2.title":
                "الحوار",

            "legacy.card2.text":
                "التزام دائم بالتواصل بين الطوائف والمجتمعات اللبنانية.",

            "legacy.card3.title":
                "الخدمة",

            "legacy.card3.text":
                "لم يفصل العلم عن المسؤولية تجاه المجتمع الأوسع.",

            "quotes.kicker":
                "فكره",

            "quote.1":
                "الإنسان أخو الإنسان؛ هو مرآته وعونه.",

            "quote.2":
                "يجب أن يبقى الدين مرتبطاً بكرامة الإنسان وواقعه.",

            "quote.3":
                "الحوار لا يلغي الاختلاف، بل يعلمنا كيف نعيش معه.",

            "quote.4":
                "تصبح المعرفة ذات معنى عندما تتحول إلى خدمة.",

            "gallery.kicker":
                "الأرشيف",

            "gallery.title":
                "شظايا من الذاكرة.",

            "gallery.intro":
                "مجموعة بصرية تحفظ لحظات ورموزاً وأجواءً مرتبطة بحياته وعمله.",

            "books.kicker":
                "المكتبة",

            "books.title":
                "اقرأ الأفكار.",

            "books.subtitle":
                "مجموعة مختارة من الأعمال والمنشورات والمصادر المرتبطة بالإمام موسى الصدر وإرثه الفكري.",

            "books.open":
                "فتح",

            "books.note":
                "قد تخضع المصادر الخارجية لشروط الوصول وحقوق النشر والتوفر الخاصة بها.",

            "book.resource":
                "مصدر خارجي",

            "book.preview":
                "معاينة الناشر",

            "book.1.title":
                "الإسلام والمجتمع — موسى الصدر",

            "book.2.title":
                "أحاديث السحر — موسى الصدر",

            "book.3.title":
                "أبجدية الحوار — موسى الصدر",

            "book.4.title":
                "الإسلام وثقافة القرن العشرين",

            "book.5.title":
                "الإمام المغيب — فؤاد عجمي",

            "final.kicker":
                "قصة مستمرة",

            "final.title":
                "تذكّر الرجل. واصل الحوار.",

            "final.button":
                "العودة إلى البداية",

            "footer.tag":
                "الحياة • الفكر • الإرث",

            "footer.copy":
                "موقع تكريمي لأغراض تعليمية.",

            "footer.developed":
                "تصميم وتطوير جواد دبوس"

        }

    };


    /* =====================================================
       LANGUAGE SWITCHER
    ====================================================== */

    let currentLanguage =
        localStorage.getItem(
            "musa-language"
        ) || "en";


    function switchLanguage(language) {

        const dictionary =
            translations[language];

        if (!dictionary) {
            return;
        }


        document
            .querySelectorAll("[data-i18n]")
            .forEach(element => {

                const key =
                    element.dataset.i18n;

                if (
                    Object.prototype
                        .hasOwnProperty
                        .call(
                            dictionary,
                            key
                        )
                ) {

                    element.textContent =
                        dictionary[key];

                }

            });


        html.setAttribute(
            "lang",
            language
        );


        html.setAttribute(
            "dir",
            language === "ar"
                ? "rtl"
                : "ltr"
        );


        currentLanguage =
            language;


        localStorage.setItem(
            "musa-language",
            language
        );


        if (langToggle) {

            langToggle.textContent =
                language === "en"
                    ? "AR"
                    : "EN";

        }

    }


    langToggle?.addEventListener(
        "click",
        () => {

            switchLanguage(
                currentLanguage === "en"
                    ? "ar"
                    : "en"
            );

        }
    );


    switchLanguage(
        currentLanguage
    );


    /* =====================================================
       SMOOTH ANCHOR LINKS
    ====================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetID =
                        link.getAttribute(
                            "href"
                        );

                    if (
                        !targetID ||
                        targetID === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetID
                        );

                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    target.scrollIntoView({

                        behavior:
                            prefersReducedMotion
                                ? "auto"
                                : "smooth",

                        block: "start"

                    });

                }
            );

        });


    /* =====================================================
       REVEAL OBSERVER
    ====================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );


    if (
        "IntersectionObserver" in window
    ) {

        const revealObserver =
            new IntersectionObserver(

                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target
                                    .classList
                                    .add(
                                        "visible"
                                    );

                                revealObserver
                                    .unobserve(
                                        entry.target
                                    );

                            }

                        }
                    );

                },

                {
                    threshold: .12,

                    rootMargin:
                        "0px 0px -50px 0px"
                }

            );


        revealElements.forEach(
            element =>
                revealObserver.observe(
                    element
                )
        );

    } else {

        revealElements.forEach(
            element =>
                element.classList.add(
                    "visible"
                )
        );

    }


    /* =====================================================
       SIGNATURE OBSERVER
    ====================================================== */

    const signature =
        document.querySelector(
            ".about-signature"
        );


    if (
        signature &&
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(

                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                signature
                                    .classList
                                    .add(
                                        "visible"
                                    );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },

                {
                    threshold: .4
                }

            );


        observer.observe(
            signature
        );

    }


    /* =====================================================
       ACTIVE NAVIGATION
    ====================================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            ".main-nav a"
        );


    if (
        "IntersectionObserver" in window
    ) {

        const sectionObserver =
            new IntersectionObserver(

                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                const id =
                                    entry.target.id;


                                navLinks.forEach(
                                    link => {

                                        link.classList.toggle(

                                            "active",

                                            link.getAttribute(
                                                "href"
                                            ) ===
                                            `#${id}`

                                        );

                                    }

                                );

                            }

                        }
                    );

                },

                {
                    rootMargin:
                        "-40% 0px -50% 0px"
                }

            );


        sections.forEach(
            section =>
                sectionObserver.observe(
                    section
                )
        );

    }


    /* =====================================================
       HERO PARTICLES
    ====================================================== */

    const particleContainer =
        document.getElementById(
            "heroParticles"
        );


    if (
        particleContainer &&
        !prefersReducedMotion
    ) {

        const particleCount =
            window.innerWidth < 700
                ? 25
                : 65;


        const fragment =
            document.createDocumentFragment();


        for (
            let i = 0;
            i < particleCount;
            i++
        ) {

            const particle =
                document.createElement(
                    "span"
                );


            particle.className =
                "hero-particle";


            particle.style.setProperty(
                "--x",
                `${Math.random() * 100}vw`
            );


            particle.style.setProperty(
                "--drift",
                `${(
                    Math.random() - .5
                ) * 180}px`
            );


            particle.style.setProperty(
                "--duration",
                `${8 + Math.random() * 15}s`
            );


            particle.style.animationDelay =
                `${-Math.random() * 15}s`;


            particle.style.opacity =
                `${.12 + Math.random() * .4}`;


            fragment.appendChild(
                particle
            );

        }


        particleContainer.appendChild(
            fragment
        );

    }


    /* =====================================================
       COUNTERS
    ====================================================== */

    const counters =
        document.querySelectorAll(
            ".counter"
        );


    function animateCounter(
        counter
    ) {

        const target =
            Number(
                counter.dataset.target
            );


        if (
            prefersReducedMotion
        ) {

            counter.textContent =
                target.toString();

            return;

        }


        const duration =
            1500;

        const start =
            performance.now();


        function tick(now) {

            const elapsed =
                now - start;


            const progress =
                Math.min(
                    elapsed / duration,
                    1
                );


            const eased =
                1 -
                Math.pow(
                    1 - progress,
                    4
                );


            counter.textContent =
                Math.floor(
                    eased * target
                );


            if (
                progress < 1
            ) {

                requestAnimationFrame(
                    tick
                );

            } else {

                counter.textContent =
                    target.toString();

            }

        }


        requestAnimationFrame(
            tick
        );

    }


    if (
        "IntersectionObserver" in window
    ) {

        const counterObserver =
            new IntersectionObserver(

                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                !entry.isIntersecting
                            ) {
                                return;
                            }


                            animateCounter(
                                entry.target
                            );


                            counterObserver
                                .unobserve(
                                    entry.target
                                );

                        }
                    );

                },

                {
                    threshold: .6
                }

            );


        counters.forEach(
            counter =>
                counterObserver.observe(
                    counter
                )
        );

    }


    /* =====================================================
       TIMELINE PROGRESS
    ====================================================== */

    const timeline =
        document.querySelector(
            ".timeline"
        );


    const timelineProgress =
        document.querySelector(
            ".timeline-progress"
        );


    if (
        timeline &&
        timelineProgress &&
        !prefersReducedMotion
    ) {

        let timelineTicking =
            false;


        function updateTimeline() {

            const rect =
                timeline.getBoundingClientRect();


            const viewport =
                window.innerHeight;


            const start =
                viewport * .8;


            const end =
                viewport * .2;


            const distance =
                rect.height;


            const passed =
                start - rect.top;


            let progress =
                passed /
                (
                    distance -
                    (start - end)
                );


            progress =
                Math.max(
                    0,
                    Math.min(
                        1,
                        progress
                    )
                );


            timelineProgress.style.height =
                `${progress * 100}%`;


            timelineTicking =
                false;

        }


        window.addEventListener(
            "scroll",
            () => {

                if (
                    !timelineTicking
                ) {

                    requestAnimationFrame(
                        updateTimeline
                    );

                    timelineTicking =
                        true;

                }

            },
            {
                passive: true
            }
        );


        updateTimeline();

    } else if (
        timelineProgress
    ) {

        timelineProgress.style.height =
            "100%";

    }


    /* =====================================================
       QUOTE SLIDER
    ====================================================== */

    const quoteSlides =
        Array.from(
            document.querySelectorAll(
                ".quote-slide"
            )
        );


    const quotePrev =
        document.getElementById(
            "quotePrev"
        );


    const quoteNext =
        document.getElementById(
            "quoteNext"
        );


    const quoteProgress =
        document.getElementById(
            "quoteProgress"
        );


    let currentQuote =
        0;


    let quoteTimer =
        null;


    function showQuote(index) {

        if (
            !quoteSlides.length
        ) {
            return;
        }


        currentQuote =
            (
                index +
                quoteSlides.length
            ) %
            quoteSlides.length;


        quoteSlides.forEach(
            (slide, i) => {

                slide.classList.toggle(
                    "active",
                    i === currentQuote
                );

            }
        );


        if (
            quoteProgress
        ) {

            quoteProgress.style.width =
                `${
                    (
                        (
                            currentQuote + 1
                        ) /
                        quoteSlides.length
                    ) * 100
                }%`;

        }

    }


    function nextQuote() {

        showQuote(
            currentQuote + 1
        );

    }


    function previousQuote() {

        showQuote(
            currentQuote - 1
        );

    }


    function restartQuoteTimer() {

        if (
            prefersReducedMotion
        ) {
            return;
        }


        clearInterval(
            quoteTimer
        );


        quoteTimer =
            setInterval(
                nextQuote,
                7000
            );

    }


    quoteNext?.addEventListener(
        "click",
        () => {

            nextQuote();

            restartQuoteTimer();

        }
    );


    quotePrev?.addEventListener(
        "click",
        () => {

            previousQuote();

            restartQuoteTimer();

        }
    );


    showQuote(0);

    restartQuoteTimer();


    /* =====================================================
       PAUSE QUOTES WHEN TAB IS HIDDEN
    ====================================================== */

    document.addEventListener(
        "visibilitychange",
        () => {

            if (
                document.hidden
            ) {

                clearInterval(
                    quoteTimer
                );

            } else {

                restartQuoteTimer();

            }

        }
    );


    /* =====================================================
       GALLERY LIGHTBOX
    ====================================================== */

    const galleryItems =
        document.querySelectorAll(
            ".gallery-item"
        );


    const lightbox =
        document.getElementById(
            "lightbox"
        );


    const lightboxImage =
        document.getElementById(
            "lightboxImage"
        );


    const lightboxCaption =
        document.getElementById(
            "lightboxCaption"
        );


    const lightboxClose =
        document.getElementById(
            "lightboxClose"
        );


    function openLightbox(
        image,
        caption
    ) {

        if (
            !lightbox ||
            !lightboxImage
        ) {
            return;
        }


        lightboxImage.src =
            image;


        lightboxImage.alt =
            caption;


        if (
            lightboxCaption
        ) {

            lightboxCaption.textContent =
                caption;

        }


        lightbox.classList.add(
            "open"
        );


        lightbox.setAttribute(
            "aria-hidden",
            "false"
        );


        body.style.overflow =
            "hidden";

    }


    function closeLightbox() {

        if (
            !lightbox
        ) {
            return;
        }


        lightbox.classList.remove(
            "open"
        );


        lightbox.setAttribute(
            "aria-hidden",
            "true"
        );


        body.style.overflow =
            "";

    }


    galleryItems.forEach(
        item => {

            item.addEventListener(
                "click",
                () => {

                    openLightbox(

                        item.dataset.image,

                        item.dataset.caption ||
                            "Archive"

                    );

                }
            );

        }
    );


    lightboxClose?.addEventListener(
        "click",
        closeLightbox
    );


    lightbox?.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                lightbox
            ) {

                closeLightbox();

            }

        }
    );


    /* =====================================================
       MAGNETIC BUTTONS
    ====================================================== */

    if (
        finePointer &&
        !prefersReducedMotion
    ) {

        const magneticButtons =
            document.querySelectorAll(
                ".magnetic-button"
            );


        magneticButtons.forEach(
            button => {

                button.addEventListener(
                    "mousemove",
                    event => {

                        const rect =
                            button.getBoundingClientRect();


                        const x =
                            event.clientX -
                            rect.left;


                        const y =
                            event.clientY -
                            rect.top;


                        const centerX =
                            rect.width / 2;


                        const centerY =
                            rect.height / 2;


                        const moveX =
                            (
                                x -
                                centerX
                            ) * .12;


                        const moveY =
                            (
                                y -
                                centerY
                            ) * .12;


                        button.style.transform =
                            `translate(
                                ${moveX}px,
                                ${moveY}px
                            )`;


                        button.style.setProperty(
                            "--mx",
                            `${x}px`
                        );


                        button.style.setProperty(
                            "--my",
                            `${y}px`
                        );

                    }
                );


                button.addEventListener(
                    "mouseleave",
                    () => {

                        button.style.transform =
                            "";

                    }
                );

            }
        );

    }


    /* =====================================================
       CUSTOM CURSOR
    ====================================================== */

    const cursor =
        document.getElementById(
            "cursor"
        );


    const cursorFollower =
        document.getElementById(
            "cursorFollower"
        );


    if (
        cursor &&
        cursorFollower &&
        finePointer &&
        !prefersReducedMotion
    ) {

        let mouseX =
            window.innerWidth / 2;


        let mouseY =
            window.innerHeight / 2;


        let followerX =
            mouseX;


        let followerY =
            mouseY;


        window.addEventListener(
            "mousemove",
            event => {

                mouseX =
                    event.clientX;

                mouseY =
                    event.clientY;


                cursor.style.left =
                    `${mouseX}px`;


                cursor.style.top =
                    `${mouseY}px`;

            },
            {
                passive: true
            }
        );


        function animateCursor() {

            followerX +=
                (
                    mouseX -
                    followerX
                ) * .13;


            followerY +=
                (
                    mouseY -
                    followerY
                ) * .13;


            cursorFollower.style.left =
                `${followerX}px`;


            cursorFollower.style.top =
                `${followerY}px`;


            requestAnimationFrame(
                animateCursor
            );

        }


        animateCursor();


        const interactiveElements =
            document.querySelectorAll(
                "a, button, .gallery-item"
            );


        interactiveElements.forEach(
            element => {

                element.addEventListener(
                    "mouseenter",
                    () => {

                        body.classList.add(
                            "cursor-active"
                        );

                    }
                );


                element.addEventListener(
                    "mouseleave",
                    () => {

                        body.classList.remove(
                            "cursor-active"
                        );

                    }
                );

            }
        );

    }


    /* =====================================================
       HERO PARALLAX
    ====================================================== */

    const heroArt =
        document.querySelector(
            ".hero-visual"
        );


    const heroGrid =
        document.querySelector(
            ".hero-grid"
        );


    if (
        heroArt &&
        finePointer &&
        !prefersReducedMotion
    ) {

        let raf =
            null;


        let targetX =
            0;


        let targetY =
            0;


        let currentX =
            0;


        let currentY =
            0;


        function renderParallax() {

            currentX +=
                (
                    targetX -
                    currentX
                ) * .08;


            currentY +=
                (
                    targetY -
                    currentY
                ) * .08;


            heroArt.style.transform =
                `translate3d(
                    ${currentX * 12}px,
                    ${currentY * 12}px,
                    0
                )`;


            if (
                heroGrid
            ) {

                heroGrid.style.transform =
                    `translate3d(
                        ${currentX * -8}px,
                        ${currentY * -8}px,
                        0
                    )`;

            }


            raf =
                requestAnimationFrame(
                    renderParallax
                );

        }


        window.addEventListener(
            "mousemove",
            event => {

                targetX =
                    event.clientX /
                    window.innerWidth -
                    .5;


                targetY =
                    event.clientY /
                    window.innerHeight -
                    .5;

            },
            {
                passive: true
            }
        );


        renderParallax();

    }


    /* =====================================================
       KEYBOARD ACCESSIBILITY
    ====================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeMenu();

                closeLightbox();

            }

        }
    );


    /* =====================================================
       RESIZE
    ====================================================== */

    let resizeTimer;


    window.addEventListener(
        "resize",
        () => {

            clearTimeout(
                resizeTimer
            );


            resizeTimer =
                setTimeout(
                    () => {

                        if (
                            window.innerWidth >
                            760
                        ) {

                            closeMenu();

                        }

                    },
                    150
                );

        }
    );


});
