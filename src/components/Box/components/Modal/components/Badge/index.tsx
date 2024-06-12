import React from 'react'

interface IBadgeProps {
  title: string
  dotColor: string
  className?: string
}

const Badge: React.FC<IBadgeProps> = ({ title, dotColor, className = '' }) => {
  return(
    <div className={`${className} flex py-1 px-[11px] items-center border border-solid border-[#D0D5DD] rounded-lg`}>
      <div style={{ background: dotColor }} className={`w-[6px] mr-2 h-[6px] rounded-full`} />
      <span className='text-sm font-medium text-[#344054]'>{title}</span>
    </div>
  )
}

export default Badge