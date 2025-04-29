// 3be48169
// http://www.omdbapi.com/?i=tt3896198&apikey=3be48169


function renderMovies(investigate) {
    const moviesEl = document.querySelector('.movies');
    
    const movies = getMovies();
  
    if(investigate === 'RECENT_TO_VINTAGE') {
      movies.sort((a, b) => b.year - a.year);
    }
    else if (investigate === 'VINTAGE_TO_RECENT') {
      movies.sort((a, b) => a.year - b.year);
    }
    else if (investigate === 'RATING') {
      movies.sort((a, b) => b.rating - a.rating);
    }
  

  const moviesHtml = movies
  .map(movie => {
   return `<div class="movie">
      <figure class="movie__poster--wrapper">
          <img class="movie__poster" src="${movie.poster}" onclick="showShowcase(${movie.id})" alt="">
          </figure>
              <div class="movie__card">
               <div class="movie__title">${movie.title}</div>
               <div class="movie__year">${movie.year}</div>
               <div class="movie__type">${movie.type}</div>
              <div class="movie__rating">${movie.rating}</div>
                  
                 <a class="imdb__btn" href="${movie.imdb}">
                  <i class="fa-solid fa-video"></i>
                  </a>
                               
                  </div>
              </div>`;
   })

   .join("");

    moviesEl.innerHTML = moviesHtml;
             
}

function showShowcase(id) {
  localStorage.setItem("title",id);
  window.location.href = `${window.location.origin}/showcase.html`
 
}

function filterMovies(event){
    renderMovies(event.target.value)
  
}

setTimeout(() => {
    renderMovies();
});

           
 // MOVIE DATA
function getMovies() {
 return [
  {
    id: 1,
    title: "The Batman 1943",
    year: 1943,
    type: "Movie",
    rating: 6.5,
    poster: "Assets/Batman 1943.jpg",
    imdb: "https://www.imdb.com/title/tt0035665/?ref_=fn_all_ttl_16",
  },
  {
    id: 2,
    title: "New Adventures of Batman and Robin",
    year: 1949,
    type: "Movie",
    rating: 5.9,
    poster: "Assets/Batman And The Boy Wonder.jpg",
    imdb: "https://www.imdb.com/title/tt0041162/",
  },
  {
    id: 3,
    title: "Batman: The Movie",
    year: 1966,
    type: "Movie",
    rating: 6.5,
    poster: "Assets/Batman 1966.jpg",
    imdb: "https://www.imdb.com/title/tt0060153/?ref_=fn_all_ttl_18",
  },
  {
    id: 4,
    title: "Batman",
    year: 1989,
    type: "Movie",
    rating: 7.5,
    poster: "Assets/Batman 1989.jpg",
    imdb: "https://www.imdb.com/title/tt0096895/?ref_=nv_sr_srsg_3_tt_8_nm_0_in_0_q_batman",
  },
  {
    id: 5,
    title: "Batman Returns",
    year: 1992,
    type: "Movie",
    rating: 7.1,
    poster: "Assets/Batman returns.jpg",
    imdb: "https://www.imdb.com/title/tt0103776/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_batman%2520re",
  },
  {
    id: 6,
    title: "Batman Forever",
    year: 1995,
    type: "Movie",
    rating: 5.4,
    poster: "Assets/Batman Forever.jpg",
    imdb: "https://www.imdb.com/title/tt0112462/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_batman%2520for",
  },
  {
    id: 7,
    title: "Batman & Robin",
    year: 1997,
    type: "Movie",
    rating: 3.8,
    poster: "Assets/Batman & Robin.jpg",
    imdb: "https://www.imdb.com/title/tt0118688/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_Batman%2520%2526%2520robin",
  },
  {
    id: 8,
    title: "Batman Begins",
    year: 2005,
    type: "Movie",
    rating: 8.2,
    poster: "Assets/Batman Begins.jpg",
    imdb: "https://www.imdb.com/title/tt0372784/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_Batman%2520Be",
  },
  {
    id: 9,
    title: "The Dark Knight",
    year: 2008,
    type: "Movie",
    rating: 9,
    poster: "Assets/The Dark Knight.jpg",
    imdb: "https://www.imdb.com/title/tt0468569/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_Dark%2520Kn",
  },
  {
    id: 10,
    title: "The Dark Knight Rises",
    year: 2012,
     type: "Movie",
    rating: 8.4,
    poster: "Assets/The Dark Knight Rises.jpg",
    imdb: "https://www.imdb.com/title/tt1345836/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_dark%2520knight%2520ris",
  },
  {
    id: 11,
    title: "Batman V Superman: Dawn Of Justice",
    year: 2016,
    type: "Movie",
    rating: 6.5,
    poster: "Assets/Batman V Superman Dawn Of Justice.jpg",
    imdb: "https://www.imdb.com/title/tt1345836/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_dark%2520knight%2520ris",
  },
  {
    id: 12,
    title: "Batman VS Superman: Dawn Of Justice (Ultimate Edition)",
    year: 2016,
    type: "Movie",
    rating: 9.4,
    poster: "Assets/Batman V Superman Dawn Of Justice Ultimate.jpg",
    imdb: "https://www.imdb.com/title/tt12862426/",
  },
  {
    id: 13,
    title: "Justice League",
    year: 2017,
    type: "Movie",
    rating: 6,
    poster: "Assets/Justice League.jpg",
    imdb: "https://www.imdb.com/title/tt0974015/?ref_=nv_sr_srsg_6_tt_5_nm_3_in_0_q_justice",
  },
  {
    id: 14,
    title: "Zach Snyder's Justice League",
    year: 2021,
    type: "Movie",
    rating: 7.9,
    poster: "Assets/Justice League Zack.jpg",
    imdb: "https://www.imdb.com/title/tt12361974/?ref_=nv_sr_srsg_3_tt_8_nm_0_in_0_q_justice%2520league",
  },
  {
    id: 15,
    title: "The Batman",
    year: 2022,
    type: "Movie",
    imdbRating: 7.8,
    poster: "https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_SX300.jpg",
    imdb: "https://www.imdb.com/title/tt1877830/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_the%2520bat",
  },
];
}