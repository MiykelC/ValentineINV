'use client';

import React from "react";
import { useState, useEffect } from "react";

const words = ["Hinde", "Sure ka?", "Sure na talaga?", "Di nga?", "Wehhh di nga?", "Hindi talaga?", "Iiyak ako pag hinde", "please um oo ka na"]
const noImages = ["/bear.gif", "bearcry.gif"]


export default function Home() {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [yesImg, setYesImg] = useState(false);
  const [noImageIndex, setNoImageIndex] = useState(0);

  const increment = (e: any) => {
    e.preventDefault();
    setCount(prevCount => prevCount + 10);
    setWordIndex(prevWordIndex => (prevWordIndex + 1) % words.length)
    setNoImageIndex(1);
  }

  const isIncrease = () => count > 0;

  const buttonYesWidth = 170 + count;
  const buttonYesheight = 40 + count;
  const buttonfontSize = 16 + count / 2;

  const yesClicked = () => {
    setYesImg(true);
  }

  return (
    <main className="">
      <div className="flex flex-col justify-center h-[100vh] items-center">
        <img src={yesImg ? "/bear2.gif" : `${noImages[noImageIndex]}`} alt="valentine" className="w-[300px] h-[300px] mb-4" />
        <h1 className="text-[40px] text-center">{yesImg ? "Yehey See you sa 14 😘" : "Pwede ba kita maging ka Valentine?"}</h1>
        <div className={yesImg ? "hidden" : "flex gap-2 mt-6 w-auto h-auto items-center"}>
          <button style={{ width: `${buttonYesWidth}px`, height: `${buttonYesheight}px`, fontSize: `${buttonfontSize}px` }} onClick={yesClicked} className={`bg-green-500 rounded-[4px] text-white`}>Oo</button>
          <button onClick={(e) => increment(e)} className="bg-red-500 w-[170px] h-[40px] rounded-[4px] text-white">{words[wordIndex]}</button>
        </div>
      </div>
    </main>
  );
}
