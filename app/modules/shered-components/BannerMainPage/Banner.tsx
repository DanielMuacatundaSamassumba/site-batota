import React from 'react'
import bannerImage from './../../../../public/Feature-Graphic_01.png'
import IconAppleDownload from './../../../../public/disponivel-na-app-store-botao-1.png'
import IconPlayStore from './../../../../public/image copy 2.png'
import Image from 'next/image'
export default function Banner() {
  return (
    <div className='flex flex-col items-center bg-main_color lg:flex lg:flex-row'>
      <Image src={bannerImage} alt='banner-image' className='w-1/2 lg:w-1/5'></Image>
      <div className='p-2'>
        <h1 className='text-white font-bold text-xl text-center mt-2'>Os melhores Prognosticos e Fichas co maiores probabilidade de Ganho</h1>
        <div className='flex justify-center items-center'>
          <Image src={IconAppleDownload} alt='banner-image' className='w-1/3 ml-2 lg:w-1/6' ></Image>
          <Image src={IconPlayStore} alt='banner-image' className='w-1/3 ml-2 lg:w-1/6'></Image>
        </div>

      </div>
    </div>
  )
}
