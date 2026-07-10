AOS.init({ duration: 1000, once: true });

window.addEventListener("scroll", function () {
    const nav = document.querySelector(".navbar");
    nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Filtre des projets par catégorie
const filterBtns = document.querySelectorAll(".filter-btn");
const projectItems = document.querySelectorAll(".project-item");

filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        filterBtns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");

        const filter = btn.dataset.filter;
        projectItems.forEach(function (item) {
            const show = filter === "all" || item.dataset.cat === filter;
            item.style.display = show ? "" : "none";
        });
    });
});
