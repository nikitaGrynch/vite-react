import personPhoto from "../assets/person_photo.jpg";

export const BandMembers: string[] = [
  "Kurt Cobain",
  "Krist Novoselic",
  "Dave Grohl",
];

export const BandGenres: string[] = [
  "Grunge",
  "punk",
  "rock",
  "alternative rock",
];

export const BandName: string = "Nirvana";

export const BandAlbumsNames: string[] = ["Bleach", "Nevermind", "Blew"];

export const BandAlbumsCoversUrls: {} = {
  Nevermind:
    "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg?20210720151219",
  Bleach:
    "https://upload.wikimedia.org/wikipedia/en/a/a1/Nirvana-Bleach.jpg?20211120225125",
  Blew: "https://upload.wikimedia.org/wikipedia/en/d/d1/NirvanaBlewEP.jpg?20110420021902",
};

export const Recipe: Object = {
  name: "Air Fryer Waffle Egg in a Hole",
  ingredients: [
    "1 frozen waffle",
    "1 large egg",
    "salt and pepper to taste",
    "2 tablespoons shredded cheese",
    "maple syrup to taste",
  ],
  steps: [
    "Preheat the air fryer to 350 degrees F (175 degrees C).",
    "Cut a hole in the center of the frozen waffle using the rim of a cup or glass (about 2 to 3 inches in diameter). Move waffle to a square of parchment paper, then carefully place the parchment paper into the preheated air fryer, along with the small center waffle. ",
    "Crack egg directly into the center of waffle hole; season with salt and pepper to taste. Close the lid and cook until the white of the egg has started to set, about 5 to 6 minutes.",
    "Remove small center waffle from the air fryer. Sprinkle shredded cheese onto egg waffle, and cook until the cheese is melted and egg white is completely set, about 1 to 2 minutes.",
    "Transfer egg waffle onto a plate; drizzle with maple syrup and serve immediately.",
  ],
  imgUrl:
    "https://www.allrecipes.com/thmb/ckHPDgXEkRY0uAduadQW_D45ERw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/air-fryer-waffle-egg-in-hole-4x3-d5a10b3cda4e4ddda68481790e098da1.jpeg",
};

export const Person: Object = {
  name: "Nikita Grynchenko",
  phone: "+38068xxxxx20",
  email: "nikita.grynch@gmail.com",
  residence: "Odessa, Ukraine",
  workExperience: ["Firefly Ratings", "SanLav Order Bot"],
  skills: [".NET", "JS", "React", "Databases", "OOP", "Python", "SwiftUI"],
  img: personPhoto,
};

export const footballClubs = [
    {
      clubInfo: {
        clubName: "FC Barcelona",
        city: "Barcelona",
        founded: "29.10.1899",
        logoUrl:
          "https://upload.wikimedia.org/wikipedia/ru/thumb/2/24/FC_Barcelona.svg/400px-FC_Barcelona.svg.png",
      },
      clubAchievements: {
        medals: "20",
        cups: "30",
        goals: "1000",
      },
      clubSquad: {
        players: [
          { id: 1, name: "Lionel Messi", position: "Striker" },
          { id: 2, name: "Gerard Pique", position: "Defender" },
          { id: 3, name: "Sergio Busquets", position: "Midfielders" },
          { id: 4, name: "Marc-André ter Stegen", position: "Goalkeeper" },
        ],
      },
    },
    {
      clubInfo: {
        clubName: "Real Madrid CF",
        city: "Madrid",
        founded: "6.03.1902",
        logoUrl:
          "https://upload.wikimedia.org/wikipedia/ru/thumb/9/98/Real_Madrid.png/358px-Real_Madrid.png",
      },
      clubAchievements: {
        medals: "15",
        cups: "35",
        goals: "900",
      },
      clubSquad: {
        players: [
          { id: 1, name: "Karim Benzema", position: "Striker" },
          { id: 2, name: "Sergio Ramos", position: "Defender" },
          { id: 3, name: "Toni Kroos", position: "Midfielders" },
          { id: 4, name: "Thibaut Courtois", position: "Goalkeeper" },
        ],
      },
    },
    {
      clubInfo: {
        clubName: "Liverpool FC",
        city: "Liverpool",
        founded: "3.06.1892",
        logoUrl:
          "https://upload.wikimedia.org/wikipedia/ru/thumb/0/0a/FC_Liverpool.svg/374px-FC_Liverpool.svg.png",
      },
      clubAchievements: {
        medals: "18",
        cups: "22",
        goals: "850",
      },
      clubSquad: {
        players: [
          { id: 1, name: "Mohamed Salah", position: "Striker" },
          { id: 2, name: "Virgil van Dijk", position: "Defender" },
          { id: 3, name: "Jordan Henderson", position: "Midfielders" },
          { id: 4, name: "Alisson Becker", position: "Goalkeeper" },
        ],
      },
    },
    {
        clubInfo: {
          clubName: "Manchester United FC",
          city: "Manchester",
          founded: "01.01.1878",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/ru/thumb/7/7a/Manchester_United_FC_crest.svg/500px-Manchester_United_FC_crest.svg.png",
        },
        clubAchievements: {
          medals: "21",
          cups: "20",
          goals: "900",
        },
        clubSquad: {
          players: [
            { id: 1, name: "Bruno Fernandes", position: "Midfielders" },
            { id: 2, name: "Harry Maguire", position: "Defender" },
            { id: 3, name: "Marcus Rashford", position: "Striker" },
            { id: 4, name: "David de Gea", position: "Goalkeeper" },
          ],
        },
      },
]

export const magicEightBallResponses = [
    "It is certain",
    "Without a doubt",
    "You may rely on it",
    "Yes definitely",
    "It is decidedly so",
    "As I see it, yes",
    "Most likely",
    "Yes",
    "Outlook good",
    "Signs point to yes",
    "Reply hazy try again",
    "Better not tell you now",
    "Ask again later",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "Outlook not so good",
    "My sources say no",
    "Very doubtful",
    "My reply is no"
  ];
