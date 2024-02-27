import React from "react";
import kebab8 from '../assets/kebab.avif'
import "../styles/contact.css"
function Contact() {
    return (  
        <>

            <div className="contactPage">
                <div className="imageContact">
                    <img src={kebab8} alt="" />
                </div>
                <form action="">
                    <h2>BİZİMLE İLETİŞİME GEÇİN</h2>
                    <label htmlFor="">Adınız</label>
                    <input type="text" name="" id="" placeholder="Adınızı Girin" />
                    <label htmlFor="">Email girin</label>
                    <input type="text" placeholder="Emaili girin " />
                    <label htmlFor="">Mesajınızı girin</label>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Mesajınızı girin"></textarea>
                </form>
            </div>
        </>
    );
}

export default Contact;