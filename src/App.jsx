/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Slid from './components/Carousel';
import Footer from './components/Footer';
import Order from './components/Order';
import pakeNanya from '/pake-nanya.jpeg';
import About from './pages/about';
import { useState } from 'react';


export default function App() {
  
  const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
      };

  const [count, setCount] = useState(0)

  const [count2, setCount2] = useState(0)

  return (

    <>

      <Router>
        <Routes>
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>

      <div className="lg:w-11/12 lg:m-auto">
        <Navbar />
        <Slid />

        <div className="bg-primary lg:mt-10 pb-8">

          {/* detail program */}
          {/* <p className="font-bold text-xl  text-center lg:text-2xl text-white py-6">
            Detail Program
          </p>
        <div className="py-4 px-2 w-4/5 lg:w-1/2 bg-grey shadow-xl m-auto rounded-lg">
          <p className="font-semibold text-center text-base lg:text-lg text-dark">
          &ensp;Ini adalah salah satu Program kewirausahaan dari Smk Pertiwi Kuningan, di ambil dari
            salah satu mapel yaitu PKK yang dibimbing oleh bpk. dani.
          </p>
        </div> */}

        {/* detail produk */}
          <p className="font-bold text-xl text-center lg:text-2xl text-white py-6">
            Detail Produk
          </p>
        <div className="py-4 px-2 w-4/5 text-center lg:w-1/2 bg-slate-200 hover:bg-gray-300 m-auto shadow-xl rounded-lg">
          <p className="font-semibold text-base lg:text-lg text-dark pb-2">
          Selamat datang di Toko <span className="text-primary">Ocong</span> Company™
           kami menyediakan berbagai macam produk makanan, seperti Tahu <span className="text-primary">Kaget </span>
           dan Bakso <span className="text-yellow-600">Buled</span>.
          </p>
          <p className="font-semibold text-base lg:text-lg text-dark">
          Nah, barangkali kalian ada yang berminat, bisa langsung saja kunjungi kantin SPW yahhh, 
          lokasinya ada di dekat lab Rekayasa Perangkat Lunak.
          </p>
        </div>

        </div>

        <div className="mx-2 lg:w-1/2 lg:m-auto">

          {/* kenapa harus beli dari kami ? */}
          <p className="font-bold text-lg lg:text-xl py-4 px-2 mt-3 text-dark pb-2">
            Kenapa harus beli produk kami ??
          </p>
          <div className="py-4 px-2 lg:w-full bg-slate-200 hover:bg-gray-300 shadow-xl rounded-lg">

          <p className="font-semibold text-base lg:text-lg text-dark">
          &ensp; Produk yang kami sajikan adalah produk yang berkualitas, dan bahan-bahan 
          yang kami gunakan pun adalah bahan-bahan impor dari luar galaxy yaitu 
          <span className="font-bold"> Planet Bekasi</span>
          </p>
          </div>

        </div>

        <Order />

          {/* pertanyaan */}
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

          {/* komentar */}
          <div className="pt-7 pb-7 mt-3 w-full lg:bg-slate-900">
            <div className="lg:w-1/3 m-auto border-2 border-black lg:border-none bg-slate-900 lg:bg-slate-500">
              <p className="font-bold px-4 pt-3 text-xl text-center lg:text-2xl mb-7 text-white">
                Ayo berikan saran kalian 👇
              </p>
              <div className="flex justify-center">
              <div className="px-4 py-4">
                <p className="text-white font-semibold text-lg lg:text-x pb-4">
                  Nama :
                </p>
                <input type="text" className="w-72 h-7"/>

                <p className="text-white font-semibold text-lg lg:text-x py-4">
                  Kritik dan saran :
                </p>
                <textarea className="w-72 h-32"></textarea> <br />
                <button className="px-4 py-2 bg-sky-500 hover:bg-sky-300 mt-4">Kirim</button>
              </div>
              </div>
            </div>
          </div>

        <Footer />
      </div>

  </>

  )
}