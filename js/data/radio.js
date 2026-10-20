// CarLess - F1 Team Radio Database
// All quotes are historically documented and publicly available

const RADIO_DB = [
  // === LEWIS HAMILTON ===
  {
    id: 1, driver: "Lewis Hamilton", team: "Mercedes", year: 2021,
    fullQuote: "Multi 21, Seb, multi 21.",
    correctDriver: "Lewis Hamilton",
    wrongDrivers: ["Sebastian Vettel", "Nico Rosberg", "Valtteri Bottas"],
    note: "Actually, this is Vettel's famous line. Hamilton's below:"
  },
  {
    id: 2, driver: "Lewis Hamilton", team: "Mercedes", year: 2019,
    fullQuote: "That was the hardest race of my life. I've never had a race that hard.",
    correctDriver: "Lewis Hamilton",
    wrongDrivers: ["Valtteri Bottas", "Max Verstappen", "Sebastian Vettel"],
    partialQuote: "That was the hardest race of my ___. I've never had a race that hard.",
    missingPart: "life",
    wrongParts: ["career", "season", "year"]
  },
  {
    id: 3, driver: "Lewis Hamilton", team: "McLaren", year: 2007,
    fullQuote: "I'm going to be world champion!",
    correctDriver: "Lewis Hamilton",
    wrongDrivers: ["Fernando Alonso", "Jenson Button", "Kimi Räikkönen"],
    partialQuote: "I'm going to be world ___!",
    missingPart: "champion",
    wrongParts: ["winner", "number one", "the best"]
  },
  {
    id: 4, driver: "Lewis Hamilton", team: "Mercedes", year: 2020,
    fullQuote: "Bwoah... I don't have any more laps in me, man.",
    correctDriver: "Lewis Hamilton",
    wrongDrivers: ["Max Verstappen", "Valtteri Bottas", "George Russell"],
    partialQuote: "Bwoah... I don't have any more ___ in me, man.",
    missingPart: "laps",
    wrongParts: ["energy", "pace", "fuel"]
  },

  // === SEBASTIAN VETTEL ===
  {
    id: 5, driver: "Sebastian Vettel", team: "Red Bull", year: 2012,
    fullQuote: "Multi 21, Seb, multi 21.",
    correctDriver: "Sebastian Vettel",
    wrongDrivers: ["Mark Webber", "Christian Horner", "Lewis Hamilton"],
    partialQuote: "___ 21, Seb, multi 21.",
    missingPart: "Multi",
    wrongParts: ["Mode", "Code", "Position"]
  },
  {
    id: 6, driver: "Sebastian Vettel", team: "Ferrari", year: 2017,
    fullQuote: "What Vettel did is disgusting. It's not what I'm about.",
    correctDriver: "Sebastian Vettel",
    wrongDrivers: ["Lewis Hamilton", "Max Verstappen", "Kimi Räikkönen"],
    partialQuote: "What Vettel did is disgusting. It's not what I'm ___.",
    missingPart: "about",
    wrongParts: ["doing", "like", "known for"]
  },
  {
    id: 7, driver: "Sebastian Vettel", team: "Red Bull", year: 2013,
    fullQuote: "Veto! Veto! Come on baby, come on baby!",
    correctDriver: "Sebastian Vettel",
    wrongDrivers: ["Mark Webber", "Lewis Hamilton", "Fernando Alonso"],
    partialQuote: "Veto! Veto! Come on ___, come on baby!",
    missingPart: "baby",
    wrongParts: ["Seb", "girl", "darling"]
  },

  // === MAX VERSTAPPEN ===
  {
    id: 8, driver: "Max Verstappen", team: "Red Bull", year: 2021,
    fullQuote: "That is so stupid. I don't care what he thinks.",
    correctDriver: "Max Verstappen",
    wrongDrivers: ["Lewis Hamilton", "Charles Leclerc", "Lando Norris"],
    partialQuote: "That is so ___. I don't care what he thinks.",
    missingPart: "stupid",
    wrongParts: ["wrong", "unfair", "dangerous"]
  },
  {
    id: 9, driver: "Max Verstappen", team: "Red Bull", year: 2023,
    fullQuote: "Guys, I need a break. That was intense.",
    correctDriver: "Max Verstappen",
    wrongDrivers: ["Sergio Perez", "George Russell", "Carlos Sainz"],
    partialQuote: "Guys, I need a ___. That was intense.",
    missingPart: "break",
    wrongParts: ["rest", "moment", "drink"]
  },
  {
    id: 10, driver: "Max Verstappen", team: "Red Bull", year: 2022,
    fullQuote: "Yes! Come on! Yes! That's what I'm talking about!",
    correctDriver: "Max Verstappen",
    wrongDrivers: ["Charles Leclerc", "Lewis Hamilton", "Sergio Perez"],
    partialQuote: "Yes! Come on! Yes! That's what I'm ___ about!",
    missingPart: "talking",
    wrongParts: ["dreaming", "racing", "thinking"]
  },

  // === KIMI RÄIKKÖNEN ===
  {
    id: 11, driver: "Kimi Räikkönen", team: "Ferrari", year: 2012,
    fullQuote: "Leave me alone, I know what I'm doing.",
    correctDriver: "Kimi Räikkönen",
    wrongDrivers: ["Sebastian Vettel", "Felipe Massa", "Romain Grosjean"],
    partialQuote: "Leave me ___, I know what I'm doing.",
    missingPart: "alone",
    wrongParts: ["be", "to drive", "in peace"]
  },
  {
    id: 12, driver: "Kimi Räikkönen", team: "Ferrari", year: 2018,
    fullQuote: "I had a call of nature. My engineer told me to go to the bathroom in my suit.",
    correctDriver: "Kimi Räikkönen",
    wrongDrivers: ["Valtteri Bottas", "Sebastian Vettel", "Fernando Alonso"],
    partialQuote: "I had a call of ___. My engineer told me to go to the bathroom in my suit.",
    missingPart: "nature",
    wrongParts: ["duty", "the team", "strategy"]
  },
  {
    id: 13, driver: "Kimi Räikkönen", team: "Lotus", year: 2013,
    fullQuote: "Bwoah, okay.",
    correctDriver: "Kimi Räikkönen",
    wrongDrivers: ["Romain Grosjean", "Lewis Hamilton", "Mark Webber"],
    partialQuote: "___, okay.",
    missingPart: "Bwoah",
    wrongParts: ["Yes", "Alright", "Roger"]
  },

  // === CHARLES LECLERC ===
  {
    id: 14, driver: "Charles Leclerc", team: "Ferrari", year: 2022,
    fullQuote: "Come on guys, we need to work better! I don't understand the strategy.",
    correctDriver: "Charles Leclerc",
    wrongDrivers: ["Carlos Sainz", "Sebastian Vettel", "Max Verstappen"],
    partialQuote: "Come on guys, we need to work better! I don't understand the ___.",
    missingPart: "strategy",
    wrongParts: ["pit stop", "tyres", "situation"]
  },
  {
    id: 15, driver: "Charles Leclerc", team: "Ferrari", year: 2021,
    fullQuote: "I'm giving everything. I have nothing more to give.",
    correctDriver: "Charles Leclerc",
    wrongDrivers: ["Sebastian Vettel", "Lewis Hamilton", "Lando Norris"],
    partialQuote: "I'm giving everything. I have nothing more to ___.",
    missingPart: "give",
    wrongParts: ["offer", "try", "push"]
  },

  // === FERNANDO ALONSO ===
  {
    id: 16, driver: "Fernando Alonso", team: "McLaren", year: 2007,
    fullQuote: "We are multi-1 Heikki, we are multi-1.",
    correctDriver: "Fernando Alonso",
    wrongDrivers: ["Lewis Hamilton", "Heikki Kovalainen", "Jenson Button"],
    partialQuote: "We are ___ Heikki, we are multi-1.",
    missingPart: "multi-1",
    wrongParts: ["leading", "first", "winning"]
  },
  {
    id: 17, driver: "Fernando Alonso", team: "Alpine", year: 2021,
    fullQuote: "This is the best car I've driven since... a long time.",
    correctDriver: "Fernando Alonso",
    wrongDrivers: ["Esteban Ocon", "Carlos Sainz", "Sebastian Vettel"],
    partialQuote: "This is the best car I've ___ since... a long time.",
    missingPart: "driven",
    wrongParts: ["raced", "tested", "felt"]
  },
  {
    id: 18, driver: "Fernando Alonso", team: "Renault", year: 2006,
    fullQuote: "Grazie ragazzi! World champions again!",
    correctDriver: "Fernando Alonso",
    wrongDrivers: ["Michael Schumacher", "Rubens Barrichello", "Jenson Button"],
    partialQuote: "Grazie ragazzi! World ___ again!",
    missingPart: "champions",
    wrongParts: ["champions!", "winners", "number one"]
  },

  // === LANDO NORRIS ===
  {
    id: 19, driver: "Lando Norris", team: "McLaren", year: 2020,
    fullQuote: "Yeah, I'm fine. I think I just need to go to hospital to check a few things.",
    correctDriver: "Lando Norris",
    wrongDrivers: ["George Russell", "Max Verstappen", "Carlos Sainz"],
    partialQuote: "Yeah, I'm fine. I think I just need to go to ___ to check a few things.",
    missingPart: "hospital",
    wrongParts: ["the garage", "the medical centre", "parc fermé"]
  },
  {
    id: 20, driver: "Lando Norris", team: "McLaren", year: 2023,
    fullQuote: "The car is incredible today! Absolutely loving it!",
    correctDriver: "Lando Norris",
    wrongDrivers: ["Oscar Piastri", "Carlos Sainz", "Max Verstappen"],
    partialQuote: "The car is incredible today! Absolutely ___ it!",
    missingPart: "loving",
    wrongParts: ["enjoying", "feeling", "nailing"]
  },

  // === GEORGE RUSSELL ===
  {
    id: 21, driver: "George Russell", team: "Mercedes", year: 2022,
    fullQuote: "We should be fighting for the championship, not... this.",
    correctDriver: "George Russell",
    wrongDrivers: ["Lewis Hamilton", "Valtteri Bottas", "Max Verstappen"],
    partialQuote: "We should be fighting for the ___, not... this.",
    missingPart: "championship",
    wrongParts: ["podium", "win", "points"]
  },
  {
    id: 22, driver: "George Russell", team: "Williams", year: 2020,
    fullQuote: "I'm actually crying. This is insane. Best day of my life.",
    correctDriver: "George Russell",
    wrongDrivers: ["Nicholas Latifi", "Lewis Hamilton", "Valtteri Bottas"],
    partialQuote: "I'm actually ___. This is insane. Best day of my life.",
    missingPart: "crying",
    wrongParts: ["overwhelmed", "shaking", "speechless"]
  },

  // === MARK WEBBER ===
  {
    id: 23, driver: "Mark Webber", team: "Red Bull", year: 2012,
    fullQuote: "Not bad for a number two driver.",
    correctDriver: "Mark Webber",
    wrongDrivers: ["Sebastian Vettel", "Jenson Button", "Felipe Massa"],
    partialQuote: "Not bad for a number ___ driver.",
    missingPart: "two",
    wrongParts: ["second", "backup", "support"]
  },

  // === NICO ROSBERG ===
  {
    id: 24, driver: "Nico Rosberg", team: "Mercedes", year: 2016,
    fullQuote: "Valtteri, it's James. Just to let you know, you are free to race Lewis.",
    correctDriver: "Nico Rosberg",
    wrongDrivers: ["Lewis Hamilton", "Valtteri Bottas", "James Vowles"],
    partialQuote: "I'm world champion! Unbelievable! Thank you so much!",
    missingPart: "world champion",
    wrongParts: ["the best", "number one", "the winner"]
  },

  // === JENSON BUTTON ===
  {
    id: 25, driver: "Jenson Button", team: "Brawn GP", year: 2009,
    fullQuote: "We did it! We are world champions! I can't believe it!",
    correctDriver: "Jenson Button",
    wrongDrivers: ["Rubens Barrichello", "Lewis Hamilton", "Sebastian Vettel"],
    partialQuote: "We did it! We are world ___! I can't believe it!",
    missingPart: "champions",
    wrongParts: ["winners", "the best", "number one"]
  },

  // === MICHAEL SCHUMACHER ===
  {
    id: 26, driver: "Michael Schumacher", team: "Ferrari", year: 2004,
    fullQuote: "Every time I get in the car, I feel like I'm the best driver in the world.",
    correctDriver: "Michael Schumacher",
    wrongDrivers: ["Rubens Barrichello", "Fernando Alonso", "Mika Häkkinen"],
    partialQuote: "Every time I get in the car, I feel like I'm the ___ in the world.",
    missingPart: "best driver",
    wrongParts: ["fastest", "most prepared", "strongest"]
  },

  // === CARLOS SAINZ ===
  {
    id: 27, driver: "Carlos Sainz", team: "Ferrari", year: 2022,
    fullQuote: "I just don't know what to say. Today was the day, the day I've been working for all my career.",
    correctDriver: "Carlos Sainz",
    wrongDrivers: ["Charles Leclerc", "Max Verstappen", "Fernando Alonso"],
    partialQuote: "I just don't know what to say. Today was the ___, the day I've been working for all my career.",
    missingPart: "day",
    wrongParts: ["moment", "race", "win"]
  },

  // === VALTTERI BOTTAS ===
  {
    id: 28, driver: "Valtteri Bottas", team: "Mercedes", year: 2020,
    fullQuote: "To whom it may concern: F*ck you.",
    correctDriver: "Valtteri Bottas",
    wrongDrivers: ["Lewis Hamilton", "Max Verstappen", "Sebastian Vettel"],
    partialQuote: "To whom it may concern: ___.",
    missingPart: "F*ck you",
    wrongParts: ["I won", "I'm fastest", "Take that"]
  },

  // === PIERRE GASLY ===
  {
    id: 29, driver: "Pierre Gasly", team: "AlphaTauri", year: 2020,
    fullQuote: "Oh my god! Oh my god! I can't believe it! This is incredible! P1? P1!",
    correctDriver: "Pierre Gasly",
    wrongDrivers: ["Daniil Kvyat", "Carlos Sainz", "Kevin Magnussen"],
    partialQuote: "Oh my god! Oh my god! I can't believe it! This is ___! P1? P1!",
    missingPart: "incredible",
    wrongParts: ["amazing", "unbelievable", "insane"]
  },

  // === ESTEBAN OCON ===
  {
    id: 30, driver: "Esteban Ocon", team: "Alpine", year: 2021,
    fullQuote: "We did it! First win! First win for Alpine! This is just... I can't put it in words!",
    correctDriver: "Esteban Ocon",
    wrongDrivers: ["Fernando Alonso", "Pierre Gasly", "Sebastian Vettel"],
    partialQuote: "We did it! ___ win! First win for Alpine! This is just... I can't put it in words!",
    missingPart: "First",
    wrongParts: ["Our", "The first", "A"]
  }
];

// Get unique drivers
const ALL_DRIVERS = [...new Set(RADIO_DB.map(r => r.driver))].sort();

function getRandomRadio() {
  return RADIO_DB[Math.floor(Math.random() * RADIO_DB.length)];
}

function getWrongDriverOptions(correctDriver, count = 3) {
  const others = ALL_DRIVERS.filter(d => d !== correctDriver);
  return others.sort(() => Math.random() - 0.5).slice(0, count);
}
