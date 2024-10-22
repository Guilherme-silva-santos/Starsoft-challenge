"use client";
import '../app/styles/main.scss';
import '../app/styles/globals.scss';

import styles from './HomePage.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import CartModal from './components/modal/Modal';

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
}


export default function Home() {
  const [isCartOpen, setCartOpen] = useState(false);
  const products: Product[]= [
    {
      id: 1,
      name: 'Produto 1',
      price: '32 ETH',
      description: 'Conhecimento obtido da complexidade do universo',
      image: '/images/product1.png',
    },
    {
      id: 2,
      name: 'Produto 2',
      price: '12 ETH',
      description: 'Conhecimento obtido da complexidade do universo',
      image: '/images/product2.png',
    },
    {
      id: 3,
      name: 'Produto 3',
      price: '32 ETH',
      description: 'Conhecimento obtido da complexidade do universo',
      image: '/images/product3.png',
    },
    {
      id: 4,
      name: 'Produto 4',
      price: '32 ETH',
      description: 'Conhecimento obtido da complexidade do universo',
      image: '/images/product4.png',
    },
    {
      id: 5,
      name: 'Produto 5',
      price: '32 ETH',
      description: 'Conhecimento obtido da complexidade do universo',
      image: '/images/product5.png',
    },
    {
      id: 6,
      name: 'Produto 6',
      price: '32 ETH',
      description: 'Conhecimento obtido da complexidade do universo',
      image: '/images/product6.png',
    },
    {
      id: 7,
      name: 'Produto 7',
      price: '32 ETH',
      description: 'Conhecimento obtido da complexidade do universo',
      image: '/images/product7.png',
    },
    {
      id: 8,
      name: 'Produto 8',
      price: '32 ETH',
      description: 'Conhecimento obtido da complexidade do universo',
      image: '/images/product8.png',
    },
  ];

  const totalPrice = '44 ETH';

  const cartItems = [
    { id: 1, name: 'Item 2', price: '12 ETH', image: '/images/item2.png', quantity: 1 },
    { id: 2, name: 'Item 9', price: '32 ETH', image: '/images/item9.png', quantity: 1 },
  ];
  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>Starsoft</div>
        <button className={styles.cartIcon} onClick={toggleCart}>
          <Image src="/images/cart.png" alt="cart" width={32} height={32} />
        </button>
      </header>

      <CartModal
        isOpen={isCartOpen}
        onClose={toggleCart}
        cartItems={cartItems}
        totalPrice={totalPrice}
      />

      <main className={styles.productGrid}>
        {products.map((product: Product) => (
          <div key={product.id} className={styles.productCard}>
            <Image
              src={product.image}
              alt={product.name}
              width={150}
              height={150}
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className={styles.price}>
              <Image
                src="/images/eth.png"
                alt="eth logo"
                width={16}
                height={16}
              />
              <span>{product.price}</span>
            </div>
            <button className={styles.buyButton}>Comprar</button>
          </div>
        ))}
      </main>

      <footer className={styles.footer}>
        <button className={styles.loadMoreButton}>Carregar mais</button>
        <p>Starsoft © Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
