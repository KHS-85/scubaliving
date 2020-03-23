import React from 'react'
import './dykkerudstyr.scss'
import regulator from '../../gfx/reg.jpg'
import finne from '../../gfx/fine.jpg'
import handske from '../../gfx/hanske.jpg'
import maske from '../../gfx/maske.jpg'



const DykkerUdstyr = () => {
    return (
        <article className="container-fluid">
            <div className="banner mt-5 px-5">
            <section className="row">
                <div className="col-11 col-sm-10 col-md-9 col-lg-8 col-xl-6 banner-title">
                        <h1 className="pl-5 pt-3 shop-title-text">Mest populære dykkerudstyr</h1>
                </div>
                    <div className="col banner-title-grey"></div>
                
            </section>
            </div>

        <section className="shop-content row p-5">

            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                <div className="card text-center text-muted p-5 my-3">
                    <img className="card-img-top" src={regulator} alt="diving regulator" />
                    <div className="card-body">
                        <h2 className="card-title">Regulator med resist</h2>
                        <p className="card-text">kr. 889,-</p>
                    </div>
                </div>
            </div>


            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                <div className="card text-center text-muted p-5 my-3">
                    <img className="card-img-top" src={maske} alt="dykkermaske" />
                    <div className="card-body">
                        <h2 className="card-title">Aqualung Impression</h2>
                        <p className="card-text">kr. 540,-</p>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                <div className="card text-center text-muted p-5 my-3">
                    <img className="card-img-top" src={finne} alt="rejsefinne" />
                    <div className="card-body">
                        <h2 className="card-title">ScubaPro Rejsefinne</h2>
                        <p className="card-text">kr. 999,-</p>
                    </div>
                </div>
            </div>


            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                <div className="card text-center text-muted p-5 my-3">
                    <img className="card-img-top" src={handske} alt="handske" />
                    <div className="card-body">
                        <h2 className="card-title">Coldwater Gloves</h2>
                        <p className="card-text">kr. 1499,-</p>
                    </div>
                </div>
            </div>


        </section>

        <section className="row">
            <div className="col text-center">
                <h1>Se mere lækkert udstyr her!</h1>
            </div>
        </section>



        </article >

    )
}

export default DykkerUdstyr