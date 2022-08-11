import { useCallback, useMemo, useReducer, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Login } from "./Auth/Login";
import { Pokemon } from "./Pokemons/Pokemon";
import { PokemonList } from "./Pokemons/List";
import { AuthContext } from "./Contexts/AuthContext";
import { AuthReducer, initialAuthState } from "./Reducers/AuthReducer";

import "./App.css";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // const [userLinks, setUserLinks] = useState([]);

  const [state, dispatch] = useReducer(AuthReducer, initialAuthState);

  // const onLogin = useCallback(
  //   (data) => {
  //     // console.log(firstName);
  //     // setFirstName(data.firstName);
  //     // setLastName(data.lastName);
  //     dispatch({
  //       type: "LOGIN",
  //       payload: { firstName: data.firstName, lastName: data.lastName },
  //     });
  //   },
  //   [] //[firstName]
  // );

  const onLogout = useCallback(() => {
    // setFirstName("");
    // setLastName("");
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
            <Route path="/login" exact element={<Login onLogin={dispatch} />} />
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
