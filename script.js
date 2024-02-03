// ON CLICK EVENTS ELEMENTS
const peopleImage = document.querySelector(".peopleImage");
const shipsImage = document.querySelector(".shipsImage");


// FETCH PEOPLE
peopleImage.addEventListener("click", function() {
    fetch(`https://swapi.dev/api/people/`)
    .then(response => response.json())
    .then(data => {
        const people = data.results;
        console.log(people);
        createPeopleTable(people);
    })
    .catch(error => console.error('Error fetching data:', error));
});

// FETCH SHIPS
shipsImage.addEventListener("click", function() {
    fetch("https://swapi.dev/api/starships")
    .then((res) => res.json())
    .then((data) => {
        const ships = data.results;
        console.log(ships);
    
        shipsImage.addEventListener("click", function () {
            createShipsTable(ships);
        });
    })
});



// CREATE PEOPLE TABLE
function createPeopleTable(people) {
    const tableContainer = document.querySelector(".peopleTable");
    
    const table = document.createElement("table");
    
    const tableHeader = document.createElement("thead");
    const headerRow = document.createElement("tr");
    headerRow.innerHTML = `
    <th>Name</th>
    <th>Height</th>
    <th>Mass</th>
    <th>Gender</th>
    <th>Birth Year</th>
    `;
    tableHeader.appendChild(headerRow);
    table.appendChild(tableHeader);
    
    
    const tableBody = document.createElement("tbody");
    people.forEach(element => {
        const person = element;
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${person.name}</td>
        <td>${person.height}</td>
        <td>${person.mass}</td>
        <td>${person.gender}</td>
        <td>${person.birth_year}</td>
        `;
        tableBody.appendChild(row);
    });
    const buttonNext = document.createElement("button");
    buttonNext.innerText = "Next";
    table.appendChild(tableBody);
    
    tableContainer.appendChild(table);
}

// CREATE SHIPS TABLE
function createShipsTable(ships) {
    const tableContainer = document.querySelector(".shipsTable");
    
    const table = document.createElement("table");
    
    const tableHeader = document.createElement("thead");
    const headerRow = document.createElement("tr");
    headerRow.innerHTML = `
    <th>Name</th>
    <th>Model</th>
    <th>Manufacturer</th>
    <th>Crew</th>
    <th>Passengers</th>
    <th>Cargo</th>
    <th>Cost</th>
    <th>People Capacity</th>
    <th>Class</th>
    `;
    tableHeader.appendChild(headerRow);
            table.appendChild(tableHeader);
            
            const tableBody = document.createElement("tbody");
            for (let i = 0; i < ships.length; i++) {
                const ship = ships[i];
                const row = document.createElement("tr");
                row.innerHTML = `
                <td>${ship.name}</td>
                <td>${ship.model}</td>
                <td>${ship.manufacturer}</td>
                <td>${ship.cost_in_credits}</td>
                <td>${ship.crew}</td>
                <td>${ship.passengers}</td>
                <td>${ship.cargo_capacity}</td>
                <td>${ship.crew}</td>
                <td>${ship.starship_class}</td>
                `;
                tableBody.appendChild(row);
            }
            
            ships.forEach(element => {
                const ship = element;
                const row = document.createElement("tr");
                row.innerHTML = `
                <td>${ship.name}</td>
                <td>${ship.model}</td>
                <td>${ship.manufacturer}</td>
                <td>${ship.cost_in_credits}</td>
                <td>${ship.crew}</td>
                <td>${ship.passengers}</td>
                <td>${ship.cargo_capacity}</td>
                <td>${ship.crew}</td>
                <td>${ship.starship_class}</td>
                `;
                tableBody.appendChild(row);
            });
            table.appendChild(tableBody);
            
            tableContainer.appendChild(table);
}