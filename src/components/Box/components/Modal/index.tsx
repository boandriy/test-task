import React from 'react'
import { Badge, Stars } from './components'

const Modal: React.FC = () => {
  return(
    <div className="absolute bottom-[15px] right-[15px] z-20">
      <div className='bg-white w-[256px] border border-gray p-4 pb-6 shadow-md flex flex-col items-start rounded-md'>
        <span className='text-base font-medium text-black block mb-[14px]'>A to Z Construction, LLC</span>
        <div className='w-full flex items-center mb-[22px]'>
          <span className='text-base text-gray-500 flex-[0_1_35%]'>Status</span>
          <Badge
            title='Warning'
            dotColor='#ef6820'
          />
        </div>
        <div className='w-full flex items-center'>
          <span className='text-base text-gray-500 flex-[0_1_35%]'>Reviews</span>
          <Stars grade={3.5}/>
        </div>
      </div>
    </div>
  )
}

export default Modal