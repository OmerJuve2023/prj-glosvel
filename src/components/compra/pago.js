import React from "react";
import "../../styles/pagoStyles.css";

export default function Pago() {

    return (
        <div>
            <div className="container">

                <div className="row">
                    <div className="col-md-4 order-md-2 mb-4">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">Tu carrito</span>
                            <span className="badge badge-secondary badge-pill">3</span>
                        </h4>
                        <ul className="list-group mb-3">
                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">Lugar de destino:</h6>
                                    <small className="text-muted">Brief description</small>
                                </div>
                                <span className="text-muted">$12</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between bg-light">
                                <div className="text-success">
                                    <h6 className="my-0">Código Promocional</h6>
                                    <small>canje</small>
                                </div>
                                <span className="text-success">-$5</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total</span>
                                <strong>$20</strong>
                            </li>
                        </ul>

                        <form className="card p-2">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="código promocional"/>
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-secondary">Redeem</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-8 order-md-1">
                        <h4 className="mb-3">Información Personal</h4>
                        <form className="needs-validation" noValidate>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="firstName">Nombres</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" value=""
                                           required/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName">Apellido</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" value=""
                                           required/>
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="username">Nombre de Usuario</label>
                                <div className="input-group">
                                    {/* <div className="input-group-prepend">
                                        <span className="input-group-text">@</span>
                                    </div>*/}
                                    <input type="text" className="form-control" id="username"
                                           placeholder="ejemplo: omer215"
                                           required/>
                                    <div className="invalid-feedback">
                                        Your username is required.
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email">Correo Electrónico <span className="text-muted">(Opcional)</span></label>
                                <input type="email" className="form-control" id="email" placeholder="tu@ejemplo.com"/>
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="address">Dirección</label>
                                <input type="text" className="form-control" id="address"
                                       placeholder="1234 calle principal"
                                       required/>
                                <div className="invalid-feedback">
                                    Please enter your shipping address.
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-5 mb-3">
                                    <label htmlFor="country">Departamento</label>
                                    <select className="custom-select d-block w-100" id="country" required>
                                        <option value="">Elegir...</option>
                                        <option>United States</option>
                                        <option>Tumbes</option>
                                        <option>Piura</option>
                                        <option>Lambayeque</option>
                                        <option>La libertad</option>
                                        <option>Ancash</option>
                                        <option>Lima</option>
                                        <option>Ica</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="state">State</label>
                                    <select className="custom-select d-block w-100" id="state" required>
                                        <option value="">Choose...</option>
                                        <option>California</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="zip">Zip</label>
                                    <input type="text" className="form-control" id="zip" placeholder="" required/>
                                    <div className="invalid-feedback">
                                        Zip code required.
                                    </div>
                                </div>
                            </div>
                            <hr className="mb-4"/>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="same-address"/>
                                <label className="custom-control-label" htmlFor="same-address">Shipping address
                                    is the same as my billing address</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="save-info"/>
                                <label className="custom-control-label" htmlFor="save-info">Save this
                                    information
                                    for next time</label>
                            </div>
                            <div className="mb-4">

                                <h4 className="mb-3">Payment</h4>

                                <div className="d-block my-3">
                                    <div className="custom-control custom-radio">
                                        <input id="credit" name="paymentMethod" type="radio"
                                               className="custom-control-input" checked required/>
                                        <label className="custom-control-label" htmlFor="credit">Credit
                                            card</label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input id="debit" name="paymentMethod" type="radio"
                                               className="custom-control-input" required/>
                                        <label className="custom-control-label" htmlFor="debit">Debit
                                            card</label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input id="paypal" name="paymentMethod" type="radio"
                                               className="custom-control-input" required/>
                                        <label className="custom-control-label" htmlFor="paypal">PayPal</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="cc-name">Name on card</label>
                                        <input type="text" className="form-control" id="cc-name" placeholder=""
                                               required/>
                                        <small className="text-muted">Full name as displayed on card</small>
                                        <div className="invalid-feedback">
                                            Name on card is required
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="cc-number">Credit card number</label>
                                        <input type="text" className="form-control" id="cc-number" placeholder=""
                                               required/>
                                        <div className="invalid-feedback">
                                            Credit card number is required
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="cc-expiration">Expiration</label>
                                        <input type="text" className="form-control" id="cc-expiration"
                                               placeholder=""
                                               required/>
                                        <div className="invalid-feedback">
                                            Expiration date required
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="cc-cvv">CVV</label>
                                        <input type="text" className="form-control" id="cc-cvv" placeholder=""
                                               required/>
                                        <div className="invalid-feedback">
                                            Security code required
                                        </div>
                                    </div>
                                </div>
                                <hr className="mb-4"/>
                                <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to
                                    checkout
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}