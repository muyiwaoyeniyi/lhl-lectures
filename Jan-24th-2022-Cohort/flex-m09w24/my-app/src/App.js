import { useCallback, useReducer } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Login } from "./Auth/Login";
import { Pokemon } from "./Pokemons/Pokemon";
// import { PokemonList } from "./Pokemons/List";
import PokemonList from "./Pokemons/ListClass";
import { AuthContext } from "./Contexts/AuthContext";
import { AuthReducer, initialAuthState } from "./Reducers/AuthReducer";

import "./App.css";

function App() {
  const [state, dispatch] = useReducer(AuthReducer, initialAuthState);

  const onLogout = useCallback(() => {
    dispatch({ type: "LOGOUT" });
  }, []);

  // useCallback not needed
  const showName = () => {
    return ""; //`${firstName} ${lastName}`;
  };

  // const complicatedNameComputation = useMemo(() => {
  //   console.log(firstName);
  //   return "AHHH";
  // }, [firstName]);

  return (
    <div className="App">
      <AuthContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Routes>
            {showName()}
            {/* {complicatedNameComputation} */}
            <Route path="/login" exact element={<Login />} />
            {state.firstName && (
              <>
                <Route exact path="/" element={<PokemonList />} />
                <Route
                  path="/pokemon/:pokemonName"
                  element={
                    <Pokemon
                    // userLinks={userLinks}
                    // setUserLinks={setUserLinks}
                    />
                  }
                />
              </>
            )}
            <Route path="*" exact element={<Login onLogin={dispatch} />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
