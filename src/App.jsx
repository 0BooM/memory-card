import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import GameLogic from "./utils/GameLogic";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const API_URL = "https://pokeapi.co/api/v2/pokemon/?limit=20";

  const [gameLost, setGameLost] = useState(false);

  const [selectedPokemons, setSelectedPokemons] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const gameState = { selectedPokemons, pokemons, score, bestScore };
  const setters = { setSelectedPokemons, setPokemons, setScore, setBestScore, setGameLost};
  const gameLogic = new GameLogic(gameState, setters);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        Promise.all(
          data.results.map((pokemon) =>
            fetch(pokemon.url)
              .then((res) => res.json())
              .then((details) => ({
                name: pokemon.name.toUpperCase(),
                imgUrl: details.sprites.other.dream_world.front_default,
              }))
          )
        ).then((pokemonData) => {
          setPokemons(pokemonData);
          gameLogic.shuffleCards(pokemonData);
        });
      });
  }, []);

  return (
    <>
      <Navbar score={score} bestScore={bestScore}></Navbar>
      {gameLost && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white text-red-600 text-3xl font-bold p-8 rounded shadow-lg">
            Game Lost!
          </div>
        </div>
      )}
      <div className="grid lg:grid-cols-5 lg:grid-rows-4 gap-8 px-10 container mx-auto md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pb-10">
        {pokemons.map((pokemon, i) => (
          <Card
            key={i}
            name={pokemon.name}
            imgUrl={pokemon.imgUrl}
            onClick={() => gameLogic.onClick(pokemon.name)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
