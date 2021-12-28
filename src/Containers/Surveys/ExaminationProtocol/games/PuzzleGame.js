import React from 'react';

import ProtocolBlock from 'Components/Surveys/ExaminationProtocol/ProtocolBlock/ProtocolBlock';
import ProtocolPlaceholderTitle from 'Components/Surveys/ExaminationProtocol/ProtocolPlaceholderTitle/ProtocolPlaceholderTitle';
import ProtocolBlockTitle from 'Components/Surveys/ExaminationProtocol/ProtocolBlockTitle/ProtocolBlockTitle';
import ProtocolRow from 'Components/Surveys/ExaminationProtocol/ProtocolRow/ProtocolRow';
import ProtocolFormField from 'Components/Surveys/ExaminationProtocol/ProtocolFormField/ProtocolFormField';
import ProtocolResultTitle from 'Components/Surveys/ExaminationProtocol/ResultTitle/ResultTitle';
import ProtocolDescriptionSubtitle from 'Components/Surveys/ExaminationProtocol/ProtocolResultTitle/ProtocolResultTitle';
import ProtocolResultBlock from 'Components/Surveys/ExaminationProtocol/ProtocolResultBlock/ProtocolResultBlock';
import ProtocolResultWrapper from 'Components/Surveys/ExaminationProtocol/ProtocolResultWrapper/ProtocolResultWrapper';

const PuzzleGame = (props) => {

    const  {
        register, errors, control, isConclusionDisabled, disabled
    } = props

    return (
        <>
            <ProtocolBlock>
            <ProtocolPlaceholderTitle>Игра “Пазл”</ProtocolPlaceholderTitle>
            <ProtocolBlockTitle>Звукопроизношение <span>Звуки В, Вь, Ф, Фь</span></ProtocolBlockTitle>
            <ProtocolRow>
                <ProtocolFormField
                    type='text'
                    label='Волк-Совок-Вилка-Свиток /В, Вь'
                    name='game_puzzle.wolf_scoop_fork_scroll'
                    register={register}
                    errors={errors}
                    disabled={disabled}
                />
            </ProtocolRow>
            <ProtocolRow>
                <ProtocolFormField
                    type='text'
                    label='Фасоль-Финики /Ф, Фь'
                    name='game_puzzle.beans_dates'
                    register={register}
                    errors={errors}
                    disabled={disabled}
                />
            </ProtocolRow>
            <ProtocolRow>
                <ProtocolFormField
                    type='text'
                    label='Вафли /В - Ф'
                    name='game_puzzle.waffles'
                    register={register}
                    errors={errors}
                    disabled={disabled}
                />
            </ProtocolRow>
            <ProtocolResultTitle>Варианты заключения:</ProtocolResultTitle>
            <ProtocolRow>
                <ProtocolDescriptionSubtitle>Варианты заключения:</ProtocolDescriptionSubtitle>
                <ProtocolResultBlock>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkbox'
                            label='Носовой'
                            name='game_puzzle.nasal'
                            control={control}
                            errors={errors}
                            disabled={isConclusionDisabled || disabled}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkbox'
                            label='Пропуск'
                            name='game_puzzle.skip'
                            control={control}
                            errors={errors}
                            disabled={isConclusionDisabled || disabled}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkboxWithField'
                            label='Замена В на'
                            name='game_puzzle.replacing_with_b'
                            control={control}
                            errors={errors}
                            disabled={isConclusionDisabled || disabled}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkboxWithField'
                            label='Замена Вь на'
                            name='game_puzzle.replacing_with_b_soft'
                            control={control}
                            errors={errors}
                            disabled={isConclusionDisabled || disabled}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkboxWithField'
                            label='Замена Ф на'
                            name='game_puzzle.replacing_with_f'
                            control={control}
                            errors={errors}
                            disabled={isConclusionDisabled || disabled}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkboxWithField'
                            label='Замена Фь на'
                            name='game_puzzle.replacing_with_f_soft'
                            control={control}
                            errors={errors}
                            disabled={isConclusionDisabled || disabled}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkbox'
                            label='Двугубный'
                            name='game_puzzle.two_lipped'
                            control={control}
                            errors={errors}
                            disabled={isConclusionDisabled || disabled}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkbox'
                            label='Смешение'
                            name='game_puzzle.mixing'
                            control={control}
                            errors={errors}
                            disabled={isConclusionDisabled || disabled}
                        />
                    </ProtocolResultWrapper>
                    <ProtocolResultWrapper>
                        <ProtocolFormField
                            type='checkbox'
                            label='Искажение'
                            name='game_puzzle.distortion'
                            control={control}
                            errors={errors}
                            disabled={isConclusionDisabled || disabled}
                        />
                    </ProtocolResultWrapper>
                </ProtocolResultBlock>
            </ProtocolRow>
        </ProtocolBlock>
            <ProtocolBlock>
                <ProtocolBlockTitle>Симультанное зрительное восприятие</ProtocolBlockTitle>
                <ProtocolResultTitle>Варианты заключения:</ProtocolResultTitle>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>Восприятие:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Нарушено'
                                name='game_puzzle.perception'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Не нарушено'
                                name='game_puzzle.perception'
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
                                label='Cоответствует возрасту'
                                name='game_puzzle.level_of_perception'
                                control={control}
                                errors={errors}
                                disabled={isConclusionDisabled || disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='radio'
                                label='Не соответствует возрасту'
                                name='game_puzzle.level_of_perception'
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
                        name='game_puzzle.expert_comment'
                        placeholder='Комментарий специалиста'
                        register={register}
                        disabled={disabled}
                    />
                </ProtocolRow>
            </ProtocolBlock>
        </>
    );
};

export default PuzzleGame;