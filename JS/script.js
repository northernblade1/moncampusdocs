document.addEventListener("DOMContentLoaded", () => {
    
    const li1 = document.getElementById("li1");
    const ul1 = document.getElementById("ul1");
    
    const li2 = document.getElementById("li2");
    const ul2 = document.getElementById("ul2");

    const toggleMenu = (trigger, menu) => {
        if (trigger && menu) {
            trigger.addEventListener('mouseover', () => menu.style.display = "block");
            trigger.addEventListener('mouseout', () => menu.style.display = "none");
        }
    };

    toggleMenu(li1, ul1);
    toggleMenu(li2, ul2);


    const html = document.documentElement;
    const themeBtn = document.getElementById("theme-toggle");
    const introSection = document.getElementById("intro"); 

    const applyTheme = (isDark) => {
        if (isDark) {
            html.classList.add("dark");
            if (introSection) {
                introSection.classList.remove("hero1");
                introSection.classList.add("hero2");
            }
        } else {
            html.classList.remove("dark");
            if (introSection) {
                introSection.classList.remove("hero2");
                introSection.classList.add("hero1");
            }
        }
    };

    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "1") {
        applyTheme(true);
    } else {
        applyTheme(false);
    }

    if (themeBtn) 
    {
        themeBtn.addEventListener("click", () =>             
        {
            if (html.classList.contains("dark")) {
                applyTheme(false);
                localStorage.setItem("darkMode", "0");
            } else {
                applyTheme(true);
                localStorage.setItem("darkMode", "1");
            }
        });
    }

    const btnTop = document.getElementById("btn-top");

    if (btnTop) {
        window.addEventListener("scroll", () => {
            if (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
                btnTop.style.display = "flex";
            } else {
                btnTop.style.display = "none";
            }
        });

        btnTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});