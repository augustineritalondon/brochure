import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu, setMenu] = useState(false);

  return (
    <>
        <nav className='bg-sky-900 text-white'>
            <div className="container">
                <div className='py-5 md:flex md:justify-between items-center'>
                    <div className='flex justify-between'>
                        <div>
                            <Link className='font-bold' to="/">DimkpaMotors</Link>
                        </div>
                        <div className='md:hidden' onClick={()=> setMenu(!menu)}>
                            <ion-icon name={menu ? 'close-outline' : 'menu-outline'}></ion-icon>
                        </div>
                    </div>

                    <ul className={`text-right md:flex md:justify-end absolute md:static bg-sky-600 md:bg-transparent w-full h-full transition-all duration-500 ease-in-out ${menu ? 'top-19 z-0 right-0 opacity-100 py-4  mt-4' : 'top-19 right-[-800px]'} md:opacity-100 `}>
                        <li className=''><Link className='px-4' to="/">Home</Link></li>
                        <li className=''><Link className='px-4' to="/">About</Link></li>
                        <li className=''><Link className='px-4' to="/">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar