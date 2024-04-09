import { useParams } from "react-router-dom";
import allPokemon from "./pokemon.json";
import { useEffect, useState } from "react";
// import styles from "./PokedexPage.module.css";


/**
 * Renders information about a pokemon with the given id.
 */
export default function PokedexPage() {
  const { id } = useParams(); // Extracting id from URL path
  const [isLoaded, setLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(undefined);
  const pokemon = allPokemon.find((mon) => mon.id === parseInt(id)); // Parsing id to integer

  // This effect will, whenever the id changes, set "loaded" back to false before loading the new image.
  // This is the only way I could figure out how to make this thing work.
  useEffect(() => {
    if (imgSrc !== pokemon.imageUrl) {
      setLoaded(false);
      setImgSrc(pokemon.imageUrl);
    }
  }, [id]);

  return (
  
    <div className="flex flex-col justify-start items-center m-10 text-center">
      
      <h1 className="px-4 py-1 rounded-l-full rounded-r-full bg-blue-500 text-white  text-2xl">
        {pokemon.name}</h1>
    
      {!isLoaded && <PlaceholderImage />}

      <img
        className={`w-64 ${isLoaded ? "" : "hidden"}`}
        src={imgSrc}
        onLoadStart
        onLoad={() => setLoaded(true)}
      />

     
      <p className="px-4 py-1 rounded-l-full rounded-r-full bg-blue-500 text-white">
        Type: {pokemon.type.join("+")}
      </p>
      
      
      <p className="text-lg">{pokemon.dexEntry}</p>
    </div>


  );
}

/**
 * When the main image hasn't yet been loaded from the internet, this is rendered instead - a spinning poke'ball placeholder image.
 */
function PlaceholderImage() {
  return <img className="w-64 animate-spin" src="white-pokeball.png" />;
}



/**
 * This part is from Lab 2, only used for comparison
 
export default function PokedexPage() {
  const { id } = useParams(); // Extracting id from URL path
  const [isLoaded, setLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(undefined);
  const pokemon = allPokemon.find((mon) => mon.id === parseInt(id)); // Parsing id to integer

  // This effect will, whenever the id changes, set "loaded" back to false before loading the new image.
  // This is the only way I could figure out how to make this thing work.
  useEffect(() => {
    if (imgSrc !== pokemon.imageUrl) {
      setLoaded(false);
      setImgSrc(pokemon.imageUrl);
    }
  }, [id]);

  return (
    <div className={styles.container}>
      <h1>{pokemon.name}</h1>

      {!isLoaded && <PlaceholderImage />}

      <img
        className={styles.dexImage}
        style={{ display: isLoaded ? undefined : "none" }}
        src={imgSrc}
        onLoadStart
        onLoad={() => setLoaded(true)}
      />

      <p>{pokemon.dexEntry}</p>
    </div>
  );
}


function PlaceholderImage() {
  return <img className={styles.placeholderImage} src="white-pokeball.png" />;
}

*/
