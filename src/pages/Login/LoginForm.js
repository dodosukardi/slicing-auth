import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const LoginForm = (props) => {
  const { onSubmit } = props; 
  const [loginValue, setLoginValue] = useState('');
  const [tab, setTab] = useState(1);

  const renderLoginWithEmail = () => (
    <>
      <TextInput
        value={loginValue}
        onChange={(val) => setLoginValue(val)}
        placeholder="Email or Username"
      />

      <Button
        text="Next"
        type="primary"
        disabled={loginValue === ''}
        onClick={() => onSubmit(loginValue)}
        className="mt-6"
      />
    </>
  );

  const renderLoginWithWhatsApp = () => (
    <>
      <TextInput
        value={loginValue}
        onChange={(val) => setLoginValue(val)}
        placeholder="Masukkan nomor telepon"
      />

      <Button
        text="Next"
        type="primary"
        disabled={loginValue === ''}
        onClick={() => onSubmit()}
        className="mt-6"
      />
    </>
  );

  return (
    <>
      <div className="w-96 rounded-[16px] border-2 border-neutral-100 shadow-sm flex flex-col p-8 mb-8 bg-white">
        <ReactSVG src="icons/esuite-logo.svg" className="mx-auto" />
        <p className="text-center text-[12px] mb-6 text-gray-800 mt-1">Account Center</p>
        <p className="text-center font-bold mb-6 text-gray-800">Sign In</p>

        <div className="flex text-center mb-4">
          <div className="w-1/2 cursor-pointer" onClick={() => setTab(1)}>
            <p className={`text-sm mt-2 transition-all ${tab === 1 ? 'text-sky-500 font-bold' : ''}`}>Email or Username</p>
            <div className={`h-[2px] bg-sky-500 mt-2 transition-all delay-50 ${tab === 1 ? 'w-full' : 'w-[0px]'}`} />
          </div>
          <div className="w-1/2 cursor-pointer" onClick={() => setTab(2)}>
            <p className={`text-sm mt-2 transition-all ${tab === 2 ? 'text-sky-500 font-bold' : ''}`}>WhatsApp Number</p>
            <div className={`h-[2px] bg-sky-500 mt-2 transition-all delay-50 ${tab === 2 ? 'w-full' : 'w-[0px]'}`} />
          </div>
        </div>

        {tab === 1 && renderLoginWithEmail()}
        {tab === 2 && renderLoginWithWhatsApp()}

        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-sm">or</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>

        <Button
          text="Sign in with Employee ID"
          type="primaryBordered"
          className="mb-2"
          onClick={() => {}}
        />
        <Button
          text="Sign in with Google"
          type="primaryBordered"
          onClick={() => {}}
        />

        <div className="flex text-center items-center mt-8">
          <div className="flex-1">
            <Button
              text="Create Account"
              type="primaryLink"
              onClick={() => {}}
            />
          </div>
          <div className="w-[4px] h-[4px] rounded-full bg-gray-200" />
          <div className="flex-1">
            <Button
              text="Forgot Password"
              type="primaryLink"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;