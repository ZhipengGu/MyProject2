import { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";

function Detail() {
  const { name } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });

  }, [name]);

  const colors=['bg-teal-500','bg-red-500', 'bg-blue-500','bg-orange-500','bg-purple-500',
  'bg-cyan-500','bg-lime-500','bg-amber-500','bg-pink-500']

  
  const PokemonStat = ({ title, stat, color }) => {
    const maxNum = Math.ceil(stat / 100) * 100;
  
    return (
      <div className="flex w-2/3">
        <span className="w-8 text-slate-300">{title}</span>
        <div className="flex-1 bg-white rounded-l-full rounded-r-full text-sm">
          <div
            className={`bg-${color}-500 h-full rounded-r-full text-right px-2`}
            style={{ width: `${(stat / maxNum) * 100}%` }}
          >
            {stat}/{maxNum}
          </div>
        </div>
      </div>
    );
  };
  


  return (
    
    <div className="flex flex-col items-center justify-center w-full m-auto gap-y-4 md:w-1/3 md:p-8">
      {data && (
        <>
          <img src={data.sprites.other.home.front_default} alt={data.name} /> 
          <h3 className="text-3xl">{data.name}</h3>
          <div className="flex items-center justify-center w-full px-40 gap-x-4">
            {data.types?.map((item, index) => (
              <span key={index} 
              className={`${colors[index]} px-4 py-1 rounded-l-full rounded-r-full`}
              >
                {item.type.name}
                </span>
            ))}
          </div>

          <div className="flex items-center justify-around w-full ">
            <div className="flex flex-col items-center">
              <span className="text-2xl">{data.weight}</span>
              <span className="text-slate-300">Weight</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-2xl">{data.height}</span>
              <span className="text-slate-300">Height</span>
            </div>
          </div>

          <div className="w-full flex flex-col items-center gap-y-3">
          {data.stats?.map(item => {
              switch (item.stat.name) {
                case "hp":
                  return <PokemonStat title="HP" stat={item.base_stat} color="amber" />;
                case "attack":
                  return <PokemonStat title="ATK" stat={item.base_stat} color="red" />;
                case "defense":
                  return <PokemonStat title="DEF" stat={item.base_stat} color="cyan" />;
                default:
                  return null;
              }
            })}

          </div>
        </>
      )}
    </div>
  );
}

export default Detail