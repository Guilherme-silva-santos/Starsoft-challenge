import React from 'react';
import styles from './Button.module.scss';

interface FinishButtonProps {
  isFinished: boolean;
}

const FinishButton: React.FC<FinishButtonProps> = ({ isFinished }) => {
  return (
    <button className={isFinished ? styles.finished : styles.finish}>
      {isFinished ? 'COMPRA FINALIZADA!' : 'FINALIZAR COMPRA'}
    </button>
  );
};

export default FinishButton;
