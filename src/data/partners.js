export const partners = [
  {
    id: "intec-group-berlin",
    name: "INTEC Group Berlin",
    shortName: "INTEC",
    country: "Germany",
    countryFlag: "🇩🇪",
    logo: null, // → "/images/partners/intec-logo.png"
    type: "Strategic Technology Partner",
    since: "2026",
    letterDate: "23 Maret 2026",
    letterSignatory: "Afsahi Badr — Director/CEO, INTEC Group Berlin",
    description:
      "Kolaborasi strategis dalam pengembangan sistem Waste-to-Energy (WTE) terintegrasi berbasis TPST3R dan Penutupan TPA, menggunakan teknologi gasifikasi termolitik INTEC SG Series yang telah dipatenkan di EU, USA, dan Jepang.",
    highlights: [
      { label: "Kapasitas Pengolahan", value: "±1.000 Ton/hari", icon: "Factory" },
      { label: "Potensi Listrik", value: "15 – 22 MW", icon: "Zap" },
      { label: "Pengurangan Emisi", value: "±671.000 ton CO₂e/tahun", icon: "Wind" },
      { label: "Nilai Karbon", value: "Rp 100–200 Miliar/tahun", icon: "TrendingUp" },
      { label: "Umur Proyek", value: "20 – 25 Tahun", icon: "Calendar" },
      { label: "Technology Readiness", value: "TRL 9 — Fully Proven", icon: "ShieldCheck" },
    ],
    system: {
      title: "Sistem WTE Terintegrasi CWM × INTEC",
      subtitle:
        "Waste Management → Resource Recovery → Energy Production → Carbon Economy",
      stages: [
        {
          step: 1,
          title: "TPST3R — Hulu",
          desc: "Pemilahan sumber & klasterisasi sampah oleh CWM bersama Koperasi Desa Merah Putih",
          icon: "Recycle",
        },
        {
          step: 2,
          title: "Pra-Pengolahan",
          desc: "Shredding, pengeringan, homogenisasi, dan produksi RDF oleh CWM & UPTD",
          icon: "Settings",
        },
        {
          step: 3,
          title: "Gasifikasi INTEC",
          desc: "Konversi termal menggunakan teknologi INTEC SG Series — thermolytic cracking tanpa oksigen",
          icon: "Flame",
        },
        {
          step: 4,
          title: "Produk & Manfaat",
          desc: "Energi listrik (syngas), Biochar, Methanol, Coke — nilai tambah & carbon trading",
          icon: "Sparkles",
        },
        {
          step: 5,
          title: "Penutupan TPA",
          desc: "Rehabilitasi lahan TPA secara bertahap, landfill mining, pengurangan emisi metana",
          icon: "Leaf",
        },
      ],
    },
    tags: ["Gasification", "Waste-to-Energy", "TPST3R", "Carbon Trading", "Green Technology"],
  },
];
