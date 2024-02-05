import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const LoginEmployee = (props) => {
  const { onChangeMethod } = props;

  const [username, setUsername] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <div className="w-96 rounded-[16px] border-2 border-neutral-100 shadow-sm flex flex-col p-8 mb-8 bg-white">
        <ReactSVG src="icons/esuite-logo.svg" className="mx-auto" />
        <p className="text-center text-[12px] mb-6 text-gray-800 mt-1">Account Center</p>
        <p className="text-center font-bold mb-6 text-gray-800">Sign In with Employee ID</p>

        <TextInput
          label="Company Username"
          value={username}
          onChange={(val) => setUsername(val)}
          placeholder="Input Company Username"
          className="mb-4"
        />
        <TextInput
          label="Employee ID"
          value={employeeId}
          onChange={(val) => setEmployeeId(val)}
          placeholder="Input Employee ID"
          className="mb-4"
        />
        <TextInput
          type="password"
          label="Password"
          value={password}
          onChange={(val) => setPassword(val)}
          placeholder="Input Password"
          className="mb-4"
        />

        <Button
          text="Next"
          type="primary"
          disabled={username === '' || employeeId === '' || password === ''}
          onClick={() => {}}
          className="mt-6"
        />

        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-sm">or</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>

        <Button
          text="Email, Username or WhatsApp Number"
          type="primaryBordered"
          className="mb-2"
          onClick={() => onChangeMethod()}
        />
        <Button
          icon="icons/google-logo.svg"
          text="Sign in with Google"
          type="primaryBordered"
          onClick={() => {}}
        />
      </div>
    </>
  );
};

export default LoginEmployee;
