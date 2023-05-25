import React from 'react';


const AppoinmentOption = ({ option, setTreatment }) => {
    // console.log("option", option)

    const { name, slots } = option
    // console.log("name", name)

    return (
        <div className="card shadow-xl">

            <div className="card-body text-center">

                <h2 className=" text-primary text-center text-2xl font-bold ">{name}</h2>
                <p>{slots.length > 0 ? slots.length : "Try another day"}</p>
                <p>{slots.length} {slots.length > 1 ? "spaces available" : "space available"}</p>


                {/* {slots.length > 0 ? <div>

                    {
                        slots.map(slot => <p>{slot}</p>)
                    }

                </div> : " "} */}


                <div className="card-actions  justify-center">

                    <label htmlFor="booking-modal"
                        onClick={() => setTreatment(option)}
                        className="btn btn-primary text-white">BOOK APPOINMENT</label>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentOption;