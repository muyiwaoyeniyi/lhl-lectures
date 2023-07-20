import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useRequest from "../hooks/useRequest";

const Pokemon = () => {
  // const [pokemon, setPokemon] = useState({});
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios
  //     .get(`https://pokeapi.co/api/v2/pokemon/${params.id}/`)
  //     .then((response) => {
  //       setPokemon(response.data);
  //       setLoading(false);
  //     });
  // }, [params.id]);

  const params = useParams();

  const payload = useRequest({
    url: `https://pokeapi.co/api/v2/pokemon/${params.id}/`,
  });
  const pokemon = payload.data;

  // useEffect(() => {
  //   document.title = pokemon.name;
  // }, [pokemon.name]);

  useDocumentTitle(payload.loading ? "" : pokemon.name);

  return payload.loading ? (
    "Loading ... "
  ) : (
    <div>
      <div>Pokemon page</div>
      <div>{pokemon.name}</div>
      <div>{pokemon.weight}</div>
      <div>{pokemon.height}</div>
      <div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${params.id}.png`}
          width={50}
          height={50}
          alt="pokemon"
        />
      </div>
      <div></div>
    </div>
  );
};

export default Pokemon;
