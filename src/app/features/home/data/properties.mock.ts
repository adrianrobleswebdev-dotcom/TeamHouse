import { Property } from '../interfaces/property.interface';

export const MOCK_PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    status: 'EN VENTA',
    price: '$24,500,000 MXN',
    location: 'Lomas de Chapultepec, CDMX',
    likes: 150,
    details: [
      { bedrooms: '4 Rec', bathrooms: '4.5 Baños', constructionarea: '450 m²' }
    ]
  },
  {
    id: 'prop-2',
    img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    status: 'EN RENTA',
    price: '$85,000 MXN / mes',
    location: 'Polanco V Sección, CDMX',
    likes: 210, // highest likes
    details: [
      { bedrooms: '3 Rec', bathrooms: '3 Baños', constructionarea: '210 m²' }
    ]
  },
  {
    id: 'prop-3',
    img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    status: 'EN VENTA',
    price: '$18,900,000 MXN',
    location: 'Santa Fe, Cuajimalpa',
    likes: 120,
    details: [
      { bedrooms: '3 Rec', bathrooms: '3.5 Baños', constructionarea: '320 m²' }
    ]
  },
  {
    id: 'prop-4',
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    status: 'EN VENTA',
    price: '$12,500,000 MXN',
    location: 'Condesa, CDMX',
    likes: 80, // lower likes, might be filtered out if we only take top 3
    details: [
      { bedrooms: '2 Rec', bathrooms: '2 Baños', constructionarea: '180 m²' }
    ]
  },
  {
    id: 'prop-5',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    status: 'EN VENTA',
    price: '$9,200,000 MXN',
    location: 'Roma Norte, CDMX',
    likes: 195,
    details: [
      { bedrooms: '2 Rec', bathrooms: '2 Baños', constructionarea: '140 m²' }
    ]
  },
  {
    id: 'prop-6',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    status: 'EN RENTA',
    price: '$45,000 MXN / mes',
    location: 'Del Valle, CDMX',
    likes: 95,
    details: [
      { bedrooms: '3 Rec', bathrooms: '2.5 Baños', constructionarea: '160 m²' }
    ]
  },
  {
    id: 'prop-7',
    img: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    status: 'EN VENTA',
    price: '$35,000,000 MXN',
    location: 'Bosques de las Lomas, CDMX',
    likes: 240,
    details: [
      { bedrooms: '5 Rec', bathrooms: '6 Baños', constructionarea: '800 m²' }
    ]
  },
  {
    id: 'prop-8',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    status: 'EN RENTA',
    price: '$120,000 MXN / mes',
    location: 'Pedregal, CDMX',
    likes: 110,
    details: [
      { bedrooms: '4 Rec', bathrooms: '4 Baños', constructionarea: '500 m²' }
    ]
  },
  {
    id: 'prop-9',
    img: 'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    status: 'EN VENTA',
    price: '$16,800,000 MXN',
    location: 'Nápoles, CDMX',
    likes: 175,
    details: [
      { bedrooms: '3 Rec', bathrooms: '3 Baños', constructionarea: '220 m²' }
    ]
  },
  {
    id: 'prop-10',
    img: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    status: 'EN VENTA',
    price: '$42,000,000 MXN',
    location: 'San Ángel, CDMX',
    likes: 300,
    details: [
      { bedrooms: '4 Rec', bathrooms: '5 Baños', constructionarea: '650 m²' }
    ]
  }
];
