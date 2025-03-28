export interface Product {
  id: number
  image: string
  title: string
  description: string
  price: number
}

export const products: Product[] = [
  {
    id: 1,
    image: '/assets/product1.jpg',
    title: 'Producto 1',
    description: 'Descripción del producto 1',
    price: 19.99,
  },
  {
    id: 2,
    image: '/assets/product2.jpg',
    title: 'Producto 2',
    description: 'Descripción del producto 2',
    price: 29.99,
  },
  {
    id: 3,
    image: '/assets/product3.jpg',
    title: 'Producto 3',
    description: 'Descripción del producto 3',
    price: 39.99,
  },
]
