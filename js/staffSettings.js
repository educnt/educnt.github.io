// Chargement de l'état du mode de mise à jour au démarrage
document.addEventListener("DOMContentLoaded", function() {
    const updateMode = JSON.parse(localStorage.getItem("updateMode")) || false;
    document.getElementById("updateMode").checked = updateMode;
    displayUpdateStatus(updateMode);
});

// Enregistrement de l'état du mode de mise à jour
document.getElementById("saveUpdateMode").addEventListener("click", function() {
    const updateMode = document.getElementById("updateMode").checked;
    localStorage.setItem("updateMode", JSON.stringify(updateMode));
    displayUpdateStatus(updateMode);
});

// Affichage du statut du mode de mise à jour
function displayUpdateStatus(isUpdating) {
    const statusDiv = document.getElementById("updateStatus");
    if (isUpdating) {
        statusDiv.innerText = "Le mode mise à jour est activé. Les utilisateurs ne peuvent pas accéder aux tableaux de bord.";
    } else {
        statusDiv.innerText = "Le mode mise à jour est désactivé. Les tableaux de bord sont accessibles.";
    }
}
