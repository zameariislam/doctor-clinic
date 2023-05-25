import React from 'react';

const Review = ({ review }) => {

    const { name, location, review: userReview, image } = review

    return (
        <div className="card   shadow-xl">
            <div className="card-body">

                <p>{userReview}</p>
                <div className="flex  items-center  gap-3 mt-2   ">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={image} alt='user' />
                        </div>
                    </div>
                    <div>
                        <h4>{name}</h4>
                        <p>{location}</p>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Review;