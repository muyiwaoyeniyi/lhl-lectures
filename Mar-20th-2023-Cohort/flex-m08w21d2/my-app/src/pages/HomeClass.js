import React, { Component } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import splitUrl from "../helpers/splitUrl";

// class Home extends React.Component {
class Home extends Component {
  constructor(props) {
    console.log("props in constructor", props);
    super(props);

    this.state = {
      data: [],
      loading: true,
    };

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  // useEffect(() => {}, [])
  componentDidMount() {
    document.title = "Home!!";
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      this.setState({
        data: response.data,
        loading: false,
      });
    });
  }

  // useEffect(() => {}, [deps])
  componentDidUpdate() {}

  // componentDidMount
  // componentWillUnmount - the same as the cleanup function in functional components
  // getDerivedStateFromProps()
  // componentWillReceiveProps
  // componentDidUpdate

  onClickHandler() {
    alert("you clicked on a pokemon");
    // caught TypeError: Cannot read properties of undefined (reading 'state')
    console.log(this.state, "<<< this is the state");
  }

  render() {
    console.log(this.props);

    return this.state.loading ? (
      <Skeleton count={5} />
    ) : (
      this.state.data.results.map((pokemon) => {
        const id = splitUrl(pokemon.url);
        return (
          <button onClick={this.onClickHandler}>
            <div className="pokemon-row">
              <div>{pokemon.name}</div>
              <div>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                  width={50}
                  height={50}
                  alt="pokemon"
                />
              </div>
            </div>
          </button>
        );
      })
    );
  }
}

export default Home;
