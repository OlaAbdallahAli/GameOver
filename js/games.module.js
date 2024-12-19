import { UI } from "./ui.module.js";
import { Details } from "./details.module.js";

let choice;

let loading = document.querySelector(".loading");
let finalResponse;
// /************Events ********/

export class Games {
  constructor() {
    this.getApi("mmorpg");
    choice = document.querySelectorAll(".nav-item a");
    for (let item of choice) {
      item.addEventListener("click", (e) => {
        document.querySelector(".nav-item .active").classList.remove("active");
        e.target.classList.add("active");
        this.getApi(e.target.dataset.category);
      });
    }
    this.ui = new UI();
  }

  async getApi(category) {
    loading.classList.remove("d-none");
    const url = ` https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "77e3945b35msh27cc5eaf7017af8p1c7e59jsn9414a405f67f",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      finalResponse = await response.json();
      console.log(finalResponse);
      this.ui.displayGames(finalResponse);
    } catch (error) {
      console.error(error);
    }

    this.ui.displayGamesDetails(finalResponse);
    this.startEvent();
    loading.classList.add("d-none");
  }
  startEvent() {
    document.querySelectorAll(".card").forEach((item) => {
      item.addEventListener("click", () => {
        const id = item.dataset.id;
        this.showLightContainer(id);
      });
    });
  }

  showLightContainer(idGame) {
    const details = new Details(idGame);
    document.querySelector(".games").classList.add("d-none");
    document.querySelector(".light-container").classList.remove("d-none");
  }
}
