import React from "react";
import GooglePlay from "../../assets/logo/google-store.png";
import AppleStore from "../../assets/logo/apple-store.png";
import "../../styles/AppStoreStyles.css";

function AppStore() {
    return (
        <section className='app_store'>
            <div className="app_details">
                <h4>Descargar la última aplicación Glosvel</h4>
                <small>La aplicación Glosvel disponible en Google Play Store y Apple Sore</small>
            </div>
            <div className="app_icons align-items-center">
                <img src={GooglePlay} alt=""/> <img src={AppleStore} alt=""/>
            </div>
        </section>
    )
}

export default AppStore