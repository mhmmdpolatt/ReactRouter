import React from "react";
import kebab from '../assets/kebab.avif'
import kebab2 from '../assets/kebab2.jpg'
import kebab3 from '../assets/kebab3.webp'
import "../styles/menu.css"
function Menu() {
    return (
        
            <div className="menu">
                <div className="menuCard">
                    <div className="menuİmage">
                        <img src={kebab} alt="" />
                    </div>
                    <div className="cardFooter">
                        <h3>Adana Kebab</h3>
                        <p>150 Tl</p>
                    </div>
                    <button>Ekle</button>
                </div>
                <div className="menuCard">
                    <div className="menuİmage">
                        <img src={kebab2} alt="" />
                    </div>
                    <div className="cardFooter">
                        <h3>Urfa Kebab</h3>
                        <p>150 Tl</p>
                    </div>
                    <button>Ekle</button>
                </div>
                <div className="menuCard">
                    <div className="menuİmage">
                        <img src={kebab3} alt="" />
                    </div>
                    <div className="cardFooter">
                        <h3>Antep Kebab</h3>
                        <p>150 Tl</p>
                    </div>
                    <button>Ekle</button>
                </div>
                <div className="menuCard">
                    <div className="menuİmage">
                        <img src={kebab} alt="" />
                    </div>
                    <div className="cardFooter">
                        <h3>Adana Kebab</h3>
                        <p>150 Tl</p>
                    </div>
                    <button>Ekle</button>
                </div>
                <div className="menuCard">
                    <div className="menuİmage">
                        <img src={kebab} alt="" />
                    </div>
                    <div className="cardFooter">
                        <h3>Adana Kebab</h3>
                        <p>150 Tl</p>
                    </div>
                    <button>Ekle</button>
                </div>
                <div className="menuCard">
                    <div className="menuİmage">
                        <img src={kebab} alt="" />
                    </div>
                    <div className="cardFooter">
                        <h3>Adana Kebab</h3>
                        <p>150 Tl</p>
                    </div>
                    <button>Ekle</button>
                </div>
                <div className="menuCard">
                    <div className="menuİmage">
                        <img src={kebab} alt="" />
                    </div>
                    <div className="cardFooter">
                        <h3>Adana Kebab</h3>
                        <p>150 Tl</p>
                    </div>
                    <button>Ekle</button>
                </div>
                <div className="menuCard">
                    <div className="menuİmage">
                        <img src={kebab} alt="" />
                    </div>
                    <div className="cardFooter">
                        <h3>Adana Kebab</h3>
                        <p>150 Tl</p>
                    </div>
                    <button>Ekle</button>
                </div>
              
            </div>



        
    );
}

export default Menu;