import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Day1_2 from "./Pages/Day1/Day-1.2";
import Day1_1 from "./Pages/Day1/Day-1.1";
import Day2 from "./Pages/Day2";
import Day3 from "./Pages/Day3";
import Day4 from "./Pages/Day4";


export default function Router() {
  return (
    <BrowserRouter>
      <Route path="/day-1.1" component={Day1_1} />
      <Route path="/day-1.2" component={Day1_2} />
      <Route path="/day-2" component={Day2} />
      <Route path="/day-3" component={Day3} />
      <Route path="/day-4" component={Day4} />
    </BrowserRouter>
  );
}

