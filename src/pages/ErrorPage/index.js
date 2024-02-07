import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import {useNavigate} from 'react-router-dom';
import Error404 from './Error404';

const ErrorPage = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState('404');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-edot">

      {isLoading ? (
        <ReactSVG src="icons/loading.svg" className="animate-spin" />
      ) : (
        <>
          {step === '404' && (
            <Error404
            />
          )}
        </>
      )}

      <p className="absolute bottom-[32px] text-center text-sm text-gray-400">2024 © PT. eDOT</p>
    </div>
  );
};

export default ErrorPage;
