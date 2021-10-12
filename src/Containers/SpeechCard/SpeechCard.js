import React, {useState, useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';

import FormRow from '../../Components/FormRow/FormRow';
import FormField from '../../Components/FormField/FormField';
import SpeechCardTable from './SpeechCardTable/SpeechCardTable';
import {phoneticTableOneMapping, phoneticTableTwoMapping} from '../../constants';
import {getSpeechCard, createSpeechCard, surveysSelector, updateSpeechCard} from '../../redux/surveys/surveysSlice';
import Button from '../../Components/Button/Button';
import Container from '../../Components/Container/Container';

const SpeechCard = (props) => {

    const {
        child, parent, uniqueSpeechCardId
    } = props

    const localStorageKey = `${uniqueSpeechCardId}-SpeechCard`

    const dataFromLocalStorage = JSON.parse(localStorage.getItem(localStorageKey))

    const initialCardData = dataFromLocalStorage ? dataFromLocalStorage : {
        general_ideas_of_child_about_world_around_him: '',
        volume_vocabulary: '',
        system_organization_of_dictionary_associative_links: '',
        inflectional_skills_and_abilities: '',
        word_building_skills_and_abilities: '',
        syntactic_skills_and_abilities: '',
        level_of_formation_of_phonetic_phonological_competence: '',
        state_of_phonemic_hearing: '',
        formation_of_skills_of_sound_analysis_and_synthesis: '',
        syllabic_structure_of_word: '',
        phonetic_table_one: {},
        phonetic_table_two: {},
        prosodic_speech_design: '',
        understanding_text: '',
        text_production: '',
        reproduction_of_text: '',
        articulation_apparatus_structure: '',
        motor_functions_of_articulatory_apparatus: '',
        oral_praxis: '',
        articulatory_praxis: '',
        speech_breathing_and_voice_production: '',
        exhalation_force: '',
        inspiratory_expiratory_differentiation: '',
        basic_motor_skills_and_state_of_coordinating_sphere: '',
        postural_control_of_calm_state: '',
        bilateral_motor_coordination: '',
        somatognosis: '',
        formation_of_motor_imitation: '',
        motor_functions_of_hands_and_fingers: '',
        verbal_memory: '',
        speech_attention: '',
        thinking_verbal_and_non_verbal_intelligence: '',
        features_of_early_speech_development: '',
        features_of_speech_environment_in_which_child: '',
        features_of_speech_behavior: '',
        neurological_status_and_condition: '',
        information_about_current_and_past_diseases: '',
        emotional_reaction: '',
        emotional_response_to_adult_emotion: '',
        mimic_manifestations: '',
        emotional_background_during_class: '',
        in_case_of_failure_behaves: '',
        basic_emotions_that_it_exhibits: '',
        logopedic_conclusion: '',
        recommendation: '',
    }

    const [cardData, setCardData] = useState(initialCardData)
    const {loading, speechCard} = useSelector(surveysSelector)

    const dispatch = useDispatch()

    const profile = parent?.profile

    const childFullName = `${child?.first_name} ${child?.last_name}`
    const parentFullName = `${profile?.first_name} ${profile?.last_name}`

    const saveToLocalStorage = data => {
        if (uniqueSpeechCardId) {
            localStorage.setItem(localStorageKey, JSON.stringify(data))
        }
    }

    const inputChangeHandler = e => {
        setCardData({...cardData, [e.target.name]: e.target.value})
    }
    const phoneticTableOneChangeHandler = data => setCardData({...cardData, phonetic_table_one: data})
    const phoneticTableTwoChangeHandler = data => setCardData({...cardData, phonetic_table_two: data})

    const saveSpeechCard = async () => {
        const isSpeechCardExisted = speechCard?.id

        if (isSpeechCardExisted) {
            await dispatch(updateSpeechCard({
                speechCardData: cardData,
                speechCardId: cardData.id
            }))
        } else {
            await dispatch(createSpeechCard({
                speechCardData: cardData,
                childId: child.id
            }))
            await dispatch(getSpeechCard(child.id))
        }
    }

    const fieldTypes = {
        text: 'text',
        table: 'table'
    }

    useEffect(() => {
        dispatch(getSpeechCard(child.id))
    }, [])

    useEffect(() => {
        saveToLocalStorage(cardData)
    }, [cardData])

    useEffect(() => {
        if (speechCard) {
            setCardData(speechCard)
        }
    }, [speechCard])

    const generateFieldObject = (type, name, label) => ({type, name, label})
    const generateTextFieldObject = (name, label) => generateFieldObject(fieldTypes.text, name, label)
    const generateTableFieldObject = (name, label, onChange, tableData, initData) => {
        const baseData = generateFieldObject(fieldTypes.table, name, label)
        const additionalData = {table: <SpeechCardTable
                tableData={tableData}
                onChange={onChange}
                initData={initData}
            />}
        return {...baseData, ...additionalData}
    }

    const listOfFields = [
        generateTextFieldObject(
            'general_ideas_of_child_about_world_around_him',
            'Общие представления ребенка об окружающем мире'
        ),
        generateTextFieldObject(
            'volume_vocabulary',
            'объем словаря'
        ),
        generateTextFieldObject(
            'system_organization_of_dictionary_associative_links',
            'Системная организация словаря (ассоциативные связи)'
        ),
        generateTextFieldObject(
            'inflectional_skills_and_abilities',
            'словоизменительные навыки и умения'
        ),
        generateTextFieldObject(
            'word_building_skills_and_abilities',
            'словообразовательные навыки и умения'
        ),
        generateTextFieldObject(
            'syntactic_skills_and_abilities',
            'синтаксические навыки и умения'
        ),
        generateTextFieldObject(
            'level_of_formation_of_phonetic_phonological_competence',
            'уровень сформированности фонетико-фонологической компетенции'
        ),
        generateTextFieldObject(
            'state_of_phonemic_hearing',
            'состояние фонематического слуха'
        ),
        generateTextFieldObject(
            'formation_of_skills_of_sound_analysis_and_synthesis',
            'сформированность навыков звукового анализа и синтеза'
        ),
        generateTextFieldObject(
            'syllabic_structure_of_word',
            'слоговая структура слова'
        ),
        generateTableFieldObject(
            'phonetic_table_one',
            'первая фонетическая таблица',
            phoneticTableOneChangeHandler,
            phoneticTableOneMapping,
            cardData.phonetic_table_one
        ),
        generateTableFieldObject(
            'phonetic_table_two',
            'вторая фонетическая таблица',
            phoneticTableTwoChangeHandler,
            phoneticTableTwoMapping,
            cardData.phonetic_table_two
        ),
        generateTextFieldObject(
            'prosodic_speech_design',
            'просодическое оформление речи',
        ),
        generateTextFieldObject(
            'understanding_text',
            'понимание текста'
        ),
        generateTextFieldObject(
            'text_production',
            'продуцирование текста'
        ),
        generateTextFieldObject(
            'reproduction_of_text',
            'репродуцирование текста'
        ),
        generateTextFieldObject(
            'articulation_apparatus_structure',
            'строение артикуляционного аппарата'
        ),
        generateTextFieldObject(
            'motor_functions_of_articulatory_apparatus',
            'двигательные функции артикуляционного аппарата'
        ),
        generateTextFieldObject(
            'oral_praxis',
            'оральный праксис'
        ),
        generateTextFieldObject(
            'articulatory_praxis',
            'артикуляционный праксис'
        ),
        generateTextFieldObject(
            'speech_breathing_and_voice_production',
            'речевое дыхание и голосообразование'
        ),
        generateTextFieldObject(
            'exhalation_force',
            'сила выдоха'
        ),
        generateTextFieldObject(
            'inspiratory_expiratory_differentiation',
            'дифференцированность вдоха/выдоха и возможность управления'
        ),
        generateTextFieldObject(
            'basic_motor_skills_and_state_of_coordinating_sphere',
            'основные двигательные навыки и состояние координаторной сферы'
        ),
        generateTextFieldObject(
            'postural_control_of_calm_state',
            'постуральный контроль спокойного состояния'
        ),
        generateTextFieldObject(
            'bilateral_motor_coordination',
            'билатеральная моторная координация'
        ),
        generateTextFieldObject(
            'somatognosis',
            'соматогнозис'
        ),
        generateTextFieldObject(
            'formation_of_motor_imitation',
            'сформированность моторной имитации'
        ),
        generateTextFieldObject(
            'motor_functions_of_hands_and_fingers',
            'моторные функции кистей и пальцев рук'
        ),
        generateTextFieldObject(
            'verbal_memory',
            'вербальная память'
        ),
        generateTextFieldObject(
            'speech_attention',
            'речевое внимание'
        ),
        generateTextFieldObject(
            'thinking_verbal_and_non_verbal_intelligence',
            'мышление (вербальный и невербальный интеллект)'
        ),
        generateTextFieldObject(
            'features_of_early_speech_development',
            'особенности раннего речевого развития'
        ),
        generateTextFieldObject(
            'features_of_speech_environment_in_which_child',
            'Особенности речевой среды, в которой воспитывается ребенок'
        ),
        generateTextFieldObject(
            'features_of_speech_behavior',
            'особенности речевого поведения'
        ),
        generateTextFieldObject(
            'neurological_status_and_condition',
            'Неврологический статус и состояние сенсорно-перцептивных органов и систем (зрение, слух,осязание и др.)'
        ),
        generateTextFieldObject(
            'information_about_current_and_past_diseases',
            'Сведения о настоящих и перенесенных заболеваниях'
        ),
        generateTextFieldObject(
            'emotional_reaction',
            'эмоциональная реакция'
        ),
        generateTextFieldObject(
            'emotional_response_to_adult_emotion',
            'эмоциональный отклик на эмоцию взрослого'
        ),
        generateTextFieldObject(
            'mimic_manifestations',
            'мимические проявления'
        ),
        generateTextFieldObject(
            'emotional_background_during_class',
            'эмоциональный фон во время занятия'
        ),
        generateTextFieldObject(
            'in_case_of_failure_behaves',
            'в случае неуспеха ведет себя'
        ),
        generateTextFieldObject(
            'basic_emotions_that_it_exhibits',
            'базовые эмоции, которые проявляет'
        ),
        generateTextFieldObject(
            'logopedic_conclusion',
            'логопедическое заключение'
        ),
        generateTextFieldObject(
            'recommendation',
            'рекомендации'
        )
    ]

    return (
        <Container>
            <link
                rel='stylesheet'
                href='../../index.css'
            />
            {child && (
                <div className='content'>
                    <div className='content__inner'>

                        <h3>{childFullName}</h3>

                        {listOfFields.map(field => {

                            const typeOfFields = {
                                [fieldTypes.text]: (
                                    <FormRow>
                                        <FormField
                                            type='text'
                                            label={field.label}
                                            className='form__field'
                                            name={field.name}
                                            onChange={inputChangeHandler}
                                            value={cardData[field.name]}
                                        />
                                    </FormRow>
                                ),
                                [fieldTypes.table]: (
                                    <FormRow>
                                        {field.table}
                                    </FormRow>
                                )
                            }

                            return typeOfFields[field.type]
                        })}

                        <FormRow>
                            <Button
                                onClick={saveSpeechCard}
                                loading={loading}
                                className='btn'
                            >
                                Save
                            </Button>
                        </FormRow>

                    </div>
                </div>
            )}
        </Container>
    );
}

SpeechCard.propTypes = {
    child: PropTypes.shape({
        id: PropTypes.number,
        first_name: PropTypes.string,
        last_name: PropTypes.string
    }).isRequired,
    parent: PropTypes.shape({
        profile: PropTypes.shape({
            first_name: PropTypes.string,
            last_name: PropTypes.string
        })
    }).isRequired
}

export default SpeechCard;