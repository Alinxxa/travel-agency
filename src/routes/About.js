import React from "react";
import "./About.css";
import ApiCall from "./ApiCall";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function About() {
    const location = useLocation();
    console.log(location);
  const [searchQuery, setSeacrhQuery] = useState(location.search.slice(1));
  function changeSearchQuery(query) {
    setSeacrhQuery(query);
    location.search = query;
  }



  return (
    <div class="about_us">

      <input
        className="search"
        type="search"
        placeholder="Поиск"
        onChange={(event) => changeSearchQuery(event.target.value)}
        value={searchQuery}
      ></input>
      <ApiCall search={location.search} />
    </div>
  );
}

export default About;
