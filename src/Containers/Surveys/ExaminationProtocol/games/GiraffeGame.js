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

const GiraffeGame = (props) => {

    const {
        register, errors, control, isConclusionDisabled, disabled, isLessonFinished
    } = props

    const { t } = useTranslation();

    return (
        <>
            <ProtocolBlock>
                <ProtocolPlaceholderTitle>{t('game_giraffe')}</ProtocolPlaceholderTitle>
                <ProtocolBlockTitle>{t('sound_reproduction')} <span>{t('Звуки Р, Рь, Л, Ль')}</span></ProtocolBlockTitle>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('Рыба-Корова-Забор-Краб /Р')}
                        name='game_giraffe.fish_cow_fence_crab'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('Река-Варенье-Дверь /Рь')}
                        name='game_giraffe.river_jam_door'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('Лампа-Молоко-Пол-Клад /Л')}
                        name='game_giraffe.lamp_milk_floor_treasure'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label={t('Колесо-Соль /Ль')}
                        name='game_giraffe.wheel_salt'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolRow>


                <ProtocolResultTitle>{t('conclusion_options')}</ProtocolResultTitle>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>{t('rotacism')}</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label={t('throat_rotacism')}
                                name='game_giraffe.throat_rotacism'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkboxWithField'
                                label={t('replacing_P_with')}
                                name='game_giraffe.replacing_p_with'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkboxWithField'
                                label={t('replacing_Pb_with')}
                                name='game_giraffe.replacing_p_soft_with'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label={t('buccal')}
                                name='game_giraffe.buccal'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label={t('side')}
                                name='game_giraffe.side'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label={t('single_stroke_pronunciation')}
                                name='game_giraffe.one_hit_pronunciation'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label={t('pass')}
                                name='game_giraffe.skip'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        {errors.choices3 && <div className='form2__error'> {errors.choices3.message}</div>}
                    </ProtocolResultBlock>
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>{t('lambdacism')}</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label={t('interdental_lambdacism')}
                                name='game_giraffe.interdental_lambdacism'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkboxWithField'
                                label={t('replacing_L_with')}
                                name='game_giraffe.replacing_l_with'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkboxWithField'
                                label={t('replacing_L_soft_with')}
                                name='game_giraffe.replacing_l_soft_with'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label={t('nasal')}
                                name='game_giraffe.nasal'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label={t('pass')}
                                name='game_giraffe.lambdacism_pass'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label={t('bilabial')}
                                name='game_giraffe.two_lipped'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label={t('distortion')}
                                name='game_giraffe.distortion'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        {errors.choices4 && <div className='form2__error'> {errors.choices4.message}</div>}
                    </ProtocolResultBlock>
                </ProtocolRow>
            </ProtocolBlock>
            {isLessonFinished && (
              <>
                  <ProtocolBlock>
                      <ProtocolBlockTitle>{t('psychological_base_of_speech_thinking')}</ProtocolBlockTitle>
                      <ProtocolResultTitle>{t('conclusion_options')}</ProtocolResultTitle>
                      <ProtocolRow>
                          <ProtocolDescriptionSubtitle>{t('thinking')}</ProtocolDescriptionSubtitle>
                          <ProtocolResultBlock>
                              <ProtocolResultWrapper>
                                  <ProtocolFormField
                                      type='radio'
                                      label={t('age_appropriate')}
                                      name='game_giraffe.thinking'
                                      control={control}
                                      errors={errors}
                                      disabled={isConclusionDisabled || disabled}
                                  />
                              </ProtocolResultWrapper>
                              <ProtocolResultWrapper>
                                  <ProtocolFormField
                                      type='radio'
                                      label={t('not_age_appropriate')}
                                      name='game_giraffe.thinking'
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
                                      label={t('violated')}
                                      name='game_giraffe.thinking_part_two'
                                      control={control}
                                      errors={errors}
                                      disabled={isConclusionDisabled || disabled}
                                  />
                              </ProtocolResultWrapper>
                              <ProtocolResultWrapper>
                                  <ProtocolFormField
                                      type='radio'
                                      label={t('not_violated')}
                                      name='game_giraffe.thinking_part_two'
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
                                      label={t('there_are_difficulties_in_establishing_adequate_links_between_objects_and_phenomena_of_the_surrounding_world')}
                                      name='game_giraffe.there_are_difficulties_in_protecting_adequate_connections'
                                      control={control}
                                      errors={errors}
                                      disabled={isConclusionDisabled || disabled}
                                  />
                              </ProtocolResultWrapper>
                          </ProtocolResultBlock>
                      </ProtocolRow>
                  </ProtocolBlock>
                  <ProtocolRow>
                      <ProtocolDescriptionSubtitle>{t('kind_of_thinking')}</ProtocolDescriptionSubtitle>
                      <ProtocolResultBlock>
                          <ProtocolResultWrapper>
                              <ProtocolFormField
                                  type='radio'
                                  label={t('visually_effective_thinking')}
                                  name='game_giraffe.kind_of_thinking'
                                  value={t('visually_effective_thinking')}
                                  control={control}
                                  errors={errors}
                                  disabled={isConclusionDisabled || disabled}
                              />
                          </ProtocolResultWrapper>
                          <ProtocolResultWrapper>
                              <ProtocolFormField
                                  type='radio'
                                  label={t('visually_shaped_thinking_is_targeted_organized')}
                                  name='game_giraffe.kind_of_thinking'
                                  control={control}
                                  errors={errors}
                                  disabled={isConclusionDisabled || disabled}
                              />
                          </ProtocolResultWrapper>
                          <ProtocolResultWrapper>
                              <ProtocolFormField
                                  type='radio'
                                  label={t('visually_shaped_thinking_there_are_elements_of_verbal_logical_thinking')}
                                  value={t('visually_shaped_thinking_there_are_elements_of_verbal_logical_thinking')}
                                  name='game_giraffe.kind_of_thinking'
                                  control={control}
                                  errors={errors}
                                  disabled={isConclusionDisabled || disabled}
                              />
                          </ProtocolResultWrapper>
                          <ProtocolResultWrapper>
                              <ProtocolFormField
                                  type='radio'
                                  label={t('verbal_logical_capable_of_giving_a_logical_explanation_to_his_actions')}
                                  name='game_giraffe.kind_of_thinking'
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
                    name='game_giraffe.expert_comment'
                    placeholder={t('expert_comment')}
                    errors={errors}
                    register={register}
                    disabled={disabled}
                />
            </ProtocolRow>
        </>
    );
};

export default GiraffeGame;