import React, { useState } from "react";
import Error from "./Error";
import Table from "./Table";

const icoSearch = <i className="fas fa-search"></i>;
const Form = () => {
  //
  const [data, setData] = useState({});

  //Cuando se agrega un usario
  const [user, saveUser] = useState("");

  //State error
  const [error, saveError] = useState(false);

  //Funcion que lee el input
  const searchUser = (e) => {
    saveUser(e.target.value);
  };

  // //Consumiendo la Api de github
  const submitHandler = async (e) => {
    e.preventDefault();

    // validando usario
    if (user.length < 4 || user.trim() === "react") {
      saveError(true);
      return;
    }
    const profile = await fetch(`https://api.github.com/users/${user}`);
    const usernameJson = await profile.json();

    if (usernameJson) {
      setData(usernameJson);
    }
    saveError(false);
  };

  return (
    <div className="container">
      {error ? <Error /> : null}
      <form>
        <input
          id="search"
          type="search"
          placeholder="Search..."
          value={user}
          onChange={searchUser}
        />
        <button type="submit" onClick={submitHandler}>
          {icoSearch}
        </button>
      </form>
      <div className="table-group">
        <Table data={data} />
      </div>
    </div>
  );
};

export default Form;
