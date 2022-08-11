import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import { useDocumentTitle } from "../Hooks/useDocumentTitle";
import { useLocalStorage } from "../Hooks/useLocalStorage";
import { useRequest } from "../Hooks/useRequest";

export const Pokemon = () => {
  const params = useParams();

  const { data: pokemon, loading } = useRequest({
    url: `https://pokeapi.co/api/v2/pokemon/${params.pokemonName}/`,
  });

  useDocumentTitle({ title: `Pokemon is ${params.pokemonName}!` });

  const { set } = useLocalStorage({ key: "lastViewed" });

  useEffect(() => {
    set(params.pokemonName);
  }, [params.pokemonName, set]);

  return (
    <div>
      {loading ? (
        <Skeleton />
      ) : (
        <div>
          <div>
            <img
              width="50"
              height="50"
              alt="pokemon"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            />
          </div>
          <div>{params.pokemonName}</div>
          <div>{pokemon.weight}</div>
          <div>{pokemon.height}</div>

          <div>
            {pokemon.moves.map((move) => {
              return <div key={move.move.name}>{move.move.name}</div>;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

// const [loading, setLoading] = useState(true);
// const [pokemon, setPokemon] = useState(null);

// useEffect(() => {
//   axios
//     .get(`https://pokeapi.co/api/v2/pokemon/${params.pokemonName}/`)
//     .then((res) => {
//       setTimeout(() => {
//         setPokemon(res.data);
//         setLoading(false);
//       }, 3000);
//     })
//     .catch(() => {
//       // todo
//     });
// }, [params.pokemonName]);
