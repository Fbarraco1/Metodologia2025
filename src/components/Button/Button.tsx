import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {text}
    </button>
  );
};

export default Button;

  