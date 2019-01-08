import React from 'react';

export const Validation = props => {
  const successMessage = 'Text long enough.';
  const errorMessage = 'Text to short!';
  return props && props.inputLength && props.inputLength >= 5
    ? successMessage
    : errorMessage
}
