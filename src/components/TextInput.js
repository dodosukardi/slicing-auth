import React from 'react';

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

  return (
    <>
      {label && (
        <label className="text-[12px] text-gray-500 mb-1">{label}</label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`${className} rounded px-3 py-2 border-[1px] ${errorMessage ? 'border-red-400' : 'border-gray-100'} focus:border-sky-300 outline-0 text-sm`}
        disabled={disabled}
      />
      {errorMessage && (
        <span className="text-[12px] text-red-500 mt-1">{errorMessage}</span>
      )}
    </>
  );
};

export default TextInput;
