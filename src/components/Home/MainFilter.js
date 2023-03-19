import React from "react";
import "../../styles/mainfilter.scss";
function MainFilter() {
    return (
        <div>
            <div className="">
                <div className="main-slider">
                    <div>
                        <label className="block mb-2">
                            De
                        </label>
                        <input
                            type="text"
                            id="Latur"
                            className="Filter_input"
                            placeholder="Lima, Peru"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2  ">
                            A
                        </label>
                        <input
                            type="text"
                            id="first_name"
                            className="Filter_input"
                            placeholder="Mumbai, Delhi"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2  ">
                            From
                        </label>
                        <input
                            type="Date"
                            id="first_name"
                            className="Filter_input_Date"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2  ">
                            To Date
                        </label>
                        <input
                            type="Date"
                            id="first_name"
                            className="Filter_input_Date"
                            placeholder="John"
                            required
                        />
                    </div>
                    <div>
                        <button type="submit" className="Filter_button">Search</button>
                    </div>
                </div>
                {/* <small className="text-white">Ongoing Day Booking Accepts Only Before 17:00 (All Related Information shared on website or app)</small> */}
            </div>
        </div>
    );
}

export default MainFilter;