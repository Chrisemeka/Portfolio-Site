import React, { useState, useEffect } from 'react';
import  PortfolioCard  from "./PortfolioCard";

export default function Portfolio() {
  const [portfolios, setPortfolio] = useState([]);

  useEffect(() => {
    fetch('/json/repos.json')
      .then(response => response.json())
      .then(data => {
        setPortfolio(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="w-[70%] mx-auto h-screen">
      <h2 className="text-5xl textColor mb-8 font-bold">Portfolio</h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 sm:break-words">
        {portfolios.map(portfolio => <PortfolioCard key={portfolio.id} portfolio={portfolio} />)}
      </div>

    </div>
  );
}
