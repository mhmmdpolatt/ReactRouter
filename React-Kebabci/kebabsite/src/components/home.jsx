import "../styles/home.css"
import { Link} from "react-router-dom"
function Home() {
    return ( 

        <>
            <div className="homePage">
                <h1>EN İYİ KEBAB DENEYİMİNİZİ BURDA YAŞAYACAKSINIZ </h1>
                <Link to="/menu">
                    <button>SİPARİŞ VER</button>
                </Link>

            </div>
        </>
     );
}

export default Home;