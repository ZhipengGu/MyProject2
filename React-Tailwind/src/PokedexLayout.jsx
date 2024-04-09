import { NavLink, Outlet } from "react-router-dom";

import pokemon from "./pokemon.json";



/**
 * Renders the layout of the page, including a list of pokemon on the left, and a main window on the right.
 * The main window contains an <Outlet> which is intended to render a PokedexPage inside, based on the route.
 */
export default function PokedexLayout() {
  return (

    <div className="h-screen flex justify-center mx-10 my-10 "> 
      <div className="w-1/3 lg:h-2/3 flex mx-5">
        <PokemonList />
      </div>
      <div className="w-1/3 flex justify-center mx-5 overflow-y-auto">
        <Outlet />
      </div>
    </div> 
  );
}

/**
 * Renders a list of pokemon.
 */
function PokemonList() {
  return (
    <div className="h-full border-2 border-black rounded-lg overflow-y-auto">
      <div>
        {pokemon.map((pokemon) => (
          <ListItem key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

/**
 * Renders a single pokemon in the list.
 */
function ListItem({ pokemon }) {
  return (
    <NavLink
      to={pokemon.id.toString()}
      className="flex items-center gap-5 px-5 py-2 border-4 border-transparent hover:border-red-500 
       focus:bg-blue-500 even:bg-red-300"
    >
      
      <span>{pokemon.id}--{pokemon.name}</span>
    </NavLink>
  );
}



