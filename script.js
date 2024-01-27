const prevButton = document.querySelector(".prevButton");
const nextButton = document.querySelector(".nextButton");

let pageIndexNum = 0;

// fetch("https://swapi.dev/api/")
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {

// });

// console.log(humanResources);


fetch('https://swapi.dev/api/people/')
        .then(response => response.json())
        .then(data => {
            const people = data.results;
            const tableContainer = document.getElementById('peopleTable');
            
            // Create table element
            const table = document.createElement('table');
            table.setAttribute('border', '1');

            // Create table header
            const tableHeader = document.createElement('thead');
            const headerRow = document.createElement('tr');
            headerRow.innerHTML = `
                <th>Name</th>
                <th>Height</th>
                <th>Mass</th>
                <th>Gender</th>
                <!-- Add more headers based on the data you want to display -->
            `;
            tableHeader.appendChild(headerRow);
            table.appendChild(tableHeader);

            // Create table body
            const tableBody = document.createElement('tbody');
            for (let i = 0; i < people.length; i++) {
                const person = people[i];
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${person.name}</td>
                    <td>${person.height}</td>
                    <td>${person.mass}</td>
                    <td>${person.gender}</td>
                    <!-- Add more cells based on the data you want to display -->
                `;
                tableBody.appendChild(row);
            }
            table.appendChild(tableBody);

            // Append table to the container
            tableContainer.appendChild(table);
        })
        .catch(error => console.error('Error fetching data:', error));