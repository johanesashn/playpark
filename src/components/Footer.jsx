export default function Footer(){
    return (
        <footer>
            <h2 className="subTitle footer-title"><span>Meet me at</span></h2>
            <ul className="footer-list">
                <li className="footer-list--item"><a href=""><img src="./assets/gmail.png" alt="" /></a></li>
                <li className="footer-list--item"><a href=""><img src="./assets/linkedin.png" alt="" /></a></li>
                <li className="footer-list--item"><a href=""><img src="./assets/instagram.png" alt="" /></a></li>
            </ul>
            <p className="footer-copyright">&copy; 2023 Le's Play | All Rights Reserved</p>
        </footer>
    )
}