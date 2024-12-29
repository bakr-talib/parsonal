import React from 'react'
import CvImage from '../img/CvImage.png'
export default function Cv() {
  return (
    <div className='flex justify-center'>
        <img className=' md:w-11/12 lg:w-9/12' src={CvImage} alt="" />
    </div>
  )
}
