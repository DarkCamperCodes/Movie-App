const famousMovies =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const imgPath = "https://image.tmdb.org/t/p/w1280";
const searchedMovies =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
let movieSection = document.querySelector(".movieSection");

const getMovies = async (URL) => {
  let promise = await fetch(URL);
  let response = await promise.json();
  showMovies(response.results);

  // console.log(response)
};

const showMovies = (data) => {
  // movieSection.innerHTML = ""
  data.forEach((item) => {
    console.log(item);
    const movieelement = document.createElement("div");
    movieelement.classList.add("item");
    // movieelement.style.backgroundColor = "red";
    movieelement.style.height = "250px";
    movieelement.style.width = "200px";
    movieelement.style.marginTop = "20px";
    movieelement.style.marginRight = "20px";
    movieelement.style.marginBottom = "20px";
    movieelement.style.marginLeft = "20px";
    movieelement.style.display = "flex";
    movieelement.style.flexWrap = "wrap";

    movieelement.innerHTML = `

        <div class="movie" >
        <img src = "${imgPath + item.poster_path}" alt = "No Img" >
            <div class="overlay">
                <div class="title">
                    <p>${item.original_title}</p>
                    <h3>${item.vote_average}</h3>
                </div> 
            </div>
        </div>
        `;

    document.body.append(movieelement);
  });
};

document.querySelector(".inputhere").addEventListener("keyup", (evt) => {
  if (evt.target.value != "") {
    getMovies(searchedMovies + evt.target.value);
  }
  else if(evt.target.value == "" || evt.target.value != " ")  {
    alert("Enter Movie Name");
    // getMovies();
  }
});

getMovies(famousMovies);
