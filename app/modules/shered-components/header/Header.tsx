"use client"
import { useState } from 'react'
import logo_batota from './../../../../public/image.png'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import MenuPhoneDevices from './MenuPhoneDevices'
import { X } from 'lucide-react'
import Link from 'next/link'
export default function Header() {
    const [menuControl, setMenuControl] = useState(false)
    return (
        <div className='bg-white w-full'>
            <header className=' p-5 bg-white shadow-sm flex justify-around items-center  w-full md:flex md:flex-row md:justify-around'>
                <div className='md:w-1/2 flex justify-center'>
                 <Link href="/">    <Image src={logo_batota} alt='logo' className='w-32'></Image></Link>
                </div>
                <nav className=' w-full md:w-4/3 '>
                    <div className='w-full  flex justify-end lg: '>
                        <div className='lg:hidden'>
                            {
                                menuControl ?
                                    <X size={40} onClick={() => setMenuControl(false)} className='cursor-pointer'></X>
                                    :
                                    <Menu size={40} onClick={() => setMenuControl(true)} className='cursor-pointer'></Menu>

                            }
                        </div>
                    </div>
                    <ul className='hidden lg:flex justify-around items-center text-lg font-medium'>
                        <Link href="/"> <li className=' p-2 hover:text-main_color cursor-pointer font-semibold'>Inicio</li></Link>


                        <Link href="/modules/privacy-policy">
                            <li className="p-2 hover:text-main_color cursor-pointer font-semibold list-none">Política de Privacidade</li>
                        </Link>
                        <Link href="/modules/terms-of-service">
                            <li className=' font-semibold  p-2 hover:text-main_color cursor-pointer'>Termos e condições de uso</li>
                        </Link>
                        <Link href="/" className=' w-1/3'>
                            <li >
                                <button className=" text-white p-2 w-1/2 bg-main_color rounded-sm">
                                    Blog
                                </button>
                            </li>
                        </Link>

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
