/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import tahu from '/tahu2.jpeg';
import bakso from '/bakso2.jpeg';
import { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Order() {

    // const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    return (
        <>

            <div className="mx-2 my-10 lg:my-10 lg:w-4/5 lg:m-auto px-5">
                <div className="lg:w-4/5 lg:m-auto">
                <p className="font-bold text-lg lg:text-xl py-4 px-2 mt-5 mb-5 text-dark pb-2">
                    Ini dia beberapa produk Best Seller Kantin SPW 👇👇👇
                </p>
                <Swiper
                    slidesPerView={2}
                    centeredSlides={true}
                    spaceBetween={30}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                    <div className="px-3 py-3 bg-slate-200 hover:bg-gray-300">
                            <div className="w-4/5 m-auto border-2 border-black px-2 py-2 rounded-lg hover:bg-slate-200">
                                <img src={tahu} alt="" />
                            </div>
                            <div className="w-4/5 m-auto">
                            <p className="font-semibold text-base lg:text-lg text-primary hover:bg-slate-200">
                                Rp 3.000
                                </p>
                            <p className="font-semibold text-base hover:bg-slate-200">
                                Tahu kaget
                                </p>
                            </div>
                                
                            <div className=" m-auto w-4/5">
                                <div className="flex items-center">
                                <button className="font-bold text-base lg:text-xl p-1 pr-3" onClick={() => setCount2((count) => count2 - 1)}>
                                    -
                                </button>
                                    <p className="font-bold text-base text-primary lg:text-xl">
                                    {count2} Pcs
                                    </p>
                                <button className="font-bold text-base lg:text-xl ml-1 p-1 px-3" onClick={() => setCount2((count) => count2 + 1)}>
                                    +
                                </button>
                                </div>
                                <div className="px-2 py-2 bg-sky-400 w-20 rounded-md hover:bg-sky-300 lg:m-auto">
                                <a href="https://wa.me/+6285161310017" className="font-bold text-base lg:text-xl block">
                                    <p className="text-center">
                                    Beli
                                    </p>
                                </a>
                                </div>
                            </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="px-3 py-3 bg-slate-200 hover:bg-gray-300">
                            <div className="w-4/5 m-auto border-2 border-black px-2 py-2 rounded-lg hover:bg-slate-200">
                                <img src={bakso} alt="" />
                            </div>
                            <div className="w-4/5 m-auto">
                            <p className="font-semibold text-base lg:text-lg text-primary hover:bg-slate-200">
                                Rp 3.000
                                </p>
                            <p className="font-semibold text-base hover:bg-slate-200">
                                Tahu kaget
                                </p>
                            </div>
                                
                            <div className=" m-auto w-4/5">
                                <div className="flex items-center">
                                <button className="font-bold text-base lg:text-xl p-1 pr-3" onClick={() => setCount2((count) => count2 - 1)}>
                                    -
                                </button>
                                    <p className="font-bold text-base text-primary lg:text-xl">
                                    {count2} Pcs
                                    </p>
                                <button className="font-bold text-base lg:text-xl ml-1 p-1 px-3" onClick={() => setCount2((count) => count2 + 1)}>
                                    +
                                </button>
                                </div>
                                <div className="px-2 py-2 bg-sky-400 w-20 rounded-md hover:bg-sky-300 lg:m-auto">
                                <a href="https://wa.me/+6285161310017" className="font-bold text-base lg:text-xl block">
                                    <p className="text-center">
                                    Beli
                                    </p>
                                </a>
                                </div>
                            </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="px-3 py-3 bg-slate-200 hover:bg-gray-300">
                            <div className="w-4/5 m-auto border-2 border-black px-2 py-2 rounded-lg hover:bg-slate-200">
                                <img src={tahu} alt="" />
                            </div>
                            <div className="w-4/5 m-auto">
                            <p className="font-semibold text-base lg:text-lg text-primary hover:bg-slate-200">
                                Rp 3.000
                                </p>
                            <p className="font-semibold text-base hover:bg-slate-200">
                                Tahu kaget
                                </p>
                            </div>
                                
                            <div className=" m-auto w-4/5">
                                <div className="flex items-center">
                                <button className="font-bold text-base lg:text-xl p-1 pr-3" onClick={() => setCount2((count) => count2 - 1)}>
                                    -
                                </button>
                                    <p className="font-bold text-base text-primary lg:text-xl">
                                    {count2} Pcs
                                    </p>
                                <button className="font-bold text-base lg:text-xl ml-1 p-1 px-3" onClick={() => setCount2((count) => count2 + 1)}>
                                    +
                                </button>
                                </div>
                                <div className="px-2 py-2 bg-sky-400 w-20 rounded-md hover:bg-sky-300 lg:m-auto">
                                <a href="https://wa.me/+6285161310017" className="font-bold text-base lg:text-xl block">
                                    <p className="text-center">
                                    Beli
                                    </p>
                                </a>
                                </div>
                            </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="px-3 py-3 bg-slate-200 hover:bg-gray-300">
                            <div className="w-4/5 m-auto border-2 border-black px-2 py-2 rounded-lg hover:bg-slate-200">
                                <img src={bakso} alt="" />
                            </div>
                            <div className="w-4/5 m-auto">
                            <p className="font-semibold text-base lg:text-lg text-primary hover:bg-slate-200">
                                Rp 3.000
                                </p>
                            <p className="font-semibold text-base hover:bg-slate-200">
                                Tahu kaget
                                </p>
                            </div>
                                
                            <div className=" m-auto w-4/5">
                                <div className="flex items-center">
                                <button className="font-bold text-base lg:text-xl p-1 pr-3" onClick={() => setCount2((count) => count2 - 1)}>
                                    -
                                </button>
                                    <p className="font-bold text-base text-primary lg:text-xl">
                                    {count2} Pcs
                                    </p>
                                <button className="font-bold text-base lg:text-xl ml-1 p-1 px-3" onClick={() => setCount2((count) => count2 + 1)}>
                                    +
                                </button>
                                </div>
                                <div className="px-2 py-2 bg-sky-400 w-20 rounded-md hover:bg-sky-300 lg:m-auto">
                                <a href="https://wa.me/+6285161310017" className="font-bold text-base lg:text-xl block">
                                    <p className="text-center">
                                    Beli
                                    </p>
                                </a>
                                </div>
                            </div>
                            </div>
                    </SwiperSlide>

                </Swiper>
                </div>
            </div>

        </>
    )
}
