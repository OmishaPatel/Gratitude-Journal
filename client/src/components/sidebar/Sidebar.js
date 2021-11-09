import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { Loading } from "../loader/Loading";
const url = "http://quotes.rest/qod.json?category=inspire";
export const Sidebar = () => {
  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState([]);
  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const quote = await response.json();
      setLoading(false);
      setQuote(quote.contents.quotes[0]);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchQuote();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">Quote of the Day</span>
        <img
          className="sidebarImg"
          src={quote.background}
          alt="quotebackground"
        />
        <q className="quote">{quote.quote}</q>
        <figcaption className="quoteAuthor">
          &mdash; {quote.author},{" "}
          <cite>
            <a href="https://theysaidso.com" className="quoteLink">
              They Said So
            </a>
          </cite>
        </figcaption>
      </div>
    </div>
  );
};
