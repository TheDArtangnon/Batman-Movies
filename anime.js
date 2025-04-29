function renderAnimation(investigate) {
  const animationWrapper = document.querySelector('.animation');
  
  const animation = getAnimation();

  if(investigate === 'RECENT_TO_VINTAGE') {
    animation.sort((a, b) => b.year - a.year);
  }
  else if (investigate === 'VINTAGE_TO_RECENT') {
    animation.sort((a, b) => a.year - b.year);
  }
  else if (investigate === 'RATING') {
    animation.sort((a, b) => b.rating - a.rating);
  }


const animationHtml = animation
.map(amovie => {
 return `<div class="amovie">
    <figure class="amovie__poster--wrapper">
        <img class="amovie__poster" src="${amovie.poster}" alt="">
        </figure>
            <div class="amovie__card">
             <div class="amovie__title">${amovie.title}</div>
             <div class="amovie__year">${amovie.year}</div>
             <div class="amovie__type">${amovie.type}</div>
            <div class="amovie__rating">${amovie.rating}</div>
                
               <a class="imdb__btn" href="${amovie.imdb}">
                <i class="fa-solid fa-video"></i>
                </a>
                             
                </div>
            </div>`;
 })

 .join("");

  animationWrapper.innerHTML = animationHtml;
           
}

function filterAnimation(event){
  renderAnimation(event.target.value)

}

setTimeout(() => {
    renderAnimation();
});
           
 // MOVIE DATA
function getAnimation() {
  return [
  {
    ida: 1,
    title: "Batman Mask Of The Phantasm",
    year: 1993,
    type: "Animated Movie",
    rating: 7.8,
    poster: "Assets/phantasm.jpg",
    imdb: "https://www.imdb.com/title/tt0106364/?ref_=ls_i_1",
  },
  {
    ida: 2,
    title: "Batman & Mr Freeze: SubZero",
    year: 1998,
    type: "Animated Movie",
    rating: 7.1,
    poster: "Assets/Batman & MrFreezeSubZero.jpg",
    imdb: "https://www.imdb.com/title/tt0143127/?ref_=ls_t_2",
  },
  {
    ida: 3,
    title: "Batman Beyond: Return of the Joker",
    year: 2000,
    type: "Animated Movie",
    rating: 7.7,
    poster: "Assets/Batman Beyond Return of the Joker.jpg",
    imdb: "https://www.imdb.com/title/tt0233298/?ref_=ls_t_3",
  },
  {
    ida: 4,
    title: "Batman: Mystery of the Batwoman",
    year: 2003,
    type: "Animated Movie",
    rating: 6.6,
    poster: "Assets/Batman Mystery of the Batwoman.jpg",
    imdb: "https://www.imdb.com/title/tt0346578/?ref_=ls_t_4",
  },
  {
    ida: 5,
    title: "The Batman vs Dracula",
    year: 2005,
    type: "Animated Movie",
    rating: 6.6,
    poster: "Assets/The Batman vs Dracula.jpg",
    imdb: "https://www.imdb.com/title/tt0472219/?ref_=ls_t_5",
  },
  {
    ida: 6,
    title: "Batman: Gotham Knight",
    year: 2008,
    type: "Animated Movie",
    rating: 6.6,
    poster: "Assets/Batman Gotham Knight.jpg",
    imdb: "https://www.imdb.com/title/tt1117563/?ref_=ls_t_6",
  },
  {
    ida: 7,
    title: "Superman/Batman: Public Enemies",
    year: 2009,
    type: "Animated Movie",
    rating: 7.1,
    poster: "Assets/Superman Batman Public Enemies.jpg",
    imdb: "https://www.imdb.com/title/tt1398941/?ref_=nv_sr_srsg_5_tt_8_nm_0_in_0_q_superman%252Fbatman%2520",
  },
  {
    ida: 8,
    title: "Batman: Under the Red Hood",
    year: 2010,
    type: "Animated Movie",
    rating: 8,
    poster: "Assets/Batman Under the Red Hood.jpg",
    imdb: "https://www.imdb.com/title/tt1569923/?ref_=ls_t_7",
  },
  {
    ida: 9,
    title: "Superman/Batman: Apocolypse",
    year: 2010,
    type: "Animated Movie",
    imdbRating: 7,
    poster: "Assets/Superman & Batman Apocolypse.jpg",
    imdb: "https://www.imdb.com/title/tt1673430/?ref_=nv_sr_srsg_3_tt_8_nm_0_in_0_q_superman%2520bat",
  },
  {
    ida: 10,
    title: "Batman: Year One",
    year: 2011,
    type: "Animated Movie",
    rating: 7.3,
    poster: "Assets/Batman Year One.jpg",
    imdb: "https://www.imdb.com/title/tt1672723/?ref_=ls_t_8",
  },
  {
    ida: 11,
    title: "Batman: The Dark Knight Returns Part 1",
    year: 2012,
    type: "Animated Movie",
    rating: 7.9,
    poster: "Assets/Batman The Dark Knight Returns Part 1.jpg",
    imdb: "https://www.imdb.com/title/tt2313197/?ref_=ls_t_9",
  },
  {
    ida: 12,
    title: "Batman: The Dark Knight Returns Part 2",
    year: 2013,
    type: "Animated Movie",
    rating: 8.3/10,
    poster: "Assets/Batman The Dark Knight Returns Part 2.jpg",
    imdb: "https://www.imdb.com/title/tt2166834/?ref_=ls_t_10",
  },
  {
    ida: 13,
    title: "Lego Batman: DC Super Heroes Unite",
    year: 2013,
    type: "Animated Movie",
    rating: 6.4,
    poster: "Assets/Lego Batman DC Super Heroes Unite.jpg",
    imdb: "https://www.imdb.com/title/tt2465238/?ref_=fn_all_ttl_3",
  },
  {
    ida: 14,
    title: "Son of Batman",
    year: 2014,
    type: "Animated Movie",
    rating: 6.7,
    poster: "Assets/Son of Batman.jpg",
    imdb: "https://www.imdb.com/title/tt3139072/?ref_=ls_t_11",
  },
  {
    ida: 15,
    title: "Batman: Assault on Arkham",
    year: 2014,
    type: "Animated Movie",
    rating: 7.4,
    poster: "Assets/Batman Assault on Arkham.jpg",
    imdb: "https://www.imdb.com/title/tt3139086/?ref_=ls_t_12",
  },
  {
    ida: 16,
    title: "Batman vs Robin",
    year: 2015,
    type: "Animated Movie",
    rating: 7.1,
    poster: "Assets/Batman vs Robin.jpg",
    imdb: "https://www.imdb.com/title/tt4324274/?ref_=ls_t_13",
  },
  {
    ida: 17,
    title: "Batman Unlimited: Monster Mayhem",
    year: 2015,
    type: "Animated Movie",
    rating: 5.6,
    poster: "Assets/Batman Unlimited Monster Mayhem.jpeg",
    imdb: "https://www.imdb.com/title/tt4729754/?ref_=ls_t_14",
  },
  {
    ida: 18,
    title: "Batman Unlimited: Animal Instincts",
    year: 2015,
    type: "Animated Movie",
    rating: 5.7,
    poster: "Assets/Batman Unlimited Animal Instincts.jpg",
    imdb: "https://www.imdb.com/title/tt4437640/?ref_=ls_t_15",
  },
  {
    ida: 19,
    title: "Batman: Bad Blood",
    year: 2016,
    type: "Animated Movie",
    rating: 6.7,
    poster: "Assets/Batman Bad Blood.jpg",
    imdb: "https://www.imdb.com/title/tt4870838/?ref_=ls_t_16",
  },
  {
    ida: 20,
    title: "Batman: The Killing Joke",
    year: 2016,
    type: "Animated Movie",
    rating: 6.4,
    poster: "Assets/Batman The Killing Joke.jpg",
    imdb: "https://www.imdb.com/title/tt4853102/?ref_=ls_t_17",
  },
  {
    ida: 21,
    title: "Batman Unlimited: Mechs vs Mutants",
    year: 2016,
    type: "Animated Movie",
    rating: 5.8,
    poster: "Assets/Batman Unlimited Mechs vs Mutants.jpg",
    imdb: "https://www.imdb.com/title/tt5896146/?ref_=ls_t_18",
  },
  {
    ida: 22,
    title: " Batman: Return of the Caped Crusaders",
    year: 2016,
    type: "Animated Movie",
    rating: 6.7,
    poster: "Assets/Batman Return of the Caped Crusaders.jpg",
    imdb: "https://www.imdb.com/title/tt5973626/?ref_=ls_t_19",
  },
  {
    ida: 23,
    title: "The Lego Batman Movie",
    year: 2017,
    type: "Animated Movie",
    rating: 8.3,
    poster: "Assets/The Lego Batman Movie.jpg",
    imdb: "https://www.imdb.com/title/tt4116284/?ref_=fn_all_ttl_1",
  },
  {
    ida: 24,
    title: "Batman and Harley Quinn",
    year: 2017,
    type: "Animated Movie",
    rating: 5.9,
    poster: "Assets/Batman and Harley Quinn.jpg",
    imdb: "https://www.imdb.com/title/tt6556890/?ref_=ls_i_20",
  },
  {
    ida: 25,
    title: " Batman vs Two Face",
    year: 2017,
    type: "Animated Movie",
    rating: 6.2,
    poster: "Assets/Batman vs. Two-Face.jpg",
    imdb: "https://www.imdb.com/title/tt6142314/?ref_=ls_t_21",
  },
  {
    ida: 26,
    title: "Scooby Doo & Batman: The Brave and the Bold",
    year: 2018,
    type: "Animated Movie",
    rating: 6.5,
    poster: "Assets/Scooby Doo & Batman The Brave and the Bold.jpg",
    imdb: "https://www.imdb.com/title/tt7578566/?ref_=ls_t_22",
  },
  {
    ida: 27,
    title: "Batman: Gotham by Gaslight",
    year: 2018,
    type: "Animated Movie",
    rating: 6.7,
    poster: "Assets/Batman Gotham by Gaslight.jpg",
    imdb: "https://www.imdb.com/title/tt7167630/?ref_=ls_t_23",
  },
  {
    ida: 28,
    title: "Batman Ninja",
    year: 2018,
    type: "Animated Movie",
    rating: 5.6,
    poster: "Assets/Batman Ninja.jpg",
    imdb: "https://www.imdb.com/title/tt7451284/?ref_=ls_t_24",
  },
  {
    ida: 29,
    title: "Batman vs Teenage Mutant Ninja Turtles",
    year: 2019,
    type: "Animated Movie",
    rating: 7.1,
    poster: "Assets/Batman vs Teenage Mutant Ninja Turtles.jpg",
    imdb: "https://www.imdb.com/title/tt9775360/?ref_=ls_t_25",
  },
  {
    ida: 30,
    title: "Batman: Hush",
    year: 2019,
    type: "Animated Movie",
    rating: 6.9,
    poster: "Assets/Batman Hush.jpg",
    imdb: "https://www.imdb.com/title/tt8752440/?ref_=ls_t_26",
  },
  {
    ida: 31,
    title: "Lego DC Batman: Family Matters",
    year: 2019,
    type: "Animated Movie",
    rating: 6.1,
    poster: "Assets/Lego DC Batman Family Matters.jpg",
    imdb: "https://www.imdb.com/title/tt10327712/?ref_=fn_all_ttl_4",
  },
  {
    ida: 32,
    title: "Batman Death In The Family",
    year: 2020,
    type: "Animated Movie",
    rating: 5.6,
    poster: "Assets/Batman Death in the family.jpg",
    imdb: "https://www.imdb.com/title/tt12794046/",
  },
  {
    ida: 33,
    title: "Batman: Soul Of The Dragon",
    year: 2021,
    type: "Animated Movie",
    rating: 6.1,
    poster: "Assets/Batman Soul Of The Dragon.jpeg",
    imdb: "https://www.imdb.com/title/tt12885852/?ref_=fn_all_ttl_1",
  },
  {
    ida: 34,
    title: "Batman: The Long Halloween Part 1",
    year: 2021,
    type: "Animated Movie",
    rating: 7.2,
    poster: "Assets/Batman The Long Halloween Part One.jpeg",
    imdb: "https://www.imdb.com/title/tt14324650/?ref_=fn_all_ttl_1",
  },
  {
    ida: 35,
    title: "Batman: The Long Halloween Part 2 ",
    year: 2021,
    type: "Animated Movie",
    rating: 7.2,
    poster: "Assets/Batman the long halloween part 2.jpg",
    imdb: "https://www.imdb.com/title/tt14402926/?ref_=fn_all_ttl_1",
  },
  {
    ida: 36,
    title: "Batman And Superman: Battle Of The Super Sons",
    year: 2022,
    type: "Animated Movie",
    rating: 6.8,
    poster: "Assets/Batman And Superman Battle Of The Super Sons.jpg",
    imdb: "https://www.imdb.com/title/tt21197740/?ref_=fn_all_ttl_1",
  },
  {
    ida: 37,
    title: "Batman: The Doom That Came to Gotham",
    year: 2023,
    type: "Animated Movie",
    rating: 6.1,
    poster: "Assets/Batman The Doom That Came to Gotham.jpg",
    imdb: "https://www.imdb.com/title/tt24223450/?ref_=fn_all_ttl_1",
  },
  {
    ida: 38,
    title: "Merry Little Batman",
    year: 2023,
    type: "Animated Movie",
    rating: 6.4,
    poster: "Assets/Merry Little Batman.jpg",
    imdb: "https://www.imdb.com/title/tt15352516/?ref_=nv_sr_srsg_0_tt_3_nm_0_in_0_q_Merry%2520Little%2520Batman",
  },
  
  {
    ida: 39,
    title: "Batman Ninja vs Yakuza League",
    year: 2025,
    type: "Animated Movie",
    rating: 6.2,
    poster: "Assets/Batman Ninja vs Yakuza League.jpg",
    imdb: "https://www.imdb.com/title/tt32508210/?ref_=fn_all_ttl_9",
  },
];
}