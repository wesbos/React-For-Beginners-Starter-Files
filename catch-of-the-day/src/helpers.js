export const formatPrice = (cents) => (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });

export const rando = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const slugify = (text) => text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");

export const getFunName = () => {
  const adjectives = [
    "adorable",
    "beautiful",
    "clean",
    "drab",
    "elegant",
    "fancy",
    "glamorous",
    "handsome",
    "long",
    "magnificent",
    "old-fashioned",
    "plain",
    "quaint",
    "sparkling",
    "ugliest",
    "unsightly",
    "angry",
    "bewildered",
    "clumsy",
    "defeated",
    "embarrassed",
    "fierce",
    "grumpy",
    "helpless",
    "itchy",
    "jealous",
    "lazy",
    "mysterious",
    "nervous",
    "obnoxious",
    "panicky",
    "repulsive",
    "scary",
    "thoughtless",
    "uptight",
    "worried"
  ];

  const nouns = [
    "women",
    "men",
    "children",
    "teeth",
    "feet",
    "people",
    "leaves",
    "mice",
    "geese",
    "halves",
    "knives",
    "wives",
    "lives",
    "elves",
    "loaves",
    "potatoes",
    "tomatoes",
    "cacti",
    "foci",
    "fungi",
    "nuclei",
    "syllabuses",
    "analyses",
    "diagnoses",
    "oases",
    "theses",
    "crises",
    "phenomena",
    "criteria",
    "data"
  ];

  return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
}
