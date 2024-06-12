import React, { useMemo } from 'react'
import { Star } from '../../../../../../assets'

interface IStarsProps {
  grade: 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5
  className?: string
}

const Stars: React.FC<IStarsProps> = ({ grade, className = '' }) => {
  const starsArray = useMemo(() => {
    let tempGrade = grade
    const stars: Array<"full" | "half" | "blank"> = []
    while(tempGrade >= 0) {
      if (tempGrade >= 1) {
        stars.push('full')
      } else if (tempGrade > 0 && tempGrade < 1) {
        stars.push('half')
      }
      tempGrade -= 1
    }
    while(stars.length !== 5) {
      stars.push('blank')
    }

    return stars
  }, [grade])

  return(
    <div className={`${className} flex items-center`}>
      <span className='text-base text-gray-500'>{grade}</span>
      <div className='ml-1 flex items-center'>
        {starsArray.map((item) => <Star state={item} />)}
      </div>
    </div>
  )
}

export default Stars