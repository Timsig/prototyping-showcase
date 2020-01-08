import React from "react";

import "./styles/nexus-styles.scss"
import ScrollToTop from "./components/scroll-to-top"
import IntroPageNexus from "./pages/intro-page-nexus"

import Headertext from "./components/header_text"
import Toggle from "./components/toggle"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {      
    }
  }

  render() {
    return (
      
        <Router>
          <ScrollToTop>
            <Route exact path="/" component={IntroPageNexus} /> 
          </ScrollToTop>
        </ Router>
      
    )
  }
}
export default Main;
