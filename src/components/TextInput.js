import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';

const TextInput = (props) => {
  const {
    type,
    disabled,
    value,
    onChange,
    label,
    name,
    placeholder,
    className,
    errorMessage
  } = props;

  const [inputType, setInputType] = useState(type);
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = (val) => {
    setShowPassword(val);
    setInputType(val ? 'text' : 'password');
  }

  return (
    <>
      {label && (
        <label className="text-[12px] text-gray-500 mb-1">{label}</label>
      )}
      <div className="relative">
        <input
          type={inputType}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`${className} w-full rounded px-3 py-2 border-[1px] ${errorMessage ? 'border-red-400' : 'border-gray-100'} focus:border-sky-300 outline-0 text-sm`}
          disabled={disabled}
        />
        {type === 'password' && (
          <div className="absolute right-[12px] top-[10px] cursor-pointer" onClick={() => togglePassword(!showPassword)}>
            <ReactSVG src={`${!showPassword ? 'icons/eye-hidden.svg' : 'icons/eye-shown.svg'}`} />
          </div>
        )}
      </div>
      {errorMessage && (
        <span className="text-[12px] text-red-500 mt-1">{errorMessage}</span>
      )}
    </>
  );
};

export default TextInput;
