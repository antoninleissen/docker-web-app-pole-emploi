import React, { Component } from 'react';
import serialize from 'form-serialize';
import '../less/style.less';
import '../less/workshop.less';
import Api from '../Api';

class Home extends Component {

    constructor(props){

        super(props);

        this.state = {
            initial: true,
            login: false,
            register: false,
            available: "",
            special: "",
            europe: "",
            registered: "",
            personnal: "",
            help: false
        };

        this._askForLogin = this._askForLogin.bind(this);
        this._askForRegister = this._askForRegister.bind(this);
        this._handleChangeAvailable = this._handleChangeAvailable.bind(this);
        this._handleChangeSpecial = this._handleChangeSpecial.bind(this);
        this._handleChangeEurope = this._handleChangeEurope.bind(this);
        this._handleChangeRegistered = this._handleChangeRegistered.bind(this);
        this._handleChangePersonnal = this._handleChangePersonnal.bind(this);

    }

    _askForRegister(){
        this.setState({
            initial: false,
            register: true
        });
    }

    _askForLogin(){
        this.setState({
            initial: false,
            login: true
        });
    }

    _handleChangeAvailable(event){
        this.setState({
            available: event.target.value
        });
    }

    _handleChangeSpecial(event){
        this.setState({
            special: event.target.value
        });
    }

    _handleChangeEurope(event){
        this.setState({
            europe: event.target.value
        })
    }

    _handleChangeRegistered(event){
        this.setState({
            registered: event.target.value
        })
    }

    _handleChangePersonnal(event){
        this.setState({
            personnal: event.target.value
        })
    }

    componentDidMount(){

        let IDLE_TIMEOUT = 30; //seconds
        let _idleSecondsCounter = 0;
        document.onclick = function() {
            _idleSecondsCounter = 0;
        };
        document.onkeypress = function() {
            _idleSecondsCounter = 0;
        };

        let myInterval = window.setInterval(CheckIdleTime, 1000);

        function CheckIdleTime() {
            _idleSecondsCounter++;
            console.log(_idleSecondsCounter);

            if (_idleSecondsCounter >= IDLE_TIMEOUT) {
                Api.warning("etat=2&pila=1&etape=inscription&erreur=delai_30s");
                window.clearInterval(myInterval);
            }
        }

    }

    render(){

        console.log(this.state.available);

        return (
            <div>
                { this.state.initial === true &&
                    <div className="col-lg-12 content">
                        <div className="col-lg-4 col-lg-offset-2">
                            <img id="logo-home" src="http://workshop.local/static/images/register_icon.png" onClick={() => {this._askForRegister()}} />
                            <span id="span-home" onClick={() => {this._askForRegister()}}>Inscrivez-vous </span>
                        </div>
                        <div className="col-lg-4">
                            <img id="logo-home" src="http://workshop.local/static/images/login.png" onClick={() => {this._askForLogin()}}/>
                            <span id="span-home" onClick={() => {this._askForLogin()}}>Connectez-vous</span>
                        </div>
                    </div>}

                { this.state.login === true &&
                    <form id="loginForm" className="col-lg-4 col-lg-offset-4">
                        <div className="formValue">
                            <label className="divInfo" htmlFor="login">Login : </label>
                            <input className="col-lg-12 col-md-12 col-sm-12 col-xs-12 input" name="login" />
                        </div>

                        <div className="formValue">
                            <label className="divInfo" htmlFor="password">{'Mot de passe : '}</label>
                            <input className="col-lg-12 col-md-12 col-sm-12 col-xs-12 input" type="password" name="password" />
                        </div>

                        <button className="button-login">Valider</button>
                    </form>
                }

                { this.state.register === true &&
                    <div>
                        <div className="content">
                            <span id="registerTitle">
                                Démarrer mon inscription
                            </span>
                            <div className="col-lg-12 margin-div">
                                <div className="col-lg-3"/>
                                <img className="col-lg-2" id="logo-home" src="http://workshop.local/static/images/candidat_character.png"/>
                                <span className="col-lg-5 margin-span">Pour vous inscrire en ligne, vous devez obligatoirement être disponible pour une recherche d'emploi.</span>
                            </div>
                            <form id="registerForm">
                                <div className="col-lg-12 margin-div">
                                    <label className="question col-lg-5 col-lg-offset-3">
                                        Confirmez-vous être disponible pour rechercher un emploi ?
                                    </label>
                                    <div className="col-lg-3">
                                        <label>
                                            <input type="radio" name="available" value="yes" onChange={this._handleChangeAvailable} checked={this.state.available === "yes"}/>Oui
                                        </label>
                                        <label className="margin-left-label">
                                            <input type="radio" name="available" value="no" onChange={this._handleChangeAvailable} checked={this.state.available === "no"}/>Non
                                        </label>
                                    </div>
                                    <div className="col-lg-4 col-lg-offset-3 span-message">
                                        <span>
                                            (Vous ne devez pas être salarié à temps plein, en préavis payé, en formation, en arrêt maladie, en congé maternité ou paternité, en contrat aidé…)
                                        </span>
                                    </div>
                                </div>
                                { this.state.available === "yes" &&
                                <div className="col-lg-12 margin-div">
                                    <label className="question col-lg-5 col-lg-offset-3">
                                        Êtes-vous en contrat de sécurisation professionnelle (CSP) ou en Parcours d'Accompagnement Personnalisé (PAP) ?
                                    </label>
                                    <div className="col-lg-3">
                                        <label>
                                            <input type="radio" name="specialAccompaniment" value="yes" onChange={this._handleChangeSpecial} checked={this.state.special === "yes"}/>Oui
                                        </label>
                                        <label className="margin-left-label">
                                            <input type="radio" name="specialAccompaniment" value="no" onChange={this._handleChangeSpecial} checked={this.state.special === "no"}/>Non
                                        </label>
                                    </div>
                                </div>
                                }
                                { this.state.special === "no" &&
                                <div className="col-lg-12 margin-div">
                                    <label className="question col-lg-5 col-lg-offset-3">
                                        Êtes-vous bénéficiaire ou en attente de paiement d'une allocation chômage versée par un Etat membre de l'Union Européenne (UE) ou de l'Espace Economique Européen (EEE), ou de la Suisse ?
                                    </label>
                                    <div className="col-lg-3">
                                        <label>
                                            <input type="radio" name="europe" value="yes" onChange={this._handleChangeEurope} checked={this.state.europe === "yes"}/>Oui
                                        </label>
                                        <label className="margin-left-label">
                                            <input type="radio" name="europe" value="no" onChange={this._handleChangeEurope} checked={this.state.europe === "no"}/>Non
                                        </label>
                                    </div>
                                </div>
                                }
                                { this.state.europe === "no" &&
                                <div className="col-lg-12 margin-div">
                                    <label className="question col-lg-5 col-lg-offset-3">
                                        Avez-vous déjà été inscrit comme demandeur d'emploi ?
                                    </label>
                                    <div className="col-lg-3">
                                        <label>
                                            <input type="radio" name="registered" value="yes" onChange={this._handleChangeRegistered} checked={this.state.registered === "yes"}/>Oui
                                        </label>
                                        <label className="margin-left-label">
                                            <input type="radio" name="registered" value="no" onChange={this._handleChangeRegistered} checked={this.state.registered === "no"}/>Non
                                        </label>
                                    </div>
                                </div>
                                }
                                { this.state.registered === "no" &&
                                <div className="col-lg-12 margin-div">
                                    <label className="question col-lg-5 col-lg-offset-3">
                                        Avez-vous un espace personnel sur pole-emploi.fr ?
                                    </label>
                                    <div className="col-lg-3">
                                        <label>
                                            <input type="radio" name="personnalSpace" value="yes" onChange={this._handleChangePersonnal} checked={this.state.personnal === "yes"}/>Oui
                                        </label>
                                        <label className="margin-left-label">
                                            <input type="radio" name="personnalSpace" value="no" onChange={this._handleChangePersonnal} checked={this.state.personnal === "no"}/>Non
                                        </label>
                                    </div>
                                </div>
                                }
                                {(this.state.personnal === "yes" || this.state.personnal === "no" || this.state.registered === "yes") &&
                                    <div className="col-lg-12">
                                        <button className="button-registered">Poursuivre</button>
                                    </div>
                                }
                            </form>
                        </div>
                        <div className="validation col-lg-12">
                            <button onClick={() => {Api.warning("etat=2&pila=1&etape=inscription&erreur=demande_aide"); this.setState({help: true})}}>Besoin d'aide ?</button>
                            { this.state.help === true &&
                            <span>Votre demande d'aide a été pris en compte, un conseiller va venir à votre rencontre.</span>
                            }
                        </div>
                    </div>
                }
            </div>
                );

    }
}

export default Home;