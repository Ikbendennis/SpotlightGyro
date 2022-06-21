import "./App.css";
import React, { useEffect, useState } from "react";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "./firebase-config";
import person from "./img/person.png";

function App() {
  var [num, setNum] = useState(0);
  // const random = Math.floor(Math.random() * (5 - 1 + 1)) + 1
  var counter = 0;
  useEffect(() => {
    onSnapshot(doc(db, "Spotlight", "spotlight1"), (doc) => {
      holePosition(doc.data().top, doc.data().left);
    });
  });

  const holePosition =(top, left) => {
    document.getElementById("hole").style.top = top + "%";
    document.getElementById("hole").style.left = left + "%";

    
    if (num === 0 && left >= 20 && top >= 54.5 && left <= 29 && top <= 66) {
      document.getElementById("window0").style.backgroundColor =
        "rgba(255, 255, 0,50%)";
        document.getElementById("window0").style.opacity = 0.5;
         setNum(5);
    }

    if (num === 1 && left >= 31 && top >= 54.5 && left <= 40.5 && top <= 66 ) {
      document.getElementById("window1").style.backgroundColor =
        "rgba(255, 0, 0,50%)";
        document.getElementById("window1").style.opacity = 0.5;
      setNum(11);
    }

    if (num === 2 && left >= 42.5 && top >= 53.5 && left <= 53 && top <= 65) {
      document.getElementById("window2").style.backgroundColor =
        "rgba(0, 128, 0,50%)";
        document.getElementById("window2").style.opacity = 0.5;
      setNum(9);
    }

    if (num === 3 && left >= 54.5 && top >= 52.5 && left <= 65.5 && top <= 64 ) {
      document.getElementById("window3").style.backgroundColor =
        "rgba(255, 165, 0,50%)";
        document.getElementById("window3").style.opacity = 0.5;
      setNum(7);
    }

    if (num === 4 && left >= 67.5 && top >= 52 && left <= 79 && top <= 53.5) {
      document.getElementById("window4").style.backgroundColor =
        "rgba(128, 0, 128,50%)";
        document.getElementById("window4").style.opacity = 0.5;
      setNum(4);
    }

    if (num ===5 && left >= 82.5 && top >= 51 && left <= 93.5 && top <= 62.5 ) {
      document.getElementById("window5").style.backgroundColor =
        "rgba(0, 0, 255,50%)";
        document.getElementById("window5").style.opacity = 0.5;
      setNum(2);
    }

    if (num === 6 && left >= 20 && top >= 72 && left <= 29 && top <= 83.5) {
      document.getElementById("window6").style.backgroundColor =
        "rgba(255, 192, 203,50%)";
        document.getElementById("window6").style.opacity = 0.5;
        setNum(10);
    }

    if (num === 7 && left >= 30.5 && top >= 71 && left <= 40 && top <= 82.5) {
      document.getElementById("window7").style.backgroundColor =
        "rgba(192, 255, 251,50%)";
        document.getElementById("window7").style.opacity = 0.5;
      setNum(3);
    }

    if (num === 8 && left >= 42 && top >= 70 && left <= 52.5 && top <= 81.5){
      document.getElementById("window8").style.backgroundColor =
        "rgba(185, 130, 68,50%)";
        document.getElementById("window8").style.opacity = 0.5;
      setNum(1);
    }

    if (num === 9 && left >= 55 && top >= 69.5 && left <= 66 && top <= 81) {
      document.getElementById("window9").style.backgroundColor =
        "rgba(157, 255, 0,50%)";
        document.getElementById("window9").style.opacity = 0.5;
      setNum(8);
    }

    if (
      num === 10 &&
      left >= 67.5 &&
      top >= 69 &&
      left <= 79.5 &&
      top <= 80.5 
    ) {
      document.getElementById("window10").style.backgroundColor =
        "rgba(255, 255, 255,50%)";
        document.getElementById("window10").style.opacity = 0.5;
      setNum(9);
    }

    if (
      num === 11 &&
      left >= 82.5 &&
      top >= 68 &&
      left <= 94 &&
      top <= 79.5 
    ) {
      document.getElementById("window11").style.backgroundColor =
        "rgba(0, 0, 0,50%)";
        document.getElementById("window11").style.opacity = 0.5;
    }
    console.log(num);


  };

  return (
    <div className="App">
      <div id="person" className={"position" + num.toString()}>
        <img src={person} alt="" />
      </div>
      <div id="window0" className="window"></div>
      <div id="window1" className="window"></div>
      <div id="window2" className="window"></div>
      <div id="window3" className="window"></div>
      <div id="window4" className="window"></div>
      <div id="window5" className="window"></div>
      <div id="window6" className="window"></div>
      <div id="window7" className="window"></div>
      <div id="window8" className="window"></div>
      <div id="window9" className="window"></div>
      <div id="window10" className="window"></div>
      <div id="window11" className="window"></div>
      <div className="base">
        <div id="hole"></div>
      </div>
    </div>
  );
}

export default App;
