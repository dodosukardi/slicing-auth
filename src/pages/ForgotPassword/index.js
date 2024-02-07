import React, { useState } from 'react';
import ResetPassword from './ResetPassword';
import Dropdown from '../../components/Dropdown';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { ReactSVG } from 'react-svg';
import ForgotForm from './ForgotForm';
import EmailVerificationCode from './EmailVerificationCode';
import {useNavigate} from 'react-router-dom';
import Unregistered from './Unregistered';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState('form');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showUnregistered, setShowUnregistered] = useState(false);
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);
  const [showRegisterPhoneModal, setShowRegisterPhoneModal] = useState(false);
  const [registerValue, setRegisterValue] = useState('');

  const dummySubmitEmail = (val) => {
    setRegisterValue(val);
    setEmail(val)
    if (val === 'unregistered@domain.com') {
      setStep('unregistered')
      setShowUnregistered(true);
    } else {
      setShowResetPasswordModal(true);
    }
  }

  const sendVerificationCode = (val) => {
    setShowResetPasswordModal(false);
    setShowRegisterPhoneModal(false);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setEmail(val)
      setStep('sendVerification');
    }, 1000);
  }

  const sendWhatsappOtp = (val) => {
    setPhone(val)
    setShowResetPasswordModal(false);
    setShowRegisterPhoneModal(false);
    if (val==='081234567') {
      setStep('unregistered')
      setShowUnregistered(true);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setStep('sendVerification');
      }, 1000);
    }
  }

  const onSubmitOtp = (val) => {
    if(val.length === 6) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setEmail(val)
        setStep('resetPassword');
      }, 1000);
    }
  }

  const onSubmitResetPassword = (val) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep('form')
    }, 1000);
  }

  const dummySubmitOtp = (val) => {
    setRegisterValue(val);
    // if (val === '087886184300') {
      setShowRegisterPhoneModal(true);
    // } else {
    //   setShowRegisterPhoneModal(false);
    //   setIsLoading(true);
    //   setTimeout(() => {
    //     setIsLoading(false);
    //     setStep('otp');
    //   }, 1000);
    // }
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
            <ForgotForm
              onSubmitWithEmail={(val) => dummySubmitEmail(val)}
              onSubmitWithWhatsApp={(val) => dummySubmitOtp(val)}
              onChangeMethod={() => setStep('employee')}
            />
          )}
          {step === 'sendVerification' && <EmailVerificationCode onSubmitOtp={(otp) => onSubmitOtp(otp)} onBack={() => setStep('form')} email={email} phone={phone} />}
          {step === 'resetPassword' && <ResetPassword onSubmitResetPassword={(otp) => onSubmitResetPassword(otp)} onBack={() => setStep('form')} email={email}  phone={phone}/>}
          {step === 'unregistered' && <Unregistered onSubmitResetPassword={(otp) => onSubmitResetPassword(otp)} onBack={() => setStep('form')} email={email}  phone={phone}/>}
        </>
      )}

      <p className="absolute bottom-[32px] text-center text-sm text-gray-400">2024 © PT. eDOT</p>

      <Modal show={showResetPasswordModal} onClose={() => setShowResetPasswordModal(false)}>
        <ReactSVG src="icons/esuite-logo.svg" className="mx-auto" />
        <p className="text-center text-[12px] mb-4 text-gray-800 mt-1">Account Center</p>

        <p className="text-center font-bold mb-2 mt-4 text-gray-800 m-20">{registerValue}</p>
        <p className="text-center text-[12px] mb-4 text-gray-800">
          Is the email yout entered correct ?
        </p>
        <div className="flex gap-2">
          <Button text="Edit" type="primaryBordered" className="flex-1" onClick={() => setShowResetPasswordModal(false)} />
          <Button text="Next" type="primary" className="flex-1" onClick={() => sendVerificationCode(registerValue)} />
        </div>
      </Modal>

      <Modal show={showRegisterPhoneModal} onClose={() => setShowRegisterPhoneModal(false)}>
        <ReactSVG src="icons/esuite-logo.svg" className="mx-auto" />
        <p className="text-center text-[12px] mb-4 text-gray-800 mt-1">Account Center</p>

        <p className="text-center font-bold mb-2 mt-4 text-gray-800">{registerValue}</p>
        <p className="text-center text-[12px] mb-4 text-gray-800">
          Is the Whatsapp number you entered correct ?
        </p>
        <div className="flex gap-2">
          <Button text="Edit" type="primaryBordered" className="flex-1" onClick={() => setShowRegisterPhoneModal(false)} />
          <Button text="Next" type="primary" className="flex-1" onClick={() => sendWhatsappOtp(registerValue)} />
        </div>
      </Modal>
    </div>
  );
};

export default ForgotPassword;
