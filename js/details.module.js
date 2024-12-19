import { UI } from "./ui.module.js";
let loading = document.querySelector(".loading");
let lightContainer = document.querySelector(".light-container");
let header = document.querySelector(".games");
let finalResponse;

export class Details {
  constructor(id) {
    this.ui = new UI();
    document.getElementById("btnClose").addEventListener("click", () => {
      header.classList.remove("d-none");
      lightContainer.classList.add("d-none");
      // alert("hello");
      window.location.reload;
    });

    this.getGameDetails(id);
  }

  //to call API for game details
  async getGameDetails(gameId) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "3827b36291msh3178fd4760d4b23p1cb019jsn8285e2e52193",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      loading.classList.remove("d-none");
      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`,
        options
      );
      finalResponse = await response.json();
      console.log(finalResponse);

      this.ui.displayGamesDetails(finalResponse);
    } catch (error) {
      console.error(error);
    } finally {
      loading.classList.add("d-none");
    }
  }
}
