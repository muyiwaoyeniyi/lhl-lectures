import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { setDocumentTitle } from "./helpers";
import useDocumentTitle from "./customHooks/useDocumentTitle";
import useRequest from "./customHooks/useRequest";

// props => { height: 100 }
const Pokemon = (props) => {
  const { pokemonName } = useParams();

  // const [loading, setLoading] = useState(true);
  // const [pokemon, setPokemon] = useState();

  // useEffect(() => {
  //   axios
  //     .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  //     .then((response) => {
  //       setPokemon(response.data);
  //       setLoading(false);
  //     });
  // }, [pokemonName]);

  const { data: pokemon, loading } = useRequest({
    url: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
  });

  // useEffect(() => {
  //   setDocumentTitle(pokemonName);
  // }, [pokemonName]);

  useDocumentTitle(pokemonName);

  return loading ? (
    "Loading"
  ) : (
    <div>
      <div>{pokemon.name}</div>
      <div>{pokemon.weight}</div>
      <div>{pokemon.height}</div>
      <div>
        <img
          width="50"
          height="50"
          alt="pokemon"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        />
      </div>
      <div>
        {pokemon.moves.map((move) => {
          return <div>{move.move.name}</div>;
        })}
      </div>
    </div>
  );
};

export default Pokemon;
