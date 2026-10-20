// CarLess - Car Facts Database
// Used in FactLess game mode

const FACTS_DB = [
  {
    id: 1, carId: 56, carName: "Bugatti Chiron",
    trueFact: "The Bugatti Chiron's engine produces 1,500 horsepower from a 8.0-litre W16 engine with four turbochargers.",
    falseFacts: [
      "The Bugatti Chiron's engine produces 1,200 horsepower from a 6.5-litre W12 engine with two turbochargers.",
      "The Bugatti Chiron uses a twin-turbocharged V8 engine producing 1,500 horsepower.",
      "The Bugatti Chiron has a top speed electronically limited to 380 km/h."
    ],
    category: "powertrain"
  },
  {
    id: 2, carId: 56, carName: "Bugatti Chiron",
    trueFact: "The Bugatti Chiron can accelerate from 0 to 100 km/h in just 2.4 seconds.",
    falseFacts: [
      "The Bugatti Chiron can accelerate from 0 to 100 km/h in just 1.9 seconds.",
      "The Bugatti Chiron can accelerate from 0 to 100 km/h in just 3.1 seconds.",
      "The Bugatti Chiron can accelerate from 0 to 100 km/h in just 2.8 seconds."
    ],
    category: "performance"
  },
  {
    id: 3, carId: 1, carName: "Ferrari F40",
    trueFact: "The Ferrari F40 was the last Ferrari model personally approved by Enzo Ferrari before his death in 1988.",
    falseFacts: [
      "The Ferrari F40 was the first Ferrari model to feature an automatic gearbox as standard equipment.",
      "The Ferrari F40 was designed to celebrate Ferrari's 45th anniversary in 1984.",
      "The Ferrari F40 was the first production car to exceed 300 km/h when tested by Ferrari's own engineers."
    ],
    category: "history"
  },
  {
    id: 4, carId: 1, carName: "Ferrari F40",
    trueFact: "The Ferrari F40 has no carpet, air conditioning, or radio – it was stripped to the bare essentials for performance.",
    falseFacts: [
      "The Ferrari F40 was equipped with a full leather interior and climate control system for comfort.",
      "The Ferrari F40 was the first Ferrari with drive-by-wire throttle control.",
      "The Ferrari F40 originally featured a digital dashboard with multiple driving modes."
    ],
    category: "features"
  },
  {
    id: 5, carId: 11, carName: "Lamborghini Countach LP400",
    trueFact: "The Lamborghini Countach name was inspired by a Piedmontese exclamation of amazement.",
    falseFacts: [
      "The Lamborghini Countach was named after a famous Italian racing circuit.",
      "The Lamborghini Countach name comes from a Latin word meaning 'lightning'.",
      "The Lamborghini Countach was named in honor of founder Ferruccio Lamborghini's birthplace."
    ],
    category: "history"
  },
  {
    id: 6, carId: 58, carName: "Koenigsegg Agera RS",
    trueFact: "The Koenigsegg Agera RS set a production car speed record of 447.19 km/h (277.87 mph) in 2017 on a public road in Nevada.",
    falseFacts: [
      "The Koenigsegg Agera RS set a production car speed record of 421 km/h on a private test track in Sweden.",
      "The Koenigsegg Agera RS set a production car speed record of 431 km/h using nitrous oxide injection.",
      "The Koenigsegg Agera RS achieved 447 km/h at the Bonneville Salt Flats in Utah."
    ],
    category: "performance"
  },
  {
    id: 7, carId: 37, carName: "Nissan Skyline GT-R R34",
    trueFact: "The Nissan Skyline GT-R R34 was officially rated at 206 kW (276 hp), but many suspect it actually produced closer to 330 hp from the factory.",
    falseFacts: [
      "The Nissan Skyline GT-R R34 was officially rated at 350 hp, making it one of the most powerful Japanese cars of its era.",
      "The Nissan Skyline GT-R R34 used a naturally aspirated 3.5-litre V6 engine producing 276 hp.",
      "The Nissan Skyline GT-R R34 was officially the fastest production car Japan ever exported."
    ],
    category: "powertrain"
  },
  {
    id: 8, carId: 42, carName: "Mazda RX-7 FD",
    trueFact: "The Mazda RX-7 FD used a twin-turbocharged rotary (Wankel) engine, the only mainstream sports car to do so in the 1990s.",
    falseFacts: [
      "The Mazda RX-7 FD used a twin-turbocharged V6 engine, unique for its class in the 1990s.",
      "The Mazda RX-7 FD was powered by a naturally aspirated 4-cylinder engine with a sequential supercharger.",
      "The Mazda RX-7 FD featured a unique inline-6 engine mounted transversely for better weight balance."
    ],
    category: "powertrain"
  },
  {
    id: 9, carId: 53, carName: "McLaren P1",
    trueFact: "The McLaren P1 uses a combined electric motor and twin-turbocharged V8 to produce 916 hp, allowing it to lap the Nürburgring in under 7 minutes.",
    falseFacts: [
      "The McLaren P1 uses a naturally aspirated V12 with an electric motor to produce 916 hp.",
      "The McLaren P1 was the first hybrid hypercar to exceed 1,000 hp in combined output.",
      "The McLaren P1 has a drag coefficient of 0.29, making it one of the most aerodynamically efficient hypercars."
    ],
    category: "powertrain"
  },
  {
    id: 10, carId: 44, carName: "Ford Mustang Shelby GT500",
    trueFact: "The 2020 Ford Mustang Shelby GT500 produces 760 horsepower from a supercharged 5.2-litre V8 – the most powerful Ford production engine ever.",
    falseFacts: [
      "The 2020 Ford Mustang Shelby GT500 produces 760 hp from a twin-turbocharged 5.0-litre V8 engine.",
      "The 2020 Ford Mustang Shelby GT500 produces 850 hp from a supercharged 6.2-litre V8 engine.",
      "The 2020 Ford Mustang Shelby GT500 produces 700 hp, the same as the original 1967 GT500."
    ],
    category: "powertrain"
  },
  {
    id: 11, carId: 84, carName: "Subaru Impreza WRX STI",
    trueFact: "The Subaru WRX STI uses a boxer (flat) 4-cylinder engine – a layout unique among mainstream performance sedans.",
    falseFacts: [
      "The Subaru WRX STI uses an inline-4 engine mounted longitudinally, similar to many rally-bred competitors.",
      "The Subaru WRX STI uses an AWD system shared with Lamborghini due to a technical partnership.",
      "The Subaru WRX STI originally had a turbocharged V6 engine before switching to the flat-4 in later generations."
    ],
    category: "powertrain"
  },
  {
    id: 12, carId: 50, carName: "Chevrolet Corvette C8",
    trueFact: "The Corvette C8 is the first mid-engine Corvette in the nameplate's history, with the engine positioned behind the driver.",
    falseFacts: [
      "The Corvette C8 introduced the first turbocharged engine in Corvette's history.",
      "The Corvette C8 moved to an all-wheel-drive layout for the first time in Corvette history.",
      "The Corvette C8 was the first Corvette offered exclusively as a convertible."
    ],
    category: "history"
  },
  {
    id: 13, carId: 32, carName: "Toyota Supra A80",
    trueFact: "The Toyota Supra A80's legendary 2JZ-GTE engine is famous for handling over 1,000 hp with mostly stock internals.",
    falseFacts: [
      "The Toyota Supra A80 shares its engine block with the Lexus SC400's V8, modified for inline configuration.",
      "The Toyota Supra A80 used a ceramic turbocharger, the first production car to do so.",
      "The Toyota Supra A80 was the world's first production car with a factory-fitted launch control system."
    ],
    category: "powertrain"
  },
  {
    id: 14, carId: 15, carName: "Porsche Carrera GT",
    trueFact: "The Porsche Carrera GT uses a naturally-aspirated V10 engine originally developed for a Formula 1 project that was cancelled.",
    falseFacts: [
      "The Porsche Carrera GT uses a twin-turbocharged V8 engine developed for Le Mans racing.",
      "The Porsche Carrera GT uses a naturally-aspirated V12 engine derived from the 917 race car.",
      "The Porsche Carrera GT uses the same flat-6 engine as the 911 GT1, but enlarged to 5.7 litres."
    ],
    category: "powertrain"
  },
  {
    id: 15, carId: 60, carName: "Rolls-Royce Phantom VIII",
    trueFact: "The Rolls-Royce Phantom VIII has a 'Gallery dashboard' – a full-width glass-enclosed display case that customers can fill with personal items.",
    falseFacts: [
      "The Rolls-Royce Phantom VIII features a retractable roof section called the 'starlight panel', unique to this model.",
      "The Rolls-Royce Phantom VIII is entirely handbuilt with no automated processes in its manufacturing.",
      "The Rolls-Royce Phantom VIII requires a full week of hand-stitching for the interior leather alone."
    ],
    category: "features"
  },
  {
    id: 16, carId: 68, carName: "Rimac Nevera",
    trueFact: "The Rimac Nevera produces 1,914 horsepower and can accelerate from 0-100 km/h in 1.97 seconds, making it one of the fastest accelerating production cars ever made.",
    falseFacts: [
      "The Rimac Nevera produces 1,914 hp and achieves 0-100 km/h in 1.1 seconds, the fastest ever recorded.",
      "The Rimac Nevera produces 1,600 hp and can achieve 0-100 km/h in 2.2 seconds.",
      "The Rimac Nevera produces 2,000 hp and is electronically limited to 400 km/h top speed."
    ],
    category: "performance"
  },
  {
    id: 17, carId: 36, carName: "Nissan GT-R R35",
    trueFact: "The Nissan GT-R R35 has a dual-clutch transaxle gearbox mounted at the rear for near-perfect 50/50 weight distribution.",
    falseFacts: [
      "The Nissan GT-R R35 uses a conventional automatic gearbox positioned next to the engine in the front.",
      "The Nissan GT-R R35 was the first production car to use carbon ceramic brakes as standard equipment.",
      "The Nissan GT-R R35 uses an AWD system developed in partnership with Mitsubishi from the Evo programme."
    ],
    category: "engineering"
  },
  {
    id: 18, carId: 88, carName: "Lexus LFA",
    trueFact: "The Lexus LFA's V10 engine revs so fast (9,000 rpm) that a traditional analog tachometer couldn't keep up, so Lexus used a digital display.",
    falseFacts: [
      "The Lexus LFA was the first production car to use a carbon fibre monocoque chassis in its class.",
      "The Lexus LFA uses the same V10 engine as the Lexus IS-F, enlarged from 5.0 to 4.8 litres.",
      "The Lexus LFA has a top speed of 350 km/h, matching the Bugatti Veyron of the same era."
    ],
    category: "engineering"
  },
  {
    id: 19, carId: 24, carName: "Mercedes-Benz S63 AMG",
    trueFact: "The Mercedes-Benz AMG V8 biturbo engine used in the S63 is assembled entirely by a single technician, who then signs the engine cover.",
    falseFacts: [
      "The Mercedes-Benz S63 AMG uses a shared engine platform with Aston Martin, established in their 2013 partnership.",
      "The Mercedes-Benz S63 AMG's engine is assembled by a team of exactly 4 engineers, all former Formula 1 technicians.",
      "The Mercedes-Benz S63 AMG uses the same engine block as the SLS AMG, modified with direct injection."
    ],
    category: "manufacturing"
  },
  {
    id: 20, carId: 65, carName: "Tesla Model S Plaid",
    trueFact: "The Tesla Model S Plaid uses three electric motors and can accelerate from 0-100 km/h in under 2.1 seconds in 'Plaid' mode.",
    falseFacts: [
      "The Tesla Model S Plaid uses a single large electric motor and achieves 0-100 km/h in 2.1 seconds.",
      "The Tesla Model S Plaid uses two electric motors similar to the standard Model S Performance variant.",
      "The Tesla Model S Plaid's 'Plaid' mode requires a special $10,000 software subscription to unlock."
    ],
    category: "powertrain"
  },
  {
    id: 21, carId: 86, carName: "Pagani Huayra BC Roadster",
    trueFact: "The Pagani Huayra features active aerodynamics with four independent flaps that adjust 100 times per second based on driving conditions.",
    falseFacts: [
      "The Pagani Huayra features a fixed carbon fibre wing and uses drag-reduction system (DRS) from Formula 1.",
      "The Pagani Huayra was the first hypercar to use Mercedes-AMG's V12 engine in its production cars.",
      "The Pagani Huayra uses a manual 6-speed gearbox from the Lamborghini Gallardo."
    ],
    category: "technology"
  },
  {
    id: 22, carId: 14, carName: "Porsche 918 Spyder",
    trueFact: "The Porsche 918 Spyder was the first production car to lap the Nürburgring Nordschleife in under 7 minutes.",
    falseFacts: [
      "The Porsche 918 Spyder was the first hybrid car to win the 24 Hours of Le Mans.",
      "The Porsche 918 Spyder can travel up to 50 km on electric power alone, more than any hybrid of its era.",
      "The Porsche 918 Spyder uses the same V8 engine as the Carrera GT, upgraded with hybrid assistance."
    ],
    category: "performance"
  },
  {
    id: 23, carId: 85, carName: "Mitsubishi Lancer Evolution X",
    trueFact: "The Mitsubishi Lancer Evolution features Super All-Wheel Control (S-AWC) that can vector torque independently to each wheel.",
    falseFacts: [
      "The Mitsubishi Lancer Evolution X was the first car to offer launch control as a standard feature.",
      "The Mitsubishi Lancer Evolution X uses a front-wheel-drive layout for optimal weight distribution.",
      "The Mitsubishi Lancer Evolution X was powered by a 2.5-litre turbocharged flat-4 engine from Subaru."
    ],
    category: "technology"
  },
  {
    id: 24, carId: 30, carName: "Audi RS3 Sportback",
    trueFact: "The Audi RS3 uses a 2.5-litre 5-cylinder turbocharged engine – the only 5-cylinder engine still offered in a modern performance car.",
    falseFacts: [
      "The Audi RS3 uses a 2.0-litre 4-cylinder turbocharged engine making it unique for using under 2 litres for this power output.",
      "The Audi RS3's engine is derived from the Audi R8's V10, downsized to fit the compact body.",
      "The Audi RS3 was the first Audi to offer a rear-wheel-drive mode via its quattro AWD system."
    ],
    category: "powertrain"
  },
  {
    id: 25, carId: 77, carName: "Alfa Romeo Giulia Quadrifoglio",
    trueFact: "The Alfa Romeo Giulia Quadrifoglio set the Nürburgring production sedan record in 2016 with a lap time of 7 minutes 32 seconds.",
    falseFacts: [
      "The Alfa Romeo Giulia Quadrifoglio uses a V8 engine borrowed from Ferrari, detuned to 510 hp.",
      "The Alfa Romeo Giulia Quadrifoglio was the first Alfa Romeo in 20 years to use a rear-wheel-drive layout.",
      "The Alfa Romeo Giulia Quadrifoglio's chassis was co-developed with Maserati using a shared platform."
    ],
    category: "performance"
  }
];

function getRandomFact() {
  return FACTS_DB[Math.floor(Math.random() * FACTS_DB.length)];
}

function getFactsByCategory(category) {
  return FACTS_DB.filter(f => f.category === category);
}

function buildFactQuestion(fact, mode = 'find_truth') {
  // mode: 'find_truth' (find the 1 true fact) or 'find_lie' (find the 1 false fact)
  if (mode === 'find_truth') {
    const options = [fact.trueFact, ...fact.falseFacts].sort(() => Math.random() - 0.5);
    return { options, correct: fact.trueFact, mode };
  } else {
    // find_lie - any one of the false facts
    const chosenFalse = fact.falseFacts[Math.floor(Math.random() * fact.falseFacts.length)];
    const distractors = [...fact.falseFacts.filter(f => f !== chosenFalse), fact.trueFact]
      .sort(() => Math.random() - 0.5).slice(0, 3);
    const options = [chosenFalse, ...distractors].sort(() => Math.random() - 0.5);
    return { options, correct: chosenFalse, mode };
  }
}
