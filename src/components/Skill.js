import React from 'react';

export default function Skill({ skillName, logoSrc, skillDescription }) {
  return (
    <div className="cardBg shadow-md rounded-lg p-6 mb-7">
      <img src={process.env.PUBLIC_URL + logoSrc} alt={skillName} className="w-12 h-12 mb-4" />
      {/* <h3 className="text-xl font-semibold mb-2">{skillName}</h3> */}
      <p className="textColor">{skillDescription}</p>
    </div>
  );
}
