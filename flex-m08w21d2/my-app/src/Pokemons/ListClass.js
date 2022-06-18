import axios from "axios";
import styled from "styled-components";
import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";

import { Item } from "./Item";
import { Profile } from "../Auth/Profile";

import "react-loading-skeleton/dist/skeleton.css";

const Container = styled.div`
  padding: 20px;
`;

// useEffect(() => {}, []) No deps, Runs once on mount
// useEffect(() => {}, [dep]) 1 dep, Runs every time compononent re-renders and dep has changed
// useEffect(() => {}) No deps, Runs every time. you shouldn't have this.

// lifecycle methods

// export Class PokemonList extends React.Component {
export default class PokemonList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      loading: true,
    };

    this.onRecentlyViewedClick = this.onRecentlyViewedClick.bind(this);
  }

  // useEffect(() => {}, []) No deps, Runs once on mount
  componentDidMount() {
    console.log("component just mounted");
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      console.log("response >>", response);
      this.setState({ data: response.data, loading: false });
      // this.setState({ data: response.data });
      // this.setState({ loading: false });
    });
  }

  // useEffect(() => {
  //    do stuff

  //   return () => {}
  // }, []) No deps, Runs once on mount
  componentWillUnmount() {
    console.log("Component will unmount");
  }

  // useEffect(() => {}, [dep]) same as useEffect with deps
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    if (prevState.loading === true && this.state.loading === false) {
      console.log("done loading!!!");
    }
  }

  onRecentlyViewedClick() {
    console.log("onRecentlyViewedClick");
    console.log(this.state);
  }

  render() {
    // const { loading, data } = this.state; // Another way to grab data from state

    return (
      <Container>
        <Profile />
        <h3 onClick={this.onRecentlyViewedClick}>Recently Viewed</h3>
        <h3>Items</h3>
        {this.state.loading ? (
          <Skeleton count={5} />
        ) : (
          this.state.data.results.map((p) => (
            <Item key={p.name} name={p.name} url={p.url} />
          ))
        )}
      </Container>
    );
  }
}
