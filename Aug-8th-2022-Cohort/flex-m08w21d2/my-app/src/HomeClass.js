import axios from "axios";
import React, { Component } from "react";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

import "./App.css";
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink } from "react-router-dom";
import { setDocumentTitle } from "./helpers";
import useDocumentTitle from "./customHooks/useDocumentTitle";
import useRequest from "./customHooks/useRequest";

const getIdFromUrl = (url) => {
  return url.split("/")[6];
};

// lifecycle methods

// useEffect(() => {}, []); // No deps. Executes once after mount
// useEffect(() => {}, [deps]); // Executes every time deps changes
// useEffect(() => {}); // No deps. You shouldn't have this.

// class Home extends React.Component {
class Home extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = {
      height: 100,
      data: undefined,
      loading: true,
    };
  }

  // useEffect(() => {}, []); // No deps. Executes once after mount
  componentDidMount() {
    console.log("component did mount");

    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      console.log("response", response);
      this.setState({ data: response.data, loading: false, height: 120 });

      // this.setState({ data: response.data });
      // this.setState({ loading: false });
      // setData(response.data);
      // setLoading(false);
    });
  }

  // useEffect(() => {
  //    do stuff

  //    cleanup function
  //   return () => {
  //      cleanup here
  //      console.log("bye bye");
  //   };
  // }, []); // No deps. Executes once after mount
  componentWillUnmount() {
    console.log("bye bye");
  }

  // useEffect(() => {}, [deps]); // Executes every time deps changes
  // useEffect(() => {}); // No deps. You shouldn't have this.
  componentDidUpdate(prevProps, prevState) {
    if (prevState.height === 100 && this.state.height === 120) {
      console.log("Run a side effect");
    }
  }

  render() {
    console.log("state", this.state);

    // another way to extract state data ...
    // const { loading, data } = this.state;

    return (
      <div>
        {this.state.loading ? (
          <Skeleton count={5} />
        ) : (
          this.state.data.results.map((pokemon) => {
            return (
              <div key={pokemon.name} className="pokemon-row">
                <NavLink to={`/pokemon/${pokemon.name}`}>
                  <div>{pokemon.name} </div>
                  <div>
                    <img
                      src={`url://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getIdFromUrl(
                        pokemon.url
                      )}.png`}
                      width="50"
                      height="50"
                      alt="pokemon"
                    />
                  </div>
                </NavLink>
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default Home;
