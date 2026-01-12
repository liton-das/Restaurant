import React from 'react'

const Button = ({btnText}) => {
  return (
    <>
      <button className="mt-6 bg-[#FF9F0D] text-base text-white px-10 py-3 rounded-full hover:scale-105 transition">
        {btnText}
      </button>
    </>
  );
}

export default Button
