import React, { useRef, useLayoutEffect } from 'react';
import usePrevious from '../hooks/usePrevious';

const SingleOTPInput = (props) => {
  const { focus, autoFocus, ...rest } = props;
  const inputRef = useRef(null);
  const prevFocus = usePrevious(!!focus);

  useLayoutEffect(() => {
    if (inputRef.current) {
      if (focus && autoFocus) {
        inputRef.current.focus();
      }
      if (focus && autoFocus && focus !== prevFocus) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    }
  }, [autoFocus, focus, prevFocus]);

  return <input ref={inputRef} {...rest} className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full rounded px-3 py-3 border-[1px] border-gray-100 focus:border-sky-300 outline-0 text-center font-bold" />;
}

export default SingleOTPInput;
