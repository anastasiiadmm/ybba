import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import Stars from 'Components/LessonRating/components/Stars';

const customLessonSwal = withReactContent(Swal);

const customSwalMixin = customLessonSwal.mixin({
  customClass: {
    confirmButton: 'btn info-item__btn',
    // cancelButton: "btn btn-danger",
    closeButton: 'swal-close-btn',
  },
  buttonsStyling: false,
});

const lessonRating = async (values) => {
  return await customSwalMixin.fire({
    title: <p className="swal-title">Оцените как прошло занятие</p>,
    html: (
      <Stars
        values={values}
        swalClose={() => {
          Swal.close();
          customSwalMixin.fire({
            title: 'Спасибо за отзыв',
            text: 'Мы назначим Вам другого логопеда, а пока можете записать на новое занятие.',
            confirmButtonText: 'На Главную',
            showCloseButton: true,
          });
        }}
      />
    ),
    showCloseButton: true,
    focusConfirm: false,
    showConfirmButton: false,
  });
};

const showModal = () => {
  lessonRating({
    rating: null,
    rating_comment: null,
  });
};

export default showModal;
