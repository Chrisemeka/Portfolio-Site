import React, { useState, useEffect } from 'react';
import  Skill  from "./Skill";

export default function SkillSet() {
  const [skills, setSkill] = useState([]);

  useEffect(() => {
    fetch('/json/skills.json')
      .then(response => response.json())
      .then(data => {
        setSkill(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div id="skillSet" className="w-[70%] mx-auto h-screen">
      <h2 className="text-5xl textColor mb-8 font-bold">Skill-Set</h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {skills.map(skill => <Skill skillName={skill.skill} logoSrc={skill.logo} skillDescription={skill.description} key={skill.id} />)}
      </div>

    </div>
  );
}
