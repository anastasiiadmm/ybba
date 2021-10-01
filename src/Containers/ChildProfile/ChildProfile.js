import React from 'react';
import SidebarContainer from '../../Components/SidebarContainer/SidebarContainer';

const ChildProfile = (props) => {
    return (
        <SidebarContainer>
            <div className="main__inner">
                <div className="main__title-block">
                    <h1 className="main__title">С чем вам помочь?</h1>
                </div>
                <div className="content">
                    <div className="content__inner">

                        <form action="#">

                            <div className="profile-child">
                                <div className="profile-child__links">
                                    <a href="#" className="profile-child__link write-in">Основная информация ребенка</a>
                                    <a href="#" className="profile-child__link active">С чем вам помочь?</a>
                                    <a href="#" className="profile-child__link">Был ли у вас опыт работы с другими
                                        специалистами?</a>
                                    <a href="#" className="profile-child__link">Как вы о нас узнали?</a>
                                </div>
                                <div className="profile-child__survey">
                                    <ul className="profile-child__check-list">
                                        <li>
                                            <input className="check" id="check-1" type="checkbox"/>
                                                <label htmlFor="check-1">Ребёнок не говорит или плохо говорит</label>
                                        </li>
                                        <li>
                                            <input className="check" id="check-2" type="checkbox"/>
                                                <label htmlFor="check-2">Поставить звук Р</label>
                                        </li>
                                        <li>
                                            <input className="check" id="check-3" type="checkbox"/>
                                                <label htmlFor="check-3">Поставить звук Л</label>
                                        </li>
                                        <li>
                                            <input className="check" id="check-4" type="checkbox"/>
                                                <label htmlFor="check-4">Поставить шипящие</label>
                                        </li>
                                        <li>
                                            <input className="check" id="check-5" type="checkbox"/>
                                                <label htmlFor="check-5">Поставить другие звуки</label>
                                        </li>
                                        <li>
                                            <input className="check" id="check-6" type="checkbox"/>
                                                <label htmlFor="check-6">Требуется логопедический массаж</label>
                                        </li>
                                        <li>
                                            <input className="check" id="check-7" type="checkbox"/>
                                                <label htmlFor="check-7">Коррекция заикания</label>
                                        </li>
                                        <li>
                                            <input className="check" id="check-8" type="checkbox"/>
                                                <label htmlFor="check-8">Коррекция задержки речевого развития
                                                    (ЗРР)</label>
                                        </li>
                                        <li>
                                            <input className="check" id="check-9" type="checkbox"/>
                                                <label htmlFor="check-9">Коррекция задержки психического развития
                                                    (ЗПР)</label>
                                        </li>
                                        <li>
                                            <input className="check" id="inp-other" type="checkbox"/>
                                                <label htmlFor="inp-other">Другое</label>
                                                <textarea className="form__area profile-child__area" id="fieldOther" disabled></textarea>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="content__bottom">
                                <a href="#" className="btn btn_light">Отмена</a>
                                <a href="#" className="btn disabled">Далее</a>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </SidebarContainer>
);
}

export default ChildProfile;