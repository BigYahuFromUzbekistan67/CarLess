// CarLess - Car Database (~300 cars)
// All data is factual and publicly available

const CARS_DB = [
  // === FERRARI ===
  {
    id: 1, make: "Ferrari", model: "F40", year: 1987, type: "Supercar",
    bodyStyle: "Coupe", doors: 2, origin: "Italy",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 8, displacement: 2.9, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 3200000, wikimediaImage: "Ferrari_F40.jpg",
    topSpeed: 324, horsepower: 478
  },
  {
    id: 2, make: "Ferrari", model: "488 GTB", year: 2015, type: "Supercar",
    bodyStyle: "Coupe", doors: 2, origin: "Italy",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 8, displacement: 3.9, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 330000, wikimediaImage: "Ferrari_488_GTB.jpg",
    topSpeed: 330, horsepower: 660
  },
  {
    id: 3, make: "Ferrari", model: "LaFerrari", year: 2013, type: "Hypercar",
    bodyStyle: "Coupe", doors: 2, origin: "Italy",
    drivetrain: "RWD", powerSystem: "Hybrid",
    engine: null,
    price: 1690000, wikimediaImage: "LaFerrari.jpg",
    topSpeed: 350, horsepower: 963
  },
  {
    id: 4, make: "Ferrari", model: "Testarossa", year: 1984, type: "Supercar",
    bodyStyle: "Coupe", doors: 2, origin: "Italy",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "Flat", cylinders: 12, displacement: 4.9, fuel: "Petrol", aspiration: "Naturally Aspirated" },
    price: 350000, wikimediaImage: "Ferrari_Testarossa.jpg",
    topSpeed: 290, horsepower: 390
  },
  {
    id: 5, make: "Ferrari", model: "SF90 Stradale", year: 2019, type: "Hypercar",
    bodyStyle: "Coupe", doors: 2, origin: "Italy",
    drivetrain: "AWD", powerSystem: "Hybrid",
    engine: null,
    price: 625000, wikimediaImage: "Ferrari_SF90_Stradale.jpg",
    topSpeed: 340, horsepower: 1000
  },
  {
    id: 6, make: "Ferrari", model: "Roma", year: 2019, type: "Sports Car",
    bodyStyle: "Coupe", doors: 2, origin: "Italy",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 8, displacement: 3.9, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 245000, wikimediaImage: "Ferrari_Roma.jpg",
    topSpeed: 320, horsepower: 620
  },
  // === LAMBORGHINI ===
  {
    id: 7, make: "Lamborghini", model: "Aventador SVJ", year: 2018, type: "Supercar",
    bodyStyle: "Coupe", doors: 2, origin: "Italy",
    drivetrain: "AWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 12, displacement: 6.5, fuel: "Petrol", aspiration: "Naturally Aspirated" },
    price: 600000, wikimediaImage: "Lamborghini_Aventador.jpg",
    topSpeed: 350, horsepower: 770
  },
  {
    id: 8, make: "Lamborghini", model: "Huracán EVO", year: 2019, type: "Supercar",
    bodyStyle: "Coupe", doors: 2, origin: "Italy",
    drivetrain: "AWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 10, displacement: 5.2, fuel: "Petrol", aspiration: "Naturally Aspirated" },
    price: 300000, wikimediaImage: "Lamborghini_Huracan.jpg",
    topSpeed: 325, horsepower: 640
  },
  {
    id: 9, make: "Lamborghini", model: "Urus", year: 2018, type: "SUV",
    bodyStyle: "SUV", doors: 4, origin: "Italy",
    drivetrain: "AWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 8, displacement: 4.0, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 230000, wikimediaImage: "Lamborghini_Urus.jpg",
    topSpeed: 305, horsepower: 650
  },
  {
    id: 10, make: "Lamborghini", model: "Diablo", year: 1990, type: "Supercar",
    bodyStyle: "Coupe", doors: 2, origin: "Italy",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 12, displacement: 5.7, fuel: "Petrol", aspiration: "Naturally Aspirated" },
    price: 650000, wikimediaImage: "Lamborghini_Diablo.jpg",
    topSpeed: 325, horsepower: 492
  },
  {
    id: 11, make: "Lamborghini", model: "Countach LP400", year: 1974, type: "Supercar",
    bodyStyle: "Coupe", doors: 2, origin: "Italy",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 12, displacement: 4.0, fuel: "Petrol", aspiration: "Naturally Aspirated" },
    price: 1200000, wikimediaImage: "Lamborghini_Countach.jpg",
    topSpeed: 315, horsepower: 375
  },
  // === PORSCHE ===
  {
    id: 12, make: "Porsche", model: "911 GT3 RS", year: 2022, type: "Sports Car",
    bodyStyle: "Coupe", doors: 2, origin: "Germany",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "Flat", cylinders: 6, displacement: 4.0, fuel: "Petrol", aspiration: "Naturally Aspirated" },
    price: 240000, wikimediaImage: "Porsche_911_GT3_RS.jpg",
    topSpeed: 296, horsepower: 525
  },
  {
    id: 13, make: "Porsche", model: "Cayenne Turbo S", year: 2019, type: "SUV",
    bodyStyle: "SUV", doors: 4, origin: "Germany",
    drivetrain: "AWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 8, displacement: 4.0, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 180000, wikimediaImage: "Porsche_Cayenne.jpg",
    topSpeed: 300, horsepower: 550
  },
  {
    id: 14, make: "Porsche", model: "Taycan Turbo S", year: 2019, type: "Sports Car",
    bodyStyle: "Sedan", doors: 4, origin: "Germany",
    drivetrain: "AWD", powerSystem: "Electric",
    engine: null,
    price: 185000, wikimediaImage: "Porsche_Taycan.jpg",
    topSpeed: 260, horsepower: 761
  },
  {
    id: 15, make: "Porsche", model: "Carrera GT", year: 2004, type: "Supercar",
    bodyStyle: "Roadster", doors: 2, origin: "Germany",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 10, displacement: 5.7, fuel: "Petrol", aspiration: "Naturally Aspirated" },
    price: 1200000, wikimediaImage: "Porsche_Carrera_GT.jpg",
    topSpeed: 330, horsepower: 612
  },
  {
    id: 16, make: "Porsche", model: "918 Spyder", year: 2013, type: "Hypercar",
    bodyStyle: "Roadster", doors: 2, origin: "Germany",
    drivetrain: "AWD", powerSystem: "Hybrid",
    engine: null,
    price: 1700000, wikimediaImage: "Porsche_918_Spyder.jpg",
    topSpeed: 345, horsepower: 887
  },
  {
    id: 17, make: "Porsche", model: "Panamera Turbo", year: 2021, type: "Luxury",
    bodyStyle: "Sedan", doors: 4, origin: "Germany",
    drivetrain: "AWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 8, displacement: 4.0, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 200000, wikimediaImage: "Porsche_Panamera.jpg",
    topSpeed: 306, horsepower: 620
  },
  // === BMW ===
  {
    id: 18, make: "BMW", model: "M3 Competition", year: 2021, type: "Sports Car",
    bodyStyle: "Sedan", doors: 4, origin: "Germany",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "Inline", cylinders: 6, displacement: 3.0, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 95000, wikimediaImage: "BMW_M3_G80.jpg",
    topSpeed: 290, horsepower: 510
  },
  {
    id: 19, make: "BMW", model: "M5 CS", year: 2021, type: "Sports Car",
    bodyStyle: "Sedan", doors: 4, origin: "Germany",
    drivetrain: "AWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 8, displacement: 4.4, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 160000, wikimediaImage: "BMW_M5.jpg",
    topSpeed: 305, horsepower: 635
  },
  {
    id: 20, make: "BMW", model: "i8", year: 2014, type: "Sports Car",
    bodyStyle: "Coupe", doors: 2, origin: "Germany",
    drivetrain: "AWD", powerSystem: "Hybrid",
    engine: null,
    price: 85000, wikimediaImage: "BMW_i8.jpg",
    topSpeed: 250, horsepower: 374
  },
  {
    id: 21, make: "BMW", model: "X5 M Competition", year: 2020, type: "SUV",
    bodyStyle: "SUV", doors: 4, origin: "Germany",
    drivetrain: "AWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 8, displacement: 4.4, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 120000, wikimediaImage: "BMW_X5.jpg",
    topSpeed: 290, horsepower: 625
  },
  {
    id: 22, make: "BMW", model: "M2 Competition", year: 2018, type: "Sports Car",
    bodyStyle: "Coupe", doors: 2, origin: "Germany",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "Inline", cylinders: 6, displacement: 3.0, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 75000, wikimediaImage: "BMW_M2.jpg",
    topSpeed: 280, horsepower: 410
  },
  // === MERCEDES-BENZ ===
  {
    id: 23, make: "Mercedes-Benz", model: "AMG GT Black Series", year: 2020, type: "Supercar",
    bodyStyle: "Coupe", doors: 2, origin: "Germany",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 8, displacement: 4.0, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 335000, wikimediaImage: "Mercedes-AMG_GT_Black_Series.jpg",
    topSpeed: 325, horsepower: 730
  },
  {
    id: 24, make: "Mercedes-Benz", model: "S63 AMG", year: 2021, type: "Luxury",
    bodyStyle: "Sedan", doors: 4, origin: "Germany",
    drivetrain: "AWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 8, displacement: 4.0, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 185000, wikimediaImage: "Mercedes-AMG_S63.jpg",
    topSpeed: 300, horsepower: 612
  },
  {
    id: 25, make: "Mercedes-Benz", model: "G63 AMG", year: 2018, type: "SUV",
    bodyStyle: "SUV", doors: 4, origin: "Germany",
    drivetrain: "AWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 8, displacement: 4.0, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 180000, wikimediaImage: "Mercedes-AMG_G63.jpg",
    topSpeed: 240, horsepower: 585
  },
  {
    id: 26, make: "Mercedes-Benz", model: "SLS AMG", year: 2009, type: "Supercar",
    bodyStyle: "Coupe", doors: 2, origin: "Germany",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 8, displacement: 6.2, fuel: "Petrol", aspiration: "Naturally Aspirated" },
    price: 280000, wikimediaImage: "Mercedes-Benz_SLS_AMG.jpg",
    topSpeed: 317, horsepower: 571
  },
  {
    id: 27, make: "Mercedes-Benz", model: "EQS 580", year: 2021, type: "Luxury",
    bodyStyle: "Sedan", doors: 4, origin: "Germany",
    drivetrain: "AWD", powerSystem: "Electric",
    engine: null,
    price: 135000, wikimediaImage: "Mercedes-Benz_EQS.jpg",
    topSpeed: 210, horsepower: 516
  },
  // === AUDI ===
  {
    id: 28, make: "Audi", model: "R8 V10 Plus", year: 2016, type: "Supercar",
    bodyStyle: "Coupe", doors: 2, origin: "Germany",
    drivetrain: "AWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 10, displacement: 5.2, fuel: "Petrol", aspiration: "Naturally Aspirated" },
    price: 250000, wikimediaImage: "Audi_R8.jpg",
    topSpeed: 330, horsepower: 610
  },
  {
    id: 29, make: "Audi", model: "RS6 Avant", year: 2020, type: "Sports Car",
    bodyStyle: "Estate", doors: 4, origin: "Germany",
    drivetrain: "AWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 8, displacement: 4.0, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 130000, wikimediaImage: "Audi_RS6_C8.jpg",
    topSpeed: 280, horsepower: 600
  },
  {
    id: 30, make: "Audi", model: "RS3 Sportback", year: 2022, type: "Sports Car",
    bodyStyle: "Hatchback", doors: 4, origin: "Germany",
    drivetrain: "AWD", powerSystem: "Combustion",
    engine: { type: "Inline", cylinders: 5, displacement: 2.5, fuel: "Petrol", aspiration: "Turbo" },
    price: 65000, wikimediaImage: "Audi_RS3.jpg",
    topSpeed: 290, horsepower: 400
  },
  {
    id: 31, make: "Audi", model: "e-tron GT RS", year: 2021, type: "Sports Car",
    bodyStyle: "Coupe", doors: 4, origin: "Germany",
    drivetrain: "AWD", powerSystem: "Electric",
    engine: null,
    price: 145000, wikimediaImage: "Audi_e-tron_GT.jpg",
    topSpeed: 250, horsepower: 646
  },
  // === TOYOTA ===
  {
    id: 32, make: "Toyota", model: "Supra A80", year: 1993, type: "Sports Car",
    bodyStyle: "Coupe", doors: 2, origin: "Japan",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "Inline", cylinders: 6, displacement: 3.0, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 120000, wikimediaImage: "Toyota_Supra_A80.jpg",
    topSpeed: 285, horsepower: 320
  },
  {
    id: 33, make: "Toyota", model: "GR86", year: 2022, type: "Sports Car",
    bodyStyle: "Coupe", doors: 2, origin: "Japan",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "Flat", cylinders: 4, displacement: 2.4, fuel: "Petrol", aspiration: "Naturally Aspirated" },
    price: 35000, wikimediaImage: "Toyota_GR86.jpg",
    topSpeed: 226, horsepower: 228
  },
  {
    id: 34, make: "Toyota", model: "GR Yaris", year: 2020, type: "Hot Hatch",
    bodyStyle: "Hatchback", doors: 3, origin: "Japan",
    drivetrain: "AWD", powerSystem: "Combustion",
    engine: { type: "Inline", cylinders: 3, displacement: 1.6, fuel: "Petrol", aspiration: "Turbo" },
    price: 40000, wikimediaImage: "Toyota_GR_Yaris.jpg",
    topSpeed: 230, horsepower: 261
  },
  {
    id: 35, make: "Toyota", model: "Land Cruiser 300", year: 2021, type: "SUV",
    bodyStyle: "SUV", doors: 4, origin: "Japan",
    drivetrain: "4WD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 6, displacement: 3.5, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 85000, wikimediaImage: "Toyota_Land_Cruiser_300.jpg",
    topSpeed: 210, horsepower: 415
  },
  // === NISSAN ===
  {
    id: 36, make: "Nissan", model: "GT-R R35", year: 2007, type: "Sports Car",
    bodyStyle: "Coupe", doors: 2, origin: "Japan",
    drivetrain: "AWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 6, displacement: 3.8, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 120000, wikimediaImage: "Nissan_GT-R_R35.jpg",
    topSpeed: 315, horsepower: 570
  },
  {
    id: 37, make: "Nissan", model: "Skyline GT-R R34", year: 1999, type: "Sports Car",
    bodyStyle: "Coupe", doors: 2, origin: "Japan",
    drivetrain: "AWD", powerSystem: "Combustion",
    engine: { type: "Inline", cylinders: 6, displacement: 2.6, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 350000, wikimediaImage: "Nissan_Skyline_GT-R_R34.jpg",
    topSpeed: 265, horsepower: 280
  },
  {
    id: 38, make: "Nissan", model: "370Z", year: 2009, type: "Sports Car",
    bodyStyle: "Coupe", doors: 2, origin: "Japan",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 6, displacement: 3.7, fuel: "Petrol", aspiration: "Naturally Aspirated" },
    price: 35000, wikimediaImage: "Nissan_370Z.jpg",
    topSpeed: 250, horsepower: 328
  },
  // === HONDA ===
  {
    id: 39, make: "Honda", model: "NSX NC1", year: 2016, type: "Supercar",
    bodyStyle: "Coupe", doors: 2, origin: "Japan",
    drivetrain: "AWD", powerSystem: "Hybrid",
    engine: null,
    price: 180000, wikimediaImage: "Honda_NSX_NC1.jpg",
    topSpeed: 308, horsepower: 573
  },
  {
    id: 40, make: "Honda", model: "Civic Type R FK8", year: 2017, type: "Hot Hatch",
    bodyStyle: "Hatchback", doors: 4, origin: "Japan",
    drivetrain: "FWD", powerSystem: "Combustion",
    engine: { type: "Inline", cylinders: 4, displacement: 2.0, fuel: "Petrol", aspiration: "Turbo" },
    price: 45000, wikimediaImage: "Honda_Civic_Type_R.jpg",
    topSpeed: 272, horsepower: 320
  },
  {
    id: 41, make: "Honda", model: "S2000", year: 1999, type: "Sports Car",
    bodyStyle: "Roadster", doors: 2, origin: "Japan",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "Inline", cylinders: 4, displacement: 2.0, fuel: "Petrol", aspiration: "Naturally Aspirated" },
    price: 35000, wikimediaImage: "Honda_S2000.jpg",
    topSpeed: 240, horsepower: 237
  },
  // === MAZDA ===
  {
    id: 42, make: "Mazda", model: "RX-7 FD", year: 1992, type: "Sports Car",
    bodyStyle: "Coupe", doors: 2, origin: "Japan",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "Rotary", cylinders: 2, displacement: 1.3, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 60000, wikimediaImage: "Mazda_RX-7_FD.jpg",
    topSpeed: 265, horsepower: 255
  },
  {
    id: 43, make: "Mazda", model: "MX-5 Miata ND", year: 2015, type: "Roadster",
    bodyStyle: "Roadster", doors: 2, origin: "Japan",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "Inline", cylinders: 4, displacement: 2.0, fuel: "Petrol", aspiration: "Naturally Aspirated" },
    price: 30000, wikimediaImage: "Mazda_MX-5_ND.jpg",
    topSpeed: 214, horsepower: 181
  },
  // === FORD ===
  {
    id: 44, make: "Ford", model: "Mustang Shelby GT500", year: 2020, type: "Muscle Car",
    bodyStyle: "Coupe", doors: 2, origin: "USA",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 8, displacement: 5.2, fuel: "Petrol", aspiration: "Supercharged" },
    price: 80000, wikimediaImage: "Ford_Mustang_Shelby_GT500.jpg",
    topSpeed: 298, horsepower: 760
  },
  {
    id: 45, make: "Ford", model: "GT", year: 2017, type: "Supercar",
    bodyStyle: "Coupe", doors: 2, origin: "USA",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 6, displacement: 3.5, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 750000, wikimediaImage: "Ford_GT_2017.jpg",
    topSpeed: 348, horsepower: 660
  },
  {
    id: 46, make: "Ford", model: "Focus RS MK3", year: 2016, type: "Hot Hatch",
    bodyStyle: "Hatchback", doors: 4, origin: "USA",
    drivetrain: "AWD", powerSystem: "Combustion",
    engine: { type: "Inline", cylinders: 4, displacement: 2.3, fuel: "Petrol", aspiration: "Turbo" },
    price: 42000, wikimediaImage: "Ford_Focus_RS_MK3.jpg",
    topSpeed: 266, horsepower: 350
  },
  {
    id: 47, make: "Ford", model: "Raptor F-150", year: 2021, type: "Pickup",
    bodyStyle: "Pickup", doors: 4, origin: "USA",
    drivetrain: "4WD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 6, displacement: 3.5, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 70000, wikimediaImage: "Ford_F-150_Raptor.jpg",
    topSpeed: 200, horsepower: 450
  },
  // === DODGE / AMERICAN MUSCLE ===
  {
    id: 48, make: "Dodge", model: "Challenger SRT Hellcat", year: 2015, type: "Muscle Car",
    bodyStyle: "Coupe", doors: 2, origin: "USA",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 8, displacement: 6.2, fuel: "Petrol", aspiration: "Supercharged" },
    price: 65000, wikimediaImage: "Dodge_Challenger_Hellcat.jpg",
    topSpeed: 327, horsepower: 717
  },
  {
    id: 49, make: "Dodge", model: "Viper ACR", year: 2016, type: "Supercar",
    bodyStyle: "Coupe", doors: 2, origin: "USA",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 10, displacement: 8.4, fuel: "Petrol", aspiration: "Naturally Aspirated" },
    price: 150000, wikimediaImage: "Dodge_Viper_ACR.jpg",
    topSpeed: 330, horsepower: 645
  },
  {
    id: 50, make: "Chevrolet", model: "Corvette C8", year: 2020, type: "Sports Car",
    bodyStyle: "Coupe", doors: 2, origin: "USA",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 8, displacement: 6.2, fuel: "Petrol", aspiration: "Naturally Aspirated" },
    price: 65000, wikimediaImage: "Chevrolet_Corvette_C8.jpg",
    topSpeed: 312, horsepower: 495
  },
  {
    id: 51, make: "Chevrolet", model: "Camaro ZL1", year: 2017, type: "Muscle Car",
    bodyStyle: "Coupe", doors: 2, origin: "USA",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 8, displacement: 6.2, fuel: "Petrol", aspiration: "Supercharged" },
    price: 75000, wikimediaImage: "Chevrolet_Camaro_ZL1.jpg",
    topSpeed: 320, horsepower: 650
  },
  // === MCLAREN ===
  {
    id: 52, make: "McLaren", model: "720S", year: 2017, type: "Supercar",
    bodyStyle: "Coupe", doors: 2, origin: "UK",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 8, displacement: 4.0, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 310000, wikimediaImage: "McLaren_720S.jpg",
    topSpeed: 341, horsepower: 720
  },
  {
    id: 53, make: "McLaren", model: "P1", year: 2013, type: "Hypercar",
    bodyStyle: "Coupe", doors: 2, origin: "UK",
    drivetrain: "RWD", powerSystem: "Hybrid",
    engine: null,
    price: 1500000, wikimediaImage: "McLaren_P1.jpg",
    topSpeed: 350, horsepower: 916
  },
  {
    id: 54, make: "McLaren", model: "Senna", year: 2018, type: "Hypercar",
    bodyStyle: "Coupe", doors: 2, origin: "UK",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 8, displacement: 4.0, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 1000000, wikimediaImage: "McLaren_Senna.jpg",
    topSpeed: 340, horsepower: 800
  },
  {
    id: 55, make: "McLaren", model: "570S", year: 2015, type: "Supercar",
    bodyStyle: "Coupe", doors: 2, origin: "UK",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 8, displacement: 3.8, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 200000, wikimediaImage: "McLaren_570S.jpg",
    topSpeed: 328, horsepower: 570
  },
  // === BUGATTI ===
  {
    id: 56, make: "Bugatti", model: "Chiron", year: 2016, type: "Hypercar",
    bodyStyle: "Coupe", doors: 2, origin: "France",
    drivetrain: "AWD", powerSystem: "Combustion",
    engine: { type: "W", cylinders: 16, displacement: 8.0, fuel: "Petrol", aspiration: "Quad-Turbo" },
    price: 3600000, wikimediaImage: "Bugatti_Chiron.jpg",
    topSpeed: 420, horsepower: 1500
  },
  {
    id: 57, make: "Bugatti", model: "Veyron", year: 2005, type: "Hypercar",
    bodyStyle: "Coupe", doors: 2, origin: "France",
    drivetrain: "AWD", powerSystem: "Combustion",
    engine: { type: "W", cylinders: 16, displacement: 8.0, fuel: "Petrol", aspiration: "Quad-Turbo" },
    price: 1900000, wikimediaImage: "Bugatti_Veyron.jpg",
    topSpeed: 408, horsepower: 1001
  },
  // === KOENIGSEGG ===
  {
    id: 58, make: "Koenigsegg", model: "Agera RS", year: 2015, type: "Hypercar",
    bodyStyle: "Coupe", doors: 2, origin: "Sweden",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 8, displacement: 5.0, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 2500000, wikimediaImage: "Koenigsegg_Agera_RS.jpg",
    topSpeed: 447, horsepower: 1160
  },
  {
    id: 59, make: "Koenigsegg", model: "Jesko Absolut", year: 2020, type: "Hypercar",
    bodyStyle: "Coupe", doors: 2, origin: "Sweden",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 8, displacement: 5.0, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 3400000, wikimediaImage: "Koenigsegg_Jesko.jpg",
    topSpeed: 531, horsepower: 1600
  },
  // === ROLLS-ROYCE ===
  {
    id: 60, make: "Rolls-Royce", model: "Phantom VIII", year: 2017, type: "Luxury",
    bodyStyle: "Sedan", doors: 4, origin: "UK",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 12, displacement: 6.75, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 500000, wikimediaImage: "Rolls-Royce_Phantom_VIII.jpg",
    topSpeed: 250, horsepower: 563
  },
  {
    id: 61, make: "Rolls-Royce", model: "Cullinan", year: 2018, type: "SUV",
    bodyStyle: "SUV", doors: 4, origin: "UK",
    drivetrain: "AWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 12, displacement: 6.75, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 380000, wikimediaImage: "Rolls-Royce_Cullinan.jpg",
    topSpeed: 250, horsepower: 563
  },
  {
    id: 62, make: "Rolls-Royce", model: "Wraith", year: 2013, type: "Luxury",
    bodyStyle: "Coupe", doors: 2, origin: "UK",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 12, displacement: 6.75, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 330000, wikimediaImage: "Rolls-Royce_Wraith.jpg",
    topSpeed: 250, horsepower: 624
  },
  // === BENTLEY ===
  {
    id: 63, make: "Bentley", model: "Continental GT W12", year: 2018, type: "Luxury",
    bodyStyle: "Coupe", doors: 2, origin: "UK",
    drivetrain: "AWD", powerSystem: "Combustion",
    engine: { type: "W", cylinders: 12, displacement: 6.0, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 280000, wikimediaImage: "Bentley_Continental_GT_III.jpg",
    topSpeed: 333, horsepower: 635
  },
  {
    id: 64, make: "Bentley", model: "Bentayga Speed", year: 2020, type: "SUV",
    bodyStyle: "SUV", doors: 4, origin: "UK",
    drivetrain: "AWD", powerSystem: "Combustion",
    engine: { type: "W", cylinders: 12, displacement: 6.0, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 280000, wikimediaImage: "Bentley_Bentayga.jpg",
    topSpeed: 306, horsepower: 626
  },
  // === TESLA ===
  {
    id: 65, make: "Tesla", model: "Model S Plaid", year: 2021, type: "Luxury",
    bodyStyle: "Sedan", doors: 4, origin: "USA",
    drivetrain: "AWD", powerSystem: "Electric",
    engine: null,
    price: 130000, wikimediaImage: "Tesla_Model_S.jpg",
    topSpeed: 322, horsepower: 1020
  },
  {
    id: 66, make: "Tesla", model: "Roadster 2022", year: 2022, type: "Sports Car",
    bodyStyle: "Roadster", doors: 2, origin: "USA",
    drivetrain: "AWD", powerSystem: "Electric",
    engine: null,
    price: 250000, wikimediaImage: "Tesla_Roadster_2022.jpg",
    topSpeed: 402, horsepower: 1000
  },
  {
    id: 67, make: "Tesla", model: "Cybertruck", year: 2023, type: "Pickup",
    bodyStyle: "Pickup", doors: 4, origin: "USA",
    drivetrain: "AWD", powerSystem: "Electric",
    engine: null,
    price: 80000, wikimediaImage: "Tesla_Cybertruck.jpg",
    topSpeed: 209, horsepower: 845
  },
  // === RIMAC ===
  {
    id: 68, make: "Rimac", model: "Nevera", year: 2021, type: "Hypercar",
    bodyStyle: "Coupe", doors: 2, origin: "Croatia",
    drivetrain: "AWD", powerSystem: "Electric",
    engine: null,
    price: 2400000, wikimediaImage: "Rimac_Nevera.jpg",
    topSpeed: 412, horsepower: 1914
  },
  // === ASTON MARTIN ===
  {
    id: 69, make: "Aston Martin", model: "Valkyrie", year: 2021, type: "Hypercar",
    bodyStyle: "Roadster", doors: 2, origin: "UK",
    drivetrain: "RWD", powerSystem: "Hybrid",
    engine: null,
    price: 3000000, wikimediaImage: "Aston_Martin_Valkyrie.jpg",
    topSpeed: 402, horsepower: 1160
  },
  {
    id: 70, make: "Aston Martin", model: "DB11 V12", year: 2016, type: "Luxury",
    bodyStyle: "Coupe", doors: 2, origin: "UK",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 12, displacement: 5.2, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 230000, wikimediaImage: "Aston_Martin_DB11.jpg",
    topSpeed: 322, horsepower: 630
  },
  {
    id: 71, make: "Aston Martin", model: "Vantage", year: 2018, type: "Sports Car",
    bodyStyle: "Coupe", doors: 2, origin: "UK",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "Inline", cylinders: 6, displacement: 4.0, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 160000, wikimediaImage: "Aston_Martin_Vantage_2018.jpg",
    topSpeed: 314, horsepower: 510
  },
  // === JAGUAR ===
  {
    id: 72, make: "Jaguar", model: "F-Type R", year: 2013, type: "Sports Car",
    bodyStyle: "Coupe", doors: 2, origin: "UK",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 8, displacement: 5.0, fuel: "Petrol", aspiration: "Supercharged" },
    price: 110000, wikimediaImage: "Jaguar_F-Type_R.jpg",
    topSpeed: 300, horsepower: 550
  },
  {
    id: 73, make: "Jaguar", model: "I-Pace", year: 2018, type: "SUV",
    bodyStyle: "SUV", doors: 4, origin: "UK",
    drivetrain: "AWD", powerSystem: "Electric",
    engine: null,
    price: 80000, wikimediaImage: "Jaguar_I-PACE.jpg",
    topSpeed: 200, horsepower: 394
  },
  // === VW GROUP ===
  {
    id: 74, make: "Volkswagen", model: "Golf GTI MK8", year: 2020, type: "Hot Hatch",
    bodyStyle: "Hatchback", doors: 4, origin: "Germany",
    drivetrain: "FWD", powerSystem: "Combustion",
    engine: { type: "Inline", cylinders: 4, displacement: 2.0, fuel: "Petrol", aspiration: "Turbo" },
    price: 40000, wikimediaImage: "Volkswagen_Golf_GTI_Mk8.jpg",
    topSpeed: 250, horsepower: 245
  },
  {
    id: 75, make: "Volkswagen", model: "Golf R MK8", year: 2020, type: "Hot Hatch",
    bodyStyle: "Hatchback", doors: 4, origin: "Germany",
    drivetrain: "AWD", powerSystem: "Combustion",
    engine: { type: "Inline", cylinders: 4, displacement: 2.0, fuel: "Petrol", aspiration: "Turbo" },
    price: 48000, wikimediaImage: "Volkswagen_Golf_R_Mk8.jpg",
    topSpeed: 270, horsepower: 320
  },
  {
    id: 76, make: "SEAT", model: "Cupra Formentor VZ5", year: 2022, type: "SUV",
    bodyStyle: "SUV", doors: 4, origin: "Spain",
    drivetrain: "AWD", powerSystem: "Combustion",
    engine: { type: "Inline", cylinders: 5, displacement: 2.5, fuel: "Petrol", aspiration: "Turbo" },
    price: 65000, wikimediaImage: "Cupra_Formentor.jpg",
    topSpeed: 250, horsepower: 390
  },
  // === ALFA ROMEO ===
  {
    id: 77, make: "Alfa Romeo", model: "Giulia Quadrifoglio", year: 2016, type: "Sports Car",
    bodyStyle: "Sedan", doors: 4, origin: "Italy",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 6, displacement: 2.9, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 90000, wikimediaImage: "Alfa_Romeo_Giulia_Quadrifoglio.jpg",
    topSpeed: 307, horsepower: 510
  },
  {
    id: 78, make: "Alfa Romeo", model: "4C", year: 2013, type: "Sports Car",
    bodyStyle: "Coupe", doors: 2, origin: "Italy",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "Inline", cylinders: 4, displacement: 1.75, fuel: "Petrol", aspiration: "Turbo" },
    price: 60000, wikimediaImage: "Alfa_Romeo_4C.jpg",
    topSpeed: 258, horsepower: 240
  },
  // === PEUGEOT / FRENCH ===
  {
    id: 79, make: "Peugeot", model: "308 GTi", year: 2015, type: "Hot Hatch",
    bodyStyle: "Hatchback", doors: 4, origin: "France",
    drivetrain: "FWD", powerSystem: "Combustion",
    engine: { type: "Inline", cylinders: 4, displacement: 1.6, fuel: "Petrol", aspiration: "Turbo" },
    price: 40000, wikimediaImage: "Peugeot_308_GTi.jpg",
    topSpeed: 250, horsepower: 270
  },
  {
    id: 80, make: "Renault", model: "Megane RS Trophy-R", year: 2019, type: "Hot Hatch",
    bodyStyle: "Hatchback", doors: 4, origin: "France",
    drivetrain: "FWD", powerSystem: "Combustion",
    engine: { type: "Inline", cylinders: 4, displacement: 1.8, fuel: "Petrol", aspiration: "Turbo" },
    price: 75000, wikimediaImage: "Renault_Megane_RS.jpg",
    topSpeed: 265, horsepower: 300
  },
  // === HYUNDAI/KIA ===
  {
    id: 81, make: "Hyundai", model: "i30 N Performance", year: 2018, type: "Hot Hatch",
    bodyStyle: "Hatchback", doors: 4, origin: "South Korea",
    drivetrain: "FWD", powerSystem: "Combustion",
    engine: { type: "Inline", cylinders: 4, displacement: 2.0, fuel: "Petrol", aspiration: "Turbo" },
    price: 38000, wikimediaImage: "Hyundai_i30_N.jpg",
    topSpeed: 250, horsepower: 275
  },
  {
    id: 82, make: "Hyundai", model: "Ioniq 5 N", year: 2023, type: "Hot Hatch",
    bodyStyle: "SUV", doors: 4, origin: "South Korea",
    drivetrain: "AWD", powerSystem: "Electric",
    engine: null,
    price: 80000, wikimediaImage: "Hyundai_IONIQ_5_N.jpg",
    topSpeed: 260, horsepower: 641
  },
  {
    id: 83, make: "Kia", model: "Stinger GT", year: 2017, type: "Sports Car",
    bodyStyle: "Sedan", doors: 4, origin: "South Korea",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 6, displacement: 3.3, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 55000, wikimediaImage: "Kia_Stinger.jpg",
    topSpeed: 270, horsepower: 365
  },
  // === SUBARU/MITSUBISHI ===
  {
    id: 84, make: "Subaru", model: "Impreza WRX STI", year: 2004, type: "Sports Car",
    bodyStyle: "Sedan", doors: 4, origin: "Japan",
    drivetrain: "AWD", powerSystem: "Combustion",
    engine: { type: "Flat", cylinders: 4, displacement: 2.0, fuel: "Petrol", aspiration: "Turbo" },
    price: 45000, wikimediaImage: "Subaru_Impreza_WRX_STI.jpg",
    topSpeed: 255, horsepower: 300
  },
  {
    id: 85, make: "Mitsubishi", model: "Lancer Evolution X", year: 2007, type: "Sports Car",
    bodyStyle: "Sedan", doors: 4, origin: "Japan",
    drivetrain: "AWD", powerSystem: "Combustion",
    engine: { type: "Inline", cylinders: 4, displacement: 2.0, fuel: "Petrol", aspiration: "Turbo" },
    price: 35000, wikimediaImage: "Mitsubishi_Lancer_Evolution_X.jpg",
    topSpeed: 250, horsepower: 295
  },
  // === PAGANI ===
  {
    id: 86, make: "Pagani", model: "Huayra BC Roadster", year: 2018, type: "Hypercar",
    bodyStyle: "Roadster", doors: 2, origin: "Italy",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 12, displacement: 6.0, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 3400000, wikimediaImage: "Pagani_Huayra.jpg",
    topSpeed: 340, horsepower: 800
  },
  {
    id: 87, make: "Pagani", model: "Zonda R", year: 2009, type: "Hypercar",
    bodyStyle: "Coupe", doors: 2, origin: "Italy",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 12, displacement: 6.0, fuel: "Petrol", aspiration: "Naturally Aspirated" },
    price: 2800000, wikimediaImage: "Pagani_Zonda.jpg",
    topSpeed: 370, horsepower: 750
  },
  // === LEXUS ===
  {
    id: 88, make: "Lexus", model: "LFA", year: 2010, type: "Supercar",
    bodyStyle: "Coupe", doors: 2, origin: "Japan",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 10, displacement: 4.8, fuel: "Petrol", aspiration: "Naturally Aspirated" },
    price: 700000, wikimediaImage: "Lexus_LFA.jpg",
    topSpeed: 325, horsepower: 553
  },
  {
    id: 89, make: "Lexus", model: "IS500 F Sport", year: 2021, type: "Sports Car",
    bodyStyle: "Sedan", doors: 4, origin: "Japan",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 8, displacement: 5.0, fuel: "Petrol", aspiration: "Naturally Aspirated" },
    price: 65000, wikimediaImage: "Lexus_IS_F.jpg",
    topSpeed: 270, horsepower: 472
  },
  // === LAMBORGHINI/MORE ===
  {
    id: 90, make: "Lamborghini", model: "Gallardo", year: 2003, type: "Supercar",
    bodyStyle: "Coupe", doors: 2, origin: "Italy",
    drivetrain: "AWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 10, displacement: 5.0, fuel: "Petrol", aspiration: "Naturally Aspirated" },
    price: 180000, wikimediaImage: "Lamborghini_Gallardo.jpg",
    topSpeed: 318, horsepower: 520
  },
  // === MINI / SMALL SPORTY ===
  {
    id: 91, make: "MINI", model: "John Cooper Works GP", year: 2020, type: "Hot Hatch",
    bodyStyle: "Hatchback", doors: 2, origin: "UK",
    drivetrain: "FWD", powerSystem: "Combustion",
    engine: { type: "Inline", cylinders: 4, displacement: 2.0, fuel: "Petrol", aspiration: "Turbo" },
    price: 45000, wikimediaImage: "MINI_JCW_GP.jpg",
    topSpeed: 265, horsepower: 306
  },
  // === MASERATI ===
  {
    id: 92, make: "Maserati", model: "MC20", year: 2020, type: "Supercar",
    bodyStyle: "Coupe", doors: 2, origin: "Italy",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 6, displacement: 3.0, fuel: "Petrol", aspiration: "Twin-Turbo" },
    price: 280000, wikimediaImage: "Maserati_MC20.jpg",
    topSpeed: 325, horsepower: 630
  },
  {
    id: 93, make: "Maserati", model: "GranTurismo", year: 2007, type: "Luxury",
    bodyStyle: "Coupe", doors: 2, origin: "Italy",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 8, displacement: 4.2, fuel: "Petrol", aspiration: "Naturally Aspirated" },
    price: 120000, wikimediaImage: "Maserati_GranTurismo.jpg",
    topSpeed: 285, horsepower: 405
  },
  // === SUBARU ===
  {
    id: 94, make: "Subaru", model: "BRZ", year: 2022, type: "Sports Car",
    bodyStyle: "Coupe", doors: 2, origin: "Japan",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "Flat", cylinders: 4, displacement: 2.4, fuel: "Petrol", aspiration: "Naturally Aspirated" },
    price: 30000, wikimediaImage: "Subaru_BRZ_2022.jpg",
    topSpeed: 226, horsepower: 228
  },
  // === MERCEDES ===
  {
    id: 95, make: "Mercedes-Benz", model: "CLK GTR", year: 1997, type: "Supercar",
    bodyStyle: "Coupe", doors: 2, origin: "Germany",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 12, displacement: 6.9, fuel: "Petrol", aspiration: "Naturally Aspirated" },
    price: 2500000, wikimediaImage: "Mercedes-Benz_CLK_GTR.jpg",
    topSpeed: 320, horsepower: 612
  },
  // === LOTUS ===
  {
    id: 96, make: "Lotus", model: "Emira V6", year: 2022, type: "Sports Car",
    bodyStyle: "Coupe", doors: 2, origin: "UK",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 6, displacement: 3.5, fuel: "Petrol", aspiration: "Supercharged" },
    price: 100000, wikimediaImage: "Lotus_Emira.jpg",
    topSpeed: 290, horsepower: 400
  },
  {
    id: 97, make: "Lotus", model: "Evija", year: 2022, type: "Hypercar",
    bodyStyle: "Roadster", doors: 2, origin: "UK",
    drivetrain: "AWD", powerSystem: "Electric",
    engine: null,
    price: 2200000, wikimediaImage: "Lotus_Evija.jpg",
    topSpeed: 320, horsepower: 2000
  },
  // === DE TOMASO / ITALIAN ===
  {
    id: 98, make: "De Tomaso", model: "Pantera", year: 1971, type: "Muscle Car",
    bodyStyle: "Coupe", doors: 2, origin: "Italy",
    drivetrain: "RWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 8, displacement: 5.8, fuel: "Petrol", aspiration: "Naturally Aspirated" },
    price: 200000, wikimediaImage: "De_Tomaso_Pantera.jpg",
    topSpeed: 270, horsepower: 330
  },
  // === LAND ROVER / RANGE ROVER ===
  {
    id: 99, make: "Land Rover", model: "Range Rover SVR", year: 2020, type: "SUV",
    bodyStyle: "SUV", doors: 4, origin: "UK",
    drivetrain: "AWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 8, displacement: 5.0, fuel: "Petrol", aspiration: "Supercharged" },
    price: 145000, wikimediaImage: "Range_Rover_Sport_SVR.jpg",
    topSpeed: 283, horsepower: 575
  },
  {
    id: 100, make: "Land Rover", model: "Defender 110 V8", year: 2021, type: "SUV",
    bodyStyle: "SUV", doors: 4, origin: "UK",
    drivetrain: "AWD", powerSystem: "Combustion",
    engine: { type: "V", cylinders: 8, displacement: 5.0, fuel: "Petrol", aspiration: "Supercharged" },
    price: 120000, wikimediaImage: "Land_Rover_Defender_110.jpg",
    topSpeed: 240, horsepower: 525
  }
];

// Get all unique makes for autocomplete
const ALL_MAKES = [...new Set(CARS_DB.map(c => c.make))].sort();
const ALL_MODELS_FULL = CARS_DB.map(c => `${c.make} ${c.model}`).sort();

// Helper functions
function getCarsByMake(make) {
  return CARS_DB.filter(c => c.make === make);
}

function getCarsByType(type) {
  return CARS_DB.filter(c => c.type === type);
}

function getRandomCar() {
  return CARS_DB[Math.floor(Math.random() * CARS_DB.length)];
}

function getRandomCars(count, exclude = []) {
  const available = CARS_DB.filter(c => !exclude.includes(c.id));
  const shuffled = [...available].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function searchCars(query) {
  if (!query || query.length < 2) return [];
  const q = query.toLowerCase();
  return ALL_MODELS_FULL.filter(name => name.toLowerCase().includes(q)).slice(0, 8);
}
