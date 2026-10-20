// CarLess - Car Parts Database
// Used in PartLess game mode

const PARTS_DB = [
  {
    id: 1,
    name: "Turbocharger",
    wrongNames: ["Supercharger", "Intercooler", "Compressor wheel"],
    function: "Compresses intake air using exhaust gas energy to increase engine power output.",
    wrongFunctions: [
      "Cools the compressed air from the engine intake before it enters the cylinders.",
      "Drives the intake air pump directly from the engine's crankshaft via a belt.",
      "Recirculates exhaust gases back into the intake to reduce harmful emissions."
    ],
    location: "engine bay",
    wikimediaImage: "Turbocharger.jpg",
    difficulty: "easy"
  },
  {
    id: 2,
    name: "Disc Brake Rotor",
    wrongNames: ["Drum Brake", "Brake Caliper", "ABS Ring"],
    function: "Provides the friction surface that brake pads clamp against to slow the vehicle.",
    wrongFunctions: [
      "Contains the pistons that push brake pads against the friction surface.",
      "Manages wheel rotation signals to prevent brake lock-up during hard stops.",
      "Houses the brake shoes that expand outward to slow the rotating drum."
    ],
    location: "wheel assembly",
    wikimediaImage: "Disc_brake.jpg",
    difficulty: "easy"
  },
  {
    id: 3,
    name: "Camshaft",
    wrongNames: ["Crankshaft", "Driveshaft", "Timing Belt"],
    function: "Controls the opening and closing of engine intake and exhaust valves.",
    wrongFunctions: [
      "Converts the up-and-down piston motion into rotational power for the drivetrain.",
      "Transfers rotational power from the transmission to the wheels.",
      "Synchronises the rotation of the camshaft and crankshaft."
    ],
    location: "engine cylinder head",
    wikimediaImage: "Camshaft.jpg",
    difficulty: "medium"
  },
  {
    id: 4,
    name: "Differential",
    wrongNames: ["Transfer Case", "Torque Converter", "Limited-Slip Coupling"],
    function: "Allows wheels on the same axle to rotate at different speeds when cornering.",
    wrongFunctions: [
      "Distributes engine torque between front and rear axles in all-wheel-drive vehicles.",
      "Converts engine torque from the engine to the transmission in automatic gearboxes.",
      "Locks front and rear axles together for maximum traction in off-road conditions."
    ],
    location: "axle",
    wikimediaImage: "Differential_(mechanical_device).jpg",
    difficulty: "medium"
  },
  {
    id: 5,
    name: "Crankshaft",
    wrongNames: ["Camshaft", "Driveshaft", "Connecting Rod"],
    function: "Converts the reciprocating linear motion of pistons into rotational motion.",
    wrongFunctions: [
      "Controls the timing of valve opening in relation to piston position.",
      "Transfers the engine's rotational output to the wheels via the gearbox.",
      "Connects the pistons to the crankshaft, transferring force from combustion."
    ],
    location: "engine block",
    wikimediaImage: "Crankshaft.jpg",
    difficulty: "medium"
  },
  {
    id: 6,
    name: "Catalytic Converter",
    wrongNames: ["Diesel Particulate Filter", "EGR Valve", "Lambda Sensor"],
    function: "Converts harmful exhaust gases (CO, NOx, hydrocarbons) into less harmful substances using chemical reactions.",
    wrongFunctions: [
      "Traps soot particles from diesel exhaust and periodically burns them off.",
      "Recirculates a portion of exhaust gases back into the engine to reduce NOx emissions.",
      "Measures the oxygen content in exhaust gases to help the ECU adjust fuel mixture."
    ],
    location: "exhaust system",
    wikimediaImage: "Catalytic_converter.jpg",
    difficulty: "easy"
  },
  {
    id: 7,
    name: "Throttle Body",
    wrongNames: ["Fuel Injector", "Intake Manifold", "Mass Air Flow Sensor"],
    function: "Controls the amount of air entering the engine by opening or closing a butterfly valve.",
    wrongFunctions: [
      "Sprays precisely measured amounts of fuel directly into the engine cylinders.",
      "Distributes air-fuel mixture evenly to each cylinder through individual runners.",
      "Measures the mass of air entering the engine to calculate the correct fuel amount."
    ],
    location: "intake system",
    wikimediaImage: "Throttle_body.jpg",
    difficulty: "medium"
  },
  {
    id: 8,
    name: "Shock Absorber",
    wrongNames: ["Coil Spring", "Anti-roll Bar", "Strut Mount"],
    function: "Dampens suspension oscillations by converting kinetic energy into heat through hydraulic resistance.",
    wrongFunctions: [
      "Stores and releases energy to support the vehicle's weight and absorb road impacts.",
      "Reduces body roll during cornering by connecting left and right suspension components.",
      "Isolates the suspension strut from the vehicle body, reducing noise and vibration."
    ],
    location: "suspension",
    wikimediaImage: "Shock_absorber.jpg",
    difficulty: "easy"
  },
  {
    id: 9,
    name: "Intercooler",
    wrongNames: ["Radiator", "Oil Cooler", "Charge Air Cooler"],
    function: "Cools compressed air from a turbocharger or supercharger before it enters the engine, increasing air density.",
    wrongFunctions: [
      "Removes heat from the engine coolant by passing air through a heat exchanger.",
      "Maintains optimal temperature of engine oil to preserve lubrication properties.",
      "Pre-heats the intake air in diesel engines during cold starts for easier ignition."
    ],
    location: "intake system",
    wikimediaImage: "Intercooler.jpg",
    difficulty: "medium"
  },
  {
    id: 10,
    name: "Timing Belt",
    wrongNames: ["Serpentine Belt", "Drive Belt", "Accessory Belt"],
    function: "Synchronises the rotation of the crankshaft and camshaft(s) to ensure valves open at the correct time.",
    wrongFunctions: [
      "Drives engine accessories like the alternator, power steering pump, and air conditioning compressor.",
      "Transfers power from the engine to the rear-mounted gearbox in transaxle layouts.",
      "Connects the electric power steering motor to the steering column."
    ],
    location: "engine timing system",
    wikimediaImage: "Timing_belt.jpg",
    difficulty: "easy"
  },
  {
    id: 11,
    name: "Fuel Injector",
    wrongNames: ["Carburetor", "Fuel Pressure Regulator", "Fuel Rail"],
    function: "Delivers a precisely metered spray of fuel directly into the engine cylinder or intake port.",
    wrongFunctions: [
      "Mixes fuel and air in the correct ratio before sending it to the engine's intake manifold.",
      "Maintains constant fuel pressure in the system by returning excess fuel to the tank.",
      "Distributes fuel to multiple injectors, maintaining consistent pressure across all cylinders."
    ],
    location: "fuel system / engine",
    wikimediaImage: "Fuel_injector.jpg",
    difficulty: "easy"
  },
  {
    id: 12,
    name: "EGR Valve",
    wrongNames: ["PCV Valve", "EVAP Canister", "Blow-off Valve"],
    function: "Recirculates a portion of exhaust gases back into the intake manifold to reduce nitrogen oxide emissions.",
    wrongFunctions: [
      "Releases crankcase pressure and vapour back into the intake manifold for combustion.",
      "Captures fuel vapours from the fuel tank and routes them to the engine for combustion.",
      "Releases excess boost pressure from the intake system to protect the turbocharger."
    ],
    location: "engine emissions system",
    wikimediaImage: "EGR_valve.jpg",
    difficulty: "hard"
  },
  {
    id: 13,
    name: "Alternator",
    wrongNames: ["Starter Motor", "Generator", "Voltage Regulator"],
    function: "Converts mechanical energy from the engine into electrical energy to charge the battery and power electrical systems.",
    wrongFunctions: [
      "Uses electrical energy from the battery to crank the engine during starting.",
      "Produces direct current electricity from the engine's mechanical energy.",
      "Monitors and controls the output voltage of the alternator to prevent battery overcharge."
    ],
    location: "engine bay",
    wikimediaImage: "Alternator_internals.jpg",
    difficulty: "easy"
  },
  {
    id: 14,
    name: "Suspension Control Arm",
    wrongNames: ["Tie Rod", "Sway Bar Link", "Trailing Arm"],
    function: "Connects the wheel hub to the vehicle chassis, controlling wheel movement up and down while maintaining lateral stability.",
    wrongFunctions: [
      "Connects the steering rack to the wheel hub to transmit steering input.",
      "Connects the anti-roll bar to the suspension, transferring force between left and right wheels.",
      "Controls the fore-and-aft movement of the rear wheel in multi-link suspension systems."
    ],
    location: "suspension",
    wikimediaImage: "Suspension_control_arm.jpg",
    difficulty: "hard"
  },
  {
    id: 15,
    name: "Spark Plug",
    wrongNames: ["Glow Plug", "Ignition Coil", "Crankshaft Position Sensor"],
    function: "Generates the electrical spark that ignites the air-fuel mixture in a petrol engine's cylinder.",
    wrongFunctions: [
      "Pre-heats the combustion chamber in diesel engines to aid cold starting.",
      "Stores and amplifies the battery voltage to create a high-voltage spark for the plug.",
      "Monitors the rotational speed and position of the crankshaft for ignition timing."
    ],
    location: "engine cylinder head",
    wikimediaImage: "Spark_plug.jpg",
    difficulty: "easy"
  },
  {
    id: 16,
    name: "Power Steering Pump",
    wrongNames: ["Hydraulic Brake Booster", "Power Steering Rack", "Steering Column"],
    function: "Pressurises hydraulic fluid to assist the driver in turning the steering wheel.",
    wrongFunctions: [
      "Uses pressurised brake fluid to amplify braking force in heavy vehicles.",
      "Converts the rotational motion of the steering wheel into linear motion to steer the wheels.",
      "Transfers the rotational input from the steering wheel down to the steering rack."
    ],
    location: "steering system",
    wikimediaImage: "Power_steering_pump.jpg",
    difficulty: "medium"
  },
  {
    id: 17,
    name: "Piston",
    wrongNames: ["Connecting Rod", "Cylinder Liner", "Piston Ring"],
    function: "Moves up and down inside the cylinder, compressing the air-fuel mixture and transmitting combustion force to the crankshaft.",
    wrongFunctions: [
      "Connects the piston to the crankshaft, converting linear motion to rotational motion.",
      "Lines the inside of the engine cylinder to provide a smooth, wear-resistant surface.",
      "Seals the gap between the piston and cylinder wall to prevent gas and oil leakage."
    ],
    location: "engine block",
    wikimediaImage: "Piston.jpg",
    difficulty: "easy"
  },
  {
    id: 18,
    name: "Active Rear Spoiler",
    wrongNames: ["Fixed Wing", "Rear Diffuser", "Lip Spoiler"],
    function: "Automatically adjusts its angle to optimise downforce for cornering and drag reduction for straight-line speed.",
    wrongFunctions: [
      "Provides a fixed amount of downforce at all speeds, optimised for a specific track configuration.",
      "Accelerates airflow under the car to create low pressure and additional downforce.",
      "Reduces aerodynamic lift at the rear of the car through a small lip at the boot edge."
    ],
    location: "exterior / aerodynamics",
    wikimediaImage: "Porsche_911_active_spoiler.jpg",
    difficulty: "easy"
  },
  {
    id: 19,
    name: "Torque Converter",
    wrongNames: ["Clutch Pack", "Flywheel", "Hydraulic Coupling"],
    function: "Transfers and multiplies engine torque to the transmission in automatic gearboxes using fluid coupling.",
    wrongFunctions: [
      "Engages and disengages the engine from the transmission in a dual-clutch gearbox.",
      "Stores rotational energy to smooth out engine power delivery and assist starting.",
      "Allows temporary slippage between engine and gearbox through a simple fluid link."
    ],
    location: "transmission",
    wikimediaImage: "Torque_converter_cutaway.jpg",
    difficulty: "medium"
  },
  {
    id: 20,
    name: "Oil Sump",
    wrongNames: ["Oil Filter", "Oil Pump", "Crankcase"],
    function: "Collects and stores engine oil at the bottom of the engine, ready to be pumped back through the lubrication system.",
    wrongFunctions: [
      "Removes contaminants and debris from the engine oil before it circulates through the engine.",
      "Pressurises engine oil and circulates it throughout the engine lubrication channels.",
      "Houses the crankshaft and lower engine components, sealed against oil and contaminants."
    ],
    location: "engine lubrication",
    wikimediaImage: "Engine_oil_pan.jpg",
    difficulty: "medium"
  }
];

function getRandomPart() {
  return PARTS_DB[Math.floor(Math.random() * PARTS_DB.length)];
}

function getPartsByDifficulty(difficulty) {
  return PARTS_DB.filter(p => p.difficulty === difficulty);
}
