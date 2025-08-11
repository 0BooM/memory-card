export default function Card({ name, imgUrl, onClick }) {
  return (
    <div
      className="pokemonCard will-change-transform flex flex-col justify-center items-center border-3 rounded-sm py-4 px-8 transition-all duration-200 cursor-pointer hover:scale-110 hover:bg-orange-200 hover:text-black hover:border-orange-400 active:bg-orange-400 active:rotate-4 object-scale-down"
      onClick={onClick}
    >
      <img src={imgUrl} alt={name} className="h-35 mb-4" />
      <h3 className="text-xl font-bold">{name}</h3>
    </div>
  );
}