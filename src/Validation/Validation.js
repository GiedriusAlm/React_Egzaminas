const Validation = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = 'Name cannot be blank';
  } else if (values.name.length < 5) {
    errors.name = 'Name must be more than 2 characters';
  }
  if (!values.email) {
    errors.email = 'Email cannot be blank';
  } else if (values.email.length < 2) {
    errors.password = 'Email must be more than 2 characters';
  }
  if (!values.password) {
    errors.password = 'Password cannot be blank';
  } else if (values.password.length < 2) {
    errors.password = 'Password must be more than 2 characters';
  }

  return errors;
};

export default Validation;
