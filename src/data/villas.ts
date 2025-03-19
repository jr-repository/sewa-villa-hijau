
export interface Villa {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  location: string;
  address: string;
  price: number;
  discount?: number;
  rating: number;
  totalReviews: number;
  capacity: {
    guests: number;
    bedrooms: number;
    beds: number;
    bathrooms: number;
  };
  amenities: {
    category: string;
    items: string[];
  }[];
  images: string[];
  panoramaView?: string;
  featured: boolean;
  availability: {
    isAvailable: boolean;
    availableDates?: {
      from: string;
      to: string;
    }[];
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  nearbyAttractions: {
    name: string;
    distance: string;
    description: string;
    image: string;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
  villaId: string;
  villaName: string;
}

export const villas: Villa[] = [
  {
    id: "villa-kaliurang",
    name: "Villa Kaliurang",
    slug: "villa-kaliurang",
    description: "Villa Kaliurang menawarkan pemandangan spektakuler Gunung Merapi dengan suasana yang sejuk dan menenangkan. Dikelilingi oleh pepohonan pinus, villa ini menyediakan ruang keluarga yang luas dengan 4 kamar tidur yang nyaman. Nikmati momen bersantai di teras luas yang menghadap ke pegunungan atau berjalan-jalan ke kawasan wisata Kaliurang yang hanya berjarak 10 menit. Villa ini dilengkapi dengan kolam renang pribadi, area BBQ, dan dapur lengkap untuk memenuhi kebutuhan Anda selama liburan.",
    shortDescription: "Villa mewah dengan pemandangan Gunung Merapi, kolam renang pribadi, dan suasana sejuk pegunungan.",
    location: "Kaliurang",
    address: "Jl. Kaliurang km 23, Pakem, Yogyakarta",
    price: 2500000,
    rating: 4.8,
    totalReviews: 125,
    capacity: {
      guests: 10,
      bedrooms: 4,
      beds: 5,
      bathrooms: 3
    },
    amenities: [
      {
        category: "Fasilitas Umum",
        items: ["Kolam Renang Pribadi", "Taman Luas", "WiFi", "AC", "TV LED", "Parkir Luas", "Keamanan 24 Jam"]
      },
      {
        category: "Dapur",
        items: ["Peralatan Masak Lengkap", "Kulkas", "Microwave", "Kompor", "Water Heater", "Peralatan Makan"]
      },
      {
        category: "Kamar Tidur & Kamar Mandi",
        items: ["Kamar Mandi Dalam", "Air Panas", "Handuk", "Toiletries", "Hairdryer"]
      },
      {
        category: "Hiburan",
        items: ["Area BBQ", "Sound System", "TV Cable", "Teras dengan Pemandangan"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1592928302636-c83cf1e1c887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
    ],
    panoramaView: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80",
    featured: true,
    availability: {
      isAvailable: true,
      availableDates: [
        {
          from: "2023-09-01",
          to: "2023-09-10"
        },
        {
          from: "2023-09-15",
          to: "2023-09-25"
        }
      ]
    },
    coordinates: {
      lat: -7.5836,
      lng: 110.4376
    },
    nearbyAttractions: [
      {
        name: "Taman Nasional Gunung Merapi",
        distance: "5 km",
        description: "Taman nasional yang terletak di sekitar Gunung Merapi, menawarkan pemandangan alam yang indah dan jalur pendakian.",
        image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      },
      {
        name: "Museum Ullen Sentalu",
        distance: "3 km",
        description: "Museum budaya Jawa yang menyimpan koleksi artefak dan cerita sejarah kerajaan Mataram.",
        image: "https://images.unsplash.com/photo-1577985051167-0d49eec21977?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1889&q=80"
      }
    ]
  },
  {
    id: "villa-merapi",
    name: "Villa Merapi",
    slug: "villa-merapi",
    description: "Villa Merapi adalah akomodasi mewah dengan arsitektur kontemporer dan pemandangan langsung ke Gunung Merapi. Dirancang untuk memberikan pengalaman liburan premium, villa ini memiliki 3 kamar tidur elegan, ruang tamu luas, dan dapur modern yang lengkap. Nikmati keindahan matahari terbit dari balkon pribadi atau bersantai di kolam renang infinity yang menghadap ke pegunungan. Lokasi strategis memudahkan akses ke berbagai objek wisata populer di Yogyakarta.",
    shortDescription: "Villa eksklusif dengan desain modern dan pemandangan langsung Gunung Merapi yang menakjubkan.",
    location: "Pakem",
    address: "Jl. Boyong Kaliurang, Pakem, Yogyakarta",
    price: 3200000,
    discount: 10,
    rating: 4.9,
    totalReviews: 87,
    capacity: {
      guests: 8,
      bedrooms: 3,
      beds: 4,
      bathrooms: 3
    },
    amenities: [
      {
        category: "Fasilitas Umum",
        items: ["Kolam Infinity", "Taman Tropis", "WiFi Kecepatan Tinggi", "Smart TV", "Sistem Keamanan", "Pemandangan Merapi"]
      },
      {
        category: "Dapur",
        items: ["Dapur Premium", "Alat Masak Lengkap", "Coffee Maker", "Kulkas Besar", "Wine Cooler"]
      },
      {
        category: "Kamar Tidur & Kamar Mandi",
        items: ["Kasur King Size", "Kamar Mandi Mewah", "Bathtub", "Shower Rain", "Amenities Premium"]
      },
      {
        category: "Hiburan",
        items: ["Home Theater", "Ruang Yoga", "Area BBQ Premium", "Teras Panorama"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
    ],
    featured: true,
    availability: {
      isAvailable: true,
      availableDates: [
        {
          from: "2023-09-01",
          to: "2023-09-30"
        }
      ]
    },
    coordinates: {
      lat: -7.6258,
      lng: 110.4245
    },
    nearbyAttractions: [
      {
        name: "The World Landmarks Merapi Park",
        distance: "7 km",
        description: "Taman miniatur landmark dunia dengan latar belakang Gunung Merapi yang megah.",
        image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      },
      {
        name: "Lava Tour Merapi",
        distance: "10 km",
        description: "Tur petualangan dengan jeep untuk menjelajahi bekas aliran lava Gunung Merapi.",
        image: "https://images.unsplash.com/photo-1543785832-0216236a2676?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
      }
    ]
  },
  {
    id: "villa-sleman",
    name: "Villa Sleman",
    slug: "villa-sleman",
    description: "Villa Sleman adalah akomodasi yang menyatu dengan alam, dirancang dengan konsep ramah lingkungan namun tetap mewah. Terletak di kawasan asri Sleman, villa ini menawarkan suasana tenang dan privasi yang sempurna untuk liburan keluarga atau retreat. Dengan 5 kamar tidur yang nyaman, ruang keluarga luas, dan area outdoor yang hijau, villa ini dapat menampung hingga 12 tamu. Fasilitas unggulan termasuk kolam renang alami dengan pemurnian tanpa bahan kimia dan kebun organik yang dapat Anda petik langsung.",
    shortDescription: "Eco-luxury villa dengan kolam renang alami dan kebun organik di kawasan asri Sleman.",
    location: "Sleman",
    address: "Jl. Palagan Tentara Pelajar km 10, Sleman, Yogyakarta",
    price: 2800000,
    rating: 4.7,
    totalReviews: 63,
    capacity: {
      guests: 12,
      bedrooms: 5,
      beds: 6,
      bathrooms: 4
    },
    amenities: [
      {
        category: "Fasilitas Umum",
        items: ["Kolam Renang Alami", "Kebun Organik", "WiFi", "Area Parkir Luas", "Keamanan 24 Jam", "Gazebo"]
      },
      {
        category: "Dapur",
        items: ["Dapur Lengkap", "Mini Bar", "Peralatan BBQ", "Kulkas", "Kompor Gas", "Oven"]
      },
      {
        category: "Kamar Tidur & Kamar Mandi",
        items: ["Linen Organik", "Shower Outdoor", "Toiletries Ramah Lingkungan", "Air Panas"]
      },
      {
        category: "Hiburan",
        items: ["Area Yoga", "Perpustakaan Mini", "Taman Bermain Anak", "Meja Pingpong"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2380&q=80",
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    ],
    featured: true,
    availability: {
      isAvailable: true,
      availableDates: [
        {
          from: "2023-09-01",
          to: "2023-09-15"
        },
        {
          from: "2023-09-20",
          to: "2023-09-30"
        }
      ]
    },
    coordinates: {
      lat: -7.7328,
      lng: 110.3841
    },
    nearbyAttractions: [
      {
        name: "Sindu Kusuma Edupark",
        distance: "8 km",
        description: "Taman hiburan keluarga dengan berbagai wahana permainan dan atraksi edukasi.",
        image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
      },
      {
        name: "Candi Prambanan",
        distance: "15 km",
        description: "Kompleks candi Hindu terbesar di Indonesia yang dibangun pada abad ke-9.",
        image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
      }
    ]
  },
  {
    id: "villa-parangtritis",
    name: "Villa Parangtritis",
    slug: "villa-parangtritis",
    description: "Villa Parangtritis adalah satu-satunya villa premium yang terletak hanya 500 meter dari Pantai Parangtritis yang terkenal. Dengan desain yang terinspirasi dari budaya lokal dan sentuhan modern, villa ini menawarkan pengalaman menginap yang unik dan mewah. Dari balkon atau teras rooftop, Anda dapat menikmati pemandangan laut yang spektakuler dan matahari terbenam yang memukau. Villa ini memiliki 3 kamar tidur yang nyaman, kolam renang infinity, dan jacuzzi outdoor untuk relaksasi maksimal.",
    shortDescription: "Villa mewah dengan pemandangan Pantai Parangtritis, kolam infinity, dan akses mudah ke pantai.",
    location: "Parangtritis",
    address: "Jl. Pantai Parangtritis km 2, Bantul, Yogyakarta",
    price: 3500000,
    discount: 15,
    rating: 4.6,
    totalReviews: 42,
    capacity: {
      guests: 8,
      bedrooms: 3,
      beds: 4,
      bathrooms: 3
    },
    amenities: [
      {
        category: "Fasilitas Umum",
        items: ["Kolam Renang Infinity", "Jacuzzi Outdoor", "Teras Rooftop", "WiFi", "AC", "Akses Pantai"]
      },
      {
        category: "Dapur",
        items: ["Dapur Modern", "Bar Mini", "Wine Cooler", "Alat BBQ", "Kulkas Besar"]
      },
      {
        category: "Kamar Tidur & Kamar Mandi",
        items: ["Kasur Premium", "Kamar Mandi Mewah", "Bathub", "Outdoor Shower", "Perlengkapan Mandi Premium"]
      },
      {
        category: "Hiburan",
        items: ["TV Satelit", "Sound System", "Area Berjemur", "Peralatan Snorkeling", "Sepeda"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1440778303588-435521a205bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1508184964240-ee96bb9677a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    ],
    featured: false,
    availability: {
      isAvailable: true,
      availableDates: [
        {
          from: "2023-09-01",
          to: "2023-09-30"
        }
      ]
    },
    coordinates: {
      lat: -8.0257,
      lng: 110.3327
    },
    nearbyAttractions: [
      {
        name: "Pantai Parangtritis",
        distance: "0.5 km",
        description: "Pantai terkenal dengan pemandangan sunset indah dan keunikan gumuk pasirnya.",
        image: "https://images.unsplash.com/photo-1501949997128-2fdb9f6428f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      },
      {
        name: "Gumuk Pasir Parangkusumo",
        distance: "2 km",
        description: "Kawasan gurun pasir yang unik di Indonesia, cocok untuk aktivitas sandboarding.",
        image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      }
    ]
  },
  {
    id: "villa-prambanan",
    name: "Villa Prambanan",
    slug: "villa-prambanan",
    description: "Villa Prambanan adalah kombinasi sempurna antara arsitektur tradisional Jawa dan kenyamanan modern, terletak hanya 3 km dari Candi Prambanan yang ikonik. Dengan 4 kamar tidur yang luas dan area komunal yang nyaman, villa ini ideal untuk kumpul keluarga atau retreat bersama teman. Villa ini dikelilingi oleh taman tropis luas dengan kolam renang, gazebo tradisional Jawa, dan pemandangan sawah yang hijau. Interior villa dihiasi dengan kerajinan tangan lokal dan furnitur kayu jati berkualitas tinggi.",
    shortDescription: "Villa bergaya Jawa dengan panorama sawah dan akses mudah ke Candi Prambanan.",
    location: "Prambanan",
    address: "Jl. Candi Prambanan km 3, Klaten, Jawa Tengah",
    price: 2900000,
    rating: 4.7,
    totalReviews: 53,
    capacity: {
      guests: 10,
      bedrooms: 4,
      beds: 5,
      bathrooms: 4
    },
    amenities: [
      {
        category: "Fasilitas Umum",
        items: ["Kolam Renang", "Gazebo Jawa", "Taman Tropis", "WiFi", "AC", "Teras Sawah"]
      },
      {
        category: "Dapur",
        items: ["Dapur Tradisional & Modern", "Peralatan Lengkap", "Kulkas", "Dispenser", "Ruang Makan Luas"]
      },
      {
        category: "Kamar Tidur & Kamar Mandi",
        items: ["Tempat Tidur Jati", "Kamar Mandi Semi Outdoor", "Air Panas", "Amenities Organik"]
      },
      {
        category: "Hiburan",
        items: ["Area BBQ", "TV LED", "Perpustakaan Mini", "Set Alat Musik Gamelan Mini"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1518005068251-37900150dfca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80",
      "https://images.unsplash.com/photo-1490312278390-ab64016e0e66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1460&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    ],
    featured: false,
    availability: {
      isAvailable: true,
      availableDates: [
        {
          from: "2023-09-01",
          to: "2023-09-20"
        },
        {
          from: "2023-09-25",
          to: "2023-09-30"
        }
      ]
    },
    coordinates: {
      lat: -7.7520,
      lng: 110.4913
    },
    nearbyAttractions: [
      {
        name: "Candi Prambanan",
        distance: "3 km",
        description: "Candi Hindu terbesar di Indonesia yang terkenal dengan keindahan arsitekturnya.",
        image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
      },
      {
        name: "Teater Ramayana",
        distance: "4 km",
        description: "Pertunjukan tari tradisional yang menceritakan kisah Ramayana dengan latar belakang Candi Prambanan.",
        image: "https://images.unsplash.com/photo-1552147512-6af160be4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
      }
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "testimonial1",
    name: "Budi Santoso",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    comment: "Pengalaman menginap yang luar biasa! Pemandangan langsung ke Gunung Merapi, suasana yang sejuk, dan pelayanan yang ramah. Akan kembali lagi.",
    date: "15 Agustus 2023",
    villaId: "villa-kaliurang",
    villaName: "Villa Kaliurang"
  },
  {
    id: "testimonial2",
    name: "Siti Rahayu",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 4,
    comment: "Villa yang sangat nyaman dan bersih. Kolam renang infinity-nya menjadi favorit anak-anak. Pemandangan matahari terbit dari balkon kamar utama sungguh spektakuler.",
    date: "20 Juli 2023",
    villaId: "villa-merapi",
    villaName: "Villa Merapi"
  },
  {
    id: "testimonial3",
    name: "Ahmad Ridwan",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    comment: "Saya sangat menyukai konsep eco-friendly di Villa Sleman. Kebun organiknya menghasilkan sayuran segar yang bisa kami petik langsung untuk dimasak. Suasananya sangat alami dan menenangkan.",
    date: "5 Agustus 2023",
    villaId: "villa-sleman",
    villaName: "Villa Sleman"
  },
  {
    id: "testimonial4",
    name: "Diana Putri",
    avatar: "https://i.pravatar.cc/150?img=9",
    rating: 4,
    comment: "Menikmati matahari terbenam di Villa Parangtritis adalah pengalaman yang tidak akan terlupakan. Akses mudah ke pantai dan kolam infinity dengan pemandangan laut menjadi nilai plus.",
    date: "10 Juli 2023",
    villaId: "villa-parangtritis",
    villaName: "Villa Parangtritis"
  },
  {
    id: "testimonial5",
    name: "Rudi Hermawan",
    avatar: "https://i.pravatar.cc/150?img=8",
    rating: 5,
    comment: "Villa Prambanan memberikan suasana tradisional Jawa yang autentik dengan kenyamanan modern. Lokasinya yang dekat dengan Candi Prambanan sangat menguntungkan untuk berwisata.",
    date: "25 Juli 2023",
    villaId: "villa-prambanan",
    villaName: "Villa Prambanan"
  },
  {
    id: "testimonial6",
    name: "Maya Wijaya",
    avatar: "https://i.pravatar.cc/150?img=4",
    rating: 5,
    comment: "Liburan keluarga terbaik! Villa Kaliurang punya ruang yang luas untuk anak-anak bermain dan fasilitas yang lengkap untuk kenyamanan seluruh keluarga.",
    date: "2 Agustus 2023",
    villaId: "villa-kaliurang",
    villaName: "Villa Kaliurang"
  },
  {
    id: "testimonial7",
    name: "Eko Prasetyo",
    avatar: "https://i.pravatar.cc/150?img=7",
    rating: 4,
    comment: "Saya mengadakan retreat perusahaan kecil di Villa Merapi dan semua peserta sangat terkesan. Ruangan yang luas dan pemandangan yang indah menciptakan suasana yang inspiratif.",
    date: "12 Agustus 2023",
    villaId: "villa-merapi",
    villaName: "Villa Merapi"
  }
];
