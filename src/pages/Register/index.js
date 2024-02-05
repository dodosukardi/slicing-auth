import React, { useState } from 'react';
import RegisterEmail from './RegisterEmail';
import Dropdown from '../../components/Dropdown';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { ReactSVG } from 'react-svg';
import RegisterForm from './RegisterForm';
import RegisterOTP from './RegisterOTP';
import EmailVerificationCode from './EmailVerificationCode';
import RegisterEmployee from './RegisterEmployee';
import {useNavigate} from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState('form');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showRegisteredEmailModal, setShowRegisteredEmailModal] = useState(false);
  const [showRegisterEmailModal, setShowRegisterEmailModal] = useState(false);
  const [showRegisterPhoneModal, setShowRegisterPhoneModal] = useState(false);
  const [registerValue, setRegisterValue] = useState('');

  const dummySubmitEmail = (val) => {
    setRegisterValue(val);
    if (val === 'registered@domain.com') {
      setShowRegisteredEmailModal(true);
    } else {
      setShowRegisterEmailModal(true);
    }
  }

  const sendVerificationCode = (val) => {
    setShowRegisterEmailModal(false);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setEmail(val)
      setStep('sendVerification');
    }, 1000);
  }

  const onSubmitOtp = (val) => {
    if(val.length === 6) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setEmail(val)
        setStep('completeEmailRegister');
      }, 1000);
    }
  }

  const onSubmitRegisterEmail = (val) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep('form')
    }, 1000);
  }

  const dummySubmitOtp = (val) => {
    setRegisterValue(val);
    if (val === '087886184300') {
      setShowRegisterPhoneModal(true);
    } else {
      setShowRegisterPhoneModal(false);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setStep('otp');
      }, 1000);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-edot">

      {isLoading ? (
        <ReactSVG src="icons/loading.svg" className="animate-spin" />
      ) : (
        <>
          <div className="absolute top-[32px] right-[32px]">
            <Dropdown
              options={[
                {
                  label: 'English',
                  value: 'en'
                }, {
                  label: 'Bahasa',
                  value: 'id'
                }
              ]}
              selectedOption={{
                label: 'English',
                value: 'en'
              }}
              onClick={() => {}}
              icon="icons/language.svg"
            />
          </div>
          {step === 'form' && (
            <RegisterForm
              onSubmitWithEmail={(val) => dummySubmitEmail(val)}
              onSubmitWithWhatsApp={(val) => dummySubmitOtp(val)}
              onChangeMethod={() => setStep('employee')}
            />
          )}
          {step === 'sendVerification' && <EmailVerificationCode onSubmitOtp={(otp) => onSubmitOtp(otp)} onBack={() => setStep('form')} email={email} />}
          {step === 'completeEmailRegister' && <RegisterEmail onSubmitRegisterEmail={(otp) => onSubmitRegisterEmail(otp)} onBack={() => setStep('form')} email={email} />}
          {step === 'otp' && (
            <RegisterOTP
              phone={registerValue}
              onSubmit={(val) => dummySubmitOtp(val)}
              onBack={() => setStep('form')}
            />
          )}
          {step === 'employee' && (
            <RegisterEmployee
              phone={registerValue}
              onSubmit={(val) => dummySubmitOtp(val)}
              onChangeMethod={() => setStep('form')}
            />
          )}
        </>
      )}

      <p className="absolute bottom-[32px] text-center text-sm text-gray-400">2024 © PT. eDOT</p>

      <Modal show={showRegisterEmailModal} onClose={() => setShowRegisterEmailModal(false)}>
        <ReactSVG src="icons/esuite-logo.svg" className="mx-auto" />
        <p className="text-center text-[12px] mb-4 text-gray-800 mt-1">Account Center</p>

        <p className="text-center font-bold mb-2 mt-4 text-gray-800 m-20">{registerValue}</p>
        <p className="text-center text-[12px] mb-4 text-gray-800">
          Is the email yout entered correct ?
        </p>
        <div className="flex gap-2">
          <Button text="Edit" type="primaryBordered" className="flex-1" onClick={() => setShowRegisterEmailModal(false)} />
          <Button text="Next" type="primary" className="flex-1" onClick={() => sendVerificationCode(registerValue)} />
        </div>
      </Modal>

      <Modal show={showRegisteredEmailModal} onClose={() => setShowRegisterEmailModal(false)}>
        <ReactSVG src="icons/esuite-logo.svg" className="mx-auto" />
        <p className="text-center text-[12px] mb-4 text-gray-800 mt-1">Account Center</p>

        <p className="text-center font-bold mb-2 mt-4 text-gray-800 m-20">Email has been registered</p>
        <p className="text-center text-[12px] mb-4 text-gray-800 mt-0">you can next for Sign In with email</p>
        <p className="text-center font-bold mb-2 mt-4 text-gray-800 m-20">{registerValue}</p>
        
        <div className="flex gap-2 mt-4">
          <Button text="Cancle" type="primaryBordered" className="flex-1" onClick={() => setShowRegisteredEmailModal(false)} />
          <Button text="Yes, Sign In" type="primary" className="flex-1" onClick={() => navigate('/')} />
        </div>
      </Modal>

      <Modal show={showRegisterPhoneModal} onClose={() => setShowRegisterPhoneModal(false)}>
        <ReactSVG src="icons/esuite-logo.svg" className="mx-auto" />
        <p className="text-center text-[12px] mb-4 text-gray-800 mt-1">Account Center</p>

        <p className="text-center font-bold mb-2 mt-4 text-gray-800">Number Not Registered</p>
        <p className="text-center text-[12px] mb-4 text-gray-800">
          You can continue by creating new account with this number
        </p>
        <p className="text-center font-bold mb-2 text-gray-800 mb-8">{registerValue}</p>
        <div className="flex gap-2">
          <Button text="Edit" type="primaryBordered" className="flex-1" onClick={() => setShowRegisterPhoneModal(false)} />
          <Button text="Yes, Register" type="primary" className="flex-1" onClick={() => setShowRegisterPhoneModal(false)} />
        </div>
      </Modal>
    </div>
  );
};

export default Register;
