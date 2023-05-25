import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            id: 1,
            name: "Winson Herry",
            location: 'California',
            image: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',

        },
        {
            id: 2,
            name: "Joseph Wilson",
            location: 'denmark',
            image: people2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',

        },
        {
            id: 3,
            name: "Heidi Herry",
            location: 'Dhaka',
            image: people3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',

        }
    ]

    return (
        <section className='m-16'>
            <div className='flex flex-row justify-between '>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testomonial</h4>
                    <h2 className='text-4xl' >What Our Patients Says</h2>
                </div>

                <figure>
                    <img className=' w-24 lg:w-48' src={quote} alt="" />
                </figure>


            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review key={review.id} review={review} />)
                }

            </div>

        </section>
    );
};

export default Testimonial;