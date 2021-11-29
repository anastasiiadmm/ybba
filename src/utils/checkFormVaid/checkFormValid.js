import * as Yup from 'yup';

export const validationResetPasswordSchema = Yup.object().shape({
    password: Yup.string()
        .required('Введите пароль')
        .test('passwordRequirements', 'Пароль должен состоять из цифр, букв, заглавной буквы и символа', (value) =>
            [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) => pattern.test(value))
        ),
    passwordRepeat: Yup.string()
        .required('Подтвердите пароль')
        .oneOf([Yup.ref('password')], 'Пароли не совпадают')
});