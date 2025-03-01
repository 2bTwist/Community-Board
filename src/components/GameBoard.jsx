import React from "react";
import GameCard from "./GameCard";
import "../style/GameBoard.css";

const games = [
    {
      title: "Chess",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Chess_pieces_close_up.jpg",
      description: "A classic strategy game of kings, queens, and checkmates.",
      link: "https://www.chess.com/play",
    },
    {
      title: "Monopoly",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Monopoly_Boardwalk_%283964604772%29.jpg",
      description: "Build your empire and bankrupt your opponents!",
      link: "https://www.pogo.com/games/monopoly",
    },
    {
      title: "Scrabble",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Scrabble_game_in_progress.jpg",
      description: "Test your vocabulary and score big with words.",
      link: "https://www.isc.ro/",
    },
    {
      title: "Catan",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Settlers_of_Catan_2016-01-23_17-30-47.jpg",
      description: "Trade, build, and settle in this classic resource-management game.",
      link: "https://catanuniverse.com/en/",
    },
    {
      title: "Risk",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/28/Partie_de_Risk%2C_%C3%A9dition_1970.jpg",
      description: "Conquer the world in this strategic war game.",
      link: "https://store.steampowered.com/app/1128810/RISK_Global_Domination/",
    },
    {
      title: "Carcassonne",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Americans_in_Asia%3F_%2885080728%29.jpg",
      description: "Build medieval cities and score points in this tile-laying game.",
      link: "https://www.asmodee-digital.com/en/carcassonne/",
    },
    {
      title: "Clue",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Hry_a_hlavolamy_2009_-_Cluedo_0173u.jpg",
      description: "Solve the murder mystery with clues and deduction.",
      link: "https://www.hasbro.com/en-us/brands/clue",
    },
    {
      title: "Pandemic",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Pandemic_Legacy_%2833870877603%29.jpg",
      description: "Work together to stop a global outbreak in this cooperative game.",
      link: "https://www.asmodee-digital.com/en/pandemic/",
    },
    {
      title: "Ticket to Ride",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Ticket_to_Ride_Europe_in_Hattula.jpg",
      description: "Build train routes and connect cities in this fun board game.",
      link: "https://www.asmodee-digital.com/en/ticket-to-ride/",
    },
    {
      title: "Uno",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Uno%21_%2815694272224%29.jpg",
      description: "A fast-paced card game with wild twists and turns.",
      link: "https://unoonline.io/",
    }
  ];

const GameBoard = () => {
    return (
        <div className="game-board">
            <h1>🎲 Board Game Community 🎲</h1>
            <div className="game-grid">
                {games.map((game, index) => (
                    <GameCard key={index} {...game}/>
                ))}
            </div>

        </div>
    );
};

export default GameBoard;