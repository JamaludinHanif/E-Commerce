/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import menu from '/menu.svg';
import keranjang from '/keranjang-belanja.svg';

export default function Navbar() {

    const navigasi = useNavigate()

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
      };

    const [isOpen2, setIsOpen2] = useState(false);

    const toggleNavbar2 = () => {
        setIsOpen2(!isOpen2)
    }

    const [isOpen3, setIsOpen3] = useState(false);

    const toggleNavbar3 = () => {
        setIsOpen3(!isOpen3)
    }

    return (
        <>
            

                <nav className="sticky top-0 z-30 bg-primary lg:bg-white px-4 py-4 lg:px-5 lg:py-5">
                    {/* Mobile menu button*/}
                    {/* <button type="button">
                            
                        </button> */}
                    {/* dekstop */}
                    <div className="flex items-center justify-between">
                    {/* logo */}
                    <div className="flex flex-shrink-0 items-center lg:hidden">
                        <img className="h-8 w-auto" alt="buat logo"/>
                    </div>
                    <div className="font-bold text-2xl hidden lg:block">
                        <span className="text-red-600">Ocong</span> Company™
                    </div>
                    {/* end logo */}
                    <div className="hidden lg:flex lg:flex-row lg:justify-between">
                        <img src={keranjang} alt="" width={30} height={30} className='mr-4'/>
                        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                        <a onClick={() => navigasi('/')} className="text-dark hover:bg-primary hover:text-white rounded-md px-3 py-2 text-xl font-medium">Home</a>
                        <a href="https://www.instagram.com/ocong_company/" className="text-dark hover:bg-primary hover:text-white rounded-md px-3 py-2 text-xl font-medium">Sosial Media</a>
                        <a onClick={() => navigasi('/producs')} className="text-dark hover:bg-primary hover:text-white rounded-md px-3 py-2 text-xl font-medium">List Produk</a>
                        <a onClick={toggleNavbar3} className="text-dark hover:bg-primary hover:text-white rounded-md px-3 py-2 text-xl font-medium">About</a>
                    </div>
                        <div className="flex flex-row lg:hidden">
                            <div className="">
                                <img src={keranjang} alt="" width={25} height={25} className='mr-4'/>
                            </div>
                            <div id="hamburger-menu" className="" onClick={toggleNavbar}>
                                <img src={menu} alt="" width={25} height={25} />
                            </div>
                        </div>
                    </div>
                    {/* end dekdtop mode */}
                    {/* Mobile menu */}
                    {isOpen && (
                        <>
                        <div id="mobile-menu" className="mt-5 bg-slate-300 ">        
                        <a onClick={() => navigasi('/')} className="text-dark hover:bg-primary hover:text-white block px-3 py-2 text-base font-medium">Home</a>
                        <a href="https://www.instagram.com/ocong_company/" className="text-dark hover:bg-primary hover:text-white block px-3 py-2 text-base font-medium">Sosial Media</a>
                        <a onClick={() => navigasi('/producs')} className="text-dark hover:bg-primary hover:text-white block px-3 py-2 text-base font-medium">List Produk</a>
                        <a onClick={toggleNavbar2} className="text-dark hover:bg-primary hover:text-white block px-3 py-2 text-base font-medium">About</a>
                        </div>
                        
                        {isOpen2 && (
                            <div id="mobile-menu" className="mt-5 bg-slate-300 ">
                            <p className="text-dark hover:bg-primary hover:text-white block px-3 py-2 text-base font-medium">
                                Website ini dibuat oleh Hanif kelas XI Rpl 1
                            </p>
                            </div>
                        )}  
                        </>
                    )}
                        {isOpen3 && (
                            <div id="mobile-menu" className="mt-5 bg-slate-300 ">
                            <p className="text-dark hover:bg-primary hover:text-white block px-3 py-2 text-base font-medium">
                                Website ini dibuat oleh Hanif kelas XI Rpl 1
                            </p>
                            </div>
                        )} 
                    
                </nav>


        </>
    )
}