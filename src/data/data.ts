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
];

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
  "My reply is no",
];

export const CityData = {
  name: "Odessa",
  about:
    "Odessa is a city located on the northwest shore of the Black Sea in southern Ukraine. It is the third-largest city in the country and is a major seaport and industrial center. The city has a rich history, having been founded in the late 18th century as a Russian naval fortress. Today, Odessa is known for its beautiful architecture, vibrant nightlife, and rich cultural heritage. The city is home to a number of stunning landmarks, including the famous Potemkin Stairs, which lead down from the city center to the seafront. The steps are one of the city's most iconic landmarks and have been featured in numerous films and television shows. Another popular attraction in Odessa is the Odessa Opera and Ballet Theater, which is considered one of the most beautiful theaters in the world. The theater was built in the late 19th century and is known for its stunning architecture and excellent acoustics. Odessa is also known for its lively street art scene, with many colorful murals and graffiti works scattered throughout the city. Visitors can take a guided tour to explore some of the most impressive examples of street art in the city. Overall, Odessa is a fascinating and beautiful city with a rich cultural heritage and plenty of attractions for visitors to enjoy.",
  theMostFamousLandmark: {
    name: "Potemkin Stairs",
    photos: [
      "https://upload.wikimedia.org/wikipedia/commons/5/53/Потьомкінські_сходи_11.jpg",
      "https://holeinthedonut.com/wp-content/uploads/2017/10/Ukraine-Odessa-looking-up-Potemkin-Stairs-from-foot-of-wharf-with-funicular-at-left.jpg",
      "https://images.fineartamerica.com/images/artworkimages/medium/2/potemkin-stairs-fabrizio-troiani.jpg",
      "https://live.staticflickr.com/3400/3505843874_f96f5cb9ff_b.jpg"
    ],
  },
  landmarks: [
    {
      name: "Odessa Opera and Ballet Theater",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/5/5e/Operniy-5.jpg",
    },
    {
      name: "Derybasivska Street",
      photo:
        "https://ukrainetour.com/chumak/voyage/2019/11/OdessaDeribas.jpg",
    },
    {
      name: "Odessa Catacombs",
      photo:
        "https://media.cnn.com/api/v1/images/stellar/prod/190725110840-exploring-the-catacombs-of-odessa-soviet-memorabilia-in-the-odessa-catacombs.jpg?q=w_1600,h_900,x_0,y_0,c_fill/w_1280",
    },
  ],
  photos: [
    "https://www.unesco.org/sites/default/files/styles/best_image/article/2023-01/Ukraine_©%20GN%20Consulting%20Agency.jpg?itok=A8NJlmsi",
    "https://gdb.rferl.org/ADE02AEB-B095-4646-A82A-4DB0E114E100_w1080_h608.jpg",
    "https://cdnn21.img.ria.ru/images/07e6/0b/1e/1835228089_127:0:3551:1926_1920x0_80_0_0_148fbcec2ecc22174257958b0935725d.jpg",
    "https://uniqa.ua/content/news/002000-003000/_sm2_2151.jpg",
    "https://sofitel.accor.com/destinations/imagerie/odessa-overview-1400x788-1-88d9_1400x788.jpg",
    "https://static.mk.ru/upload/entities/2022/12/29/22/articles/facebookPicture/9e/55/f9/24/d0fcaa6d928d1d516e80dda78122fc10.jpg"
  ],
};
