export default function Navbar(){
    return (
      <div className="flex flex-col sm:justify-between sm:flex-row items-center px-16 bg-gray-800 w-full text-white py-4 mb-10">
        <div className="text-center sm:text-start">
          <h2 className="text-2xl font-bold">Memory Card Game</h2>
          <h3 className="text-xl">Don't click the same pokemon twice!</h3>
        </div>
        <div>
          <h2 className="text-xl text-orange-400">Your Score: <strong>0</strong></h2>
          <h2 className="text-xl">Best Score: 5</h2>
        </div>
      </div>
    );
}