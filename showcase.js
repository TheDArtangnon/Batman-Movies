async function onSearchChange(event) {
 const id = event.target.value;
 showcasesEl = await document.querySelector('.showcases');
 showcases = await getShowcases();
 showcasesEl.innerHTML = showcases
 .map(showcase => {
    return `<div class="showcase">
        <div class="movie__title">${showcase.title}</div>
        <figure class="showcase__poster--wrapper">
        <img class="showcase__poster" src="${showcase.poster}" alt="">
        </figure>
        <div class="summary"><p>${showcase.summary}</p></div>
        <figure class="showcase__pics">
          <img class="pic1" src="${showcase.pic1}" alt="">
          <img class="pic2" src="${showcase.pic2}" alt="">
          <img class="pic3" src="${showcase.pic3}" alt="">
        </figure>
       </div>`;
    })
    .join("");

}



async function main() {
 id = localStorage.getItem("id")
 showcasesEl = await document.querySelector('.showcases');
 showcases = await getShowcases();

 showcasesEl.innerHTML = showcases
 .map(showcase => {
    return `<div class="showcase">
        <div class="movie__title">${showcase.title}</div>
        <figure class="showcase__poster--wrapper">
        <img class="showcase__poster" src="${showcase.poster}" alt="">
        </figure>
        <div class="summary"><p>${showcase.summary}</p></div>
        <figure class="showcase__pics">
          <img class="pic1" src="${showcase.pic1}" alt="">
          <img class="pic2" src="${showcase.pic2}" alt="">
          <img class="pic3" src="${showcase.pic3}" alt="">
        </figure>
       </div>`;
    })
    .join("");

    }

setTimeout(() => {
    main();
});

 // SHOWCASE DATA
 function getShowcases() {
    return [
        {
        id: 1,
        title: "The Batman 1943", 
        poster: "Assets/Batman 1943 poster.jpg",
        summary: "A 15-chapter theatrical serial from Columbia Pictures. The Batman/Bruce Wayne, and his ward, Robin/Dick Grayson, secrest government agents following the Japanese attack on Pearl Harbor, become aware of a Japanese sabotage ring operating in Gotham City. Bruces's girlfriend Linda Page asked for his help in finding her uncle, Martin Warren, who was abducted by the ring after he was released from prison.",
        pic1: "Assets/Batman 1943 pic1.jpg",
        pic2: "Assets/Batman 1943 pic2.jpg",
        pic3: "Assets/Batman1943 pic3.png",
        },
        {
        id: 2,
        title: "New Adventures of Batman and Robin ", 
        poster: "Assets/The new adventures of Batman and Robin poster 1949.jpg",
        summary: "Batman and Robin face off against the Wizard, a hooded villain with an electrical device which controls cars and who sets up challenges for Batman and Robin.",
        pic1: "Assets/New Adventures of Batman and Robin pic1.jpg",
        pic2: "Assets/New Adventures of Batman and Robin pic2.png",
        pic3: "Assets/New Adventures of Batman and Robin pic3.jpg",
        },
        {
        id: 3,
        title: "Batman: The Movie", 
        poster: "Assets/Batman The Movie poster.jpg" ,
        summary: "Batman and Robin fight their four greatest foes - the Catwoman, the Joker, the Penguin, and the Riddler who have now joined forces as a criminal organization. With plans to hold the world for ransom using a secret invention that instantly dehydrates people.",
        pic1: "Assets/Batman The Movie pic1.jpg",
        pic2: "Assets/Batman The Movie pic2.jpg",
        pic3: "Assets/Batman The Movie pic3.jpg",
        },
        {
        id: 4,
        title: "Batman", 
        poster: "Assets/Batman 1989 poster.jpg" ,
        summary: "Having witnessed his parents' brutal murder as a child, millionaire philanthropist Bruce Wayne fights crime in Gotham City disguised as Batman, a costumed hero who strikes fear into the hearts of villains. But when a deformed madman who calls himself The Joker seizes control of Gotham's criminal underworld, Batman must face his most ruthless nemesis ever while protecting both his identity and his love interest, reporter Vicki Vale.",
        pic1: "Assets/Batman 1989 pic1.jpg",
        pic2: "Assets/Batman 1989 pic2.jpg",
        pic3: "Assets/Batman 1989 pic3.jpg",
        },
        {
        id: 5,
        title: "Batman Returns", 
        poster: "Assets/Batman Returns poster.jpg" ,
        summary: "The monstrous Penguin, who lives in the sewers beneath Gotham, joins up with wicked shock-headed businessman Max Shreck to topple the Batman once and for all. But when Shreck's timid assistant, Selina Kyle, finds out, and Shreck tries to kill her, she is transformed into the sexy Catwoman. She teams up with the Penguin and Shreck to destroy Batman, but sparks fly unexpectedly when she confronts the caped crusader.",
        pic1: "Assets/Batman Returns pic1.jpg",
        pic2: "Assets/Batman Returns pic2.jpg",
        pic3: "Assets/Batman Returns pic3.jpg",
        },
        {
        id: "6",
        title: "Batman Forever", 
        poster: "Assets/batman forever poster.jpg" ,
        summary: "Batman faces off against two foes: the schizophrenic, horribly scarred former District Attorney Harvey Dent, aka Two-Face, and the Riddler, a disgruntled ex-Wayne Enterprises inventor seeking revenge against his former employer by unleashing his brain-sucking weapon on Gotham City's residents. As the caped crusader also deals with tortured memories of his parents' murder, he has a new romance, with psychologist Chase Meridian.",
        pic1: "Assets/Batman Forever pic1.jpg",
        pic2: "Assets/Batman Forever pic2.jpg",
        pic3: "Assets/Batman Forever pic3.jpg",
        },
        {
        id: 7,
        title: "Batman & Robin", 
        poster: "Assets/Batman & Robin poster.jpg" ,
        summary: "Batman and Robin attempt to foil the sinister schemes of a deranged set of new villains, most notably Mr. Freeze, who wants to make Gotham into an arctic region, and the sultry Poison Ivy. As the Dynamic Duo contends with these villians, a third hero, Batgirl , joins the ranks of the city's crime-fighters.",
        pic1: "Assets/Batman & Robin pic1.jpg",
        pic2: "Assets/Batman & Robin pic2.jpg",
        pic3: "Assets/Batman & Robin pic3.jpg",
        },
        {
        id: 8,
        title: "Batman Begins", 
        poster: "Assets/Batman Begins.jpg" ,
        summary: "A young Bruce Wayne travels to the Far East, where he's trained in martial arts by Henri Ducard, a member of the mysterious League of Shadows. When Ducard reveals the League's true purpose, the complete destruction of Gotham City. Bruce Wayne returns to Gotham intent on cleaning up the city without resorting to murder. With the help of Alfred, his loyal butler, and Lucius Fox, a tech expert at Wayne Enterprises, Batman is born.",
        pic1: "Assets/Batman Begins pic1.jpg",
        pic2: "Assets/Batman Begins pic2.jpg",
        pic3: "Assets/Batman Begins pic3.jpg",
        },
        {
        id: 9,
        title: "The Dark Knight", 
        poster: "Assets/The Dark Knight poster.jpeg" ,
        summary: "With the help of allies Lt. Jim Gordon and DA Harvey Dent, Batman has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism. The Joker's gang robs a bank run by Gotham's mob. The Joker is not the mob's only problem, they are also threatened by the efforts of both Batman and the citys new district attorney, Harvey Dent. The leaders of the mob meet to discuss how to respond to these various threats when the Joker crashes the gathering and offers to kill Batman for a price.",
        pic1: "Assets/The Dark Knight pic1.jpg",
        pic2: "Assets/The Dark Knight pic2.jpg",
        pic3: "Assets/The Dark Knight pic3.jpg",
        },
        {
        id: 10,
        title: "The Dark Knight Rises", 
        poster: "Assets/The Dark Knight Rises poster.jpg" ,
        summary: "It has been eight years since Batman vanished into the night, turning, in that instant, from hero to fugitive. Assuming the blame for the death of D.A. Harvey Dent, the Dark Knight sacrificed everything for what he and Commissioner Gordon both hoped was the greater good. For a time the lie worked, as criminal activity in Gotham City was crushed under the weight of the anti-crime Dent Act. But everything will change with the arrival of a cunning cat burglar with a mysterious agenda. Far more dangerous, however, is the emergence of Bane, a masked terrorist whose ruthless plans for Gotham drive Bruce out of his self-imposed exile. But even if he dons the cape and cowl again, Batman may be no match for Bane.",
        pic1: "Assets/The Dark Knight Rises pic1.jpg",
        pic2: "Assets/The Dark Knight Rises pic2.jpg",
        pic3: "Assets/The Dark Knight Rises pic3.jpg",
        },
        {
        id: 11,
        title: "Batman V Superman: Dawn Of Justice", 
        poster: "Assets/Batman V Superman Dawn Of Justice poster.jpg" ,
        summary: "It's been nearly two years since Superman's colossal battle with Zod devastated the city of Metropolis. The loss of life and collateral damage left many feeling angry and helpless, including crime-fighting billionaire Bruce Wayne. Convinced that Superman is now a threat to humanity, Batman embarks on a personal vendetta to end his reign on Earth, while the conniving Lex Luthor launches his own crusade against the Man of Steel.",
        pic1: "Assets/Batman V Superman Dawn Of Justice pic1.jpeg",
        pic2: "Assets/Batman V Superman Dawn Of Justice pic2.jpg",
        pic3: "Assets/Batman V Superman Dawn Of Justice pic3.jpg",
        },
        {
        id: 12,
        title: "Batman V Superman: Dawn Of Justice Ultimate Edition", 
        poster: "Assets/Batman V Superman Dawn Of Justice Ultimate2.jpg" ,
        summary: "30 minutes longer than the theatrical version, adding more depth to the storyline.",
        pic1: "Assets/Batman V Superman Dawn Of Justice Ultimate pic1.jpg",
        pic2: "Assets/Batman v Superman Dawn of Justice Ultimate pic2.jpeg",
        pic3: "Assets/Batman V Superman Dawn Of Justice Ultimate pic3.jpg",
        },
        {
        id: 13,
        title: "Justice League", 
        poster: "Assets/Justice League poster.jpg" ,
        summary: "Fuelled by his restored faith in humanity, and inspired by Superman's selfless act, Bruce Wayne enlists newfound ally Diana Prince to face an even greater threat. Together, Batman and Wonder Woman work quickly to recruit a team to stand against this newly-awakened enemy. Despite the formation of an unprecedented league of heroes in Batman, Wonder Woman, Aquaman, Cyborg and the Flash, it may be too late to save the planet from an assault of catastrophic proportions.",
        pic1: "Assets/Justice League pic1.jpg",
        pic2: "Assets/Justice League pic2.jpg",
        pic3: "Assets/Justice League pic3.jpg",
        },
        {
        id: 14,
        title: "Justice League Zack Snyder Cut", 
        poster: "Assets/Justice League Zack poster.jpg" ,
        summary: "The original Vision of Zack Snyder",
        pic1: "Assets/Justice League Zack pic1.jpg",
        pic2: "Assets/Justice League Zack pic2.jpg",
        pic3: "Assets/Justice League Zack pic3.jpg",
        },   
    ];
    }