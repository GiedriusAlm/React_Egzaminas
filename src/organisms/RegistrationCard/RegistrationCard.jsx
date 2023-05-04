import React from 'react';
import { StyledCard } from './styles';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import Logo from '../../images/logo.svg';
import Mainimage from '../../images/mainimage.svg';

const RegistrationCard = () => {
  return (
    <StyledCard>
      <div className='container'>
        <div className='wrapper_all'>
          <div className='wrapper'>
            <div className='logo'>
              <img src={Logo} alt='logo' />
            </div>
            <div className='image'>
              <img src={Mainimage} alt='logo' />
            </div>
            <div className='desc'>
              Start for free & get <br />
              attractive offers today !
            </div>
          </div>
          <div className='social'>
            <div className='social-wrapper'>
              <div className='title'>Get Started</div>
              <div className='img-question'>
                Already Have an Account? <br />
                <span>Log In</span>
              </div>

              <div className='btn'>
                <div className='btn-1'>
                  <img src='https://img.icons8.com/color/30/000000/google-logo.png' alt='google' />
                  Sign Up
                </div>
                <div className='btn-2'>
                  <img src='https://img.icons8.com/ios-filled/30/ffffff/facebook-new.png' alt='fb' />
                  Sign Up
                </div>
              </div>

              <div className='social-or'>Or</div>
            </div>
            <RegistrationForm />
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

export default RegistrationCard;
