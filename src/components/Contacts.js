import React from 'react';

export default function Contacts() {
  return (
    <div id="contact" className="w-[70%] mx-auto h-screen">
      <h2 className="text-5xl textColor mb-8 font-bold">Contact</h2>

      <div className="mx-auto h-screen flex md:items-center md:justify-center ">

        <div className="w-1/2 flex flex-col gap-5 justify-center items-center md:mt-[50px]">
          <a href="https://github.com/Chrisemeka" target="_blank" rel="noreferrer" className="flex justify-center items-center gap-3">
            <img src={process.env.PUBLIC_URL + '/img//icons/github.svg'} alt='my github link' className="w-[50px] h-[50px]" />
            <p className="font-semibold text-lg text-white">GITHUB</p>
          </a>

          <a href="https://www.linkedin.com/in/chukwuemeka-anyanwu-14a4921a0/" target="_blank" rel="noreferrer" className="flex justify-center items-center gap-3 ml-5">
            <img src={process.env.PUBLIC_URL + '/img//icons/linkedin.svg'} alt='my twitter link' className="w-[40px] h-[40px]" />
            <p className="font-semibold text-lg text-white">LINKEDIN</p>
          </a>

          <a href="mailto:chrisemeka096@gmail.com" target="_blank" rel="noreferrer" className="flex justify-center items-center gap-3">
            <img src={process.env.PUBLIC_URL + '/img//icons/gmail.svg'} alt='my gmail link' className="w-[50px] h-[50px]" />
            <p className="font-semibold text-lg text-white">GMAIL</p>
          </a>
        </div>

        <div className="w-1/2 min-h-[300px] flex items-center justify-center">
          <img src={process.env.PUBLIC_URL + '/img/contact_me.svg'} className="w-full h-full object-contain" alt='contact me' />
        </div>
      </div>
    </div>
  );
}
