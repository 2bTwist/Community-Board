import React from "react";
import "../style/GameCard.css";

const GameCard = ({title, image, description, link}) => {
    return(
        <div className="game-card">
            <img src={image} alt={title} className="game-image" />
            <div className="card-content">
                <h2>{title}</h2>
                <p>{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer" className="play-button">
                    Play Now
                </a>
            </div>

        </div>
    );
};

export default GameCard;
