import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-800 p-4">
    <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" className="block mx-auto" 
        alt="pokeapi" /> 
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white text-xl font-bold">Home</Link>
        <Link to="/index" className="text-white text-xl font-bold">Kanto Pokemons</Link>
      </div>
    </nav>
  );
}

export default Navbar;
