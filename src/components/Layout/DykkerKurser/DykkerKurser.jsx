import React from 'react'
import './dykkerkurser.scss';
import padilogo from '../../gfx/padi.svg'

const DykkerKurser = () => {
    return (

        <article className="container-fluid">

            <section className="banner mt-5 pl-5 pr-5">
                <div className="row">
                    <div className="col-11 col-sm-10 col-md-9 col-lg-8 col-xl-6 banner-title">
                        <h1 className="pl-5 pt-3 shop-title-text">Padi - Dykkercertifikat</h1>
                    </div>
                    <div className="col banner-title-grey"></div>

                </div>
            </section>

            <section className="row p-5 testbox">

                

                    <div className="col-12 col-lg-6 padikursus-text">
                        <div className="text p-5 m-5">
                        <h2>Tag et internationalt anerkendt dykkercertifikat</h2>
                        <p className="roboto-text">Her finder du et stort udvalg af dykkerkuser lige fra begynder
                            til professionel. vi er et af Danmarks førende dykkercentre, som uddanner fra PADI
                            orginasitationen. Når du vælger at tage et dykkercertifikat hos os, får du ikke kun
                            et internationalt anerkendt dykkercertifikat til markedets bedste priser, du får også
                            et dykkerkursus hvor kvaliteten er i top.
                            <br/> <br/>
                            Vi har kompetente instruktører på vores dykkerkurser. Erfaring, tillid og sikkerhed
                            er vigtigt, når du dykker med os, derfor står vi klar med et stort hold af kompetente
                            instruktører.
                        </p>
                        </div>
                    </div>

                    <div className="col padikursus-logo">
                        <div className="text-center text-lg-right pr-lg-5 pb-5 py-5">
                            <img className="img-padi" src={padilogo} alt="Padi Logo" />
                        </div>
                        
                    </div>

                

            </section>

            <section className="row">
            <div className="col text-center pb-5">
                <h1>Se alle kurser og certifikater her!</h1>
            </div>
        </section>


        </article>

    )
}

export default DykkerKurser
