import { useState } from "react";
import "./styles.css";

export default function App() {
  const [balls, setBalls] = useState({
    firstBall: "",
    firstBallWide: "",
    firstBallNoBall: "",
    secondBall: "",
    secondBallWide: "",
    secondBallNoBall: "",
    thirdBall: "",
    thirdBallWide: "",
    thirdBallNoBall: "",
    fourthBall: "",
    fourthBallWide: "",
    fourthBallNoBall: "",
    fifthBall: "",
    fifthBallWide: "",
    fifthBallNoBall: "",
    sixthBall: "",
    sixthBallWide: "",
    sixthBallNoBall: ""
  });

  const [items, setItems] = useState([]);
  let [total, setTotal] = useState("");

  function scoreInput(event) {
    const { name, value } = event.target;
    setBalls((prev_val) => {
      return {
        ...prev_val,
        [name]: value
      };
    });
  }
  function saveData(event) {
    setItems((prev_val) => {
      return [...prev_val, balls];
    });
    setBalls({
      firstBall: "",
      firstBallWide: "",
      firstBallNoBall: "",
      secondBall: "",
      secondBallWide: "",
      secondBallNoBall: "",
      thirdBall: "",
      thirdBallWide: "",
      thirdBallNoBall: "",
      fourthBall: "",
      fourthBallWide: "",
      fourthBallNoBall: "",
      fifthBall: "",
      fifthBallWide: "",
      fifthBallNoBall: "",
      sixthBall: "",
      sixthBallWide: "",
      sixthBallNoBall: ""
    });
  }
  function Total() {
    let totalscore;
    let x = 0;
    items.map((item) => {
      totalscore =
        Number(item.firstBall) +
        Number(item.firstBallWide) +
        Number(item.firstBallNoBall) +
        Number(item.secondBall) +
        Number(item.secondBallWide) +
        Number(item.secondBallNoBall) +
        Number(item.thirdBall) +
        Number(item.thirdBallWide) +
        Number(item.thirdBallNoBall) +
        Number(item.fourthBall) +
        Number(item.fourthBallWide) +
        Number(item.fourthBallNoBall) +
        Number(item.fifthBall) +
        Number(item.fifthBallWide) +
        Number(item.fifthBallNoBall) +
        Number(item.sixthBall) +
        Number(item.sixthBallWide) +
        Number(item.sixthBallNoBall);
      x += totalscore;
    });
    setTotal(x);
  }
  return (
    <div className="App">
      <h1>Street Cricket Score:</h1>
      <h2>The Total score is : {total}</h2>
      <div className="inputContainer">
        <div class="inputDiv">
          <p>First Ball: </p>
          <input
            name="firstBall"
            onChange={scoreInput}
            value={balls.firstBall}
          ></input>
          <p>Wide: </p>
          <input
            name="firstBallWide"
            onChange={scoreInput}
            value={balls.firstBallWide}
          ></input>
          <p>No Ball: </p>
          <input
            name="firstBallNoBall"
            onChange={scoreInput}
            value={balls.firstBallNoBall}
          ></input>
        </div>
        <div class="inputDiv">
          <p>Second Ball: </p>
          <input
            name="secondBall"
            onChange={scoreInput}
            value={balls.secondBall}
          ></input>
          <p>Wide: </p>
          <input
            name="secondBallWide"
            onChange={scoreInput}
            value={balls.secondBallWide}
          ></input>
          <p>No Ball: </p>
          <input
            name="secondBallNoBall"
            onChange={scoreInput}
            value={balls.secondBallNoBall}
          ></input>
        </div>
        <div class="inputDiv">
          <p>Third Ball: </p>
          <input
            name="thirdBall"
            onChange={scoreInput}
            value={balls.thirdBall}
          ></input>
          <p>Wide: </p>
          <input
            name="thirdBallWide"
            onChange={scoreInput}
            value={balls.thirdBallWide}
          ></input>
          <p>No Ball: </p>
          <input
            name="thirdBallNoBall"
            onChange={scoreInput}
            value={balls.thirdBallNoBall}
          ></input>
        </div>
        <div class="inputDiv">
          <p>Forth Ball: </p>
          <input
            name="fourthBall"
            onChange={scoreInput}
            value={balls.fourthBall}
          ></input>
          <p>Wide: </p>
          <input
            name="fourthBallWide"
            onChange={scoreInput}
            value={balls.fourthBallWide}
          ></input>
          <p>No Ball: </p>
          <input
            name="fourthBallNoBall"
            onChange={scoreInput}
            value={balls.fourthBallNoBall}
          ></input>
        </div>
        <div class="inputDiv">
          <p>Fifth Ball: </p>
          <input
            name="fifthBall"
            onChange={scoreInput}
            value={balls.fifthBall}
          ></input>
          <p>Wide: </p>
          <input
            name="fifthBallWide"
            onChange={scoreInput}
            value={balls.fifthBallWide}
          ></input>
          <p>No Ball: </p>
          <input
            name="fifthBallNoBall"
            onChange={scoreInput}
            value={balls.fifthBallNoBall}
          ></input>
        </div>
        <div class="inputDiv">
          <p>Sixth Ball: </p>
          <input
            name="sixthBall"
            onChange={scoreInput}
            value={balls.sixthBall}
          ></input>
          <p>Wide: </p>
          <input
            name="sixthBallWide"
            onChange={scoreInput}
            value={balls.sixthBallWide}
          ></input>
          <p>No Ball: </p>
          <input
            name="sixthBallNoBall"
            onChange={scoreInput}
            value={balls.sixthBallNoBall}
          ></input>
        </div>
        <button onClick={saveData}>Submit</button>
        <button onClick={Total}>Total Score</button>
      </div>
      <p>
        first ball: {balls.firstBall} first ball wide: {balls.firstBallWide}{" "}
        second ball run: {balls.secondBall} Second ball wide:
        {balls.secondBallWide} third ball run: {balls.thirdBall} third ball
        wide: {balls.thirdBallWide} fourth ball run: {balls.fourthBall} forth
        ball wide: {balls.fourthBallWide} fifth ball run: {balls.fifthBall}{" "}
        fifth ball wide: {balls.fifthBallWide} sixth ball run: {balls.sixthBall}{" "}
        sixth ball wide: {balls.sixthBallWide}
      </p>
      {items.map((item) => {
        return (
          <div>
            <p>
              First Ball : {item.firstBall} Wide : {item.firstBallWide} NoBall :{" "}
              {item.firstBallNoBall}
            </p>
            <p>
              second Ball : {item.secondBall} Wide : {item.secondBallWide}{" "}
              NoBall : {item.secondBallNoBall}
            </p>
            <p>
              Third Ball : {item.thirdBall} Wide : {item.thirdBallWide} NoBall :{" "}
              {item.thirdBallNoBall}
            </p>
            <p>
              Fourth Ball : {item.fourthBall} Wide : {item.fourthBallWide}{" "}
              NoBall : {item.fourthBallNoBall}
            </p>
            <p>
              Fifth Ball : {item.fifthBall} Wide : {item.fifthBallWide} NoBall :{" "}
              {item.fifthBallNoBall}
            </p>
            <p>
              Sixth Ball : {item.sixthBall} Wide : {item.sixthBallWide} NoBall :{" "}
              {item.sixthBallNoBall}
            </p>
            <p>_____________________________________</p>
          </div>
        );
      })}
    </div>
  );
}
