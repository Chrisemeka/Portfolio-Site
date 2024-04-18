import React, { useState, useEffect } from 'react';

export default function Header() {
  const [img, setImg] = useState("/img/img1.svg");
  const [rotation, setRotation] = useState(0);

  function handleToggle() {
    setImg(prevImg => (prevImg === "/img/img1.svg" ? "/img/img2.svg" : "/img/img1.svg"));
    setRotation(prevRotation => (prevRotation === 0 ? 180 : 0));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleToggle();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div id='home' className="w-[70%] mx-auto h-screen flex justify-center flex-col relative">

        <div>
          <h1 className="text-5xl textColor font-bold">Hello, I'm</h1>
          <h2 className="text-5xl textColor mb-3">Anyanwu Chukwuemeka Clinton</h2>
          <ul className="dynamicText">
            <li className="text-5xl textColor"><span>a FullStack Engineer</span></li>
          </ul>

          <p className="mt-6 mb-7 text-white">
            Hey there! I'm a full stack web developer who's all about bringing ideas to life in the digital realm. With my roots in HTML, CSS, and JavaScript, and a knack for React, Tailwind and PHP. I love crafting user-friendly web solutions that just work. Plus, I'm not just about code – I thrive on teamwork and bringing positive vibes to every project. Let's build something awesome together!
          </p>

          <button className="bgColor text-white font-bold py-3 px-6 rounded w-[200px]">
            <a href="#skillSet">My Journey</a>
          </button>
        </div>

        <div className="absolute left-[70%] top-1 bounce" style={{ transform: `rotateY(${rotation}deg)` }}>
          <img src={process.env.PUBLIC_URL + img} className="w-[300px] h-[300px] cursor-pointer" onMouseOver={handleToggle} alt="Description" />

          {/* <img src={process.env.PUBLIC_URL + '/img/img2.svg'} className="w-[300px] h-[300px] cursor-pointer" alt="Description" /> */}
        </div>

      </div>

      <div>

      </div>
    </>
  );
}
