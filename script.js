const prevButton = document.querySelector(".prevButton");
const nextButton = document.querySelector(".nextButton");

let pageIndexNum = 0;

fetch("https://swapi.dev/api/")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
});

