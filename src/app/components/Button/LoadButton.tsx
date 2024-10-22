import React from 'react';
import styles from './Button.module.scss';

interface LoadButtonProps {
  isLoaded: boolean;
}

const LoadButton: React.FC<LoadButtonProps> = ({ isLoaded }) => {
  return (
    <button className={isLoaded ? styles.loaded : styles.load}>
      {isLoaded ? 'Você já viu tudo' : 'Carregar mais'}
    </button>
  );
};

export default LoadButton;
