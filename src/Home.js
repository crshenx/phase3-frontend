import React from 'react';
import { Link } from 'react-router-dom'

function Home() {
 
    return (
        <div className="splash">
            <div className="homeContainer">
                <h1>Yes to The Dress!</h1>
                <section className="description">
                    <p>If you have ever tried to shop for a wedding dress, you'll understand why this app is essential.</p>
                    <p>In the world of endless options, saying "yes to the dress" is as easy as clicking a button. Your wedding dress is at the tips of your fingers!</p>
                    <Link to={`/Catalog`}>
                    <button className='button btn button-primary'>Say yes to the dress →</button> 
                    </Link>
                </section>
            </div>
        </div>
    )
}

export default Home