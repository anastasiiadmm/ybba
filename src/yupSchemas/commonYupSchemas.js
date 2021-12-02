import * as yup from 'yup';


const passwordValidation = (value) =>
    [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) => pattern.test(value))

export const passwordSchema = yup.string()
    .required('Пароль обязателен')
    .min(8, 'Пароль должен содержать минимум 8 символов')
    .max(128, 'Пароль может содержать максимум 128 символов')
    .test('passwordRequirements', 'Пароль должен состоять из цифр, букв, заглавной буквы и символа', passwordValidation)

export const emailSchema = yup.string()
    .required('Логин обязателен')
    .email('Введите кооректный email адресс')
    .nullable()