import React, { useState } from 'react';
import LoginPassword from './LoginPassword';
import Dropdown from '../../components/Dropdown';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { ReactSVG } from 'react-svg';
import LoginForm from './LoginForm';
import LoginOTP from './LoginOTP';
import LoginEmployee from './LoginEmployee';

const Login = () => {
  const [step, setStep] = useState('form');
  const [isLoading, setIsLoading] = useState(false);
  const [showRegisterEmailModal, setShowRegisterEmailModal] = useState(false);
  const [showRegisterPhoneModal, setShowRegisterPhoneModal] = useState(false);
  const [loginValue, setLoginValue] = useState('');

  const dummySubmitPassword = (val) => {
    setLoginValue(val);
    if (val === 'unregistered@domain.com') {
      setShowRegisterEmailModal(true);
    } else {
      setShowRegisterEmailModal(false);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setStep('password');
      }, 1000);
    }
  }

  const dummySubmitOtp = (val) => {
    setLoginValue(val);
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
            <LoginForm
              onSubmitWithPassword={(val) => dummySubmitPassword(val)}
              onSubmitWithWhatsApp={(val) => dummySubmitOtp(val)}
              onChangeMethod={() => setStep('employee')}
            />
          )}
          {step === 'password' && <LoginPassword onSubmit={() => {}} onBack={() => setStep('form')} />}
          {step === 'otp' && (
            <LoginOTP
              phone={loginValue}
              onSubmit={(val) => dummySubmitOtp(val)}
              onBack={() => setStep('form')}
            />
          )}
          {step === 'employee' && (
            <LoginEmployee
              phone={loginValue}
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

        <p className="text-center font-bold mb-2 mt-4 text-gray-800">Email Not Registered</p>
        <p className="text-center text-[12px] mb-4 text-gray-800">
          You can continue by creating new account with this email
        </p>
        <p className="text-center font-bold mb-2 text-gray-800 mb-8">{loginValue}</p>
        <div className="flex gap-2">
          <Button text="Edit" type="primaryBordered" className="flex-1" onClick={() => setShowRegisterEmailModal(false)} />
          <Button text="Yes, Register" type="primary" className="flex-1" onClick={() => setShowRegisterEmailModal(false)} />
        </div>
      </Modal>

      <Modal show={showRegisterPhoneModal} onClose={() => setShowRegisterPhoneModal(false)}>
        <ReactSVG src="icons/esuite-logo.svg" className="mx-auto" />
        <p className="text-center text-[12px] mb-4 text-gray-800 mt-1">Account Center</p>

        <p className="text-center font-bold mb-2 mt-4 text-gray-800">Number Not Registered</p>
        <p className="text-center text-[12px] mb-4 text-gray-800">
          You can continue by creating new account with this number
        </p>
        <p className="text-center font-bold mb-2 text-gray-800 mb-8">{loginValue}</p>
        <div className="flex gap-2">
          <Button text="Edit" type="primaryBordered" className="flex-1" onClick={() => setShowRegisterPhoneModal(false)} />
          <Button text="Yes, Register" type="primary" className="flex-1" onClick={() => setShowRegisterPhoneModal(false)} />
        </div>
      </Modal>
    </div>
  );
};

export default Login;
