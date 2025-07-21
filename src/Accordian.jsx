import React, { useState } from 'react';
import { accordionData } from './utils/constant';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Accordian = () => {
  const [collapse, setCollapse] = useState(null);

  const handleAcc = (index) => {
    setCollapse(collapse === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto  p-4 bg-white shadow-md rounded-xl">
       
      {accordionData.map((item, index) => (
        <div
          key={item.id}
          className="mb-4 border border-gray-300 rounded-xl shadow-sm overflow-hidden"
        >
          <button
            onClick={() => handleAcc(index)}
            className="w-full flex justify-between items-center text-left p-4 bg-white hover:bg-gray-50 transition-all duration-200 font-medium text-lg"
          >
            <span>{item.question}</span>
            {collapse === index ? (
              <FaChevronUp className="text-gray-500" />
            ) : (
              <FaChevronDown className="text-gray-500" />
            )}
          </button>

          {collapse === index && (
            <div className="bg-gray-50 px-4 pb-4 pt-2 text-gray-700 text-base leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordian;
