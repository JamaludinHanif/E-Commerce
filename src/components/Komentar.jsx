export default function Komentar () {
    return (
        <>
        
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

        </>
    )
}