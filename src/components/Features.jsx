export default function Featured(){
    return (
        <div className="features menu-section">
            <h2 className="subTitle" data-aos="zoom-in" data-aos-duration="500"><span>Featured</span> Games</h2>
            <div className="features-games">
                <a href="https://joquiz.netlify.app/" target="_blank" data-aos="flip-up" data-aos-duration="1000">
                    <img className="features-games--image" src="./assets/joquiz.png" alt="" />
                </a>
                <a href="https://jotenzies.netlify.app/" target="_blank" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="400">
                    <img className="features-games--image" src="./assets/tenzies.png" alt="" />
                </a>
                <a href="https://jorps.vercel.app/" target="_blank" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="800">
                    <img className="features-games--image" src="./assets/RPS.png" alt="" />
                </a>
            </div>
        </div>
    )
}