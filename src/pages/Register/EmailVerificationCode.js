import React, {useState} from 'react';
import {ReactSVG} from 'react-svg';
import Button from '../../components/Button';
import OTPInput from '../../components/OTPInput';

const EmailVerificationCode = (props) => {
  const {onSubmitOtp, phone, onBack, email} = props;
  console.log({onSubmitOtp, phone, onBack, email})

  const submitOtp = (val) => {
    onSubmitOtp(val)
  }
  return (
    <>
      <div href="#" onClick={() => onBack()} className="absolute left-[24px] top-[24px] cursor-pointer p-2">
        <ReactSVG src="icons/arrow-left.svg" />
      </div>
      <div className="w-96 rounded-[16px] border-2 border-neutral-100 shadow-sm flex flex-col p-8 mb-8 bg-white">
        <ReactSVG src="icons/esuite-logo.svg" className="mx-auto" />
        <p className="text-center text-[12px] mb-6 text-gray-800 mt-1">Account Center</p>
        <p className="text-center font-bold mb-2 text-gray-800">Verification Code</p>
        <p className="text-center text-[12px] mb-6 text-gray-800">
          input the OTP code sent to your {phone==='' ? 'Email' : 'Whatsapp'} at
        </p>
        <p className="text-center font-bold mb-2 text-gray-800">{email || phone }</p>

        <div className="flex gap-2">
          <OTPInput
            length={6}
            className="flex gap-2"
            autoFocus
            onChangeOTP={(otp) => submitOtp(otp)}
          />
        </div>

        <div className="flex text-center items-center mt-8">
          <div className="flex-1">
            <p className="text-center text-[12px] mb-2 text-gray-400 mt-2">
              Didn't get the code?
              <a href="#" className="text-sky-500 ml-2">Resend Code</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailVerificationCode;
