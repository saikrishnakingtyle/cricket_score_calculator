import { useState } from "react";
import "./styles.css";

export default function App() {
  const [balls, setBalls] = useState({
    firstBall: "",
    secondBall: "",
    thirdBall: "",
    fourthBall: "",
    fifthBall: "",
    sixthBall: ""
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
  }
  function Total() {
    let totalscore;
    items.map((item) => {
      totalscore =
        Number(item.firstBall) +
        Number(item.secondBall) +
        Number(item.thirdBall) +
        Number(item.fourthBall) +
        Number(item.fifthBall) +
        Number(item.sixthBall);
    });
    setTotal((prev_val) => {
      return (total = Number(prev_val) + Number(totalscore));
    });
  }
  return (
    <div className="App">
      <h1>Cricket Score(Total Score): {balls.firstBall}</h1>
      <h2>The tTotal is : {total}</h2>
      <input name="firstBall" onChange={scoreInput}></input>
      <input name="secondBall" onChange={scoreInput}></input>
      <input name="thirdBall" onChange={scoreInput}></input>
      <input name="fourthBall" onChange={scoreInput}></input>
      <input name="fifthBall" onChange={scoreInput}></input>
      <input name="sixthBall" onChange={scoreInput}></input>
      <button onClick={saveData}>Submit</button>
      <button onClick={Total}>Submit</button>
      <p>
        first ball: {balls.firstBall} second ball run: {balls.secondBall} third
        ball run: {balls.thirdBall} fourth ball run: {balls.fourthBall} fifth
        ball run: {balls.fifthBall} sixth ball run: {balls.sixthBall}
      </p>
      {items.map((item) => {
        return (
          <div>
            <p>First Ball : {item.firstBall}</p>
            <p>second Ball : {item.secondBall}</p>
            <p>Third Ball : {item.thirdBall}</p>
            <p>Fourth Ball : {item.fourthBall}</p>
            <p>Fifth Ball : {item.fifthBall}</p>
            <p>Sixth Ball : {item.sixthBall}</p>
            <p>_____________________________________</p>
          </div>
        );
      })}
    </div>
  );
}
