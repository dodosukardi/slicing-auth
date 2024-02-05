import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const RegisterEmail = (props) => {
  const { onSubmitRegisterEmail, onBack, email } = props;
  const [passwordValue, setPasswordValue] = useState('');
  const [fullNameValue, setFullNameValue] = useState('');

  return (
    <>
      <div href="#" onClick={() => onBack()} className="absolute left-[24px] top-[24px] cursor-pointer p-2">
       <ReactSVG src="icons/arrow-left.svg" />
      </div>
      <div className="w-96 rounded-[16px] border-2 border-neutral-100 shadow-sm flex flex-col p-8 mb-8 bg-white">
        <ReactSVG src="icons/esuite-logo.svg" className="mx-auto" />
        <p className="text-center text-[12px] mb-6 text-gray-800 mt-1">Account Center</p>
        <p className="text-center font-bold mb-2 text-gray-800">Register With Email</p>
        <p className="text-center text-[12px] mb-6 text-gray-800">
        {email}
        </p>

        <TextInput
          label="FullName"
          type="fullname"
          value={fullNameValue}
          onChange={(val) => setFullNameValue(val)}
          placeholder="Full Name"
        />
        <TextInput
          label="Password"
          type="password"
          value={passwordValue}
          onChange={(val) => setPasswordValue(val)}
          placeholder="Password"
        />
        <Button
          text="Register"
          type="primaryBordered"
          className="mb-2"
          onClick={() => onSubmitRegisterEmail()}
        />
      </div>
    </>
  );
}

export default RegisterEmail;
