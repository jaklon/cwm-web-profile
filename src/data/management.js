export const management = [
  {
    name: "Drs. Yamin Pakaya, M.T.",
    photo: null, // → "/images/team/yamin-pakaya.jpg"
    role: "Managing Director",
    roleColor: "green",
    education: "S1 Elektronika · Master Teknik Energi Baru & Terbarukan",
    expertise:
      "Konversi Biomassa (sampah) menjadi Energi — Alternatif Fuel & Cofiring",
    tags: ["Biomass Energy", "Cofiring", "Renewable Energy"],
    icon: "Crown",
    initials: "YP",
    speakerBadge: true,
    speakerEvent: "BRIN Enviro Talk #56 — Speaker",
  },
  {
    name: "Mr. Salman YF Putra",
    photo: null, // → "/images/team/salman-putra.jpg"
    role: "Business Development",
    roleColor: "blue",
    education: "S1 Teknik Nuklir · Master of Chemical Engineering",
    expertise: "Konversi Syngas dari sampah menjadi Green Hydrogen",
    tags: ["Green Hydrogen", "Syngas", "Chemical Engineering"],
    icon: "TrendingUp",
    initials: "SP",
  },
  {
    name: "Mr. A. Haris S",
    photo: null, // → "/images/team/a-haris.jpg"
    role: "Research Development",
    roleColor: "cyan",
    education: "S1 Teknik Kimia",
    expertise: "Polimerisasi dan Komposit Material dari Limbah/Sampah",
    tags: ["Polymerization", "Composite Materials", "R&D"],
    icon: "FlaskConical",
    initials: "AH",
  },
  {
    name: "Mr. Ronny R Kembuan",
    photo: null, // → "/images/team/ronny-kembuan.jpg"
    role: "Industry Development",
    roleColor: "orange",
    education: "S1 Teknik Perkapalan",
    expertise:
      "Industry Thermal Process — Incinerator, Gasifikasi, Boiler, Steam Turbine, Pyrolysis",
    tags: ["Gasification", "Pyrolysis", "Steam Turbine", "Incinerator"],
    icon: "Factory",
    initials: "RK",
  },
  {
    name: "Ms. Dita Astrid",
    photo: null, // → "/images/team/dita-astrid.jpg"
    role: "Marketing Development",
    roleColor: "pink",
    education: "S1 Marketing · Master of International Relations",
    expertise:
      "Pemasaran Komoditi dan Peralatan Industri di pasar internasional",
    tags: ["Industrial Marketing", "International Relations", "Commodities"],
    icon: "Globe",
    initials: "DA",
  },
];

export const roleColorMap = {
  green:  { badge: "bg-green-100 text-green-700 border-green-200",   glow: "hover:shadow-glow-green",                             top: "from-green-500 to-emerald-600",  dot: "bg-green-500"  },
  blue:   { badge: "bg-blue-100 text-blue-700 border-blue-200",      glow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]",        top: "from-blue-500 to-indigo-600",    dot: "bg-blue-500"   },
  cyan:   { badge: "bg-cyan-100 text-cyan-700 border-cyan-200",      glow: "hover:shadow-glow-cyan",                              top: "from-cyan-500 to-blue-600",      dot: "bg-cyan-500"   },
  orange: { badge: "bg-orange-100 text-orange-700 border-orange-200", glow: "hover:shadow-glow-amber",                            top: "from-orange-500 to-amber-600",   dot: "bg-orange-500" },
  pink:   { badge: "bg-pink-100 text-pink-700 border-pink-200",      glow: "hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]",        top: "from-pink-500 to-rose-600",      dot: "bg-pink-500"   },
};
