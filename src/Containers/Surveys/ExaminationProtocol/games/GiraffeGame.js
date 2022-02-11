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

const GiraffeGame = (props) => {

    const {
        register, errors, control, isConclusionDisabled, disabled, isLessonFinished
    } = props

    return (
        <>
            <ProtocolBlock>
                <ProtocolPlaceholderTitle>Игра “Жираф”</ProtocolPlaceholderTitle>
                <ProtocolBlockTitle>Звукопроизношение <span>Звуки Р, Рь, Л, Ль</span></ProtocolBlockTitle>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Рыба-Корова-Забор-Краб /Р'
                        name='game_giraffe.fish_cow_fence_crab'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Река-Варенье-Дверь /Рь'
                        name='game_giraffe.river_jam_door'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Лампа-Молоко-Пол-Клад /Л'
                        name='game_giraffe.lamp_milk_floor_treasure'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolRow>
                <ProtocolRow>
                    <ProtocolFormField
                        type='text'
                        label='Колесо-Соль /Ль'
                        name='game_giraffe.wheel_salt'
                        register={register}
                        errors={errors}
                        disabled={disabled}
                    />
                </ProtocolRow>


                <ProtocolResultTitle>Варианты заключения:</ProtocolResultTitle>
                <ProtocolRow>
                    <ProtocolDescriptionSubtitle>Ротацизм:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Горловой ротацизм'
                                name='game_giraffe.throat_rotacism'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkboxWithField'
                                label='Замена Р на'
                                name='game_giraffe.replacing_p_with'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkboxWithField'
                                label='Замена Рь на'
                                name='game_giraffe.replacing_p_soft_with'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Щечный'
                                name='game_giraffe.buccal'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Боковой'
                                name='game_giraffe.side'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Одноударное произношение'
                                name='game_giraffe.one_hit_pronunciation'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Пропуск'
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
                    <ProtocolDescriptionSubtitle>Ламбдацизм:</ProtocolDescriptionSubtitle>
                    <ProtocolResultBlock>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Межзубный ламбдацизм'
                                name='game_giraffe.interdental_lambdacism'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkboxWithField'
                                label='Замена Л на'
                                name='game_giraffe.replacing_l_with'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkboxWithField'
                                label='Замена Ль на'
                                name='game_giraffe.replacing_l_soft_with'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Носовой'
                                name='game_giraffe.nasal'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Пропуск'
                                name='game_giraffe.lambdacism_pass'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Двугубный'
                                name='game_giraffe.two_lipped'
                                control={control}
                                errors={errors}
                                disabled={disabled}
                            />
                        </ProtocolResultWrapper>
                        <ProtocolResultWrapper>
                            <ProtocolFormField
                                type='checkbox'
                                label='Искажение'
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
                      <ProtocolBlockTitle>Психологическая база речи. Мышление</ProtocolBlockTitle>
                      <ProtocolResultTitle>Варианты заключения:</ProtocolResultTitle>
                      <ProtocolRow>
                          <ProtocolDescriptionSubtitle>Мышление:</ProtocolDescriptionSubtitle>
                          <ProtocolResultBlock>
                              <ProtocolResultWrapper>
                                  <ProtocolFormField
                                      type='radio'
                                      label='Соответствует возрасту'
                                      name='game_giraffe.thinking'
                                      control={control}
                                      errors={errors}
                                      disabled={isConclusionDisabled || disabled}
                                  />
                              </ProtocolResultWrapper>
                              <ProtocolResultWrapper>
                                  <ProtocolFormField
                                      type='radio'
                                      label='Не соответствует возрасту'
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
                                      label='Нарушено'
                                      name='game_giraffe.thinking_part_two'
                                      control={control}
                                      errors={errors}
                                      disabled={isConclusionDisabled || disabled}
                                  />
                              </ProtocolResultWrapper>
                              <ProtocolResultWrapper>
                                  <ProtocolFormField
                                      type='radio'
                                      label='Не нарушено'
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
                                      label='Наблюдаются трудности установления адекватных связей между предметами и явлениями окружающего
									мира'
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
                      <ProtocolDescriptionSubtitle>Вид мышления:</ProtocolDescriptionSubtitle>
                      <ProtocolResultBlock>
                          <ProtocolResultWrapper>
                              <ProtocolFormField
                                  type='radio'
                                  label='Мышление наглядно-действенное. Решение мыслительных задач осуществляется только на уровне
									практических действий'
                                  name='game_giraffe.kind_of_thinking'
                                  value='мышление наглядно действенное. Решение мыслительных задач осуществляется только на уровне
									практических действий'
                                  control={control}
                                  errors={errors}
                                  disabled={isConclusionDisabled || disabled}
                              />
                          </ProtocolResultWrapper>
                          <ProtocolResultWrapper>
                              <ProtocolFormField
                                  type='radio'
                                  label='Мышление наглядно-образное, носит целевой, организованный характер'
                                  name='game_giraffe.kind_of_thinking'
                                  control={control}
                                  errors={errors}
                                  disabled={isConclusionDisabled || disabled}
                              />
                          </ProtocolResultWrapper>
                          <ProtocolResultWrapper>
                              <ProtocolFormField
                                  type='radio'
                                  label='Мышление наглядно-образное, присутствуют элементы абстрактно-логического/словесно-логического
									мышления'
                                  value='мышление наглядно-образное, присутствиют элементы абстрактно-логического'
                                  name='game_giraffe.kind_of_thinking'
                                  control={control}
                                  errors={errors}
                                  disabled={isConclusionDisabled || disabled}
                              />
                          </ProtocolResultWrapper>
                          <ProtocolResultWrapper>
                              <ProtocolFormField
                                  type='radio'
                                  label='Словесно-логическое, способен давать своим действиям логическое объяснение'
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
                    label='Комментарий'
                    name='game_giraffe.expert_comment'
                    placeholder='Комментарий специалиста'
                    errors={errors}
                    register={register}
                    disabled={disabled}
                />
            </ProtocolRow>
        </>
    );
};

export default GiraffeGame;