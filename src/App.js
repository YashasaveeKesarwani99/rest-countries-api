import "./styles.css";
import React, { useState, useEffect } from "react";
import Countries from "./components/countries";
import Filter from "../src/components/filter";
export default function App() {
  //fetching api data in parent class
  const url = "https://restcountries.eu/rest/v2/all";
  const [countries, setCountries] = useState([]);
  const [name, setName] = useState("");
  const [region, setRegion] = useState("");
  //storing searched country
  const onClickHandler = (event) => {
    setName(event);
    console.log("inApp", name);
  };
  //storing countries by region
  const onSelectHandler = (event) => {
    setRegion(event);
    console.log("inRegion", region);
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

  const specificRegionFetchCounrtyData = async () => {
    const response = fetch(
      `https://restcountries.eu/rest/v2/regionalbloc/${region}`
    );
    const countries = await (await response).json();
    setCountries(countries);
  };

  useEffect(() => {
    if (name === "") fetchCountryData();
    else {
      specificFetchCountryData();
    }
  }, [name]);

  useEffect(() => {
    if (region !== "") specificRegionFetchCounrtyData();
  }, [region]);

  return (
    <>
      <Filter onclick={onClickHandler} onsubmit={onSelectHandler} />
      <Countries countries={countries} />
    </>
  );
}
