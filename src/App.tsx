import React from "react";
import { Routes, Route } from "react-router-dom";
import Registration from "./conteiners/Registration/index";
import Content from "./components/Content";
import PageWrapper from "./components/PageWrapper";
import RequestCityWeather from "./conteiners/RequestCityWeather";
import RequestIp from "./conteiners/RequestIp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route path="/" element={<RequestIp />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/info" element={<Content />} />
        <Route path="/weather" element={<RequestCityWeather />} />
      </Route>
    </Routes>
  );
};

export default App;
