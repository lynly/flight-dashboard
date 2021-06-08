import { hot } from "react-hot-loader/root";
import React, { useState } from "react";
import FlightDashboard from "./FlightDashboard";
import axios from "axios";

const App = () => {
  const [appState, setAppState] = useState({
    isLoading: false,
    capsules: undefined,
    padDetails: undefined,
    hasError: false,
  });

  const apiUrlCapsules = "https://api.spacexdata.com/v3/capsules";
  const apiUrlLandingPad = "https://api.spacexdata.com/v3/landpads";

  const fetchCapsules = async () => {
    setAppState({ isLoading: true });
    try {
      const response = await axios.get(apiUrlCapsules);
      setAppState({ isLoading: false, capsules: response.data });
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const fetchLandingPad = async (id) => {
    setAppState({ isLoading: true });
    try {
      const response = await axios.get(`${apiUrlLandingPad}/${id}`);
      setAppState({ isLoading: false, padDetails: response.data });
    } catch (error) {
      console.log(error);
      setAppState({ hasError: true })
    }
  };

  const handleOnClickCapsules = () => {
    fetchCapsules();
  };

  const handleOnClickLandingPad = (id) => {
    if (id) {
      fetchLandingPad(id)
    } else {
      setAppState({ hasError: true })
    }
  };



  return (
    <FlightDashboard
      appState={appState}
      handleOnClickCapsules={handleOnClickCapsules}
      handleOnClickLandingPad={handleOnClickLandingPad}
    />
  );
};

export default hot(App);
