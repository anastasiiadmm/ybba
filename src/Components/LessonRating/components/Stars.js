import React, { useState } from 'react';
import Icon from 'Components/Icon/Icon';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import 'Components/LessonRating/lessonRating.css';

import PropTypes from 'prop-types';

const ValidationSchema = yup.object().shape({
  rating: yup.number(),
  rating_comment: yup.string(),
});

function Stars({ values, swalClose }) {
  const { register, getValues, setValue, handleSubmit } = useForm({
    resolver: yupResolver(ValidationSchema),
    mode: 'onChange',
    defaultValues: values,
  });
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <form
      className="rating-outer-container"
      onSubmit={handleSubmit((data) => {
        swalClose();
      })}
    >
      <div className="rating-inner-container">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={ratingValue}>
              <input
                className="star-radio"
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => {
                  setValue('rating', ratingValue);
                  setRating(ratingValue);
                }}
                {...register}
              />
              <Icon
                icon="star-full"
                color={
                  ratingValue <= (hover || getValues().rating)
                    ? '#FFAC33'
                    : '#A3B3CC'
                }
                size={20}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
      {rating != null && rating < 5 ? (
        <input
          type="text"
          name="rating_comment"
          className="rating-comment"
          {...register}
        />
      ) : null}
      <div
        className="swal2-actions"
        style={{ display: 'flex', fontSize: '0.9em' }}
      >
        <button type="submit" className="swal2-confirm btn info-item__btn">
          Оценить
        </button>
      </div>
    </form>
  );
}

Stars.propTypes = {
  values: PropTypes.object.isRequired,
};

export default Stars;
