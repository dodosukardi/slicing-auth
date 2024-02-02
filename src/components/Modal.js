import React from 'react';

const Modal = (props) => {
  const {
    show,
    children
  } = props;

  return (
    <div className={`${show ? 'opacity-100 z-50' : 'opacity-0 -z-50'} fixed transition-opacity ease-in-out delay-150 inset-0 bg-black bg-opacity-40 flex justify-center items-center backdrop-blur-sm`}>
      <div
        className="rounded-[16px] border-2 border-neutral-100 shadow-sm flex flex-col p-8 mb-8 bg-white"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
