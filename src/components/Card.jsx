import pokemonImage from "../1.png";

export default function Card() {
  return (
    <div className="pokemonCard will-change-transform flex flex-col justify-center items-center border-3 rounded-sm py-4 px-8 transition-all duration-200 cursor-pointer hover:scale-110 hover:bg-orange-200 hover:text-black hover:border-orange-400 active:bg-orange-400">
      <img src={pokemonImage} alt="Bulbasaur" className="w-25"/>
      <h3 className="text-xl font-bold">Bulbasaur</h3>
    </div>
  );
}
