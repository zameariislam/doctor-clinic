import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppoinmentOption from "../AppoinmentOption/AppoinmentOption";
import BookingModal from "../../../components/BookingModal";

const AvailableAppoinment = ({ selected }) => {
  const [appoinmentOptions, setAppoinmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/appoinment/appoinment-options")
      .then((res) => res.json())
      .then((data) => {
        
        setAppoinmentOptions(data?.data);
        console.log("appoinment", appoinmentOptions);
        setLoading(false);
      });
  }, [appoinmentOptions]);

  //    decide what to render
  let content;
  if (loading) {
    return content=<h1  className="text-red-500 font-5xl text-center ">Loading ......</h1>
  }
  if(!loading && appoinmentOptions.length>0){
    content = appoinmentOptions.map((option) => (
        <AppoinmentOption
          key={option._id}
          setTreatment={setTreatment}
          option={option}
        />
      ))

  }
    return (
      <section className="mt-16">
        <p className="text-secondary text-center font-bold">
          Available Services on {format(selected, "PP")}
        </p>

        <div className="grid gap-6 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 ">
          {
            content
           }
        </div>
        {treatment && (
          <BookingModal
            treatment={treatment}
            setTreatment={setTreatment}
            selected={selected}
          ></BookingModal>
        )}
      </section>
    );
};

export default AvailableAppoinment;
