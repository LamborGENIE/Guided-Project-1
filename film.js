let producer;
let title;
let episode_id;
let director;
let release_date;
let opening_crawl;

const baseUrl = `https://swapi2.azurewebsites.net/api`;

// Runs on page load
addEventListener('DOMContentLoaded', () => {
    producer = document.querySelector('span#producer');
    title = document.querySelector('span#title');
    episode_id = document.querySelector('span#episode_id');
    director = document.querySelector('span#director');
    release_date = document.querySelector('span#release_date');
    opening_crawl = document.querySelector('span#opening_crawl');
    const sp = new URLSearchParams(window.location.search)
    const id = sp.get('id')
    getFilm(id)
  });
  
  async function getFilm(id) {
    let film;
    try {
      film = await fetchFilm(id)
    }
    catch (ex) {
      console.error(`Error reading film ${id} data.`, ex.message);
    }
    renderFilm(film);
  
  }
  async function fetchFilm(id) {
    let filmUrl = `${baseUrl}/films/${id}`;
    return await fetch(filmUrl)
      .then(res => res.json())
  }

  const renderFilm = film => {
    document.title = `SWAPI - ${film?.title}`;  // Just to make the browser tab say their name
    producer.textContent = film?.producer;
    title.textContent = film?.title;
    episode_id.textContent = film?.episode_id;
    director.textContent = film?.director;
    release_date.textContent = film?.release_date;
    opening_crawl.textContent = film?.opening_crawl;
    //filmsUl.innerHTML = filmsLis.join("");
  }