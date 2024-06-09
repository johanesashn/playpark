export default function Contact(){
    return (
        <div className="contact menu-section">
            <h2 className="subTitle" data-aos="fade-up" data-aos-duration="500"><span>Send</span> me a message</h2>
            <form action="https://formspree.io/f/xwkdebbw" method="POST" className="contact-form">
                <input 
                    name="name"
                    className="input-name" 
                    type="text" 
                    placeholder="Your name" 
                    data-aos="zoom-in" 
                    data-aos-duration="500"
                    required
                />
                <input 
                    name="email"
                    className="input-mail" 
                    type="email" 
                    placeholder="Your mail" 
                    data-aos="zoom-in" 
                    data-aos-duration="500"
                    required
                />
                <textarea 
                    name="feedback"
                    className="input-feedback" 
                    type="text" 
                    placeholder="Send me your feedback"
                    data-aos="zoom-in" 
                    data-aos-duration="500"
                />
                <button type="submit" className="submit" data-aos="zoom-in" data-aos-duration="500">Submit</button>
            </form>
        </div>
    )
}