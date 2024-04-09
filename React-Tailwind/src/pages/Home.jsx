import { useEffect, useState } from "react"
import { Link } from "react-router-dom";




const getPokemonImg = (url) => {
  
  const id = url.split('/').filter(item=>item).slice(-1)[0];
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
};

function Home() {

    const [pokemonList, setPokemonList]=useState([]);
    const [page,setPage]=useState(1);
  

    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * 20}&limit=20`)
          .then((res) => res.json())
          .then((res) => {
            setPokemonList([...pokemonList, ...res.results]);

          })
          
  }, [page]); // Re-run effect when page changes



    return (
        <>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 ">
          {pokemonList.map((item) => (
            <Link key={item.url} to={`/${item.name}`}>
              <div className="flex flex-col items-center shadow-lg m-2" key={item.url}>
                {item.name}
                <img className="h-48" src={getPokemonImg(item.url)} alt="PokemonImg" />
              </div>
            </Link>
        ))}
              

          </div>
          <button className="bg-red-700 text-white px-6 py-3 mx-auto block"
          onClick={()=>setPage(page+1)}
          >
            Load More Pokemons</button>
        </>
    )

}

export default Home