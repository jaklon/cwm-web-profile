export const products = [
  {
    id: "bsf",
    productImage: null, // → "/images/products/bsf-facility.jpg"
    title: "Automatic BSF Breeding",
    subtitle: "Budidaya Maggot Skala Industri",
    icon: "Bug",
    color: "from-green-500 to-emerald-600",
    bgAccent: "green",
    category: "Organic Waste",
    description:
      "Fully automated technology utilizing organic waste to produce high-quality animal feed protein and maggot oil through Black Soldier Fly cultivation.",
    capacity: "1–100 T/day",
    highlights: [
      "Zero wastewater",
      "Zero odor emissions",
      "Eco-friendly modular structure",
      "Full automation",
    ],
    stages: [
      {
        step: 1,
        title: "Waste Processing",
        desc: "Organic waste sorting, crushing, and filtering to prepare optimal feed substrate",
        icon: "Filter",
      },
      {
        step: 2,
        title: "Fly Breeding",
        desc: "Controlled temperature environment for BSF larvae cultivation and growth",
        icon: "Thermometer",
      },
      {
        step: 3,
        title: "Drying Equipment",
        desc: "Precision drying system to achieve optimal moisture content in final product",
        icon: "Wind",
      },
      {
        step: 4,
        title: "Adult BSF Screening",
        desc: "Automated separation and screening of mature BSF for protein and oil extraction",
        icon: "SlidersHorizontal",
      },
    ],
    specs: [
      { label: "Capacity", value: "1–100 Tons/day" },
      { label: "Operation", value: "Fully Automated" },
      { label: "Wastewater", value: "Zero Discharge" },
      { label: "Odor Emission", value: "Zero" },
      { label: "Design", value: "Modular / Space-saving" },
      { label: "Output", value: "High-protein Animal Feed + Maggot Oil" },
    ],
  },
  {
    id: "rdf",
    productImage: null, // → "/images/products/rdf-facility.jpg"
    title: "RDF Briquette & BBJP",
    subtitle: "Bahan Bakar Jumputan Padat",
    icon: "Flame",
    color: "from-orange-500 to-amber-600",
    bgAccent: "amber",
    category: "Fuel Alternative",
    description:
      "Converting organic and inorganic waste into high-calorie alternative fuels compliant with SNI BBJP standards for cement factories, PLTU co-firing, and biomass stoves.",
    capacity: "100–400 T/day",
    highlights: [
      "SNI BBJP compliant",
      "High calorific value",
      "Co-firing ready for PLTU",
      "Automated pelletizing",
    ],
    stages: [
      {
        step: 1,
        title: "Dewatering",
        desc: "Reducing organic material water content as pre-treatment for RDF/BBJP raw material",
        icon: "Droplets",
      },
      {
        step: 2,
        title: "Crusher Sizing",
        desc: "Material size reduction system for optimal particle size distribution",
        icon: "Scissors",
      },
      {
        step: 3,
        title: "Drying System",
        desc: "Precision moisture control drying system to achieve target moisture levels",
        icon: "Wind",
      },
      {
        step: 4,
        title: "Pelletizing System",
        desc: "Forming RDF Briquette and BBJP pellets meeting SNI BBJP moisture specifications",
        icon: "Package",
      },
    ],
    specs: [
      { label: "Capacity", value: "100–400 Tons/day" },
      { label: "Operation", value: "Fully Automated" },
      { label: "Standard", value: "SNI BBJP Compliant" },
      {
        label: "Application",
        value: "Cement Factory / PLTU Co-firing / Biomass Stove",
      },
      { label: "Design", value: "Modular / Space-saving" },
      { label: "Output", value: "High-calorie Alternative Fuel Pellets" },
    ],
  },
  {
    id: "geocell",
    productImage: null, // → "/images/products/geocell-facility.jpg"
    title: "Industrial Geocell Material",
    subtitle: "Material Geocell dari Limbah Plastik",
    icon: "Grid3x3",
    color: "from-cyan-500 to-blue-600",
    bgAccent: "cyan",
    category: "Plastic Waste",
    description:
      "Converting inorganic plastic waste into specialized geocell structures for road infrastructure reinforcement and erosion/landslide control.",
    capacity: "5,000 Kg/day",
    highlights: [
      "Zero waste emissions",
      "Road reinforcement grade",
      "Erosion & landslide control",
      "Ultrasonic stitching",
    ],
    stages: [
      {
        step: 1,
        title: "Structural Design",
        desc: "Geocell material design calculated based on soil condition and infrastructure requirements",
        icon: "Ruler",
      },
      {
        step: 2,
        title: "Plastic Pelletizing",
        desc: "Converting collected plastic waste into uniform pellets as manufacturing feedstock",
        icon: "Recycle",
      },
      {
        step: 3,
        title: "Sheet Molding",
        desc: "Forming geocell sheets using precision injection molding machinery",
        icon: "Layers",
      },
      {
        step: 4,
        title: "Ultrasonic Stitching",
        desc: "Joining geocell sheets with industrial ultrasonic welding machines for structural integrity",
        icon: "Zap",
      },
    ],
    specs: [
      { label: "Capacity", value: "5,000 Kg/day" },
      { label: "Operation", value: "Fully Automated" },
      { label: "Wastewater", value: "Zero Discharge" },
      { label: "Odor Emission", value: "Zero" },
      { label: "Application", value: "Road Infrastructure / Erosion Control" },
      { label: "Joining Method", value: "Industrial Ultrasonic Welding" },
    ],
  },
  {
    id: "gasification",
    productImage: null, // → "/images/products/gasification-facility.jpg"
    title: "Gasification Power Plant",
    subtitle: "Pembangkit Listrik dari Limbah Medis",
    icon: "Zap",
    color: "from-violet-500 to-purple-600",
    bgAccent: "violet",
    category: "Medical Waste",
    description:
      "Advanced eco-friendly solution for safely disposing hazardous medical and residual waste while simultaneously producing renewable electricity through pyrolysis gasification.",
    capacity: "30,000 Kg/day",
    highlights: [
      "1,400 KW power output",
      "Medical waste certified",
      "Zero wastewater",
      "Syngas purification",
    ],
    stages: [
      {
        step: 1,
        title: "Pyrolysis Gasification Furnace",
        desc: "Vertical rotary pyrolysis gasification furnace thermally decomposes waste into syngas",
        icon: "Flame",
      },
      {
        step: 2,
        title: "Secondary Combustion",
        desc: "Secondary combustion chamber ensures complete combustion of syngas residuals",
        icon: "Thermometer",
      },
      {
        step: 3,
        title: "12t/h Waste Heat Boiler",
        desc: "Heat recovery boiler converts thermal energy from combustion into high-pressure steam",
        icon: "Gauge",
      },
      {
        step: 4,
        title: "1,400KW Steam Turbine Generator",
        desc: "Condensing steam turbine generator converts steam energy into clean electricity",
        icon: "Zap",
      },
    ],
    specs: [
      { label: "Treatment Capacity", value: "30,000 Kg/day" },
      { label: "Power Output", value: "1,400 KW" },
      { label: "Boiler Capacity", value: "12 Tons/hour steam" },
      { label: "Wastewater", value: "Zero Discharge" },
      { label: "Waste Type", value: "Medical & Hazardous Residual" },
      { label: "Process", value: "Pyrolysis Gasification" },
    ],
  },
];
