import React from 'react';
import { useTranslation } from 'react-i18next';


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
        register, errors, control, isConclusionDisabled, disabled, isLessonFinished
    } = props

    const { t } = useTranslation();

    return (
        <>
            <ProtocolBlock>
                <ProtocolPlaceholderTitle>{t('puzzle_game')}</ProtocolPlaceholderTitle>
                <ProtocolBlockTitle>{t('sound_reproduction')} <span>{t('Звуки В, Вь, Ф, Фь')}</span></ProtocolBlockTitle>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('Волк-Совок-Вилка-Свиток /В, Вь')}
                        name='game_puzzle.wolf_scoop_fork_scroll'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('Фасоль-Финики /Ф, Фь')}
                        name='game_puzzle.beans_dates'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('Вафли /В - Ф')}
                        name='game_puzzle.waffles'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolRow>
                {isLessonFinished && (
                    <>
                        <ProtocolRow>
                            <ProtocolDescriptionSubtitle>{t('conclusion_options')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label={t('nasal')}
                                        name='game_puzzle.nasal'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label={t('pass')}
                                        name='game_puzzle.skip'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkboxWithField'
                                        label={t('replacing_B_with')}
                                        name='game_puzzle.replacing_with_b'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkboxWithField'
                                        label={t('replacing_V_with')}
                                        name='game_puzzle.replacing_with_b_soft'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkboxWithField'
                                        label={t('replacing_F_with')}
                                        name='game_puzzle.replacing_with_f'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkboxWithField'
                                        label={t('replacing_Ph_with')}
                                        name='game_puzzle.replacing_with_f_soft'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label={t('bilabial')}
                                        name='game_puzzle.two_lipped'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label={t('mixing')}
                                        name='game_puzzle.mixing'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label={t('distortion')}
                                        name='game_puzzle.distortion'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                {errors.choices5 && <div className='form2__error'> {errors.choices5.message}</div>}
                            </ProtocolResultBlock>
                        </ProtocolRow>
                    </>
                )}
            </ProtocolBlock>
            <ProtocolBlock>
                {isLessonFinished && (
                    <>
                        <ProtocolBlockTitle>{t('simultaneous_visual_perception')}</ProtocolBlockTitle>
                        <ProtocolResultTitle>{t('conclusion_options')}</ProtocolResultTitle>
                        <ProtocolRow>
                            <ProtocolDescriptionSubtitle>{t('perception')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('violated')}
                                        name='game_puzzle.perception'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('not_violated')}
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
                                        label={t('perception_corresponds_to_the_age')}
                                        value={t('the_level_of_perception_corresponds_to_the_age')}
                                        name='game_puzzle.level_of_perception'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='radio'
                                        label={t('does_not_correspond_to_the_age')}
                                        value={t('the_level_of_perception_does_not_correspond_to_the_age')}
                                        name='game_puzzle.level_of_perception'
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
                        label={t('comment')}
                        name='game_puzzle.expert_comment'
                        placeholder={t('expert_comment')}
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolRow>
            </ProtocolBlock>
        </>
    );
};

export default PuzzleGame;