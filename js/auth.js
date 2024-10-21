document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch('/data/users.json')
        .then(response => response.json())
        .then(users => {
            const user = users.find(u => u.username === username && u.password === password);

            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                switch (user.role) {
                    case 'eleve':
                        window.location.href = '/dashboard/eleve.html';
                        break;
                    case 'professeur':
                        window.location.href = '/dashboard/professeur.html';
                        break;
                    case 'administration':
                        window.location.href = '/dashboard/administration.html';
                        break;
                    case 'rectorat':
                        window.location.href = '/dashboard/rectorat.html';
                        break;
                    case 'cpe':
                        window.location.href = '/dashboard/cpe.html';
                        break;
                    default:
                        document.getElementById("loginError").textContent = "Rôle non reconnu.";
                }
            } else {
                document.getElementById("loginError").textContent = "Nom d'utilisateur ou mot de passe incorrect.";
            }
        });
});
