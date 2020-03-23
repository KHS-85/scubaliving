import React from 'react'
import ScubaMan from '../components/gfx/scubaman.png'

const NotFound = () => {
    return (
        <div className="container-fluid" >
            <div className="row">
                <div className="col">

            <h2 className="text-center py-5">Beklager - siden findes ikke!</h2>
            <img className="img-fluid mx-auto d-block py-5 mb-5" src={ScubaMan} alt="Scuba Man"/>
            

            </div>
            </div>
        </div>
    )
}

export default NotFound
