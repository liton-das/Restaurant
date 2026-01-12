import React from 'react'

const SectionHead = ({colorText,simpleText}) => {
  return (
    <>
      <h2 className="text-[48px] font-bold text-white"><span className="text-[#FF9F0D]">{colorText}</span> {simpleText}</h2>
    </>
  )
}

export default SectionHead
