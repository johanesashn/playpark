import { useNavigate } from 'react-router-dom'
import Loader from './Loader'

export default function Hero(){
    const navigate = useNavigate()
    const gotoFeatured = () => {
        navigate("menu")
    }

    return (
        <div className="hero">
            <Loader/>
            <img className="hero-image" src="./assets/controller.png" alt=""/>
            <div className="hero-title">
                <h1 data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1100">P</h1>
                <h1 data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1300">L</h1>
                <h1 data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1500">A</h1>
                <h1 data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1700">Y</h1>
                <h1 data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1900">P</h1>
                <h1 data-aos="zoom-in" data-aos-duration="500" data-aos-delay="2100">A</h1>
                <h1 data-aos="zoom-in" data-aos-duration="500" data-aos-delay="2300">R</h1>
                <h1 data-aos="zoom-in" data-aos-duration="500" data-aos-delay="2500">K</h1>
            </div>
            <button className="hero-button" onClick={gotoFeatured} data-aos="flip-up" data-aos-duration="800" data-aos-delay="2500">Get In Touch</button>
        </div>
    )
}