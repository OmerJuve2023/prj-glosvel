import React from "react";

export default function Map() {
    return (
        <div className={"mb-0"}>
            <br/>
            <h6 className={"text-center mb-3"}>Dónde Estamos ?</h6>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1957.5286695476464!2d-77.59712219122065!3d-11.109104627718828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9106dfa2cd2be13d%3A0xb7811d6fa8780e26!2sTerminal%20Huacho!5e0!3m2!1ses!2spe!4v1679377069180!5m2!1ses!2spe"
                width="100%"
                height="100%"
                loading="lazy"
                title={"google map"}></iframe>
        </div>
    );
}
