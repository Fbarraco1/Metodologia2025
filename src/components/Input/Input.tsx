import styles from './Input.module.css';

interface InputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ label, name, type = 'text', value, error, onChange }: InputProps) => (
  <div className={styles.inputGroup}>
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className={error ? styles.inputError : ''}
    />
    {error && <span className={styles.errorMsg}>{error}</span>}
  </div>
);
