import React from 'react'
import { BlankCircle, CheckCircle } from '../../../../assets'

export interface IBoxItem {
  title: string
  subTitle?: string
  link?: string
  checkCircleColor?: string
  isBlankCheckCircle?: boolean
  className?: string
  titleColor?: string
  subTitleColor?: string
}

const BoxItem: React.FC<IBoxItem> = ({ 
  className = '',
  title, 
  subTitle, 
  checkCircleColor, 
  link, 
  isBlankCheckCircle = false,
  titleColor = 'text-black',
  subTitleColor = 'text-gray-400'
}) => {
  return(
    <div className={`flex items-start ${className}`}>
      {isBlankCheckCircle ? <BlankCircle className='mt-1' color={checkCircleColor} /> : <CheckCircle className='mt-1' color={checkCircleColor} />}
      <div className='flex flex-col ml-2'>
        <span className={`text-lg font-semibold ${titleColor}`}>{title}</span>
        {subTitle && <span className={`text-base ${subTitleColor}`}>{subTitle}</span>}
        {link && <a href='https://www.clickdimensions.com/links/TestPDFfile.pdf' target='_blank' className="text-base text-purple-400" rel="noreferrer">{link}</a>}
      </div>
    </div>
  )
}

export default BoxItem