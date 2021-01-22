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

  const onSelectHandler = (e) => {
    e.preventDefault();
    return props.onsubmit(e.target.value);
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
          <select
            name="select"
            id="select"
            className="select"
            onChange={(e) => onSelectHandler(e)}
          >
            <option value="filter by region">Filter by region</option>
            <option value="eu">European Union</option>
            <option value="efta">Europe free trade union</option>
            <option value="pa">Pasific Alliance</option>
            <option value="al">Arab League</option>
            <option value="saarc">Saarc</option>
          </select>
        </div>
      </form>
    </section>
  );
};

export default Filter;
