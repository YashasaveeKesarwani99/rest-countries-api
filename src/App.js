import "./styles.css";
import React, { useState, useEffect } from "react";
import Countries from "./components/countries";
import Filter from "../src/components/filter";
export default function App() {
  //fetching api data in parent class
  const url = "https://restcountries.eu/rest/v2/all";
  const [countries, setCountries] = useState([]);
  const [name, setName] = useState("");
  //storing searched country
  const onClickHandler = (event) => {
    setName(event);
    console.log("inApp", name);
  };

  //function to call api data
  const fetchCountryData = async () => {
    const response = fetch(url);
    const countries = await (await response).json();
    setCountries(countries);
  };

  const specificFetchCountryData = async () => {
    const response = fetch(`https://restcountries.eu/rest/v2/name/${name}`);
    const countries = await (await response).json();
    setCountries(countries);
    console.log(countries);
  };

  useEffect(() => {
    if (name === "") fetchCountryData();
    else specificFetchCountryData();
  }, [name]);

  return (
    <>
      <Filter onclick={onClickHandler} />
      <Countries countries={countries} />
    </>
  );
}
