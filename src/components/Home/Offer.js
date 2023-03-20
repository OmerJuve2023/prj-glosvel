import Offerbox from "./Offerbox";
import fastFood from "../../assets/offerIcons/fastFood.ico";
import saveFood from "../../assets/offerIcons/saveFood.ico";
import maps from "../../assets/offerIcons/maps.ico";
import money from "../../assets/offerIcons/money.ico";

const Offer = () => {
    return (
        <section>
            <div className="section-heading">
                <h3>Novedades</h3>
            </div>
            <div className="offer-box">
                <Offerbox
                    icon={<img className={"img-fluid"} src={fastFood} alt={"fastFood"}/>}
                    Ongoing_Offers="Ofertas en curso"
                    Box_description="Reserva online tus billetes de autobús y obtén increíbles descuentos"
                />
                <Offerbox
                    icon={<img className={"img-fluid"} src={saveFood} alt={"fastFood"}/>}
                    Ongoing_Offers="Reserva de comida"
                    Box_description="Ofrecemos Servicio de Alimentación al Embarque. Bebidas, biryani, etc."
                />
                <Offerbox
                    icon={<img className={"img-fluid"} src={maps} alt={"fastFood"}/>}
                    Ongoing_Offers="Localización de autobuses"
                    Box_description="Ofrecemos las mejores herramientas para localizar nuestro autobús en curso"
                />
                <Offerbox
                    icon={<img className={"img-fluid"} src={money} alt={"fastFood"}/>}
                    Ongoing_Offers="Ahorra y gana"
                    Box_description="Tenemos un fuerte marketing de referencia. Comparte código promocional y gana dinero"
                />
            </div>
        </section>
    );
}
export default Offer;