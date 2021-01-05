import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import "./App.css";
import Launches from "./pages/launches/Lauches";
import Details from "./pages/details/Details";
import LaunchDetails from "./components/launch_details/LaunchDetails.component";
import NotFound from "./pages/404/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Launches />} />
        <Route path="launch" element={<Details />}>
          <Route path=":flight_number" element={<LaunchDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
