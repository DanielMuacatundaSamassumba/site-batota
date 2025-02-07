"use client"
import { useState } from 'react'
import logo_batota from './../../../../public/image.png'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import MenuPhoneDevices from './MenuPhoneDevices'
import { X } from 'lucide-react'
export default function Header() {
    const [menuControl, setMenuControl] = useState(false)
    function showMenu() {

    }
    return (
        <div className=''>
            <header className=' p-5 bg-white shadow-sm flex justify-between items-center  w-full md:flex md:flex-row md:justify-around'>
                <div className=''>
                    <Image src={logo_batota} alt='logo' className='w-32'></Image>
                </div>
                <nav className=' w-full md:w-1/2 md:bg-'>
                    <div className='w-full  flex justify-end lg:flex lg:'>
                        <div className='lg:hidden'>
                            {
                                menuControl ?
                                    <X size={40} onClick={() => setMenuControl(false)} className='cursor-pointer'></X>
                                    :
                                    <Menu size={40} onClick={() => setMenuControl(true)}  className='cursor-pointer'></Menu>

                            }
                        </div>
                    </div>
                    <ul className='hidden lg:flex justify-around items-center text-lg font-medium '>
                        <li className='  p-2 hover:text-main_color cursor-pointer'>Inicio</li>
                        <li className='  p-2 hover:text-main_color cursor-pointer'>Politica de Privacidade</li>
                        <li className='  p-2 hover:text-main_color cursor-pointer'>Termos e condições de uso</li>
                    </ul>

                </nav>

            </header>
            {
                menuControl ?
                    <MenuPhoneDevices></MenuPhoneDevices>
                    : ""
            }
        </div>
    )
}
