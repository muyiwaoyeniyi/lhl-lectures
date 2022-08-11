import React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

import { Item } from "./Item";
import { Profile } from "../Auth/Profile";
import { useRequest } from "../Hooks/useRequest";
import { useLocalStorage } from "../Hooks/useLocalStorage";
import { useDocumentTitle } from "../Hooks/useDocumentTitle";

import "react-loading-skeleton/dist/skeleton.css";
import { useEffect } from "react";

const Container = styled.div`
  padding: 20px;
`;

export const PokemonList = () => {
  useDocumentTitle({ title: "Pokemon List!" });

  const { data, loading } = useRequest({
    url: "https://pokeapi.co/api/v2/pokemon",
  });

  useEffect(() => {
    return () => {
      console.log("same as componentWillUnmount");
    };
  }, []);

  const { value: recentlyViewed } = useLocalStorage({ key: "lastViewed" });

  return (
    <Container>
      <Profile />
      <h3>Recently Viewed</h3>
      {recentlyViewed && <h5>{recentlyViewed.data}</h5>}
      <h3>Items</h3>
      {loading ? (
        <Skeleton count={5} />
      ) : (
        data.results.map((p) => <Item key={p.name} name={p.name} url={p.url} />)
      )}
    </Container>
  );
};
