import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import { redirect } from 'react-router-dom';

const Unregistered = (props) => {
  const { onSubmitWithEmail, onSubmitWithWhatsApp, phone, email } = props; 
  const [registerEmailValue, setRegisterEmailValue] = useState('');
  const [loginWhatsAppValue, setRegisterWhatsAppValue] = useState('');
  const [tab, setTab] = useState(1);

  const renderForgotWithEmail = () => (
    <>
      <TextInput
        value={registerEmailValue}
        onChange={(val) => setRegisterEmailValue(val)}
        placeholder="Email"
      />

      <Button
        text="Next"
        type="primary"
        disabled={registerEmailValue === ''}
        onClick={() => onSubmitWithEmail(registerEmailValue)}
        className="mt-6"
      />
    </>
  );

  const renderForgotWithWhatsApp = () => (
    <>
      <TextInput
        value={loginWhatsAppValue}
        onChange={(val) => setRegisterWhatsAppValue(val)}
        placeholder="Input Phone Number"
      />

      <Button
        text="Next"
        type="primary"
        disabled={loginWhatsAppValue === ''}
        onClick={() => onSubmitWithWhatsApp(loginWhatsAppValue)}
        className="mt-6"
      />
    </>
  );

  return (
    <>
      <div className="w-96 rounded-[16px] border-2 border-neutral-100 shadow-sm flex flex-col p-8 mb-8 bg-white">
        <ReactSVG src="icons/esuite-logo.svg" className="mx-auto" />
        <p className="text-center text-[12px] mb-6 text-gray-800 mt-1">Account Center</p>
        <p className="text-center font-bold mb-6 text-red-800">{phone==='' ? 'Email' : 'Whatsapp'} Not Found</p>
        <p className="text-center mb-6 text-gray-800">Sorry, the {phone==='' ? 'Email' : 'Whatsapp'} you entered cannot be found, try checking the {phone==='' ? 'Email' : 'Whatsapp'} you entered again</p>

        <div className="relative flex py-5 items-center">
        <Button text="Retry" type="primary" className="flex-1" onClick={() => true} />
        </div>
      </div>
    </>
  );
};

export default Unregistered;
