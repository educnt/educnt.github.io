document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Récupération des utilisateurs stockés dans le localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.username === username && u.password === password);
    
    // Vérification de l'état du mode de mise à jour
    const updateMode = JSON.parse(localStorage.getItem("updateMode")) || false;

    if (user) {
        // Vérification du mode de mise à jour
        if (updateMode) {
            alert("Le mode mise à jour est activé. Vous ne pouvez pas accéder aux tableaux de bord.");
            window.location.href = "maintenance.html"; // Redirection vers la page d'alerte
            return;
        }
        
        // Stockage de l'utilisateur courant et redirection vers le tableau de bord correspondant
        localStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = `dashboard_${user.role}.html`; // Redirection vers le tableau de bord correspondant
    } else {
        alert("Nom d'utilisateur ou mot de passe incorrect.");
    }
});
