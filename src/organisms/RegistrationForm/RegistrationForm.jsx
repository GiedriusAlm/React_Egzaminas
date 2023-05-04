import { useState } from 'react';
import ICONS from '../../shared/icons/icons';
import Validation from '../../Validation/Validation';

const RegistrationForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setError] = useState({});

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError(Validation(values));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label for='username'>Name</label>
        {ICONS.user}
        <input type='text' name='username' id='username' placeholder='Joy Shaheb' value={values.name} onChange={handleChange} />
        {errors.name && <p style={{ color: 'red', fontSize: '12px', fontWeight: '500' }}>{errors.name}</p>}
      </div>

      <div>
        <label for='email'>Email</label>
        {ICONS.envelope}
        <input type='email' name='email' id='email' placeholder='abc@gmail.com' value={values.email} onChange={handleChange} />
        {errors.email && <p style={{ color: 'red', fontSize: '12px', fontWeight: '500' }}>{errors.email}</p>}
      </div>

      <div>
        <label for='password'>Password</label>
        {ICONS.lock}
        <input type='password' name='password' id='password' placeholder='•••••••' value={values.password} onChange={handleChange} />
        {errors.password && <p style={{ color: 'red', fontSize: '12px', fontWeight: '500' }}>{errors.password}</p>}
      </div>

      <button type='submit' id='submit'>
        Submit
      </button>
    </form>
  );
};

export default RegistrationForm;
