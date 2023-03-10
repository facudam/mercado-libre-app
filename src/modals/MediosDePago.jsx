import { useContext, useEffect, useState } from "react"
import ReactDOM from "react-dom"
import { MeliContext } from "../contexts/meliContext"
import mercadoCreditoLogo from '../images/mercadocreditologo.svg'
import tarjetaCredito from '../images/credit-card.svg'
import visa from '../images/visa.svg'
import cabal from '../images/cabal.svg'
import shopping from '../images/shopping.svg'
import cencosud from '../images/cencosud.svg'
import dinersclub from '../images/dinersclub.svg'
import argencard from '../images/argencard.svg'
import cmr from '../images/cmr.svg'
import mastercard from '../images/mastercard.svg'
import naranja from '../images/naranja.svg'
import american from '../images/american.svg'
import debito from '../images/debit-card.svg'
import maestroDebito from '../images/maestroDebito.svg'
import masterDebito from '../images/mastercard-debito.svg'
import cabalDebito from '../images/cabal-debito.svg'
import visaDebito from '../images/visa-debito.svg'
import efectivo from '../images/payment-agreement.svg'
import pagoFacil from '../images/pagofacil.svg'
import rapipago from '../images/rapipago.svg'
import dineroEnCuenta from '../images/dinero-en-cuenta.svg'
import mercadoPago from '../images/mercado-pago.svg'
import '../styles/MediosDePago.css'

export const MediosDePago = () => {
    
    useEffect(() => {
        const modal = document.querySelector('.medios-de-pago-modal')
        modal.addEventListener('scroll', (e) => {
            if(e.target.scrollTop > 110) {
                document.querySelector('.header-modal').classList.add('on-scroll');
                document.querySelector('.header-modal__span').classList.add('scrolling')
            } else {
                document.querySelector('.header-modal').classList.remove('on-scroll');
                document.querySelector('.header-modal__span').classList.remove('scrolling')
            }
        })
    }, [])

    const { setMediosDePagoIsActive } = useContext(MeliContext);
    

    return ReactDOM.createPortal(
        <div>
            <div onClick={() => setMediosDePagoIsActive(false)} className="full-screen"></div>
            <div className="medios-de-pago-modal">
                <div className="header-modal">
                    <span className="header-modal__span">Medios de pago</span>
                    <button onClick={() => setMediosDePagoIsActive(false)}>x</button>
                </div>

                <div className="info-modal">
                    <p className="payment-modal-subtitle">Pod??s pagar tus compras con cualquiera de estos medios. Es r??pido y seguro, siempre.</p>
                    <div className="separator"></div>
                    <div className="mercado-credito-section">
                        <img src={ mercadoCreditoLogo } alt='mercado cr??dito logo' />
                        <div className="mercado-credito-section-paragraph">
                            <p>??Compra en cuotas sin tarjeta!</p>
                            <p>Activa Mercado Cr??dito, es 100% online y sin costos de mantenimiento.</p>
                        </div>
                        <button className="mercado-credito-section-btn">Activar ahora</button>
                    </div>
                    <div className="separator"></div>
                    <div className="tarjetas-section">
                        <img src={ tarjetaCredito } alt='tarjeta de cr??dito' />
                        <div className="tarjetas__info">
                            <div className="tarjetas-paragraphs">
                                <p>Tarjetas de cr??dito en hasta 24 cuotas*</p>
                                <p>Acreditaci??n instant??nea.</p>
                            </div>
                            <div className="tarjetas-imgs">
                                <img src={ visa } alt='tarjeta visa' />
                                <img src={ cabal } alt='tarjeta cabal' />
                                <img src={ shopping } alt='tarjeta shopping' />
                                <img src={ cencosud } alt='tarjeta cencosud' />
                                <img src={ dinersclub } alt='tarjeta dinersclub' />
                                <img src={ argencard } alt='tarjeta argencard' />
                                <img src={ cmr } alt='tarjeta cmr' />
                                <img src={ mastercard } alt='tarjeta mastercard' />
                                <img src={ naranja } alt='tarjeta naranja' />
                                <img src={ american } alt='tarjeta american express' />
                            </div>
                            <p>*La cantidad de cuotas puede variar seg??n la tarjeta.</p>
                            <a href="">Ver promociones en cuotas</a>
                        </div>
                    </div>
                    <div className="separator"></div>
                    <div className="tarjetas-section">
                        <img src={ debito } alt='tarjeta de d??bito' />
                        <div className="tarjetas__info">
                            <div className="tarjetas-paragraphs">
                                <p>Tarjetas de d??bito</p>
                                <p>Acreditaci??n instant??nea</p>
                            </div>
                            <div className="tarjetas-imgs">
                                <img src={ maestroDebito } alt='Maestro D??bito' />
                                <img src={ masterDebito } alt='Mastercard D??bito' />
                                <img src={ cabalDebito } alt='cabal D??bito' />
                                <img src={ visaDebito}  alt='visa D??bito' />
                            </div>
                        </div>
                    </div>
                    <div className="separator"></div>
                    <div className="tarjetas-section">
                        <img src={ efectivo } alt='efectivo' />
                        <div className="tarjetas__info">
                            <div className="tarjetas-paragraphs">
                                <p>Efectivo</p>
                                <p>Es muy simple: cuando termines tu compra, te daremos las instrucciones para que sepas c??mo y d??nde pagarla.</p>
                            </div>
                            <div className="tarjetas-imgs">
                                <div>
                                    <img src={ pagoFacil } alt='pago facil' />
                                    <p>Acreditaci??n en 1 d??a h??bil.</p>
                                </div>
                                <div>
                                    <img src={ rapipago } alt='rapipago' />
                                    <p>Acreditaci??n instant??nea.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="separator"></div>
                    <div className="tarjetas-section">
                        <img src={ dineroEnCuenta } alt='dinero en celular' />
                        <div className="tarjetas__info">
                            <div className="tarjetas-paragraphs">
                                <p>Dinero en tu cuenta de Mercado Pago</p>
                                <p>Al finalizar tu compra, pag??s con el dinero disponible en tu cuenta. Pod??s ingresar dinero a Mercado Pago por D??bito inmediato, transferencia bancaria o en efectivo.</p>
                                <p>Acreditaci??n instant??nea.</p>
                            </div>
                            <div className="tarjetas-imgs">
                                <img src={ mercadoPago } alt='mercado pago logo' />
                            </div>
                            <a href="">Conoc?? m??s</a>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>,
        document.getElementById('portal')
    )
}




