let joketext = document.getElementById("jokeText");

let jokebtn = document.getElementById("jokeBtn");

let spin = document.getElementById("spinner");

let url = "https://apis.ccbp.in/jokes/random";

let options = {
    method: "GET"
}



function getRandom() {
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let randomJoke = jsonData.value;

            joketext.textContent = randomJoke;
        });
}

jokebtn.addEventListener("click", getRandom);
