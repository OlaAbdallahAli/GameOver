let rowData = document.getElementById("rowData");
export class UI {
  constructor() {}
  displayGames(data) {
    let box = "";
    for (let i = 0; i < data.length; i++) {
      box += ` <div class="col-md-3">
            <div data-id="${
              data[i].id
            }" class="card h-100 bg-transparent" role="button" ">
            <div class="card-body">
              <figure class="position-relative">
                <img
                  class="card-img-top object-fit-cover h-100"
                  src="${data[i].thumbnail}"
                />
              </figure>

              <figcaption>
                <div class="hstack justify-content-between">
                  <h3 class="h6 small">${data[i].title}</h3>
                  <span class="badge text-bg-primary p-2">Free</span>
                </div>

                <p class="card-text small text-center opacity-50">
                 ${data[i].short_description.split(" ", 8)}
                </p>
              </figcaption>
            </div>

            <footer class="card-footer small hstack justify-content-between">
              <span class="badge badge-color">${data[i].genre}</span>
              <span class="badge badge-color">${data[i].platform}</span>
            </footer>
          </div>
        </div>`;
    }
    rowData.innerHTML = box;
    // console.log(rowData);
  }

  displayGamesDetails(data) {
    let box = "";
    box = `
        <div class="container mt-5">
                <div class="row text-white mt-3">
                    <div class="col-md-4">
                        <div class="inner">
                            <h2 class="text-capitalize mb-3">game details</h2>
                            <div class="image">
                                <img src="${data.thumbnail}" class="rounded-3 w-100 my-2" alt="${data.title}">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="inner">
                        <button class="btn-close btn-close-white" id="btnClose"></button>
                           
                            <h2>Title: ${data.title}</h2>
                            <div class="my-3"> <span>Category:</span> <span class="badge bg-info">${data.genre}</span> </div>
                            <div class="my-3"> <span>Platform:</span> <span class="badge bg-info">${data.platform}</span></div>
                            <div class="my-3"> <span>Status:</span> <span class="badge bg-info">${data.publisher}</span></div>
                            <p>${data.short_description}</p>
                            <a href="${data.game_url}" class="btn btn-outline-warning text-white p-2">Show Game</a>
                        </div>
                    </div>
                </div>
    
            </div>
    
    
    
    `;

    document.querySelector(".light-container").innerHTML = box;
  }
}
// <button class="icon-close bg-info rounded-3"><i class="fa-solid fa-x"></i></button>
