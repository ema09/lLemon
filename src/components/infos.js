import React from "react";
import { Link } from "react-router-dom";
import food from "../assets/image.webp"


const Infos = () => {
    return(
        <header>
            <section>
            <div>
            <h2>Little Lemon</h2>
            <h3>Barcellona</h3>
            <p>A tasting menu, thath will drive you to an explosion of the senses carried out at just the right pace. </p>
            <Link to="/Booking"><button aria-label="On Click">Reserve Table</button></Link>
            </div>
            <div>
                <img src={food}></img>
            </div>
            </section>
        </header>
    )
}

export default Infos;