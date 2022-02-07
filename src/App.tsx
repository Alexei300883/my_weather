import React from "react";
import { Routes, Route } from "react-router-dom";
import Registration from "./conteiner/Registration/Index";
import Content from "./components/Content";
import RequestCity from "./conteiner/RequestCity";
import PageWrapper from "./components/PageWrapper";
import RequestCityWeather from "./conteiner/RequestCityWeather";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route path="/" element={<RequestCity />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/info" element={<Content />} />
        <Route path="/weather" element={<RequestCityWeather />} />
      </Route>
    </Routes>
  );
};

export default App;
