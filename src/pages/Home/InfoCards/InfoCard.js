import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, icon, bgColor } = card

    return (
        <div className={`card p-3 text-white card-side  shadow-xl ${bgColor}`}>
            <figure>
                <img src={icon} alt="movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default InfoCard;
