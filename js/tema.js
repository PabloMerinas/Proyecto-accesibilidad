export function toggleColorMode() {
    const btn = document.getElementById("btnSwitch");
    const mode = document.documentElement.getAttribute('data-bs-theme');

    if (mode === 'dark') {
        document.documentElement.setAttribute('data-bs-theme', 'light');
        btn.textContent = "Tema: Claro";
        btn.setAttribute("aria-label", "Se ha cambiado al modo claro");
    } else {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        btn.textContent = "Tema: Oscuro";
        btn.setAttribute("aria-label", "Se ha cambiado al modo oscuro");
        btn.style.border = "1px solid white";
    }

}
