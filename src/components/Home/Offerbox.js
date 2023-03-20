import {Link} from "react-router-dom";
import React from "react";
import "../../styles/OfferStyles.css";

function Offerbox({icon, Ongoing_Offers, Box_description}) {
    return (
        <section>
            <div className="offer-boxes">
                <div className="text-center">{icon}</div>
                <div className="box-description">
                    <h3>{Ongoing_Offers}</h3>
                    <p>{Box_description}</p>
                    <Link className="mt-1" target={"_blank"} to={"/"}>
                        ver más
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Offerbox;