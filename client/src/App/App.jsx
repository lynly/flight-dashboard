import { hot } from "react-hot-loader/root";
import React, { useState } from "react";
import GlobalStyle from "../theme";
import { Application } from "./styles";
import FlightDashboard from "./FlightDashboard";
import axios from "axios";

const App = () => {
  const [capsulesState, setCapsulesState] = useState({
    isLoading: false,
    capsules: undefined,
  });

  const apiUrlCapsules = "https://api.spacexdata.com/v3/capsules";

  const fetchCapsules = async () => {
    setCapsulesState({ isLoading: true });
    try {
      const response = await axios.get(apiUrlCapsules);
      setCapsulesState({ isLoading: false, capsules: response.data });
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const handleOnClickCapsules = () => {
    fetchCapsules();
  };

  return (
    <>
      <Application>
        <FlightDashboard
          allCapsules={capsulesState}
          handleOnClickCapsules={handleOnClickCapsules}
        />
      </Application>
      <GlobalStyle />
    </>
  );
};

export default hot(App);
