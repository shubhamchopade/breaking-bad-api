import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import "./app.css";
import CharacterGrid from "./characters/CharacterGrid";
import QuotesGrid from "./quotes/QuotesGrid";
import Search from "./Search";

export const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/quotes?author=${query}`
      );
      console.log(result.data);
      setQuotes(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  const handleToggle = (e) => {
    setToggle(!toggle);
  };

  return (
    <div className="container">
      <Header />

      <div className="button-container">
        <button className="button" onClick={handleToggle}>
          Show {toggle ? "Quotes" : "Characters"}
        </button>
      </div>
      {toggle ? (
        <>
        <Search getQuery={(q) => setQuery(q)} />
        <CharacterGrid items={items} isLoading={isLoading} />
        </>
      ) : (
        
          <QuotesGrid quotes={quotes} isLoading={isLoading} items={items} />
          
       
      )}
    </div>
  );
};
