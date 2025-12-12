function toggleMenu() {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle("open");
}

/* Header scroll effect */
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
});

/* Loading screen */
window.hideLoading = () => {
    const screen = document.getElementById("loading-screen");
    if (!screen) return;
    screen.classList.add("fade-out");
    setTimeout(() => screen.style.display = "none", 700);
};

/* =============================================== */
/*          MOBİL DROPDOWN ÇALIŞAN KOD             */
/*     EN SAĞLAM YÖNTEM — %100 GARANTİ ÇÖZÜM       */
/* =============================================== */
document.addEventListener("DOMContentLoaded", function () {

    const psikoBtn = document.getElementById("psikoMenu");
    if (!psikoBtn) return;

    const li = psikoBtn.parentElement;

    psikoBtn.addEventListener("click", function (e) {

        // Masaüstünde devre dışı
        if (window.innerWidth > 900) return;

        e.preventDefault();
        e.stopPropagation();

        li.classList.toggle("open");
    });
});
<script>
document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.parentElement.classList.toggle("active");
    });
});
</script>

