import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.scss'
import ScubaLogo from '../../../gfx/logo.svg'
import LockIcon from '../../../gfx/lock-icon-60x60.png'

const Nav = () => {
    return (

        <nav className="navbar navbar-expand-xl navbar-light bg-light px-0">

            
            {/* Navbar collapse button */}

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
             aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span>
            </button>

               {/* ScubaLiving Logo */}

           <span className="navbar-brand navbar-logo">
               <NavLink exact to="/" className="navbar_link" activeClassName="navbar_link--active"><img src={ScubaLogo} alt="ScubaLiving Logo"/></NavLink>
            </span> 


            {/* Collapses all links and searchbar */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                {/* List of links on Navbar*/}

                <ul className="navbar-nav pt-3 mx-auto">
                    <li className="nav-item active">
                        <NavLink exact to="/" className="navbar_link" activeClassName="navbar_link--active">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/shop" className="navbar_link" activeClassName="navbar_link--active">Dykkerudstyr</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/dykkerrejser" className="navbar_link" activeClassName="navbar_link--active">Dykkerrejser</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dykkerkurser" className="navbar_link" activeClassName="navbar_link--active">Dykkerkurser</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contactus" className="navbar_link" activeClassName="navbar_link--active">Kontakt</NavLink>
                    </li>
                    <li>
                        <NavLink to="/aboutus" className="navbar_link" activeClassName="navbar_link--active">Om Os</NavLink>
                    </li>
                </ul>


                {/* Searchbar */}

                <form className="form-inline py-2 mx-auto">
                    <input className="scuba-search" type="search" />
                    <button className="search-button" type="submit">Søg</button>
                </form>

                

                


            </div>

            {/* Login button */}

            <NavLink to="/logincomp" className="navbar_link" activeClassName="navbar_link--active">
                     <section className="container login-element px-0"> <img src={LockIcon} width="31" alt="Lock Icon"/>
                      <div className="login-button mx-0"> <p className="login-text">login</p> </div>
                    </section>
                </NavLink>

        </nav>



    )
}

export default Nav
