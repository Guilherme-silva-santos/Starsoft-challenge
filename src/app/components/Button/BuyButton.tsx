import React from 'react';
import styles from './Button.module.scss';

interface BuyButtonProps {
  inCart: boolean;
}

const BuyButton: React.FC<BuyButtonProps> = ({ inCart }) => {
  return (
    <button className={inCart ? styles.inCart : styles.buy}>
      {inCart ? 'ADICIONADO AO CARRINHO' : 'COMPRAR'}
    </button>
  );
};

export default BuyButton;
