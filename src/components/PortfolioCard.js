import React from 'react';

export default function PortfolioCard({ portfolio }) {
  return (
    <div className="max-w-sm shadow-md rounded cardBg">
      <div className="px-6 py-4">
        <div className="font-bold textColor text-xl mb-2">{portfolio.name}</div>
        <p className="text-white text-base mb-2">
          Description: {portfolio.description}
        </p>
        <p className="text-white text-base">
          Website: <a className="textColor" target="_blank" rel="noreferrer" href={portfolio.homepage}>{portfolio.homepage}</a>
        </p>
      </div>
    </div>
  );
}
