import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import Button from '../../components/Button';
import OTPInput from '../../components/OTPInput';

const LoginOTP = (props) => {
  const { onSubmit, phone, onBack } = props;

  return (
    <>
      <div href="#" onClick={() => onBack()} className="absolute left-[24px] top-[24px] cursor-pointer p-2">
       <ReactSVG src="icons/arrow-left.svg" />
      </div>
      <div className="w-96 rounded-[16px] border-2 border-neutral-100 shadow-sm flex flex-col p-8 mb-8 bg-white">
        <ReactSVG src="icons/esuite-logo.svg" className="mx-auto" />
        <p className="text-center text-[12px] mb-6 text-gray-800 mt-1">Account Center</p>
        <p className="text-center font-bold mb-2 text-gray-800">Verification Code</p>
        <p className="text-center text-[12px] text-gray-800">
          Input the OTP code sent to your WhatsApp number at
        </p>
        <p className="text-center text-[12px] mb-6 text-gray-800 font-bold">
          {phone}
        </p>

        <div className="flex gap-2">
        <OTPInput
          length={6}
          className="flex gap-2"
          autoFocus
          onChangeOTP={(otp) => {}}
        />
        </div>

        <div className="flex text-center items-center mt-8">
          <div className="flex-1">
            <Button
              text="Request Code"
              type="primaryLink"
              onClick={() => {}}
            />
          </div>
          <div className="w-[4px] h-[4px] rounded-full bg-gray-200" />
          <div className="flex-1">
            <Button
              text="Login with Password"
              type="primaryLink"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginOTP;
