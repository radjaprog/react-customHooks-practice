import logo from "./logo.svg";
import Router from "./Router";
import "./App.css";
import React from "react";
import { Link } from "react-router-dom";

import { useIsDiesel } from "./hooks/useIsDieselHook";

export default function App() {
  const car = {
    brand: "Audi",
    fuel: "Diesel",
    color: "Black",
  };

  const isDiesel = useIsDiesel(car);
  console.log(isDiesel);
  return <div>{isDiesel ? "It's a Diesel car " : "It's not a Diesel car"}</div>;
}
