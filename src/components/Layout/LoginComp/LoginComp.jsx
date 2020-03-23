import React from 'react'
import './logincomp.scss'

const LoginComp = () => {
    return (

        <div>
            <article className="container">
                <section className="row">

                    <div className="col-12 pt-5 mt-5">
                        <h2>Allerede medlem? Login her:</h2>
                        <form action="/login_page">
                            <div class="form-group">
                                <label for="email">Email adresse:</label>
                                <input type="email" class="form-control" placeholder="Indtast email" id="email" />
                            </div>
                            <div class="form-group">
                                <label for="pwd">Password:</label>
                                <input type="password" class="form-control" placeholder="Indtast password" id="pwd" required />
                            </div>
                            <div class="form-group form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" /> Husk mig
                                </label>
                            </div>

                            <button type="submit" class="btn btn-primary">Login</button>
                        </form>
                    </div>




                    <div className="col-12 py-5 my-5">
                        <h2>Ikke medlem endnu? Opret ny bruger her:</h2>



                        <form action="/new_account" class="was-validated">
                            <div class="form-group">
                                <label for="email-new">Email-adresse:</label>
                                <input type="email" class="form-control" id="email-new" placeholder="Indtast email-adresse" name="email-new" required />
                                <div class="valid-feedback">Email-adressen er gyldig</div>
                                <div class="invalid-feedback">Email-adressen er ugyldig</div>
                            </div>
                            <div class="form-group">
                                <label for="uname">Brugernavn:</label>
                                <input type="text" class="form-control" id="uname" placeholder="Indtast brugernavn" name="uname" required />
                                <div class="valid-feedback">Dit valgte brugernavn er gyldigt</div>
                                <div class="invalid-feedback">Skriv venligst dit ønskede brugernavn her</div>
                            </div>
                            <div class="form-group">
                                <label for="pwd">Password:</label>
                                <input type="password" class="form-control" id="pwd" placeholder="Indtast password" name="pswd" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" required />
                                <div class="valid-feedback">Dit valgte password er gyldigt</div>
                                <div class="invalid-feedback">Skal minimum indholde 6 tegn, et stort og et lille bogstav, samt minimum 1 tal.</div>
                            </div>
                            <div class="form-group form-check">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" name="remember" required /> Jeg er over 18 år gammel og accepterer Scubalivings betingelser.
                                    
                                  
                                </label>
                            </div>
                            <button type="submit" class="btn btn-primary">Opret bruger</button>
                        </form>




                    </div>
                </section>
            </article>
        </div>
    )
}

export default LoginComp
