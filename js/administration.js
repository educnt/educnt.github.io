let users = [];

document.getElementById("createAccountForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    const newUser = { username, password, role };
    users.push(newUser);
    saveUsers();
    displayUsers();
});

function displayUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';

    users.forEach((user, index) => {
        const userItem = document.createElement('div');
        userItem.innerHTML = `<h3>${user.username} (${user.role})</h3>
                              <button onclick="deleteUser(${index})">Supprimer</button>`;
        userList.appendChild(userItem);
    });
}

function deleteUser(index) {
    users.splice(index, 1);
    saveUsers();
    displayUsers();
}

function saveUsers() {
    console.log('Utilisateurs sauvegardés:', users);
}

function loadUsers() {
    const sampleUsers = [
        { username: 'eleve1', password: '1234', role: 'eleve' },
        { username: 'prof1', password: '1234', role: 'professeur' },
        { username: 'cpe1', password: '1234', role: 'cpe' }
    ];
    sampleUsers.forEach(user => users.push(user));
    displayUsers();
}

loadUsers();
