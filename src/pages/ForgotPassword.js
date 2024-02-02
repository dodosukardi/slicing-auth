import React, { useState } from 'react';
import Dropdown from '../components/Dropdown';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { ReactSVG } from 'react-svg';

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState('');

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-edot">

      <div href="#" onClick={() => window.location.href = '/'} className="absolute left-[24px] top-[24px] cursor-pointer p-2">
        <ReactSVG src="icons/arrow-left.svg" />
      </div>

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

          <div className="w-96 rounded-[16px] border-2 border-neutral-100 shadow-sm flex flex-col p-8 mb-8 bg-white">
            <ReactSVG src="icons/esuite-logo.svg" className="mx-auto" />
            <p className="text-center text-[12px] mb-6 text-gray-800 mt-1">Account Center</p>
            <p className="text-center font-bold mb-2 text-gray-800">Reset Password</p>
            <p className="text-center text-[12px] text-gray-800 mb-8">
              Enter the registered email or WhatsApp number. We will send you a verification code to reset your password
            </p>

            <TextInput
              label="Email or WhatsApp Number"
              value={value}
              onChange={(val) => setValue(val)}
              placeholder="Input Email or Phone Number"
              className="mb-0"
            />
            <Button
              text="Next"
              type="primary"
              disabled={value === ''}
              onClick={() => {}}
              className="mt-6"
            />
          </div>
        </>
      )}

      <p className="absolute bottom-[32px] text-center text-sm text-gray-400">2024 © PT. eDOT</p>
    </div>
  );
};

export default ForgotPassword;
