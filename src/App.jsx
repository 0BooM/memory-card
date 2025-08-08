import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const [pokemons, setPokemons] = useState({name: '', imgUrl: ''});
  const API_URL = "https://pokeapi.co/api/v2/pokemon/?limit=20";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        Promise.all(
          data.results.map((pokemon) =>
            fetch(pokemon.url)
              .then((res) => res.json())
              .then((details) => ({
                name: pokemon.name,
                imgUrl: details.sprites.other.dream_world.front_default,
              }))
          )
        ).then((pokemonData) => setPokemons(pokemonData));
      });
  }, []);

  console.log("pokemons: ", pokemons);
  return (
    <>
      <Navbar></Navbar>
      <div className="grid lg:grid-cols-5 lg:grid-rows-4 gap-8 px-10 container mx-auto md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {Array.from({ length: 20 }).map((_, i) => (
          <Card key={i} />
        ))}
      </div>
    </>
  );
}

export default App;
