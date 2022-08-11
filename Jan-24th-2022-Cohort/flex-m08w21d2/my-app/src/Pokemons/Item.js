import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ItemRow = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  width: 150px;

  &:hover {
    background: gray;
  }
`;

const getIdFromUrl = (url) => {
  return url.split("/")[6];
};

export const Item = ({ name, url }) => {
  return (
    <ItemRow>
      <NavLink to={`/pokemon/${name}`}>
        <div>
          <img
            width="50"
            height="50"
            alt="pokemon"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getIdFromUrl(
              url
            )}.png`}
          />
        </div>
      </NavLink>
      <div>{name}</div>
    </ItemRow>
  );
};
