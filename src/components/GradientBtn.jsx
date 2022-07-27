import React from 'react';

const GradientBtn = ({ title, className }) => {
  return (
    <div>
      <button
        className={`bg-gradient-to-r from-thOrange to-thBlue py-2 px-6 text-black rounded-lg duration-200 hover:scale-110 ${className}`}
      >
        {title}
      </button>
    </div>
  );
};

export default GradientBtn;
