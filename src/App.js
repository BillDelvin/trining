import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Movie from "./pages/Movie/Movie"
import "./App.css"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/movie" component={Movie} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default App
