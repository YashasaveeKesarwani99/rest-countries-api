import React, { useState } from "react";
import "./filter.css";

const Filter = (props) => {
  const [search, setSearch] = useState("");

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    //console.log(search);
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    return props.onclick(search);
  };
  return (
    <section className="filter">
      <form className="form-control">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="search for a country"
          onChange={(e) => onChangeHandler(e)}
        />
        <button
          value="submit"
          className="button"
          onClick={(e) => onClickHandler(e)}
        >
          Search
        </button>
        <div className="region-filter">
          <select name="select" id="select" className="select">
            <option value="filter by region">Filter by region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceana">Oceana</option>
          </select>
        </div>
      </form>
    </section>
  );
};

export default Filter;
