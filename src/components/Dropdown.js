import React, { useState } from 'react';

const Dropdown = (props) => {
  const {
    placeholder,
    options,
    selectedOption,
    onClick
  } = props;

  const [selected, setSelected] = useState(selectedOption);
  const [expanded, setExpanded] = useState(false);

  const onSelect = (item) => {
    setSelected(item);
    onClick(item);
  }

  return (
    <div className="relative inline-block text-left dropdown" onBlur={() => setExpanded(false)}>
      <span className="rounded-md shadow-sm">
        <button
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
          onClick={() => setExpanded(true)}
          type="button">
          <span>{selected?.label || placeholder}</span>
          <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </span>
      <div
        className={`${!expanded ? 'opacity-0 invisible' : ''} dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95`}
      >
        <div
          className="absolute right-0 w-48 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
        >
          <div className="py-1">
            {options?.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                onClick={() => onSelect(item)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
