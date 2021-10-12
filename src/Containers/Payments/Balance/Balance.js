import React from 'react';

const Balance = () => {
    return (
        <div>
            <div className='payments__balance'>
                <div className='payments__balance-item'>
                    <p>Доступный баланс: <span>0</span></p>
                </div>
                <div className='payments__balance-item'>
                    <p>Потрачено в этом месяце: <span>0</span></p>
                </div>
                <button type='button' className='btn payments__balance-btn'>Купить занятия</button>
            </div>
            <div className='payments__history'>
                <div className='payments__history-top'>
                    <b>История занятий</b>
                    <button type='button' id='btnOpenDatepick' className='datepicker-range__btn'>Выберите период
                    </button>
                    <div className='datepicker-range'>
                        <div className='datepicker-range__block' id='datepickerRangeBlock'>
                            <div id='datepickerRangeResult' className='datepicker-range__result'>
                                Выбрано:
                                <input type='text' name='start' value='22/04/2021' className='datepicker-range__field'
                                       id='dateStart'/>
                                <span>-</span>
                                <input type='text' name='end' value='22/09/2021' className='datepicker-range__field'
                                       id='dateEnd'/>
                                <span className='datepicker-range__days' id='rangeDays'/>
                            </div>
                            <div id='datepickerRange' className='datepicker-range__picker'/>
                            <button type='button' id='btnCloseDatepick' className='datepicker-range__close'/>
                        </div>
                    </div>
                </div>
                <table className='payments__history-tbl'>
                    <tr>
                        <th>Дата</th>
                        <th>Логопед</th>
                        <th>Статус</th>
                        <th>Изменение</th>
                        <th>Остаток</th>
                    </tr>
                    <tr>
                        <td>07.08.2021 20:42</td>
                        <td>Владимир Рост</td>
                        <td className='status'>Оплата 8 занятий</td>
                        <td>+8</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>11.08.2021 11:00</td>
                        <td>Владимир Рост</td>
                        <td className='status'>Занятие состоялось</td>
                        <td>-1</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>09.08.2021 11:00</td>
                        <td>Владимир Рост</td>
                        <td className='status-cancel'>Занятие отменено</td>
                        <td>0</td>
                        <td>7</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Balance;