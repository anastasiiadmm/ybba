import React from 'react';

import ProtocolTitleGame from 'Components/Surveys/ExaminationProtocol/ProtocolTitle/ProtocolTitleGame';
import ProtocolBlockTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBlockTitle/ProtocolBlockTitle';
import ProtocolBlockSubTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBlockSubTitle/ProtocolBlockSubTitle';
import ProtocolBlock from 'Components/Surveys/ExaminationProtocol/ProtocolBlock/ProtocolBlock';
import ProtocolBox from 'Components/Surveys/ExaminationProtocol/ProtocolBox/ProtocolBox';
import ProtocolBoxTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBoxTitle/ProtocolBoxTitle';
import ProtocolRow from 'Components/Surveys/ExaminationProtocol/ProtocolRow/ProtocolRow';
import ProtocolFormField from 'Components/Surveys/ExaminationProtocol/ProtocolFormField/ProtocolFormField';
import ProtocolSubtitleThree from 'Components/Surveys/ExaminationProtocol/ProtocolSubtitleThree/ProtocolSubtitleThree';
import ProtocolRowText from 'Components/Surveys/ExaminationProtocol/ProtocolRowText/ProtocolRowText';
import ProtocolColWidth from 'Components/Surveys/ExaminationProtocol/ProtocolColWidth/ProtocolColWidth';
import ProtocolResultTitle from 'Components/Surveys/ExaminationProtocol/ResultTitle/ResultTitle';
import ProtocolDescriptionSubtitle from 'Components/Surveys/ExaminationProtocol/ProtocolResultTitle/ProtocolResultTitle';
import ProtocolResultBlock from 'Components/Surveys/ExaminationProtocol/ProtocolResultBlock/ProtocolResultBlock';
import ProtocolResultWrapper from 'Components/Surveys/ExaminationProtocol/ProtocolResultWrapper/ProtocolResultWrapper';

const OnTheFarmPartTwoGame = (props) => {

    const  {
        register, errors, control, isConclusionDisabled, disabled
    } = props

    return (
        <>
            <ProtocolBlock>
                <ProtocolTitleGame>Игра «На ферме». Часть 2</ProtocolTitleGame>
                <ProtocolBlockTitle>Обследование уровня сформированности грамматической компетенции</ProtocolBlockTitle>
                <ProtocolBlockSubTitle>Словообразование</ProtocolBlockSubTitle>
                <ProtocolBox>
                    <ProtocolBoxTitle>Образование уменьшительно-ласкательных форм существительных</ProtocolBoxTitle>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='Дом – Домик'
                            name='game_on_the_farm_part_two.house'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='Ведро – Ведерко'
                            name='game_on_the_farm_part_two.bucket'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                    <ProtocolRow>
                        <ProtocolFormField
                            type='text'
                            label='Дерево - Деревце'
                            name='game_on_the_farm_part_two.tree'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolRow>
                </ProtocolBox>
                <ProtocolBlockSubTitle>Словоизменение</ProtocolBlockSubTitle>
                <ProtocolSubtitleThree>Употребление падежных конструкций. Предлоги</ProtocolSubtitleThree>
                <ProtocolRowText>
                    <ProtocolColWidth>
                        <ProtocolFormField
                            type='text'
                            label='У дома'
                            name='game_on_the_farm_part_two.at_home'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolColWidth>
                    <ProtocolColWidth>
                        <ProtocolFormField
                            type='text'
                            label='За деревом'
                            name='game_on_the_farm_part_two.behind_a_tree'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolColWidth>
                </ProtocolRowText>
                <ProtocolRowText>
                    <ProtocolColWidth>
                        <ProtocolFormField
                            type='text'
                            label='На крыше'
                            name='game_on_the_farm_part_two.on_the_roof'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolColWidth>
                    <ProtocolColWidth>
                        <ProtocolFormField
                            type='text'
                            label='Справа от конуры'
                            name='game_on_the_farm_part_two.to_the_right_of_the_kennel'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolColWidth>
                </ProtocolRowText>
                <ProtocolRowText>
                    <ProtocolColWidth>
                        <ProtocolFormField
                            type='text'
                            label='На ветке над Мишей'
                            name='game_on_the_farm_part_two.on_the_branch_above_misha'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolColWidth>
                    <ProtocolColWidth>
                        <ProtocolFormField
                            type='text'
                            label='Слева от дерева'
                            name='game_on_the_farm_part_two.to_the_left_of_the_tree'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolColWidth>
                </ProtocolRowText>
                <ProtocolRowText>
                    <ProtocolColWidth>
                        <ProtocolFormField
                            type='text'
                            label='Под ботинком'
                            name='game_on_the_farm_part_two.under_the_boot'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolColWidth>
                    <ProtocolColWidth>
                        <ProtocolFormField
                            type='text'
                            label='Выглядывает из-за Мишы'
                            name='game_on_the_farm_part_two.peeps_out_from_behind_Misha'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolColWidth>
                </ProtocolRowText>
                <ProtocolRowText>
                    <ProtocolColWidth>
                        <ProtocolFormField
                            type='text'
                            label='Перед корытом'
                            name='game_on_the_farm_part_two.in_front_of_the_trough'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolColWidth>
                    <ProtocolColWidth>
                        <ProtocolFormField
                            type='text'
                            label='У Мишы в капюшоне'
                            name='game_on_the_farm_part_two.misha_has_a_hood'
                            register={register}
                            errors={errors}
                            disabled={disabled}
                        />
                    </ProtocolColWidth>
                </ProtocolRowText>
                <ProtocolResultTitle>Варианты заключения:</ProtocolResultTitle>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>Уровень сформированности грамматической компетенции:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Соответствует возрастной норме'
                                name='game_on_the_farm_part_two.level_of_grammatical_competence_formation'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Ниже возрастной нормы'
                                name='game_on_the_farm_part_two.level_of_grammatical_competence_formation'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Значительно ниже возрастной нормы'
                                name='game_on_the_farm_part_two.level_of_grammatical_competence_formation'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolDescriptionSubtitle>Словоизменительные навыки и умения:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='На самой начальной стадии формирования; наблюдаются выраженные трудности усвоения словоизменительной
									системы языка, в речи присутствует большое количество морфемных (формообразовательных) аграмматизмов;
									усвоены
									только наиболее продуктивные словоизменительные модели языка'
                                name='game_on_the_farm_part_two.inflectional_skills_and_abilities_part_one'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='В стадии формирования, характерной для речи детей более младшего возраста; наблюдаются трудности
									усвоения
									нерегулярных словоизменительных моделей'
                                name='game_on_the_farm_part_two.inflectional_skills_and_abilities_part_one'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Сформированы на уровне, соответствующем данной возрастной группе; в речи наблюдается незначительное
									количество словоизменительных ошибок (в основном при непродуктивном словоизменении)'
                                name='game_on_the_farm_part_two.inflectional_skills_and_abilities_part_one'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Словоизменительные навыки и умения сформированы'
                                name='game_on_the_farm_part_two.inflectional_skills_and_abilities_part_one'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolDescriptionSubtitle>Словообразовательные навыки и умения:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Словообразовательная деятельность не сформирована; морфологическое членение слова недоступно;
									наблюдаются
									выраженные трудности категоризации семантически значимых морфем; в речи присутствует большое количество
									словообразовательных ошибок'
                                name='game_on_the_farm_part_two.word_building_skills_and_abilities'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Словообразовательная деятельность находится на самой начальной стадии формирования; усвоены
									продуктивные
									словообразовательные модели; в речи допускаются ошибки в словах, образованных по менее продуктивным и
									нерегулярным моделям'
                                name='game_on_the_farm_part_two.word_building_skills_and_abilities'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Словообразовательная деятельность сформирована на уровне, позволяющем осуществлять коммуникацию, в
									речи
									наблюдаются незначительные трудности усвоения нерегулярных словообразовательных моделей'
                                name='game_on_the_farm_part_two.word_building_skills_and_abilities'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Словообразовательная деятельность сформирована'
                                name='game_on_the_farm_part_two.word_building_skills_and_abilities'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                    </ProtocolResultBlock>
                    <ProtocolDescriptionSubtitle>Синтаксические навыки и умения:</ProtocolDescriptionSubtitle>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='radio'
                            label='Синтаксические навыки сформированы на самом элементарном уровне, в речи присутствуют простые
									нераспространенные предложения, понимание смысла синтаксических конструкций более сложной структуры
									затруднено;
									предикативная часть многих самых элементарных конструкций отсутствует'
                            name='game_on_the_farm_part_two.syntax_skills_and_abilities_part_two'
                            control={control}
                            errors={errors}
                            disabled={isConclusionDisabled || disabled}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='radio'
                            label='Синтаксические навыки сформированы на уровне, соответствующем более младшей возрастной группе (ниже
									возрастного эталона); наблюдаются выраженные трудности построения распространенных в языке
									синтаксических
									конструкций (пропуск предлогов, информативно значимых частей), ошибки согласования и управления,
									недоступно
									понимание логико-грамматических конструкций'
                            name='game_on_the_farm_part_two.syntax_skills_and_abilities_part_two'
                            control={control}
                            errors={errors}
                            disabled={isConclusionDisabled || disabled}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='radio'
                            label='Синтаксические навыки в целом сформированы, при построении регулярных синтаксических конструкций
									соблюдается соответствие формы и содержания, в речи допускаются отдельные недочеты при построении
									сложносочиненных предложений с причинно-следственной или временной связью, вариативные возможности
									построения
									конструкций различного вида на очень низком уровне'
                            name='game_on_the_farm_part_two.syntax_skills_and_abilities_part_two'
                            control={control}
                            errors={errors}
                            disabled={isConclusionDisabled || disabled}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='radio'
                            label='Синтаксические навыки и умения сформированы, в речи наблюдаются многообразие синтаксических
									конструкций,
									вариативность их применения, ребенок демонстрирует трансформационные возможности при оперировании
									синтаксическим материалом'
                            name='game_on_the_farm_part_two.syntax_skills_and_abilities_part_two'
                            control={control}
                            errors={errors}
                            disabled={isConclusionDisabled || disabled}
                        />
                    </ProtocolResultWrapper>
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='textarea'
                        label='Комментарий'
                        name='game_on_the_farm_part_two.expert_comment'
                        placeholder='Комментарий специалиста'
                        register={register}
                        disabled={disabled}
                    />
                </ProtocolRow>
            </ProtocolBlock>
        </>
    );
};

export default OnTheFarmPartTwoGame;