import React from 'react';
import Button from "../../../Components/Button/Button.js";

const NextLessons = (props) => {
    return (
        <div className="info-item info-item_high">
            <h5 className="info-item__title">Следующие занятия</h5>
            <p className="info-item__text">В ближайшем времени занятий нет.</p>
            <Button className="btn info-item__btn" to='/by-lesson/'>Купить занятие</Button>
        </div>
    );
}

export default NextLessons;