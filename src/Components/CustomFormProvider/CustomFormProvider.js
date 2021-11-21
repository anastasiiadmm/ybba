import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import PropTypes from 'prop-types';

function CustomFormProvider(props) {
  const { customMethods, children } = props;

  const defaultMethods = useForm();
  return (
    <FormProvider
      {...(customMethods ? { ...customMethods } : { ...defaultMethods })}
    >
      {children}
    </FormProvider>
  );
}

CustomFormProvider.propTypes = {
  customMethods: PropTypes.object,
  children: PropTypes.element,
};

export default CustomFormProvider;
