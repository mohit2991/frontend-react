import React, { Component } from "react";
import "../src/app.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Counter from "./components/Counter";

class App extends Component {
  render() {
    return (
      <>
        <div>
          <Header />
          <div>
            <Home />
            <Counter value={100} />
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
