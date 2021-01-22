import "./styles.css";
import React from "react";
import Countries from "./components/countries";

export default function App() {
  const url = "https://restcountries.eu/";

  return (
    <>
      <Countries />
    </>
  );
}
