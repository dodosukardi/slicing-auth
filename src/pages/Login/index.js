import React, { useState } from 'react';
import LoginPassword from './LoginPassword';
import Dropdown from '../../components/Dropdown';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { ReactSVG } from 'react-svg';
import LoginForm from './LoginForm';

const Login = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [loginValue, setLoginValue] = useState('');

  const dummySubmit = (val) => {
    if (val === 'unregistered@domain.com') {
      setLoginValue(val)
      setShowRegisterModal(true);
    } else {
      setShowRegisterModal(false);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setStep(2);
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
          {step === 1 && <LoginForm onSubmit={(val) => dummySubmit(val)} />}
          {step === 2 && <LoginPassword onSubmit={() => {}} onBack={() => setStep(1)} />}
        </>
      )}

      <p className="absolute bottom-[32px] text-center text-sm text-gray-400">2024 © PT. eDOT</p>

      <Modal show={showRegisterModal} onClose={() => setShowRegisterModal(false)}>
        <ReactSVG src="icons/esuite-logo.svg" className="mx-auto" />
        <p className="text-center text-[12px] mb-4 text-gray-800 mt-1">Account Center</p>

        <p className="text-center font-bold mb-2 mt-4 text-gray-800">Email Not Registered</p>
        <p className="text-center text-[12px] mb-4 text-gray-800">
          You can continue by creating new account with this email
        </p>
        <p className="text-center font-bold mb-2 text-gray-800 mb-8">{loginValue}</p>
        <div className="flex gap-2">
          <Button text="Edit" type="primaryBordered" className="flex-1" onClick={() => setShowRegisterModal(false)} />
          <Button text="Yes, Register" type="primary" className="flex-1" onClick={() => setShowRegisterModal(false)} />
        </div>
      </Modal>
    </div>
  );
};

export default Login;