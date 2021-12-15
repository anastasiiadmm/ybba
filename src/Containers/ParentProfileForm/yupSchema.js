import * as Yup from 'yup';
import * as yup from 'yup';

const dateValidation = date => {
    let result

    result = Date.parse(date) < Date.now()

    return result
}

export const parentProfileSchema = Yup.object().shape({
    profile: yup.object().shape({
        date_of_birth: Yup.string()
            .max(100)
            .test('passwordRequirements', 'Дата не может быть позднее текущей', dateValidation)
    })
})