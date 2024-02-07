import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';
import {ReactSVG} from 'react-svg';
import Dropdown from '../../components/Dropdown';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import ContentHelps from './ContentHelps';
import SideNav from '../../components/SideNav';

const Helps = props => {
  const navigate = useNavigate();

  const [step, setStep] = useState('form');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showRegisteredModal, setShowRegisteredModal] = useState(false);
  const [showRegisterEmailModal, setShowRegisterEmailModal] = useState(false);
  const [showRegisterPhoneModal, setShowRegisterPhoneModal] = useState(false);
  const [registerValue, setRegisterValue] = useState('');
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
        </>
      )}
      {/* <SideNav /> */}
      <ContentHelps />
      <p className="absolute bottom-[32px] text-center text-sm text-gray-400">2024 © PT. eDOT</p>

      <Modal show={showRegisterEmailModal} onClose={() => setShowRegisterEmailModal(false)}>
        <ReactSVG src="icons/esuite-logo.svg" className="mx-auto" />
        <p className="text-center text-[12px] mb-4 text-gray-800 mt-1">Account Center</p>

        <p className="text-center font-bold mb-2 mt-4 text-gray-800 m-20">{registerValue}</p>
        <p className="text-center text-[12px] mb-4 text-gray-800">
          Is the email yout entered correct ?
        </p>
        <div className="flex gap-2">
          <Button text="Edit" type="primaryBordered" className="flex-1" onClick={() => setShowRegisterEmailModal(false)} />
          {/* <Button text="Next" type="primary" className="flex-1" onClick={() => sendVerificationCode(registerValue)} /> */}
        </div>
      </Modal>

      <Modal show={showRegisteredModal} onClose={() => setShowRegisterEmailModal(false)}>
        <ReactSVG src="icons/esuite-logo.svg" className="mx-auto" />
        <p className="text-center text-[12px] mb-4 text-gray-800 mt-1">Account Center</p>

        <p className="text-center font-bold mb-2 mt-4 text-gray-800 m-20">{phone==='' ? 'Email' : 'Whatsapp'} has been registered</p>
        <p className="text-center text-[12px] mb-4 text-gray-800 mt-0">you can next for Sign In with {phone==='' ? 'Email' : 'Whatsapp'}</p>
        <p className="text-center font-bold mb-2 mt-4 text-gray-800 m-20">{registerValue}</p>
        
        <div className="flex gap-2 mt-4">
          <Button text="Cancle" type="primaryBordered" className="flex-1" onClick={() => setShowRegisteredModal(false)} />
          <Button text="Yes, Sign In" type="primary" className="flex-1" onClick={() => navigate('/')} />
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
          {/* <Button text="Next" type="primary" className="flex-1" onClick={() => sendWhatsappOtp(registerValue)} /> */}
        </div>
      </Modal>
    </div>
  );
};

Helps.propTypes = {
  
};

export default Helps;