// Espera a que el documento se cargue completamente
document.addEventListener("DOMContentLoaded", function() {
    // Referencia al botón de cambio de modo
    const darkModeButton = document.getElementById("darkModeBtn");

    // Verifica si el modo oscuro está habilitado previamente (en el almacenamiento local)
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeButton.textContent = "Switch to Light Mode";
    }

    // Función para cambiar entre el modo oscuro y el modo claro
    darkModeButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        // Guarda el estado en el almacenamiento local para recordar la preferencia
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeButton.textContent = "Switch to Light Mode";
        } else {
            localStorage.removeItem("darkMode");
            darkModeButton.textContent = "Switch to Dark Mode";
        }
    });
});
