import React from 'react'
import './footercomp.scss'

const FooterComp = () => {
    return (
        <div className="container-fluid main-content text-white">
            <div className="row py-5">

                {/* Empty Space */}
                <div className="col-1 col-md-3"></div>

                {/* First Column */}
                <div className="col-12 col-md-2">
                    <h2 className="footer-head-text pt-5">Praktiske oplysninger</h2>
                    <ul className="list-group text-muted">
                        <li className="footer-text">Om Scuba Living</li>
                        <li className="footer-text">Kontakt</li>
                        <li className="footer-text">Handelsbetingelser</li>
                        <li className="footer-text">Personaledatapolitik</li>
                        <li className="footer-text">Åbningstider</li>
                    </ul>
                </div>

                {/* Second Column */}
                <div className="col-12 col-md-2">
                    <h2 className="footer-head-text pt-5">Praktiske oplysninger</h2>
                    <ul className="list-group text-muted">
                        <li className="footer-text">Hovedkategorier</li>
                        <li className="footer-text">Dykkerudstyr</li>
                        <li className="footer-text">Dykkerrejser</li>
                        <li className="footer-text">Dykkerkurser</li>
                        <li className="footer-text">Service</li>
                    </ul>
                </div>

                {/* Third Column */}
                <div className="col-12 col-md-2">
                    <h2 className="footer-head-text pt-5">Sociale Medier - Følg os her:</h2>
                    <ul className="list-group text-muted">
                        <li className="footer-text">LinkedIn</li>
                        <li className="footer-text">Facebook</li>
                        <li className="footer-text">Instagram</li>
                    </ul>
                </div>

                {/* Empty Space */}
                <div className="col-1 col-md-3"></div>


            </div>
        </div>
    )
}

export default FooterComp
