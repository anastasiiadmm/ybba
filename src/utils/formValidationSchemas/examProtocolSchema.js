import * as yup from 'yup';

const examProtocolSchema = yup.object().shape({
  parent: yup.object().shape({
    what_are_your_complaints: yup.string(),
    why_did_you_come: yup.string(),
  }),
  speechLanguageCompetence: yup.object().shape({
    whats_your_name: yup.string(),
    how_old_are_you: yup.string(),
    whats_your_mothers_name: yup.string(),
    where_do_you_live: yup.string(),
    whats_the_season: yup.string(),
    what_did_you_do: yup.string(),
    what_toys_do_you_have: yup.string(),
    what_animals_do_you_know: yup.string(),
    review: yup.object().shape({
      whats_your_name: yup.string(),
      how_old_are_you: yup.string(),
      whats_your_mothers_name: yup.string(),
      where_do_you_live: yup.string(),
      whats_the_season: yup.string(),
      what_did_you_do: yup.string(),
      what_toys_do_you_have: yup.string(),
      what_animals_do_you_know: yup.string(),
    }),
  }),
});

export default examProtocolSchema;
