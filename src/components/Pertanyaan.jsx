import { useState } from "react";
import pakeNanya from '/pake-nanya.jpeg';

export default function Pertanyaan () {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
      };

    return (
        <>

            <div className=" mt-10 mx-2">
            <p className="font-bold text-xl lg:text-2xl py-4 px-4 pb-8 hover:underline text-center" onClick={toggleNavbar}>
                Pertanyaan - Pertanyaan Konsumen <br />
                <span className="font-medium text-lg lg:text-xl"> (click me)</span> 
            </p>
            {isOpen && (
            <><div className="flex flex-wrap lg:justify-evenly items-stretch">

                <div className="w-1/2 lg:mb-20 py-4 px-3 lg:px-2 lg:w-2/6 bg-grey border-r-2 border-b-2 border-black lg:border-none">
                    <div className="flex flex-row ">
                    <p className="font-semibold text-sm lg:text-xl pr-1">
                        1.
                    </p>
                    <p className="font-semibold text-sm lg:text-xl">
                        Bagaimana rasanya ?, apakah enak ?
                    </p>
                    </div>
                    <div className="px-4 font-normal text-xs lg:text-lg">
                    Jawaban : <br />
                    Ya jelas enak lahh
                    <img src={pakeNanya} alt="" className='pt-3 w-10 lg:w-28' />
                    </div>
                </div>

                <div className="w-1/2 lg:mb-20 py-4 px-3 lg:px-2 lg:w-1/3 bg-grey border-b-2 border-black lg:border-none">
                    <div className="flex flex-row ">
                    <p className="font-semibold text-sm lg:text-xl pr-1">
                        2.
                    </p>
                    <p className="font-semibold text-sm lg:text-xl">
                        Pedagang nya siapa aja ?
                    </p>
                    </div>
                    <div className="px-4 font-normal text-xs lg:text-lg">
                    Jawaban : <br />
                    untuk Pedagangnya terdiri dari 7 orang, diantaranya : <br />

                    Tegar,
                    Alip,
                    Hanif,
                    Yudi,
                    Daffa,
                    Haris,
                    Rafly.

                    </div>
                </div>

                </div><div className="flex flex-wrap lg:justify-evenly items-stretch">

                    <div className="w-1/2 lg:mb-20 py-4 px-3 lg:px-2 lg:w-2/6 bg-grey border-r-2 border-black lg:border-none ">
                    <div className="flex flex-row ">
                        <p className="font-semibold text-sm lg:text-xl pr-1">
                        3.
                        </p>
                        <p className="font-semibold text-sm lg:text-xl">
                        Rasa dari tahu kagetnya gimana ?
                        </p>
                    </div>
                    <div className="px-4 font-normal text-xs lg:text-lg">
                        Jawaban : <br />
                        Rasanya gurih dan pedas. <br />

                    </div>
                    </div>

                    <div className="w-1/2 lg:mb-20 py-4 px-3 lg:px-2 lg:w-2/6 bg-grey ">
                    <div className="flex flex-row ">
                        <p className="font-semibold text-sm lg:text-xl pr-1">
                        4.
                        </p>
                        <p className="font-semibold text-sm lg:text-xl">
                        Apakah ada varian tahu yang gak pedes ?
                        </p>
                    </div>
                    <div className="px-4 font-normal text-xs lg:text-lg">
                        Jawaban : <br />
                        Untuk saat ini kita belum memiliki varian rasa yang tidak pedas.

                    </div>
                    </div>

                </div></>
            )}
            </div>

        </>
    )
}