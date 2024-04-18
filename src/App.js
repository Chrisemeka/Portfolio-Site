import "./App.css";
import React, { useState } from 'react';
import Footer from "./components/Footer.js";
import Contacts from "./components/Contacts.js";
import Portfolio from "./components/Portfolio.js";
import SkillSet from "./components/SkillSet.js";
import Header from "./components/Header.js";


export default function App() {
  const [nav, setNav] = useState("h-[100px]");

  window.onscroll = () => {
    if (window.scrollY > 30) {
      setNav("h-[60px]")
    } else {
      setNav("h-[100px]")
    }
  }

  return (
    <div className="">
      <NavBar nav={nav}/>
      <Header />
      <SkillSet />
      <Portfolio />
      <Contacts />
      <Footer />
    </div>
  );
}

function NavBar({nav}) {

  return(
    <div className="navbar text-white sticky top-0 z-[99]">
      <nav className={`flex justify-between ${nav}  items-center w-[95%] mx-auto`}>
        <div className="text-xl">Chrisemeka</div>

        <div>
          <ul className="flex flex-row gap-7">
            <li> <a href="#home">Home</a> </li>
            <li> <a href="#skillSet">About</a> </li>
            <li> <a href="#skillSet">Skills</a> </li>
            <li> <a href="#contact">Contact</a> </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}






