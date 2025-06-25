const movies = [
  {
    title: "Duna: Parte 2",
    description: "Paul Atreides une forças com Chani e os Fremen para se vingar dos conspiradores.",
    image: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg"
  },
  {
    title: "Deadpool & Wolverine",
    description: "Deadpool se junta a Wolverine em uma aventura multiversal cheia de ação e sarcasmo.",
    image: "https://image.tmdb.org/t/p/w500/4wNi2naMxwC8AxzT3sAxAj90nRS.jpg"
  },
  {
    title: "Divertida Mente 2",
    description: "Riley enfrenta novas emoções durante a adolescência em uma nova aventura da mente.",
    image: "https://image.tmdb.org/t/p/w500/gg4zZoTggZmpAQ32qIrP5dtnkEZ.jpg"
  }
];

const catalog = document.getElementById("movieCatalog");
const searchInput = document.getElementById("searchInput");

function renderMovies(filteredMovies) {
  catalog.innerHTML = "";
  filteredMovies.forEach(movie => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <div class="info">
        <h2>${movie.title}</h2>
        <p>${movie.description}</p>
      </div>
    `;
    catalog.appendChild(movieElement);
  });
}

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filtered = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm)
  );
  renderMovies(filtered);
});

// Inicializa a página
renderMovies(movies);
