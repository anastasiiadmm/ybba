import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import FormField from '../../../Components/FormField/FormField';
import {getChildren, paymentsSelector} from '../../../redux/payments/paymentsSlice';
import {authSelector} from '../../../redux/auth/authSlice';
import {addClasses} from '../../../utils/addClasses/addClasses';
import {setSelectedChild} from '../../../redux/lessons/lessonsSlice';
import {Link} from 'react-router-dom';


const Payment = () => {

    const dispatch = useDispatch()

    const [options, setOptions] = useState()
    const [selectedChild, setChild] = useState(null)

    const {user} = useSelector(authSelector)
    const {children} = useSelector(paymentsSelector)

    const selectChangeHandler = ({value}) => {
        const child = children?.find(child => child.id === value)
        setChild(child)
        dispatch(setSelectedChild(child))
    }

    useEffect(() => {
        setOptions(children?.map(child => {
            const full_name = `${child.first_name} ${child.last_name}`
            return {value: child.id, label: full_name}
        }))
    }, [children])

    useEffect(() => {
        dispatch(getChildren(user.id))
        // eslint-disable-next-line
    }, [])

    return (
        <div className='payments__tab-content' id='payment'>
            <div className='payments__row'>
                <div className='payments__col'>
                    {options && (
                        <FormField
                            type='select'
                            label='Покупка занятий для:'
                            options={options}
                            onChange={selectChangeHandler}
                            value={selectedChild?.id}
                        />
                    )}
                </div>
                {selectedChild && (
                    <div className='payments__col al-self-end'>
                        <div className='available'>Доступно занятий: 1</div>
                    </div>
                )}
            </div>
            {selectedChild && (
                <div className='payments__cards'>
                    {!selectedChild.is_diagnostic_lesson_completed && (
                        <p className='payments__cards-info'>
                            Для того чтобы покупать занятия, необходимо пройти диагностическое занятие
                        </p>
                    )}
                    <div className='payments__cards-row'>
                        {selectedChild.allow_create_lesson && (
                            <div className='payments__cards-col'>
                                <div className='payment-card'>
                                    <div className='payment-card__view payment-card__view_violet'/>
                                    <h3 className='payment-card__title'>Диагностическое занятие</h3>
                                    <p className='payment-card__descr'>Позволит нам лучше узнать вашего
                                        ребенка и разработать план занятий для вашего ребенка. </p>
                                    <Link
                                        className='btn payment-card__btn'
                                        type='button'
                                        to='/lessons/timeSlots/'
                                    >
                                        Записаться
                                    </Link>
                                </div>
                            </div>
                        )}
                        <div className='payments__cards-col'>
                            <div
                                className={addClasses('payment-card', {
                                    'not-active': !selectedChild.is_diagnostic_lesson_completed
                                })}
                            >
                                <div className='payment-card__view payment-card__view_gold'/>
                                <h3 className='payment-card__title'>Купить: 1 занятие</h3>
                                <p className='payment-card__descr'>И нет сомнений, что
                                    непосредственные участники технического прогресса объединены в
                                    целые кластеры.</p>
                                <button
                                    className='btn payment-card__btn ruble'
                                    type='button'
                                    disabled={!selectedChild.is_diagnostic_lesson_completed}
                                >
                                    Оплатить 1500
                                </button>
                            </div>
                        </div>
                        <div className='payments__cards-col'>
                            <div
                                className={addClasses('payment-card', {
                                    'not-active': !selectedChild.is_diagnostic_lesson_completed
                                })}
                            >
                                <div className='payment-card__view payment-card__view_blue'/>
                                <h3 className='payment-card__title payment-card__title_flex'>Купить:
                                    <span className='plus-minus'>
															<button className='btn-minus'/>
															<input type='text' value='3'/>
															<button className='btn-plus'/>
														</span>
                                </h3>
                                <p className='payment-card__descr'>И нет сомнений, что
                                    непосредственные участники технического прогресса объединены в
                                    целые кластеры.</p>
                                <button
                                    className='btn payment-card__btn ruble'
                                    type='button'
                                    disabled={!selectedChild.is_diagnostic_lesson_completed}
                                >
                                    Оплатить 1500
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Payment;