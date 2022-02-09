import * as yup from 'yup'

const requiredFieldErrorText = 'Обязательное поле'

export let examinationProtocolSchema = yup.object().shape({
    additional_information: yup.object().shape({
        sat_in: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        crawled_on_all_fours_into: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        went_to: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        learned_to_jump_on_two_legs_in: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        injury_infection_before_during_and_or_after_childbirth: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        babbling_in: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        first_words_in: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        first_short_phrases_in: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        speech_environment: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        present_and_past_diseases: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        drug_treatment: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        neurological_status: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        vision: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        hearing: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        eating_behavior: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
        emotional_and_psychological_level: yup.string()
            .required(requiredFieldErrorText)
            .nullable(true),
    }),
})