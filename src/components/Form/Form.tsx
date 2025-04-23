// src/components/Form/Form.tsx
import { useState } from 'react';
import { Input } from '../Input/Input';
import Swal from 'sweetalert2';
import { formSchema } from '../../schemas/formSchema';
import styles from './Form.module.css';

export const Form = () => {
  const [formValues, setFormValues] = useState({
    nombre: '',
    correo: '',
    contraseña: '',
    repetirContraseña: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));

    // Validación instantánea
    formSchema
      .validateAt(name, { ...formValues, [name]: value })
      .then(() => {
        setFormErrors((prev) => ({ ...prev, [name]: '' }));
      })
      .catch((err) => {
        setFormErrors((prev) => ({ ...prev, [name]: err.message }));
      });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await formSchema.validate(formValues, { abortEarly: false });
      Swal.fire('Éxito', 'Formulario enviado correctamente', 'success');
      setFormValues({
        nombre: '',
        correo: '',
        contraseña: '',
        repetirContraseña: '',
      });
      setFormErrors({});
    } catch (err: any) {
      const errors: Record<string, string> = {};
      err.inner.forEach((e: any) => {
        errors[e.path] = e.message;
      });
      setFormErrors(errors);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        label="Nombre"
        name="nombre"
        value={formValues.nombre}
        error={formErrors.nombre}
        onChange={handleChange}
      />
      <Input
        label="Correo"
        name="correo"
        value={formValues.correo}
        error={formErrors.correo}
        onChange={handleChange}
      />
      <Input
        label="Contraseña"
        name="contraseña"
        type="password"
        value={formValues.contraseña}
        error={formErrors.contraseña}
        onChange={handleChange}
      />
      <Input
        label="Repetir Contraseña"
        name="repetirContraseña"
        type="password"
        value={formValues.repetirContraseña}
        error={formErrors.repetirContraseña}
        onChange={handleChange}
      />

      <button type="submit" className={styles.submitButton}>Enviar</button>
    </form>
  );
};
