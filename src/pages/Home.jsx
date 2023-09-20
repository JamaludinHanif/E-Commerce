import Footer from "../components/Footer";
import Komentar from "../components/Komentar";
import Navbar from "../components/Navbar";
import Opening from "../components/Opening";
import Order from "../components/Order";
import Pertanyaan from "../components/Pertanyaan";
import Slider from "../components/Slider";

export default function Home() {
    return (
        <>
        
        <Navbar />
        <Slider />
        <Opening />
        <Order />
        <Pertanyaan />
        <Komentar />
        <Footer />
        
        </>
    )
}