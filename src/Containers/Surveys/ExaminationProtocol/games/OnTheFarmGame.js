import React from 'react';

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
        register, errors, control, isConclusionDisabled, disabled
    } = props

    return (
        <>
            <ProtocolBlock>
                <ProtocolTitleGame>Игра «На ферме». Часть 1</ProtocolTitleGame>
                <ProtocolBlockTitle>Обследование связной речи</ProtocolBlockTitle>
                <ProtocolBlockSubTitle>Предметный словарь</ProtocolBlockSubTitle>
                <ProtocolBox>
                    <ProtocolBoxTitle>Обобщающие понятия</ProtocolBoxTitle>
                    <ProtocolRowText>
                        <ProtocolCol>
                            <ProtocolFormField
                                type='text'
                                label='Босоножки, ботинки, носки, сапоги'
                                name='game_on_the_farm.sandals_boots_socks_boots'
                                register={register}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolCol>
                        <ProtocolCol>
                            <ProtocolFormField
                                type='text'
                                label='Обувь (одежда)'
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
                                label='Морковь, яблоко, лук, капуста'
                                name='game_on_the_farm.carrot_apple_onion_cabbage'
                                register={register}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolCol>
                        <ProtocolCol>
                            <ProtocolFormField
                                type='text'
                                label='Овощи (фрукты)'
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
                                label='Стол, стул, стакан, диван'
                                name='game_on_the_farm.table_chair_glass_sofa'
                                register={register}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolCol>
                        <ProtocolCol>
                            <ProtocolFormField
                                type='text'
                                label='Мебель (посуда)'
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
                                label='Шуба, куртка, пальто, шапка'
                                name='game_on_the_farm.fur_coat_jacket_coat_hat'
                                register={register}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolCol>
                        <ProtocolCol>
                            <ProtocolFormField
                                type='text'
                                label='Одежда (голов. убор)'
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
                                label='Кукла, кубики, машинка, троллейбус'
                                name='game_on_the_farm.doll_cubes_car_trolley'
                                register={register}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolCol>
                        <ProtocolCol>
                            <ProtocolFormField
                                type='text'
                                label='Игрушки (транспорт)'
                                name='game_on_the_farm.toys_transport'
                                register={register}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolCol>
                    </ProtocolRowText>
                </ProtocolBox>
                <ProtocolBox>
                    <ProtocolBoxTitle>Детеныши животных</ProtocolBoxTitle>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='Кошка – котенок'
                            name='game_on_the_farm.cat_kitten'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='Собака - щенок'
                            name='game_on_the_farm.dog_puppy'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='Корова – теленок'
                            name='game_on_the_farm.cow_calf'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='Свинья – поросенок'
                            name='game_on_the_farm.pig_piglet'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                </ProtocolBox>
                <ProtocolBlockSubTitle>Глагольный словарь</ProtocolBlockSubTitle>
                <ProtocolBox>
                    <ProtocolBoxTitle>Название действий</ProtocolBoxTitle>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='Кошка мяукает'
                            name='game_on_the_farm.cat_meows'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='Собака лает'
                            name='game_on_the_farm.dog_barks'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='Корова мычит'
                            name='game_on_the_farm.cow_hums'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='Свинья хрюкает'
                            name='game_on_the_farm.pig_grunts'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                </ProtocolBox>
                <ProtocolBlockSubTitle>Словарь признаков</ProtocolBlockSubTitle>
                <ProtocolBox>
                    <ProtocolBoxTitle>Обследование антонимов</ProtocolBoxTitle>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='Низкий – Высокий (дом)'
                            name='game_on_the_farm.low_high_home'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='Широкий – Узкий (пояс)'
                            name='game_on_the_farm.wide_narrow_belt'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='Тяжелый – Легкий (ведро с водой– шарик)'
                            name='game_on_the_farm.heavy_light_bucket_of_water_ball'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='Чистый – Грязный (поросенок)'
                            name='game_on_the_farm.clean_dirty_pig'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='Медленный – Быстрый (улитка)'
                            name='game_on_the_farm.slow_fast_snail'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='Грустный – Веселый (щенок)'
                            name='game_on_the_farm.sad_cheerful_puppy'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='Сухой – Мокрый (кузнечик)'
                            name='game_on_the_farm.dry_wet_grasshopper'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='Холодный – Горячий (мороженое – картошка)'
                            name='game_on_the_farm.cold_hot_ice_cream_potatoes'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                </ProtocolBox>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Ответ ребенка'
                        name='game_on_the_farm.cold_hot_ice_cream_potatoes'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolResultTitle>Варианты заключения:</ProtocolResultTitle>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>Уровень понимания речи:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Нулевой'
                                name='game_on_the_farm.speech_comprehension_level'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Ситуативный'
                                name='game_on_the_farm.speech_comprehension_level'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Номинативный'
                                name='game_on_the_farm.speech_comprehension_level'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Предикативный'
                                name='game_on_the_farm.speech_comprehension_level'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Расчлененный'
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
                                label='Наличие феномена отчуждения смысла слова'
                                name='game_on_the_farm.presence_of_phenomenon_of_alienation'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolDescriptionSubtitle>Уровень сформированности лексикона:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Соответствует возрастной норме'
                                name='game_on_the_farm.level_of_vocabulary_formation'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Не соответствует возрастной норме'
                                name='game_on_the_farm.level_of_vocabulary_formation'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolDescriptionSubtitle>Активный семантический компонент (активный словарь):</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Нарушение актуализации слов – нарушен выбор слова из семантического поля'
                                name='game_on_the_farm.active_semantic_component_active_vocabulary'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Наличие неологизмов'
                                name='game_on_the_farm.active_semantic_component_active_vocabulary'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolDescriptionSubtitle>Предметная отнесенность слова:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Устойчивая'
                                name='game_on_the_farm.subject_relation_of_a_word'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Неустойчивая'
                                name='game_on_the_farm.subject_relation_of_a_word'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolDescriptionSubtitle>Вербальные парафазии:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Литеральные'
                                name='game_on_the_farm.verbal_paraphasias'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Вербальные - смешение видовых признаков'
                                name='game_on_the_farm.verbal_paraphasias'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Вербальные – смешение признаков часть/тело'
                                name='game_on_the_farm.verbal_paraphasias'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Вербальные – замена названия предмета контекстным действием'
                                name='game_on_the_farm.verbal_paraphasias'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Вербальные – смешение по внешнему сходству'
                                name='game_on_the_farm.verbal_paraphasias'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolDescriptionSubtitle>Объем словаря:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Ограничен'
                                name='game_on_the_farm.vocabulary_size'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Резко ограничен'
                                name='game_on_the_farm.vocabulary_size'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Достаточный для осуществления полноценной коммуникации'
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
                                label='Очень мало "периферийных" слов даже из наиболее распространенных, прагматически ценных для этого возраста тематических групп'
                                name='game_on_the_farm.vocabulary_size_part_two'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Словарь преимущественно состоит из слов, обозначающих предметы, наблюдается дефицит
                                глагольного сло¬варя, практически отсутствуют слова, обозначающие признаки и качества предметов.
                                Словарь представлен небольшим количеством слов обиходно-бытовой тематики'
                                name='game_on_the_farm.vocabulary_size_part_two'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolDescriptionSubtitle>Системная организация словаря:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Системная организация словаря находится на самом начальном этапе формирования; наблюдаются слабые
									ассоциативные связи, преобладают случайные, немотивированные ассоциации'
                                name='game_on_the_farm.systemic_vocabulary_organization'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Организация словаря отличается бессистемностью, отсутствием мотивированных адекватных
									ассоциаций'
                                name='game_on_the_farm.systemic_vocabulary_organization'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Системная организация словаря находится на уровне установления первичных тематически/ситуативно
									обусловленных связей, наблюдаются выраженные (незначительные) трудности установления родовидовых,
									антонимических и пр. отношений между словами, входящими в индивидуальный словарный запас; в лексиконе
									много
									слов, значение которых усвоено только на номинативном уровне'
                                name='game_on_the_farm.systemic_vocabulary_organization'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Системная организация словаря отличается большим количеством и разнообразием смысловых и формальных
									связей;
									в лексиконе преобладают слова, значение которых усвоено на понятийном уровне'
                                name='game_on_the_farm.systemic_vocabulary_organization'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='textarea'
                        label='Комментарий'
                        name='game_on_the_farm.expert_comment'
                        placeholder='Комментарий специалиста'
                        register={register}
                        disabled={disabled}
                    />
                </ProtocolRow>
            </ProtocolBlock>
        </>
    );
};

export default OnTheFarmGame;