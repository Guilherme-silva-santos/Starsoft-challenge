import React from 'react';
import Image from 'next/image';
import styles from './CartModal.module.scss';

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  totalPrice: string;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, cartItems, totalPrice }) => {
  if (!isOpen) return null; // Retorna null se o modal não estiver aberto

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          <Image src="/images/close.svg" alt="Fechar" width={24} height={24} />
        </button>
        <h2>Mochila de Compras</h2>
        <div className={styles.cartItems}>
          {cartItems.map(item => (
            <div key={item.id} className={styles.cartItem}>
              <Image src={item.image} alt={item.name} width={80} height={80} />
              <div className={styles.itemDetails}>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <div className={styles.quantityControl}>
                  <button>-</button>
                  <span>{item.quantity}</span>
                  <button>+</button>
                </div>
              </div>
              <button className={styles.removeItem}>
                <Image src="/images/trash.svg" alt="Remover" width={24} height={24} />
              </button>
            </div>
          ))}
        </div>
        <div className={styles.total}>
          <span>TOTAL</span>
          <span>{totalPrice}</span>
        </div>
        <button className={styles.checkoutButton}>FINALIZAR COMPRA</button>
      </div>
    </div>
  );
};

export default CartModal;
