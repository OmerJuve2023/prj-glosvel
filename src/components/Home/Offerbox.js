import {Link} from "react-router-dom";
import React from "react";
import "../../styles/OfferStyles.css";

function Offerbox({icon, Ongoing_Offers, Box_description}) {
    return (
        <section>
            <div className="offer-boxes">
                <div className="text-center fa-duotone">{icon}</div>
                <div className="">
                    <h3>{Ongoing_Offers}</h3>
                    <p>{Box_description}</p>
                    <Link className="mt-1 text-decoration-none text-danger" target={"_blank"} to={"/"}>
                        ver más
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Offerbox;