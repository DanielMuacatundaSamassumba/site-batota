import React from 'react'
import Image from 'next/image'
import BackgroundImage from './../../../../public/image-removebg-preview (2) 1.png'
export default function BackgroundComponent() {
  return (
    <div>
         <Image src={BackgroundImage} alt='background-image' className='h-svh'></Image>
    </div>
  )
}
