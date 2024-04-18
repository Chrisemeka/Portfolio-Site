import React from 'react';

export default function NavBar({ nav }) {

  return (
    <div className="navbar text-white sticky top-0 z-[99]">
      <nav className={`flex justify-between ${nav}  items-center w-[95%] mx-auto`}>
        <div className="text-xl">Chrisemeka</div>

        <div>
          <ul className="flex flex-row gap-7">
            <li> <a href="#home">Home</a> </li>
            <li> <a href="#home">About</a> </li>
            <li> <a href="#home">Skills</a> </li>
            <li> <a href="#home">Contact</a> </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
