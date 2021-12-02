import * as Yup from 'yup';

const inputValidation = (value) =>
    [/[А-ЯёЁа-я!#$%&'*+-/=?^_`{|}~().]/].every((pattern) => pattern.test(value))

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

export const validationTextareaSchema = Yup.object().shape({
    help_other_text: Yup.string()
        .max(100)
        .test('passwordRequirements', 'Поле должно состоять из кириллицы, цифр и символов', inputValidation)
});