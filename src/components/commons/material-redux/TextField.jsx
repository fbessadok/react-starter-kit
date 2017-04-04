import React from 'react';
import MaterialTextField from 'material-ui/TextField';

// DISCLAIMER
// Do not use directly
// Only through Redux-Form's Field

export default function TextField({ input, label, meta: { touched, error }, ...custom }) {
  return (
    <MaterialTextField
      hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  );
}
