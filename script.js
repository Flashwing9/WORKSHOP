// ON CLICK EVENTS ELEMENTS
const prevButton = document.querySelector(".prevButton");
const nextButton = document.querySelector(".nextButton");
const peopleImage = document.querySelector(".peopleImage");
const shipsImage = document.querySelector(".shipsImage");


// FETCH PEOPLE
fetch(`https://swapi.dev/api/people/`)
.then(response => response.json())
.then(data => {
    const people = data.results;
    console.log(people, "there are no errors");
    // console.log(data.next);

    nextButton.addEventListener("click", function (data) {
        if (data.next) {
            // console.log("it fucking worked");
        }
    });

    peopleImage.addEventListener("click", function () {
        createPeopleTable(people);
    });
})
.catch(error => console.error('Error fetching data:', error));

// FETCH SHIPS
fetch("https://swapi.dev/api/starships")
.then((res) => res.json())
.then((data) => {
    const ships = data.results;
    console.log(ships, "there are no errors");

    shipsImage.addEventListener("click", function () {
        createShipsTable(ships);
    });
})


// CREATE PEOPLE TABLE
function createPeopleTable(people) {
    const tableContainer = document.querySelector(".peopleTable");
    
    const table = document.createElement('table');
    
    const tableHeader = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
    <th>Name</th>
    <th>Height</th>
    <th>Mass</th>
    <th>Gender</th>
    `;
    tableHeader.appendChild(headerRow);
    table.appendChild(tableHeader);
    
    const tableBody = document.createElement('tbody');
    for (let i = 0; i < people.length; i++) {
        const person = people[i];
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${person.name}</td>
        <td>${person.height}</td>
        <td>${person.mass}</td>
        <td>${person.gender}</td>
        `;
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    
    tableContainer.appendChild(table);
}

// CREATE SHIPS TABLE
function createShipsTable(ships) {
    const tableContainer = document.querySelector(".shipsTable");
    
    const table = document.createElement('table');
    
    const tableHeader = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
    <th>Name</th>
    <th>Crew</th>
    <th>Passengers</th>
    <th>Cargo</th>
    `;
    tableHeader.appendChild(headerRow);
            table.appendChild(tableHeader);
            
            const tableBody = document.createElement('tbody');
            for (let i = 0; i < ships.length; i++) {
                const ship = ships[i];
                const row = document.createElement('tr');
                row.innerHTML = `
                <td>${ship.name}</td>
                <td>${ship.crew}</td>
                <td>${ship.passengers}</td>
                <td>${ship.cargo}</td>
                `;
                tableBody.appendChild(row);
            }
            table.appendChild(tableBody);
            
            tableContainer.appendChild(table);
}