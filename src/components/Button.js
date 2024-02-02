import React from 'react';

const Button = (props) => {
  const {
    type,
    text,
    onClick,
    disabled,
    className
  } = props;

  const typeClassName = {
    primary: 'rounded p-2 bg-sky-500 text-white disabled:bg-neutral-200 disabled:text-neutral-400 text-sm',
    primaryBordered: 'rounded p-2 text-sky-400 border-[1px] border-sky-400 text-sm',
    primaryLink: 'text-sm text-sky-500'
  }[type];

  return (
    <button
      className={`${className} ${typeClassName}`}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
