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


const AntLambadaGame = (props) => {

    const  {
        register, errors, control, isConclusionDisabled, disabled, isLessonFinished
    } = props

    const { t } = useTranslation();

    return (
        <>
            <ProtocolBlock>
                <ProtocolPlaceholderTitle>{t('Игра «Муравьиная ламбада»')}</ProtocolPlaceholderTitle>
                <ProtocolBlockTitle>{t('Звукопроизношение')} <span>{t('Звуки Д, Дь, Т, Ть, К, Г, Х')}</span></ProtocolBlockTitle>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('Дом-Дятел /Д, Дь')}
                        name='game_ant_lambada.woodpecker_house'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('Тапки-Платье /Т, Ть')}
                        name='game_ant_lambada.slipper_dress'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Кухня-Хомяк-Гусь /К – Х, Г'
                        name='game_ant_lambada.kitchen_hamster_goose'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolRow>
                {isLessonFinished && (
                    <>
                        <ProtocolResultTitle>{t('Варианты заключения')}</ProtocolResultTitle>
                        <ProtocolRow>
                            <ProtocolDescriptionSubtitle>{t('Переднеязычные')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label={t('Носовой')}
                                        name='game_ant_lambada.nasal'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label={t('Пропуск')}
                                        name='game_ant_lambada.skip'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkboxWithField'
                                        label={t('Замена Д на')}
                                        name='game_ant_lambada.replacing_d_with'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkboxWithField'
                                        label={t('Замена Дь на')}
                                        name='game_ant_lambada.replacing_d_soft_with'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkboxWithField'
                                        label={t('Замена Т на')}
                                        name='game_ant_lambada.replacing_t_with'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkboxWithField'
                                        label={t('Замена Ть на')}
                                        name='game_ant_lambada.replacing_t_soft_with'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                {errors.choices20 && <div className='form2__error'> {errors.choices20.message}</div>}
                            </ProtocolResultBlock>
                        </ProtocolRow>
                        <ProtocolRow>
                            <ProtocolDescriptionSubtitle>{t('Заднеязычные')}</ProtocolDescriptionSubtitle>
                            <ProtocolResultBlock>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkboxWithField'
                                        label={t('Замена К на')}
                                        name='game_ant_lambada.replacing_k_with'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkboxWithField'
                                        label={t('Замена Г на')}
                                        name='game_ant_lambada.replacing_g_with'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkboxWithField'
                                        label={t('Замена Х на')}
                                        name='game_ant_lambada.replacing_kh_with'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label={t('Смешение')}
                                        name='game_ant_lambada.mixing'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                                <ProtocolResultWrapper>
                                    <ProtocolFormField
                                        type='checkbox'
                                        label={t('Искажение')}
                                        name='game_ant_lambada.distortion'
                                        control={control}
                                        errors={errors}
                                        disabled={isConclusionDisabled || disabled}
                                    />
                                </ProtocolResultWrapper>
                            </ProtocolResultBlock>
                            {errors.choices21 && <div className='form2__error'> {errors.choices21.message}</div>}
                        </ProtocolRow>
                    </>
                )}
                <ProtocolRow>
                    <ProtocolFormField
                        type='textarea'
                        label={t('Комментарий')}
                        name='game_ant_lambada.expert_comment'
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

export default AntLambadaGame;