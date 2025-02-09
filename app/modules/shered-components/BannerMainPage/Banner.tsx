"use client"
import React from 'react'
import IconAppleDownload from './../../../../public/disponivel-na-app-store-botao-1.png'
import IconPlayStore from './../../../../public/image copy 2.png'
import PhoneImage from './../../../../public/image copy 3.png'
import Image from 'next/image'
import BackgroundComponent from './BackgroundComponent'

export default function Banner() {


  return (
    <div className='flex flex-col  justify-center items-center relative w-full'>
      <BackgroundComponent></BackgroundComponent>
      <div className=' bg-main_color absolute top-0 bg-opacity-85 z-50 h-svh w-full flex flex-col items-center lg:flex lg:flex-row lg:justify-center lg:items-center'>
        <Image src={PhoneImage} alt='banner-image' className='w-1/2 mt-6 lg:w-1/6'></Image>
        <div className='w lg:flex lg:flex-col lg:justify-center lg:ml-36 lg:w-1/3 '>
          <div className='w-full   text-center lg:w-full  lg:text-start'>
            <h1 className='text-white font-bold text-2xl w-full lg:text-4xl  mt-2'>
              Prentendes ter Sucesso no Mundo das Apostas Disportivas?
            </h1>
            <h1 className='text-white font-thin text-xl mt-2'>
              Estátisticas e Fichas Num Só Lugar!
            </h1>
          </div>
          <div className='flex justify-center lg:flex lg:justify-start lg:items-center mt-5'>
            <Image src={IconAppleDownload} alt='banner-image' className=' cursor-pointer w-1/3 ml-2 ' ></Image>
            <Image src={IconPlayStore} alt='banner-image' className='w-1/3 cursor-pointer ml-2 '></Image>
          </div>
        </div>

      </div>
    </div>
  )
}
