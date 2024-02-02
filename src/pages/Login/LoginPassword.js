import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const LoginPassword = (props) => {
  const { onSubmit, onBack } = props;
  const [passwordValue, setPasswordValue] = useState('');

  return (
    <>
      <div href="#" onClick={() => onBack()} className="absolute left-[24px] top-[24px] cursor-pointer p-2">
       <ReactSVG src="icons/arrow-left.svg" />
      </div>
      <div className="w-96 rounded-[16px] border-2 border-neutral-100 shadow-sm flex flex-col p-8 mb-8 bg-white">
        <ReactSVG src="icons/esuite-logo.svg" className="mx-auto" />
        <p className="text-center text-[12px] mb-6 text-gray-800 mt-1">Account Center</p>
        <p className="text-center font-bold mb-2 text-gray-800">Hi, Lincoln Gouse</p>
        <p className="text-center text-[12px] mb-6 text-gray-800">
          lincoln_gouse@gmail.com
          <a href="#" className="text-sky-500 ml-2">Edit</a>
        </p>

        <TextInput
          label="Password"
          type="password"
          value={passwordValue}
          onChange={(val) => setPasswordValue(val)}
          placeholder="Password"
        />
        <p className="text-right text-[12px] mb-2 text-gray-400 mt-2">
          Forgot your password?
          <a href="#" className="text-sky-500 ml-2">Reset Password</a>
        </p>

        <Button
          text="Log In"
          type="primary"
          disabled={passwordValue === ''}
          onClick={() => onSubmit()}
          className="mt-6"
        />
      </div>
    </>
  );
}

export default LoginPassword;
