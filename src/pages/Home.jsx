// snippet: rafce //
import React from 'react'
import ScubaHero from '../components/Layout/ScubaHero/ScubaHero'
import Shop from './Shop'
import Rejser from './Rejser'
import Kurser from './Kurser'
import Contact from './Contact'
import About from './About'

const Home = () => {
    return (
        <div className="row m-0">
            <div className="col-12 p-0">
                <ScubaHero /> 
                <Shop />
                <Rejser />
                <Kurser />
                <Contact />
                <About />
            </div>
        </div>
    )
}

export default Home