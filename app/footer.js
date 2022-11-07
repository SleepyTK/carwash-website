import './globals.css';

// FONT AWESOME ICONS //
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faDiscord, faInstagram, faLinkedin, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
// FONT AWESOME ICONS //

export default function footer() {
    return (
        <div className="footer">
            <div className="footerColumn">
                <h3 className="links"> LINKS</h3>
                <a className="footerColumnElement" href="#home"> Home </a>
                <a className="footerColumnElement" href="#reviews"> Reviews </a>
                <a className="footerColumnElement" href="#services"> Services </a>
                <a className="footerColumnElement" href="#book"> Book </a>
                <a className="footerColumnElement" href="#information"> Information </a>
                <a className="footerColumnElement" href="#contact us"> Contact Us </a>
            </div>
            <div className="footerColumn">
                <h3 className="newsletter">NEWSLETTER</h3>

                <form>
                    <input type text="text" placeholder="Your Email Address"></input>
                </form>

                <button className="subscribeButton" type="submit">SUBSCRIBE NOW</button>
            </div>
            <div className="footerColumn">
                <h3 className="contact">CONTACT</h3>
                <div>
                <p>123, xyz road, abc 3 <br />
                   Friesland, Drachten</p>
                <a><FontAwesomeIcon className="brandIcon" icon={faInstagram} /></a>
                <a><FontAwesomeIcon className="brandIcon" icon={faWhatsapp} /></a>
                <a><FontAwesomeIcon className="discord" icon={faDiscord} /></a>
                <a><FontAwesomeIcon className="brandIcon" icon={faLinkedin} /></a>
                </div>
            </div>
        </div>
    );
}