// CarLess - Car Brand Logo Database
// All logos use Wikimedia Commons (free/open license)

const LOGOS_DB = [
  // TIER 1 - Very Popular / Mainstream
  { id: 1, make: "Ferrari", tier: 1, founded: 1939, origin: "Italy", type: "Supercar/Sports", wikimediaFile: "Ferrari-Logo.svg", hints: ["Founded in 1939 in Maranello, Italy", "The prancing horse logo was inspired by WWI pilot Francesco Baracca", "Named after founder Enzo Ferrari"] },
  { id: 2, make: "Lamborghini", tier: 1, founded: 1963, origin: "Italy", type: "Supercar", wikimediaFile: "Logo_of_Lamborghini.svg", hints: ["Founded in 1963 by Ferruccio Lamborghini", "Named their models after fighting bulls", "Originally a tractor manufacturer"] },
  { id: 3, make: "Porsche", tier: 1, founded: 1931, origin: "Germany", type: "Sports/Luxury", wikimediaFile: "Porsche_logo.svg", hints: ["Founded in 1931 in Stuttgart, Germany", "The crest combines Stuttgart's horse and Baden-Württemberg's antlers", "Founded by Ferdinand Porsche"] },
  { id: 4, make: "BMW", tier: 1, founded: 1916, origin: "Germany", type: "Luxury/Sports", wikimediaFile: "BMW.svg", hints: ["Founded in 1916 in Munich, Germany", "Originally manufactured aircraft engines", "Logo represents a spinning aircraft propeller"] },
  { id: 5, make: "Mercedes-Benz", tier: 1, founded: 1926, origin: "Germany", type: "Luxury/Sports", wikimediaFile: "Mercedes-Benz_Logo_2010.svg", hints: ["The three-pointed star represents land, sea and air", "Founded in 1926 from merger of DMG and Benz & Cie.", "Karl Benz is credited with creating the first gasoline-powered car"] },
  { id: 6, make: "Audi", tier: 1, founded: 1909, origin: "Germany", type: "Luxury/Sports", wikimediaFile: "Audi_Logo.svg", hints: ["The four rings represent 4 merged companies: Audi, DKW, Horch, Wanderer", "Name 'Audi' is Latin translation of founder August Horch's name", "Founded in 1909 in Zwickau, Germany"] },
  { id: 7, make: "Toyota", tier: 1, founded: 1937, origin: "Japan", type: "Mass Market", wikimediaFile: "Toyota.svg", hints: ["Founded in 1937 in Toyota City, Japan", "Largest car manufacturer in the world", "The three ovals represent the car, the customer, and progress"] },
  { id: 8, make: "Ford", tier: 1, founded: 1903, origin: "USA", type: "Mass Market", wikimediaFile: "Ford_logo_flat.svg", hints: ["Founded in 1903 by Henry Ford in Detroit", "Henry Ford revolutionized manufacturing with the assembly line", "Created the original Mustang in 1964"] },
  { id: 9, make: "Chevrolet", tier: 1, founded: 1911, origin: "USA", type: "Mass Market", wikimediaFile: "Chevrolet_logo.svg", hints: ["Founded in 1911 by Louis Chevrolet and William Durant", "The 'bowtie' logo's origin is disputed", "Part of General Motors"] },
  { id: 10, make: "Volkswagen", tier: 1, founded: 1937, origin: "Germany", type: "Mass Market", wikimediaFile: "Volkswagen_logo_2019.svg", hints: ["'Volkswagen' means 'People's Car' in German", "Founded in 1937", "The Golf GTI launched the hot hatch genre in 1975"] },
  { id: 11, make: "Nissan", tier: 1, founded: 1933, origin: "Japan", type: "Mass Market/Sports", wikimediaFile: "Nissan_2020_logo.svg", hints: ["Founded in 1933 in Japan", "Created the legendary GT-R series", "Previously known as Datsun in some markets"] },
  { id: 12, make: "Honda", tier: 1, founded: 1948, origin: "Japan", type: "Mass Market/Sports", wikimediaFile: "Honda_Logo.svg", hints: ["Founded in 1948 by Soichiro Honda", "Also manufactures motorcycles and aircraft", "Known for high-revving VTEC engines"] },
  { id: 13, make: "McLaren", tier: 1, founded: 1963, origin: "UK", type: "Supercar/F1", wikimediaFile: "McLaren_logo.svg", hints: ["Founded in 1963 by Bruce McLaren", "One of the most successful F1 teams", "Based in Woking, Surrey, England"] },

  // TIER 2 - Mid popularity
  { id: 14, make: "Koenigsegg", tier: 2, founded: 1994, origin: "Sweden", type: "Hypercar", wikimediaFile: "Koenigsegg_logotype.svg", hints: ["Founded in 1994 by Christian von Koenigsegg", "Based in Ängelholm, Sweden", "Holds multiple land speed records"] },
  { id: 15, make: "Bugatti", tier: 2, founded: 1909, origin: "France", type: "Hypercar", wikimediaFile: "Bugatti_logo.svg", hints: ["Founded in 1909 by Ettore Bugatti in Alsace", "The Chiron produces 1,500 horsepower", "Owned by Volkswagen Group"] },
  { id: 16, make: "Aston Martin", tier: 2, founded: 1913, origin: "UK", type: "Luxury/Sports", wikimediaFile: "Aston_Martin_logo.svg", hints: ["Founded in 1913 by Lionel Martin and Robert Bamford", "The official car of James Bond since 1964", "Name comes from Aston Hill hillclimb race"] },
  { id: 17, make: "Maserati", tier: 2, founded: 1914, origin: "Italy", type: "Luxury/Sports", wikimediaFile: "Maserati_logo.svg", hints: ["Founded in 1914 by the Maserati brothers", "The trident logo represents Neptune, god of the sea", "Named after the city of Bologna"] },
  { id: 18, make: "Bentley", tier: 2, founded: 1919, origin: "UK", type: "Ultra Luxury", wikimediaFile: "Bentley_logo.svg", hints: ["Founded in 1919 by W.O. Bentley", "Known for the 'Flying B' hood ornament", "Owned by Volkswagen Group since 1998"] },
  { id: 19, make: "Rolls-Royce", tier: 2, founded: 1906, origin: "UK", type: "Ultra Luxury", wikimediaFile: "Rolls-Royce_motor_cars_logo.svg", hints: ["Founded in 1906 by Charles Rolls and Henry Royce", "The Spirit of Ecstasy mascot was introduced in 1911", "Owned by BMW Group since 2003"] },
  { id: 20, make: "Subaru", tier: 2, founded: 1953, origin: "Japan", type: "Sports/AWD", wikimediaFile: "Subaru_2019_logo.svg", hints: ["Founded in 1953 in Japan", "'Subaru' is the Japanese word for the Pleiades star cluster", "Famous for their Symmetrical AWD system"] },
  { id: 21, make: "Mazda", tier: 2, founded: 1920, origin: "Japan", type: "Sports/Mass Market", wikimediaFile: "Mazda_logo_2018.svg", hints: ["Founded in 1920 in Hiroshima, Japan", "Only manufacturer to commercially develop the Wankel rotary engine", "Previously known as Toyo Kogyo Co."] },
  { id: 22, make: "Pagani", tier: 2, founded: 1992, origin: "Italy", type: "Hypercar", wikimediaFile: "Pagani.svg", hints: ["Founded in 1992 by Horacio Pagani", "Based in San Cesario sul Panaro, Italy", "Each car is largely hand-built"] },
  { id: 23, make: "Alfa Romeo", tier: 2, founded: 1910, origin: "Italy", type: "Sports/Luxury", wikimediaFile: "Alfa_Romeo_Logo.svg", hints: ["Founded in 1910 in Milan, Italy", "The logo shows a snake devouring a man – a Visconti family symbol", "ALFA stands for Anonima Lombarda Fabbrica Automobili"] },
  { id: 24, make: "Lotus", tier: 2, founded: 1948, origin: "UK", type: "Sports", wikimediaFile: "Lotus_cars_logo.svg", hints: ["Founded in 1948 by Colin Chapman", "Known for extreme lightweight engineering philosophy", "Based in Hethel, Norfolk, England"] },
  { id: 25, make: "Dodge", tier: 2, founded: 1900, origin: "USA", type: "Muscle Car", wikimediaFile: "Dodge_logo.svg", hints: ["Founded in 1900 by Horace and John Dodge", "Known for powerful V8 muscle cars", "Created the Viper, one of America's most extreme sports cars"] },

  // TIER 3 - Less well-known / niche
  { id: 26, make: "Rimac", tier: 3, founded: 2009, origin: "Croatia", type: "Hypercar/EV", wikimediaFile: "Rimac_logo.png", hints: ["Founded in 2009 by Mate Rimac in Croatia", "Produces the world's fastest electric production car", "Also supplies EV components to other manufacturers"] },
  { id: 27, make: "Caterham", tier: 3, founded: 1973, origin: "UK", type: "Lightweight Sports", wikimediaFile: "Caterham_logo.png", hints: ["Founded in 1973 by Graham Nearn", "Based on the original Lotus Seven design", "Cars weigh as little as 490kg"] },
  { id: 28, make: "Ariel", tier: 3, founded: 1999, origin: "UK", type: "Extreme Lightweight", wikimediaFile: "Ariel_logo.png", hints: ["Founded in 1999 in Crewkerne, Somerset, England", "The Atom is essentially a race car for the road", "Manufactures a motorcycle called the Ace"] },
  { id: 29, make: "SSC North America", tier: 3, founded: 1998, origin: "USA", type: "Hypercar", wikimediaFile: "SSC_logo.png", hints: ["Founded in 1998 by Jerod Shelby", "Created the Tuatara which claimed a top speed of 508 km/h", "Based in Richland, Washington, USA"] },
  { id: 30, make: "Hennessey", tier: 3, founded: 1991, origin: "USA", type: "Hypercar/Tuner", wikimediaFile: "Hennessey_logo.png", hints: ["Founded in 1991 by John Hennessey", "Known for extreme tuning packages like Venom GT and Venom F5", "Based in Sealy, Texas, USA"] },
  { id: 31, make: "W Motors", tier: 3, founded: 2012, origin: "UAE", type: "Hypercar", wikimediaFile: "W_Motors_logo.png", hints: ["Founded in 2012 in Lebanon/UAE", "Created the Lykan Hypersport (first Arab supercar)", "The Lykan featured diamond-encrusted headlights"] },
  { id: 32, make: "Zenvo", tier: 3, founded: 2004, origin: "Denmark", type: "Hypercar", wikimediaFile: "Zenvo_logo.png", hints: ["Founded in 2004 in Præstø, Denmark", "Uses a unique centripetally-controlled active rear spoiler", "One of the few Danish supercar manufacturers"] }
];

const ALL_MAKES_LOGOS = LOGOS_DB.map(l => l.make).sort();

function getLogosByTier(tier) {
  return LOGOS_DB.filter(l => l.tier === tier);
}

function searchMakes(query) {
  if (!query || query.length < 1) return [];
  const q = query.toLowerCase();
  return ALL_MAKES_LOGOS.filter(m => m.toLowerCase().includes(q)).slice(0, 8);
}
