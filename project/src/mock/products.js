const products = [
  // Fútbol
  {
    id: 1,
    name: "Balón Adidas Champions League",
    price: 189900,
    category: "fútbol",
    image: "https://m.media-amazon.com/images/I/71K9JbJfBVL._AC_SL1500_.jpg",
    description: "Balón oficial del torneo",
    trending: true
  },
  {
    id: 2,
    name: "Botines Nike Mercurial",
    price: 349900,
    category: "fútbol",
    image: "https://m.media-amazon.com/images/I/71KqYb+TWmL._AC_SL1500_.jpg",
    description: "Botines de alta gama para velocidad",
    trending: true
  },
  {
    id: 3,
    name: "Guantes Portero Uhlsport",
    price: 159900,
    category: "fútbol",
    image: "https://m.media-amazon.com/images/I/81XUfK+0TPL._AC_SL1500_.jpg",
    description: "Guantes profesionales con grip superior",
    trending: false
  },

  // Tenis
  {
    id: 4,
    name: "Raqueta Wilson Pro Staff",
    price: 629900,
    category: "tenis",
    image: "https://m.media-amazon.com/images/I/61+6Y7DohSL._AC_SL1500_.jpg",
    description: "Usada por Federer",
    trending: true
  },
  {
    id: 5,
    name: "Pelotas Tenis Wilson US Open",
    price: 89900,
    category: "tenis",
    image: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_SL1500_.jpg",
    description: "Pack de 3 pelotas profesionales",
    trending: false
  },
  {
    id: 6,
    name: "Zapatillas Adidas Courtjam",
    price: 229900,
    category: "tenis",
    image: "https://m.media-amazon.com/images/I/71Yq4+bF5VL._AC_SL1500_.jpg",
    description: "Zapatillas para cancha dura",
    trending: true
  },

  // Baloncesto
  {
    id: 7,
    name: "Balón Spalding NBA",
    price: 159900,
    category: "baloncesto",
    image: "https://m.media-amazon.com/images/I/71Kq9RyqXEL._AC_SL1500_.jpg",
    description: "Oficial de la NBA",
    trending: false
  },
  {
    id: 8,
    name: "Zapatillas Jordan Retro",
    price: 499900,
    category: "baloncesto",
    image: "https://m.media-amazon.com/images/I/61KvGp20uAL._AC_SL1500_.jpg",
    description: "Edición especial 2023",
    trending: true
  },
  {
    id: 9,
    name: "Red Aro Baloncesto",
    price: 45900,
    category: "baloncesto",
    image: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_SL1500_.jpg",
    description: "Red de nailon resistente",
    trending: false
  },

  // Béisbol
  {
    id: 10,
    name: "Bate Louisville Slugger",
    price: 269900,
    category: "béisbol",
    image: "https://m.media-amazon.com/images/I/71y8bX4X1VL._AC_SL1500_.jpg",
    description: "Bate profesional de aluminio",
    trending: true
  },
  {
    id: 11,
    name: "Guante Rawlings Heart",
    price: 189900,
    category: "béisbol",
    image: "https://m.media-amazon.com/images/I/81A+MRqN9VL._AC_SL1500_.jpg",
    description: "Guante para jardinero",
    trending: false
  },
  {
    id: 12,
    name: "Pelotas Béisbol Wilson",
    price: 79900,
    category: "béisbol",
    image: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_SL1500_.jpg",
    description: "Pack de 3 pelotas oficiales",
    trending: false
  },

  // Boxeo
  {
    id: 13,
    name: "Guantes Everlast Pro",
    price: 219900,
    category: "boxeo",
    image: "https://m.media-amazon.com/images/I/81A+MRqN9VL._AC_SL1500_.jpg",
    description: "Guantes de competición 12oz",
    trending: false
  },
  {
    id: 14,
    name: "Saco Boxeo Century",
    price: 589900,
    category: "boxeo",
    image: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_SL1500_.jpg",
    description: "Saco de pie profesional",
    trending: true
  },
  {
    id: 15,
    name: "Vendas Boxeo Everlast",
    price: 45900,
    category: "boxeo",
    image: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_SL1500_.jpg",
    description: "Vendas elásticas 180\"",
    trending: false
  },

  // Ciclismo
  {
    id: 16,
    name: "Casco Ciclismo Giro",
    price: 199900,
    category: "ciclismo",
    image: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_SL1500_.jpg",
    description: "Casco aerodinámico",
    trending: true
  },
  {
    id: 17,
    name: "Zapatillas Shimano RC5",
    price: 329900,
    category: "ciclismo",
    image: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_SL1500_.jpg",
    description: "Zapatillas clip",
    trending: false
  },
  {
    id: 18,
    name: "Maillot Ciclismo Castelli",
    price: 149900,
    category: "ciclismo",
    image: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_SL1500_.jpg",
    description: "Maillot profesional",
    trending: false
  },

  // Natación
  {
    id: 19,
    name: "Gafas Natación Speedo",
    price: 89900,
    category: "natación",
    image: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_SL1500_.jpg",
    description: "Gafas espejadas",
    trending: true
  },
  {
    id: 20,
    name: "Traje Baño Arena",
    price: 129900,
    category: "natación",
    image: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_SL1500_.jpg",
    description: "Traje de competición",
    trending: false
  },
  {
    id: 21,
    name: "Aletas Natación Cressi",
    price: 99900,
    category: "natación",
    image: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_SL1500_.jpg",
    description: "Aletas cortas",
    trending: false
  },

  // Golf
  {
    id: 22,
    name: "Palos Golf Callaway",
    price: 1899900,
    category: "golf",
    image: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_SL1500_.jpg",
    description: "Set completo 14 piezas",
    trending: false
  },
  {
    id: 23,
    name: "Carro Golf Caddytek",
    price: 459900,
    category: "golf",
    image: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_SL1500_.jpg",
    description: "Carro plegable 3 ruedas",
    trending: false
  },
  {
    id: 24,
    name: "Pelotas Golf Titleist",
    price: 129900,
    category: "golf",
    image: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_SL1500_.jpg",
    description: "Docena de pelotas Pro V1",
    trending: true
  },

  // Running
  {
    id: 25,
    name: "Zapatillas Nike Air Zoom",
    price: 399900,
    category: "running",
    image: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_SL1500_.jpg",
    description: "Amortiguación reactiva",
    trending: true
  },
  {
    id: 26,
    name: "Reloj Garmin Forerunner",
    price: 899900,
    category: "running",
    image: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_SL1500_.jpg",
    description: "GPS avanzado",
    trending: true
  },
  {
    id: 27,
    name: "Cinturón Hidratación Nathan",
    price: 129900,
    category: "running",
    image: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_SL1500_.jpg",
    description: "2 botellas 10oz",
    trending: false
  }
];

export default products;

// DONE