// import { faker } from '@faker-js/faker';

// export const products = Array.from({ length: 100 }, () => ({
//   id: faker.commerce.isbn(),
//   title: faker.commerce.productName(),
//   price: faker.commerce.price(),
//   description: faker.commerce.productDescription(),
//   thumbnail: faker.image.urlLoremFlickr({
//     category: 'fashion',
//   }),
//   images: [
//     faker.image.urlLoremFlickr({
//       category: 'fashion',
//     }),
//   ],
//   creationAt: faker.date.recent(),
//   updatedAt: faker.date.recent(),
//   category: {
//     id: faker.commerce.isbn(),
//     name: faker.commerce.department(),
//     image: faker.image.urlLoremFlickr({
//       category: 'fashion',
//     }),
//     creationAt: faker.date.recent(),
//     updatedAt: faker.date.recent(),
//   },
// }));

export const clothes = [
  {
    id: 1,
    title: "Tremblay Men's Cotton Polo Shirt",
    displayTitle: 'Richard Blouse',
    price: 17.99,
    description:
      'This classic polo shirt is made from 100% soft cotton for a comfortable and breathable fit. It features a ribbed collar and cuffs, a two-button placket, and a clean chest design. Perfect for casual wear or layering.',
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
    rating: {
      rate: 4.2,
      count: 156,
    },
  },
  {
    id: 2,
    title: "Freret Women's Slim-Fit Jeans",
    displayTitle: 'Richard Blouse',
    price: 39.95,
    description:
      'These high-waisted slim-fit jeans are made from a comfortable stretch denim that flatters your figure. They feature a classic five-pocket design and a clean, finished hem. Perfect for everyday wear or dressing up for a night out.',
    category: "women's clothing",
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    rating: {
      rate: 4.8,
      count: 890,
    },
  },
];
