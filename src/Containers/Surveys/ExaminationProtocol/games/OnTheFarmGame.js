import React from 'react';
import { useTranslation } from 'react-i18next';

import ProtocolBlock from 'Components/Surveys/ExaminationProtocol/ProtocolBlock/ProtocolBlock';
import ProtocolBlockTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBlockTitle/ProtocolBlockTitle';
import ProtocolTitleGame from 'Components/Surveys/ExaminationProtocol/ProtocolTitle/ProtocolTitleGame';
import ProtocolBlockSubTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBlockSubTitle/ProtocolBlockSubTitle';
import ProtocolBox from 'Components/Surveys/ExaminationProtocol/ProtocolBox/ProtocolBox';
import ProtocolBoxTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBoxTitle/ProtocolBoxTitle';
import ProtocolRowText from 'Components/Surveys/ExaminationProtocol/ProtocolRowText/ProtocolRowText';
import ProtocolCol from 'Components/Surveys/ExaminationProtocol/ProtocolCol/ProtocolCol';
import ProtocolFormField from 'Components/Surveys/ExaminationProtocol/ProtocolFormField/ProtocolFormField';
import ProtocolRow from 'Components/Surveys/ExaminationProtocol/ProtocolRow/ProtocolRow';
import ProtocolResultTitle from 'Components/Surveys/ExaminationProtocol/ResultTitle/ResultTitle';
import ProtocolDescriptionSubtitle from 'Components/Surveys/ExaminationProtocol/ProtocolResultTitle/ProtocolResultTitle';
import ProtocolResultBlock from 'Components/Surveys/ExaminationProtocol/ProtocolResultBlock/ProtocolResultBlock';
import ProtocolResultWrapper from 'Components/Surveys/ExaminationProtocol/ProtocolResultWrapper/ProtocolResultWrapper';


const OnTheFarmGame = (props) => {

    const  {
        register, errors, control, isConclusionDisabled, disabled, isLessonFinished
    } = props

    const { t } = useTranslation();

    return (
        <>
            <ProtocolBlock>
                <ProtocolTitleGame>{t('Игра «На ферме». Часть 1')}</ProtocolTitleGame>
                <ProtocolBlockTitle>{t('Обследование уровня сформированности лексикона')}</ProtocolBlockTitle>
                <ProtocolBlockSubTitle>{t('Предметный словарь')}</ProtocolBlockSubTitle>
                <ProtocolBox>
                    <ProtocolBoxTitle>{t('Обобщающие понятия')}</ProtocolBoxTitle>
                    <ProtocolRowText>
                        <ProtocolCol>
                            <ProtocolFormField
                                type='text'
                                label={t('Босоножки, ботинки, носки, сапоги')}
                                name='game_on_the_farm.sandals_boots_socks_boots'
                                register={register}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolCol>
                        <ProtocolCol>
                            <ProtocolFormField
                                type='text'
                                label={t('Обувь (одежда)')}
                                name='game_on_the_farm.shoes_clothes'
                                register={register}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolCol>
                    </ProtocolRowText>
                    <ProtocolRowText>
                        <ProtocolCol>
                            <ProtocolFormField
                                type='text'
                                label={t('Морковь, яблоко, лук, капуста')}
                                name='game_on_the_farm.carrot_apple_onion_cabbage'
                                register={register}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolCol>
                        <ProtocolCol>
                            <ProtocolFormField
                                type='text'
                                label={t('Овощи (фрукты)')}
                                name='game_on_the_farm.vegetables_fruits'
                                register={register}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolCol>
                    </ProtocolRowText>
                    <ProtocolRowText>
                        <ProtocolCol>
                            <ProtocolFormField
                                type='text'
                                label={t('Стол, стул, стакан, диван')}
                                name='game_on_the_farm.table_chair_glass_sofa'
                                register={register}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolCol>
                        <ProtocolCol>
                            <ProtocolFormField
                                type='text'
                                label={t('Мебель (посуда)')}
                                name='game_on_the_farm.furniture_dishes'
                                register={register}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolCol>
                    </ProtocolRowText>
                    <ProtocolRowText>
                        <ProtocolCol>
                            <ProtocolFormField
                                type='text'
                                label={t('Шуба, куртка, пальто, шапка')}
                                name='game_on_the_farm.fur_coat_jacket_coat_hat'
                                register={register}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolCol>
                        <ProtocolCol>
                            <ProtocolFormField
                                type='text'
                                label={t('Одежда (голов. убор)')}
                                name='game_on_the_farm.clothes_headwear'
                                register={register}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolCol>
                    </ProtocolRowText>
                    <ProtocolRowText>
                        <ProtocolCol>
                            <ProtocolFormField
                                type='text'
                                label={t('Кукла, кубики, мишка, троллейбус')}
                                name='game_on_the_farm.doll_cubes_car_trolley'
                                register={register}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolCol>
                        <ProtocolCol>
                            <ProtocolFormField
                                type='text'
                                label={t('Игрушки (транспорт)')}
                                name='game_on_the_farm.toys_transport'
                                register={register}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolCol>
                    </ProtocolRowText>
                </ProtocolBox>
                <ProtocolBox>
                    <ProtocolBoxTitle>{t('Детеныши животных')}</ProtocolBoxTitle>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('Кошка — котенок')}
                            name='game_on_the_farm.cat_kitten'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('Собака — щенок')}
                            name='game_on_the_farm.dog_puppy'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('Корова — теленок')}
                            name='game_on_the_farm.cow_calf'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('Свинья — поросенок')}
                            name='game_on_the_farm.pig_piglet'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                </ProtocolBox>
                <ProtocolBlockSubTitle>{t('Глагольный словарь')}</ProtocolBlockSubTitle>
                <ProtocolBox>
                    <ProtocolBoxTitle>{t('Название действий')}</ProtocolBoxTitle>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('Кошка мяукает')}
                            name='game_on_the_farm.cat_meows'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('Собака лает')}
                            name='game_on_the_farm.dog_barks'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('Корова мычит')}
                            name='game_on_the_farm.cow_hums'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('Свинья хрюкает')}
                            name='game_on_the_farm.pig_grunts'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                </ProtocolBox>
                <ProtocolBlockSubTitle>{t('Словарь признаков')}</ProtocolBlockSubTitle>
                <ProtocolBox>
                    <ProtocolBoxTitle>{t('Обследование антонимов')}</ProtocolBoxTitle>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('Низкий — Высокий (дом)')}
                            name='game_on_the_farm.low_high_home'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('Широкий — Узкий (пояс)')}
                            name='game_on_the_farm.wide_narrow_belt'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('Тяжелый — Легкий (ведро с водой — шарик)')}
                            name='game_on_the_farm.heavy_light_bucket_of_water_ball'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('Чистый — Грязный (поросенок)')}
                            name='game_on_the_farm.clean_dirty_pig'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('Медленный — Быстрый (улитка)')}
                            name='game_on_the_farm.slow_fast_snail'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('Грустный — Веселый (щенок)')}
                            name='game_on_the_farm.sad_cheerful_puppy'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('Сухой — Мокрый (кузнечик)')}
                            name='game_on_the_farm.dry_wet_grasshopper'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label={t('Холодный — Горячий (мороженое — картошка)')}
                            name='game_on_the_farm.cold_hot_ice_cream_potatoes'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                </ProtocolBox>
                {isLessonFinished && (
                    <>
                        <ProtocolResultTitle>{t('Варианты заключения')}</ProtocolResultTitle>
                        <ProtocolRow>
                            <ProtocolDescriptionSubtitle>{t('Уровень понимания речи')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('Нулевой')}
                                        name='game_on_the_farm.speech_comprehension_level'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('Ситуативный')}
                                        name='game_on_the_farm.speech_comprehension_level'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('Номинативный')}
                                        name='game_on_the_farm.speech_comprehension_level'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('Предикативный')}
                                        name='game_on_the_farm.speech_comprehension_level'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('Расчлененный')}
                                        name='game_on_the_farm.speech_comprehension_level'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label={t('Наличие феномена отчуждения смысла слова')}
                                        name='game_on_the_farm.presence_of_phenomenon_of_alienation'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolDescriptionSubtitle>{t('Уровень сформированности лексикона')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('Соответствует возрастной норме')}
                                        name='game_on_the_farm.level_of_vocabulary_formation'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('Не соответствует возрасту')}
                                        name='game_on_the_farm.level_of_vocabulary_formation'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolDescriptionSubtitle>{t('Активный семантический компонент (активный словарь)')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('Нарушение актуализации слов — нарушен выбор слова из семантического поля')}
                                        name='game_on_the_farm.active_semantic_component_active_vocabulary'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('Наличие неологизмов')}
                                        name='game_on_the_farm.active_semantic_component_active_vocabulary'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolDescriptionSubtitle>{t('Предметная отнесенность слова')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('Устойчивая')}
                                        name='game_on_the_farm.subject_relation_of_a_word'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('Неустойчивая')}
                                        name='game_on_the_farm.subject_relation_of_a_word'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolDescriptionSubtitle>{t('Вербальные парафазии')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('Литеральные')}
                                        name='game_on_the_farm.verbal_paraphasias'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('Вербальные — смешение видовых признаков')}
                                        name='game_on_the_farm.verbal_paraphasias'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('Вербальные — смешение признаков часть/тело')}
                                        name='game_on_the_farm.verbal_paraphasias'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('Вербальные — замена названия предмета контекстным действием')}
                                        name='game_on_the_farm.verbal_paraphasias'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('Вербальные — смешение по внешнему сходству')}
                                        name='game_on_the_farm.verbal_paraphasias'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolDescriptionSubtitle>{t('Объем словаря')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('Ограничен')}
                                        name='game_on_the_farm.vocabulary_size'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('Резко ограничен')}
                                        name='game_on_the_farm.vocabulary_size'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('Достаточный для осуществления полноценной коммуникации')}
                                        name='game_on_the_farm.vocabulary_size'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('Очень мало «периферийных» слов даже из наиболее распространенных, прагматически ценных для этого возраста тематических групп')}
                                        name='game_on_the_farm.vocabulary_size_part_two'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('Словарь преимущественно состоит из слов, обозначающих предметы, наблюдается дефицит глагольного словаря, практически отсутствуют слова, обозначающие признаки и качества предметов. Словарь представлен небольшим количеством слов обиходно-бытовой тематики')}
                                        name='game_on_the_farm.vocabulary_size_part_two'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            <ProtocolDescriptionSubtitle>{t('Системная организация словаря')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('Системная организация словаря находится на самом начальном этапе формирования; наблюдаются слабые ассоциативные связи, преобладают случайные, немотивированные ассоциации')}
                                        name='game_on_the_farm.systemic_vocabulary_organization'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('Организация словаря отличается бессистемностью, отсутствием мотивированных адекватных ассоциаций')}
                                        name='game_on_the_farm.systemic_vocabulary_organization'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('Системная организация словаря находится на уровне установления первичных тематически/ситуативно обусловленных связей, наблюдаются выраженные (незначительные) трудности установления родовидовых, антонимических и пр. отношений между словами, входящими в индивидуальный словарный запас; в лексиконе много слов, значение которых усвоено только на номинативном уровне')}
                                        name='game_on_the_farm.systemic_vocabulary_organization'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('Системная организация словаря отличается большим количеством и разнообразием смысловых и формальных связей; в лексиконе преобладают слова, значение которых усвоено на понятийном уровне')}
                                        name='game_on_the_farm.systemic_vocabulary_organization'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                        </ProtocolRow>
                    </>
                )}
                <ProtocolRow>
                    <ProtocolFormField
                        type='textarea'
                        label={t('Комментарий')}
                        name='game_on_the_farm.expert_comment'
                        placeholder={t('Комментарий специалиста')}
                        errors={errors}
                        register={register}
                        disabled={disabled}
                    />
                </ProtocolRow>
            </ProtocolBlock>
        </>
    );
};

export default OnTheFarmGame;