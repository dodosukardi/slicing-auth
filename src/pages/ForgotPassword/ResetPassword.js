import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const ResetPassword = (props) => {
  const { onSubmitResetPassword, onBack, email, phone } = props;
  const [passwordValue, setPasswordValue] = useState('');

  return (
    <>
      <div href="#" onClick={() => onBack()} className="absolute left-[24px] top-[24px] cursor-pointer p-2">
       <ReactSVG src="icons/arrow-left.svg" />
      </div>
      <div className="w-96 rounded-[16px] border-2 border-neutral-100 shadow-sm flex flex-col p-8 mb-8 bg-white">
        <ReactSVG src="icons/esuite-logo.svg" className="mx-auto" />
        <p className="text-center text-[12px] mb-6 text-gray-800 mt-1">Account Center</p>
        <p className="text-center font-bold mb-2 text-gray-800">Reset Password</p>
        <p className="text-center mb-2 text-gray-800">Create a password according to existing regulations and different from the previous password</p>

        <TextInput
          label="New Password"
          type="password"
          value={passwordValue}
          onChange={(val) => setPasswordValue(val)}
          className="mb-2"
          placeholder="Password"
        />
        <Button
          text="Save"
          type="primaryBordered"
          className="mb-2"
          onClick={() => onSubmitResetPassword()}
        />
      </div>
    </>
  );
}

export default ResetPassword;
