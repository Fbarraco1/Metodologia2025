import * as Yup from 'yup';

export const formSchema = Yup.object().shape({
  nombre: Yup.string()
    .required('El nombre es obligatorio')
    .min(3, 'Debe tener al menos 3 caracteres'),
  correo: Yup.string()
    .required('El correo es obligatorio')
    .email('Debe ser un correo válido'),
  contraseña: Yup.string()
    .required('La contraseña es obligatoria')
    .min(6, 'Mínimo 6 caracteres'),
  repetirContraseña: Yup.string()
    .required('Repite la contraseña')
    .oneOf([Yup.ref('contraseña')], 'Las contraseñas no coinciden'),
});
