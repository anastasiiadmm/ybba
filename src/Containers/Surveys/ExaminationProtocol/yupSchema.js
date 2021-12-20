import * as yup from 'yup'

const requiredFieldErrorText = 'Обязательное поле'

export const examinationProtocolSchema = yup.object().shape({
    additional_information: yup.object().shape({
        sat_in: yup.string().required(requiredFieldErrorText),
        crawled_on_all_fours_into: yup.string().required(requiredFieldErrorText),
        went_to: yup.string().required(requiredFieldErrorText),
        learned_to_jump_on_two_legs_in: yup.string().required(requiredFieldErrorText),
        injury_infection_before_during_and_or_after_childbirth: yup.string().required(requiredFieldErrorText),
        babbling_in: yup.string().required(requiredFieldErrorText),
        first_words_in: yup.string().required(requiredFieldErrorText),
        first_short_phrases_in: yup.string().required(requiredFieldErrorText),
        speech_environment: yup.string().required(requiredFieldErrorText),
        present_and_past_diseases: yup.string().required(requiredFieldErrorText),
        drug_treatment: yup.string().required(requiredFieldErrorText),
        neurological_status: yup.string().required(requiredFieldErrorText),
        vision: yup.string().required(requiredFieldErrorText),
        hearing: yup.string().required(requiredFieldErrorText),
        eating_behavior: yup.string().required(requiredFieldErrorText),
        emotional_and_psychological_level: yup.string().required(requiredFieldErrorText),
    })
})
