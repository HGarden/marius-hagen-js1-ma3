// Question 2

const loading = document.querySelector(".loader");
const gameContainer = document.querySelector(".game-container");

setTimeout(function () {
  loading.classList.remove("loading-indicator");

  const url =
    "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=5067dca06ca24637ae819d2d3d347c10";

  async function getData() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const games = data.results;

      gameContainer.innerHTML = "";

      for (let i = 0; i < games.length; i++) {
        if (i === 8) {
          break;
        }

        gameContainer.innerHTML += `<div>Name: ${games[i].name} - Rating: ${games[i].rating} - Tags: ${games[i].tags.length}</div>`;
      }
    } catch (error) {
      gameContainer.innerHTML = "Error!";
    }
  }

  getData();
}, 1000);
