// Movie catalogue
const movies = [
    {
        title: "The Fire Inside",
        author: "Metro-Goldwyn-Mayer (MGM)",
        description: "Claressa Shields, a high school junior from Flint, Michigan, aided by her tough - love coach, Jason Crutchfield, pushes past all limitations to become the first American woman to win an Olympic gold medal in boxing.But even at the pinnacle of success, Claressa has to reckon with the fact that not all dreams are created equal, and the real fight has only just begun.",
        yearOfRelease: 2024
    },

    {
        title: "Homestead",
        author: "Skies Fall Entertainment, 2521 Entertainment, Radiate Films",
        description: "A nuclear bomb is detonated in Los Angeles, and the nation devolves into unprecedented chaos. Ex-Green Beret Jeff Eriksson and his family escape to The Homestead, an eccentric prepper's fortress nestled in the mountains. As violent threats and apocalyptic conditions creep toward their borders, the residents of The Homestead are left to wonder: how long can a group of people resist both the dangers of human nature and the bloodshed at their doorstep?",
        yearOfRelease: 2024
    },

    {
        title: "Babygirl",
        author: "2AM, Man Up Film, A24",
        description: "A high-powered CEO puts her career and family on the line when she begins a torrid affair with her much younger intern.",
        yearOfRelease: 2024
    },

    {
        title: "You're cordially invited",
        author: "Amazon MGM Studios",
        description: "When two weddings are accidentally booked on the same day at the same venue, each bridal party is challenged with preserving their family's special moment while making the most of the unanticipated tight quarters. In a hilarious battle of determination and grit, the father of the bride and sister of the other bride chaotically go head-to-head as they stop at nothing to uphold an unforgettable celebration for their loved ones.",
        yearOfRelease: 2025
    },

    {
        title: "Moana 2",
        author: "Disney",
        description: "After receiving an unexpected call from her wayfinding ancestors, Moana journeys alongside Maui and a new crew to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.",
        yearOfRelease: 2024
    },

    {
        title: "Little Emma",
        author: "GVF & Toonz",
        description: "Emma, a miniature human girl adopted by animal parents, yearns to find the truth about her human roots. But when she discovers a hidden island full of tiny humans, it's not the fairy tale she hoped for. Will she risk all she's ever known to uncover secrets from her past?",
        yearOfRelease: 2024
    },

    {
        title: "The End",
        author: "NEON",
        description: "Three generations of a family with separate but intersecting obsessions - trying to figure out how to die with dignity, live with none and make it count.",
        yearOfRelease: 2024
    },

    {
        title: "And Mrs",
        author: "Who's On First Films, FirstGen Content",
        description: "When a reluctant bride-to-be's fiancé drops dead, she insists on going ahead with the wedding anyway - vowing to overcome public opinion, the law of the land, and her loved one's objections.",
        yearOfRelease: 2024
    },

    {
        title: "Lowlifes",
        author: "tubi",
        description: "The survival instincts of a road-tripping family are put to the test when they have no other choice but to stay the night at a remote homestead.",
        yearOfRelease: 2024
    },

    {
        title: "The Accursed",
        author: "Gravitas Ventures",
        description: "Elly is asked by a family friend to spend a few days looking after an elderly woman living in a remote cabin. She readily agrees thinking a short trip to the woods will be a nice escape. The cabin turns out to be anything but relaxing as Elly begins hallucinating in ways that blur reality with her dreams. As the visions take over, Elly realizes that she was lured there by a demonic presence hiding inside of the woman just waiting to break free.",
        yearOfRelease: 2022
    }
];


// Print out available movies
for (let index = 0; index < movies.length; index++) {
    const element = movies[index];
    console.log(element["title"]); 
}
console.log("--------------");

// remove third movie
movies.splice(2, 1);

// Print edited movie list
for (let index = 0; index < movies.length; index++) {
    const element = movies[index];
    console.log(element["title"]); 
}