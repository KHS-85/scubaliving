import React from 'react'
import './dykkerrejser.scss';
import malta from '../../gfx/malta.jpg'
import norge from '../../gfx/norge.jpg'

const DykkerRejser = () => {
    return (

        <div>

        <article className="container-fluid">
        <div className="banner mt-5 pl-5 pr-5">
        <section className="row">
            <div className="col-11 col-sm-10 col-md-9 col-lg-8 col-xl-6 banner-title">
                    <h1 className="pl-5 pt-3 shop-title-text">Dyk ud i verden</h1>
            </div>
                <div className="col banner-title-grey"></div>
            
        </section>
        </div>

    <section className="shop-content row p-5">



        <div className="col-12 col-lg-6">
            <div className="card rounded-0 my-5">
                <img className="card-img-top p-1 p-sm-2 p-lg-3 p-xl-5" src={malta} alt="Malta" />
                <div className="card-body bg-black">
                    <h1 className="card-title text-white pt-4 my-0 pl-1 pl-sm-5">Malta</h1>
                    <p className="card-text text-white pb-5 my-0 pl-1 pl-sm-5">Oplev Malta og det helt fantastiske dyreliv og sammenhold. Vi arrangerer uforglemmelige dykkerrejser til Malta hele året rundt.</p>
                </div>
            </div>
        </div>


        <div className="col-12 col-lg-6">
            <div className="card rounded-0 my-5">
                <img className="card-img-top p-1 p-sm-2 p-lg-3 p-xl-5" src={norge} alt="Norge" />
                <div className="card-body bg-black">
                    <h1 className="card-title  text-white pt-4 my-0 pl-1 pl-sm-5">Norge</h1>
                    <p className="card-text text-white pb-5 my-0 pl-1 pl-sm-5">Nordeuropas bedste dykkerspots ligger i Norge. Vi har 25 års erfaring med dyk i Norge. Oplev det klareste vand i verden!</p>
                </div>
            </div>
        </div>


    </section>

    <section className="row">
        <div className="col text-center">
            <h1 className="hvr-grow">Se flere destination og muligheder her!</h1>
        </div>
    </section>



    </article >

    </div>
    )
}

export default DykkerRejser
