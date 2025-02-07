import React from 'react'

export default function MenuPhoneDevices() {
    return (
        <div className='bg-white absolute w-full lg:hidden'>
            <ul className='text-lg p-2'>
                <li className=' border-b p-2 hover:text-main_color cursor-pointer'>Inicio</li>
                <li className=' border-b p-2 hover:text-main_color cursor-pointer'>Politica de Privacidade</li>
                <li className='  p-2 hover:text-main_color cursor-pointer'>Termos e condições de uso</li>
            </ul>
        </div>
    )
}
