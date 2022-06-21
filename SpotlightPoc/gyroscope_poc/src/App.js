import "./App.css";
import React, { useRef, useState, useEffect } from "react";
import { collection, query, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "./firebase.config";
function App() {
  const [alpha, setAlpha] = useState();
  const [gamma, setGamma] = useState();
  const [beta, setBeta] = useState();
  const [topVal, setTop] = useState();
  const [leftVal, setLeft] = useState();
  const [accelY, setAccelY] = useState();
  const [accelX, setAccelX] = useState();
  const block = useRef();
  const ball = useRef();
  const [testNum, setTestNum] = useState(0);
  const [testTrue, setTestTrue] = useState(false);

  const UpdateUserInfo = async () => {
    const q = query(collection(db, "Spotlight"));

    const querySnapshot = await getDocs(q);
    let docID = '';
    querySnapshot.forEach((doc) => {
      // if email is you primary key then only document will be fetched so it is safe to continue, this line will get the documentID of user so that we can update it
      docID = doc.id;
    });
    const user = doc(db, "Spotlight", "spotlight1");
    // Set the "capital" field of the city 'DC'
      await updateDoc(user, {
        top: topVal,
        left: leftVal
      });
    
  };

  useEffect(() => {
    UpdateUserInfo();
  }, [testTrue]);

  if (window.DeviceOrientationEvent) {
    window.addEventListener(
      "deviceorientation",
      function (event) {
        // alpha: rotation around z-axis
        var rotateDegrees = (event.alpha / 3.6).toFixed(1);
        // gamma: left to right
        var leftToRight = ((event.gamma + 90) / 1.8).toFixed(1);
        // beta: front back motion
        var frontToBack = ((event.beta + 180) / 3.6).toFixed(1);
        setAlpha(rotateDegrees);
        setGamma(leftToRight);
        setBeta(frontToBack);
        setTop(100-beta);
        setLeft(100-alpha);
        block.current.style.transform =
          "rotateZ(" +
          rotateDegrees +
          "deg) rotateX(" +
          frontToBack +
          "deg) rotateY(" +
          leftToRight +
          "deg)";

        if (leftToRight > 10 && leftToRight < 90) {
          ball.current.style.left = leftToRight + "vw";
        }
        if (frontToBack > 10 && frontToBack < 90) {
          ball.current.style.top = frontToBack + "vh";
        }

        ball.current.style.backgroundColor =
          "hsl(" + leftToRight * 1.1 + ", 100%, 25%)";
        ball.current.style.border =
          "10px solid hsl( 0, " + frontToBack / 1.8 + "%, 25%)";
        setTestNum(testNum + 1);
        if (testNum === 3) {
          setTestTrue(true);
          setTestNum(0);
        } else {
          setTestTrue(false);
        }
      },
      true
    );

    if (window.DeviceMotionEvent) {
      window.addEventListener(
        "devicemotion",
        function (event) {
          setAccelY(parseFloat(event.acceleration.y).toFixed(1));
          setAccelX(parseFloat(event.acceleration.x).toFixed(1));
          if (accelY > 7.5 || accelX > 7.5) {
            document.getElementById("App-header").style.backgroundColor = "red";
          } else {
            document.getElementById("App-header").style.backgroundColor =
              "green";
          }
        },
        true
      );
    }
  }
  return (
    <div className="App">
      <header id="App-header">
        <div ref={ball} className="ball"></div>

        <div class="scene">
          <div ref={block} class="cube">
            <div class="cube__face cube__face--front">front</div>
            <div class="cube__face cube__face--back">back</div>
            <div class="cube__face cube__face--right">right</div>
            <div class="cube__face cube__face--left">left</div>
            <div class="cube__face cube__face--top">top</div>
            <div class="cube__face cube__face--bottom">bottom</div>
          </div>
        </div>
      </header>
      <p id="text">
        Rotation: {alpha}°<br />
        Left to right: {gamma}°<br />
        Front to back: {beta}° <br />
        acceleration-Y: {accelY}
        <br />
        acceleration-X: {accelX}
        <br />
        testNum: {testNum}
        <br />
        testTrue: {testTrue.toString()}
      </p>
    </div>
  );
}

export default App;
