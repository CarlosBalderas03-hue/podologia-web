// ============================================
// SCRIPT BASE - FASE 4 (PRIMERA IMPLEMENTACIÓN)
// Única funcionalidad: abrir/cerrar el menú de navegación en móvil.
// ============================================

const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const abierto = mainNav.classList.toggle("abierto");
    navToggle.setAttribute("aria-expanded", abierto ? "true" : "false");
  });

  // Cierra el menú al seleccionar un enlace (útil en móvil)
  mainNav.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
      mainNav.classList.remove("abierto");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}
