import React from 'react'
import { BoxItem, Modal } from './components'
import { items } from '../../utils/constants'

const Box: React.FC = () => {
  return(
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.75) 100%)",
      }}
      className='mx-auto relative mt-[72px] py-[52px] border border-black border-solid px-8 w-[fit-content]'
    >
      {items.map((item) => (
        <BoxItem 
          title={item.title}
          subTitle={item.subTitle}
          checkCircleColor={item.checkCircleColor}
          className={item.className}
          link={item.link}
          isBlankCheckCircle={item.isBlankCheckCircle}
          titleColor={item.titleColor}
          subTitleColor={item.subTitleColor}
        />
      ))}
      <Modal/>
    </div>
  )
}

export default Box