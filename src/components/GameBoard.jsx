import React from "react";
import GameCard from "./GameCard";
import "../style/GameBoard.css";

const games = [
    {
      title: "Chess",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Chess.jpg",
      description: "A classic strategy game of kings, queens, and checkmates.",
      link: "https://www.chess.com/play",
    },
    {
      title: "Monopoly",
      image: "https://upload.wikimedia.org/wikipedia/en/2/2f/Monopoly_board_on_white_bg.jpg",
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
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Catan-Base-Game.jpg",
      description: "Trade, build, and settle in this classic resource-management game.",
      link: "https://catanuniverse.com/en/",
    },
    {
      title: "Risk",
      image: "https://upload.wikimedia.org/wikipedia/en/3/30/Risk_board_layout.png",
      description: "Conquer the world in this strategic war game.",
      link: "https://store.steampowered.com/app/1128810/RISK_Global_Domination/",
    },
    {
      title: "Carcassonne",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Carcassonne_game.jpg",
      description: "Build medieval cities and score points in this tile-laying game.",
      link: "https://www.asmodee-digital.com/en/carcassonne/",
    },
    {
      title: "Clue",
      image: "https://upload.wikimedia.org/wikipedia/en/0/06/Cluedo_1963_US_Edition_Board.jpeg",
      description: "Solve the murder mystery with clues and deduction.",
      link: "https://www.hasbro.com/en-us/brands/clue",
    },
    {
      title: "Pandemic",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Pandemic_board_game.jpg",
      description: "Work together to stop a global outbreak in this cooperative game.",
      link: "https://www.asmodee-digital.com/en/pandemic/",
    },
    {
      title: "Ticket to Ride",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/16/Ticket_to_Ride_Board_Game.jpg",
      description: "Build train routes and connect cities in this fun board game.",
      link: "https://www.asmodee-digital.com/en/ticket-to-ride/",
    },
    {
      title: "Uno",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Uno_deck.png",
      description: "A fast-paced card game with wild twists and turns.",
      link: "https://play.unofreak.com/",
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