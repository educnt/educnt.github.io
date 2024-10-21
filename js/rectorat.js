const schools = [];

document.getElementById("createSchoolForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const schoolName = document.getElementById("schoolName").value;
    const schoolCity = document.getElementById("schoolCity").value;

    const newSchool = { name: schoolName, city: schoolCity };
    schools.push(newSchool);
    saveSchools();
    displaySchools();
});

function displaySchools() {
    const schoolList = document.getElementById('schoolList');
    schoolList.innerHTML = '';

    schools.forEach((school, index) => {
        const schoolItem = document.createElement('div');
        schoolItem.innerHTML = `<h3>${school.name}</h3>
                                <p>Ville: ${school.city}</p>
                                <button onclick="deleteSchool(${index})">Supprimer</button>`;
        schoolList.appendChild(schoolItem);
    });
}

function deleteSchool(index) {
    schools.splice(index, 1);
    saveSchools();
    displaySchools();
}

function saveSchools() {
    // Sauvegarde des établissements (simulé ici)
    console.log('Établissements sauvegardés:', schools);
}

function loadSchools() {
    const sampleSchools = [
        { name: 'Lycée Jean Moulin', city: 'Paris' },
        { name: 'Collège Victor Hugo', city: 'Lyon' }
    ];
    sampleSchools.forEach(school => schools.push(school));
    displaySchools();
}

loadSchools();
