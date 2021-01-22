import React, { useState, useEffect } from "react";
import "./countries.css";

const Countries = (props) => {
  return (
    <>
      <section className="grid">
        {props.countries.map((country) => {
          const {
            numericCode,
            name,
            population,
            region,
            capital,
            flag
          } = country;
          return (
            <article key={numericCode} className="bigContainer">
              <div className="container">
                <img src={flag} alt={name} />
                <div className="info">
                  <h3>{name}</h3>
                  <h4>
                    Population : <span>{population}</span>
                  </h4>
                  <h4>
                    Region :<span> {region}</span>
                  </h4>
                  <h4>
                    Capital : <span>{capital}</span>
                  </h4>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
