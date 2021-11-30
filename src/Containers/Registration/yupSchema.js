import * as yup from 'yup'
import { passwordSchema, emailSchema } from 'yupSchemas/commonYupSchemas.js';

const firstNameValidation = value => /^[а-яА-ЯёЁ\s]+$/.test(value)
const lastNameValidation = value => /^[а-яА-ЯёЁ.\-_\s]+$/.test(value)

export const registrationSchema = yup.object().shape({
    parent: yup.object().shape({
        first_name: yup.string()
            .required('Имя родителя обязательно')
            .max(50, 'Максимум 50 символов')
            .test('Is first name correct', 'Имя может содержать только кириллицу', firstNameValidation),
        last_name: yup.string()
            .required('Фамилия родителя обязательна')
            .max(50, 'Максимум 50 символов')
            .test('Is last name correct', 'Фамилия может содержать только кириллицу', lastNameValidation),
        email: emailSchema,
        password: passwordSchema,
        passwordConfirmation: yup.string()
            .oneOf([yup.ref('password'), null], 'Пароли должны совпадать')
    }),
    child: yup.object().shape({
        first_name: yup.string()
            .required('Имя ребёнка обязательно')
            .max(50, 'Максимум 50 симфолов')
            .test('Is first name correct', 'Имя ребёнка может содержать только кириллицу', lastNameValidation),
        last_name: yup.string()
            .required('Фамилия ребёнка обязательна')
            .max(50, 'Максисум 50 символов')
            .test('Is last name correct', 'Фамилия ребёнка может содержать только кириллицу', lastNameValidation),
        date_of_birth: yup.date()
            .typeError('Дата рождения ребёнка должна быть в формате дд.мм.гггг')
            .required('Дата рождения ребёнка обязательна'),
        country: yup.string()
            .required('Страна проживания ребёнка обязательна'),
        city: yup.string()
    })
})