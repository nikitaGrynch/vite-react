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
