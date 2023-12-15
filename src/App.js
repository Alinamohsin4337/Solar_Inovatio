import React from "react";

import Header from "./components/header";
import HeaderSecond from "./components/HeaderSecond";
import Hero from "./components/Hero";
import Cards from "./components/cards";
import IconCard from "./components/iconcard";
import IconCardBack from "./components/iconcardBackgroundGrey";
import CardWithBody from "./components/cardWithBody";
import BorderCard from "./components/borderCards";
import Frequently from "./components/Frequently";
import Newsletter from "./components/newsLetter";
import Footer from "./components/footer";
import Coneso from "./components/coneso";
import Overlap from "./components/overlap";

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderSecond />
      <Hero />
      <Cards />
      <Overlap />
      <Coneso />
      <IconCard />
      <IconCardBack />
      <CardWithBody />
      <BorderCard />
      <Frequently />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
