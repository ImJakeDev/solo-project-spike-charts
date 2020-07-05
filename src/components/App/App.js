import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import NavHeader from "../NavHeader/NavHeader";
import Home from "../Home/Home";
import CalendarChart from "../CalendarChart/CalendarChart";
import PieChart from "../PieChart/PieChart";
import RadarChart from "../RadarChart/RadarChart";

function App() {
  return (
    <div className="App" className="App-header">
      <NavHeader />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/calendar" component={CalendarChart} />
        <Route path="/pie" component={PieChart} />
        <Route path="/radar" component={RadarChart} />
      </Switch>
    </div>
  );
}

export default App;