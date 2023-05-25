import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, selected, setTreatment }) => {
    const { name, slots } = treatment


    const handleBooking = (e) => {
        e.preventDefault()
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value;
        const booking = {
            appoinmentDate: format(selected, "PP"),
            treatment: name,
            name,
            slot,
            email,
            phone
        }


        console.log(booking)
        setTreatment(null)





    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg mb-2 font-bold text-center">{name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10' >
                        <input disabled value={format(selected, "PP")} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            <option >Select one</option>
                            {
                                slots?.map((slot, index) => <option value={slot}>{slot}</option>)
                            }



                        </select>


                        <input required name='name' type="text" placeholder="Full Name" className="input input-bordered w-full max-w-xs" />
                        <input required name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input required name='email' type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        <input required type="submit" className='btn w-full max-w-xs  primary' value='SUBMIT' />


                    </form>

                </div>
            </div>




        </>
    );
};

export default BookingModal;