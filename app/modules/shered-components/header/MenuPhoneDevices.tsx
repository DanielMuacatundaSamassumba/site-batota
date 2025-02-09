import React from 'react'
import Link from 'next/link'
export default function MenuPhoneDevices() {
    return (
        <div className='bg-white  w-full lg:hidden'>
            <ul className='text-lg p-2'>
                <Link href="/"> <li className=' border-b p-2 hover:text-main_color cursor-pointer'>Inicio</li></Link>
                <Link href="/modules/privacy-policy">
                    <li className="border-b p-2 hover:text-main_color cursor-pointer list-none">Política de Privacidade</li>
                </Link>
                <Link href="/modules/terms-of-service">
                    <li className='border-b  p-2 hover:text-main_color cursor-pointer'>Termos e condições de uso</li>
                </Link>
                <Link href="/" className=' w-1/3'>
                    <li >
                        <button className=" text-white p-2 w-1/2 bg-main_color rounded-sm">
                            Blog
                        </button>
                    </li>
                </Link>

            </ul>
        </div>
    )
}
