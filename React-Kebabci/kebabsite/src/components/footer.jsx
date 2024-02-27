import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "../styles/footer.css"
import React from 'react';
function Footer() {
    return (
        <>
            <div className="footer">
               
                <div className="socialmedia">

                    <FaInstagram />
                    <FaFacebook />
                    <FaTwitter />
                </div>

                <div>
                    <p>TÜM HAKLARIMIZ SAKLIDIR | KEBAB YİYİN</p>
                </div>


            </div>
        </>
    );
}

export default Footer;