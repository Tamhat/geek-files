import React from "react";
import "./styles/App.css";
import Home from "./component/Home";
import Description from "./component/Description";
import Supported from "./component/Supported";
import Roadmap from "./component/Roadmap";
import Faq from "./component/Faq";
import Footer from "./component/Footer";
import Teams from "./component/Teams";

const App = () => {
  return (
    <div className="App">
      <Home/>
      <Description/>
      <Supported/>
      <Roadmap />
      <Faq />
      <Teams/>
      <Footer/>
    </div>
  );
};

export default App;