// CarLess - Fill-in-the-blank Texts Database
// Used in TextLess game mode

const TEXTS_DB = [
  {
    id: 1,
    category: "Technical Description",
    title: "How a Turbocharger Works",
    words: ["exhaust", "turbine", "compressor", "intercooler", "boost", "wastegate", "lag", "manifold", "density", "power"],
    template: `A turbocharger is a forced induction device that uses [BLANK_1] gases to spin a [BLANK_2] wheel. This wheel is connected to a [BLANK_3] wheel on the same shaft, which compresses the intake air. The compressed air then passes through an [BLANK_4] that cools it, increasing its [BLANK_5]. Higher air density allows more fuel to be injected, increasing engine [BLANK_10]. The amount of pressure – known as [BLANK_6] – is regulated by a [BLANK_7] valve. One downside of turbocharged engines is [BLANK_8] – a brief delay between throttle input and power delivery, caused by the time needed to spool the turbine. The compressed air is then distributed through the intake [BLANK_9].`,
    hints: ["Think about what comes out of an engine's tailpipe", "The spinning component that drives the system", "Opposite function to a turbine – it squeezes air", "A heat exchanger in the intake system", "Air molecules packed closer together", "The pressure measurement in turbocharged systems", "A valve that controls maximum pressure", "A delay or hesitation in response", "The chamber that distributes air to cylinders", "What everyone wants more of from their engine"]
  },
  {
    id: 2,
    category: "Motorsport History",
    title: "The 1976 Formula 1 Season",
    words: ["Ferrari", "McLaren", "Nürburgring", "fire", "Lauda", "Hunt", "championship", "points", "Japan", "recovered"],
    template: `The 1976 Formula 1 World Championship is one of the most dramatic in racing history. Niki [BLANK_5] was dominating the season in his [BLANK_1] when disaster struck at the [BLANK_3] in Germany. His car crashed and caught [BLANK_4], leaving him with severe burns. Despite his injuries, [BLANK_5] [BLANK_10] remarkably quickly and returned to racing just 42 days later. Meanwhile, James [BLANK_6] in the [BLANK_2] was closing the gap in [BLANK_8] throughout the rest of the season. The deciding race took place in [BLANK_9] at Fuji. Despite trailing in the [BLANK_7] fight, [BLANK_6] claimed the title when [BLANK_5] withdrew from the wet race.`,
    hints: ["The Italian manufacturer in red", "The British constructor", "Germany's famous racing circuit", "What broke out in Lauda's crash", "Austrian F1 legend", "British champion that year", "What determines who wins the season", "Units used to calculate standings", "Country with the deciding race", "What Lauda did against all odds"]
  },
  {
    id: 3,
    category: "Car Review",
    title: "Porsche 911 GT3 RS Test Drive",
    words: ["downforce", "naturally", "rear-wheel", "steering", "throttle", "apex", "sequential", "track", "understeer", "gearbox"],
    template: `Behind the wheel of the Porsche 911 GT3 RS, every sensation is amplified. The [BLANK_2] aspirated flat-six engine howls behind the driver as the car is pushed through a corner. The hydraulic [BLANK_4] communicates every surface imperfection with startling clarity. Unlike many modern performance cars, this 911 is [BLANK_3] drive, making throttle control essential. Apply power too early out of the [BLANK_6] and the rear will step out; too little and [BLANK_9] robs speed. The [BLANK_10] shifts gears with lightning speed, never missing a beat under full [BLANK_5] application. The wing mounted above generates significant [BLANK_1] at high speeds, pressing the car into the [BLANK_8]. The [BLANK_7] exhaust note is a symphony of mechanical music.`,
    hints: ["Force that pushes the car downward", "No forced induction – pure air intake", "The driven axle is at the back", "What connects you to the front wheels", "Accelerating pedal", "The geometric point of a corner", "Multi-staged or step-by-step", "Where fast cars belong", "Push the front instead of turning", "What changes gears"]
  },
  {
    id: 4,
    category: "Brand History",
    title: "The Birth of Ferrari",
    words: ["racing", "Maranello", "prancing", "Enzo", "1947", "Colombo", "V12", "red", "Fiat", "legend"],
    template: `The story of Ferrari began long before the prancing horse badge became a [BLANK_10]. [BLANK_4] Ferrari had a passion for [BLANK_1] from an early age, eventually managing the Alfa Romeo racing team. In [BLANK_5], he founded Scuderia Ferrari in [BLANK_2], Italy. The first car to bear his name used a [BLANK_7] engine designed by Gioacchino [BLANK_6]. The iconic [BLANK_3] horse logo was given to Ferrari by Countess Baracca in honor of her late son, a WWI ace pilot. The signature [BLANK_8] colour of Ferrari – Rosso Corsa – was the assigned colour for Italian racing cars internationally. Unlike competitors, Ferrari always prioritised [BLANK_1] success above all, even selling road cars partly to fund his [BLANK_1] activities. He even briefly partnered with [BLANK_9] before the partnership broke down.`,
    hints: ["What Ferrari always cared most about", "A small town in northern Italy", "The horse on the Ferrari badge", "The founder's first name", "The year Ferrari was founded", "The engine designer's surname", "Twelve cylinders arranged in a V shape", "The colour of Ferrari's racing cars", "Major Italian car company", "Another word for icon or myth"]
  },
  {
    id: 5,
    category: "Technical Specification",
    title: "Understanding Drivetrain Layouts",
    words: ["FWD", "RWD", "AWD", "understeer", "oversteer", "traction", "torque", "differential", "weight", "neutral"],
    template: `The drivetrain layout of a car fundamentally affects its handling character. [BLANK_1] (Front-Wheel Drive) vehicles tend to be efficient and safe, but suffer from [BLANK_4] under hard cornering as the front wheels must both steer and accelerate. [BLANK_2] (Rear-Wheel Drive) is preferred for performance driving – pushing rather than pulling the car, it allows [BLANK_5] which can be controlled by skilled drivers. [BLANK_3] (All-Wheel Drive) maximises [BLANK_6] by sending [BLANK_7] to whichever wheels have the most grip. The [BLANK_8] manages the speed difference between wheels on the same axle. [BLANK_9] transfer is a critical factor: heavier vehicles accelerate their front wheels more than the rear, affecting steering feel. The ideal handling balance is called [BLANK_10] steer – where the car neither pushes nor rotates too aggressively.`,
    hints: ["Front wheels do the work", "Rear wheels do the work", "All four wheels do the work", "Front pushes wide in a corner", "Rear slides wide in a corner", "Grip to accelerate from standstill", "Rotational force from the engine", "Component that allows wheels to turn at different speeds", "How mass is distributed across the car", "Perfectly balanced handling state"]
  },
  {
    id: 6,
    category: "Motorsport",
    title: "Le Mans 24 Hours: Ford vs Ferrari",
    words: ["endurance", "Ferrari", "Ford", "1966", "GT40", "Le Mans", "Carroll", "Enzo", "Shelby", "three"],
    template: `The battle between [BLANK_3] and [BLANK_2] at [BLANK_6] in the mid-1960s is one of motorsport's greatest stories. [BLANK_8] Ferrari had rejected a takeover bid from [BLANK_3], humiliating Henry Ford II. The American giant poured millions into developing the [BLANK_5] [BLANK_1] racer. Racing legend [BLANK_9] Shelby was tasked with making it competitive. After two years of failed attempts, [BLANK_3] achieved a stunning result in [BLANK_4]: a 1-2-[BLANK_10] finish at [BLANK_6]. The [BLANK_5] crossed the line three abreast, with the top [BLANK_10] places occupied by Ford. It was the ultimate act of revenge against [BLANK_8] Ferrari, who watched his team's dominance end.`,
    hints: ["The American car company", "The Italian car company", "Same as hint 1", "The year Ford won at Le Mans", "The race car Ford built", "The famous French 24-hour race", "Same as Carroll", "Ferrari's founder's first name", "The man who built the race team", "The number of Ford cars in top positions"]
  },
  {
    id: 7,
    category: "Engineering Innovation",
    title: "The Rise of Hybrid Technology in Supercars",
    words: ["McLaren", "LaFerrari", "Porsche", "kinetic", "regenerative", "battery", "electric", "performance", "braking", "weight"],
    template: `The 2013 model year marked a revolution in supercar engineering when three manufacturers launched hybrid hypercars simultaneously. [BLANK_1] introduced the P1, [BLANK_2] debuted from Ferrari, and [BLANK_3] unveiled the 918 Spyder. Each used [BLANK_6] braking to recover [BLANK_4] energy normally lost as heat, storing it in a [BLANK_6] pack. The [BLANK_7] motors provide instant torque, complementing the combustion engine for maximum [BLANK_8]. [BLANK_5] charging – where the system recovers energy under [BLANK_9] – reduced dependency on plug-in charging. Despite concerns about added [BLANK_10], all three cars demonstrated that hybrid systems could enhance rather than dilute the driving experience.`,
    hints: ["British hypercar maker", "Ferrari's hybrid car from 2013", "Stuttgart-based German brand", "Energy of moving objects", "Recovery under braking", "Where electrical energy is stored", "Powered by electricity", "Speed and power output", "Slowing the car down", "Mass that hurts power-to-weight ratio"]
  },
  {
    id: 8,
    category: "Car Culture",
    title: "The Japanese Tuner Scene",
    words: ["JDM", "drift", "Bosozoku", "Silvia", "Supra", "skyline", "turbo", "stance", "meet", "vinyl"],
    template: `Japanese car culture has given the world some of its most creative automotive subcultures. [BLANK_1] (Japanese Domestic Market) vehicles are prized for their reliability and performance potential. The Nissan [BLANK_6] GT-R and [BLANK_5] became icons of the scene. Cars are modified with aggressive [BLANK_8] – a combination of lowered suspension and wide wheels. [BLANK_2] culture, popularised by the touge mountain roads, centres on controlling the rear of the car through corners. The Nissan [BLANK_4] became the favourite tool for drifters worldwide. [BLANK_3] is a wild subculture of extreme body modifications with huge exhausts and decorative paintwork. The community gathers at informal car [BLANK_9] events to showcase builds. A [BLANK_7] kit allows a car to produce significantly more power from a modified intake system, and [BLANK_10] wraps let owners change the appearance without permanent paintwork.`,
    hints: ["Abbreviation for cars from Japan for the home market", "Sliding through corners sideways", "Extreme Japanese car modification style", "Nissan sports car often used for drifting", "Toyota's legendary sports coupe", "Nissan GT-R predecessor", "Forced induction device using exhaust gases", "Aggressive wheel and suspension setup", "An informal gathering of car enthusiasts", "Removable coloured wrap for bodywork"]
  }
];

function getRandomText() {
  return TEXTS_DB[Math.floor(Math.random() * TEXTS_DB.length)];
}

function getTextsByCategory(category) {
  return TEXTS_DB.filter(t => t.category === category);
}

function parseTemplate(template, words) {
  // Returns an array of segments and blank positions
  let parsed = template;
  words.forEach((word, index) => {
    parsed = parsed.replace(`[BLANK_${index + 1}]`, `___BLANK${index + 1}___`);
  });
  return parsed;
}
