import React, { useRef } from "react";
import "./style.css";
const App = () => {
  const arr1 = [
    { name: "Sehwag", category: "bat", id: 1 },
    { name: "Sachin", category: "bat", id: 2 },
    { name: "Laxman", category: "bat", id: 3 },
    { name: "Kohli", category: "bat", id: 4 },
    { name: "Jadega", category: "bat", id: 5 },
  ];
  const arr2 = [
    { name: "Ashwin", category: "bowl", id: 6 },
    { name: "Bhuvi", category: "bowl", id: 7 },
    { name: "Munaf", category: "bowl", id: 8 },
    { name: "Hardik", category: "bowl", id: 9 },
    { name: "Murli", category: "bowl", id: 10 },
  ];
  const arr3 = [
    { name: "Raina", category: "field", id: 11 },
    { name: "Yuvraj", category: "field", id: 12 },
    { name: "Kaif", category: "field", id: 13 },
  ];
  const arr4 = [
    { name: "Dhoni", category: "wk", id: 14 },
    { name: "Pant", category: "wk", id: 15 },
  ];
  let itemPickedUp = { targetArray: null, category: null, player: null };
  const drag = (e) => {
    itemPickedUp.player = e.target.innerText;
    itemPickedUp.category = e.target.getAttribute("name");
    itemPickedUp.targetArray = itemPickedUp.category == "bat" ? arr1 : arr2; //if i make any cahnges in targetArray it will bw reflected in original array bcz here it is passed as reference
    e.dataTransfer.setData('text' , JSON.stringify(itemPickedUp))
    const newArr = itemPickedUp.targetArray.filter((player) => {
      return !itemPickedUp.player.includes(player.name);
    });
    console.log(newArr)
  };
  const makeDraggable = (e) => {
    e.preventDefault();
  };
  const drop = (e) => {
    console.log(e.dataTransfer.getData('text'));
    console.log(e.target.getAttribute('name'))
  };
  return (
    <div className="parentDiv">
      <div>
        <h2>Batsman</h2>
        <div
          onDragOver={makeDraggable}
          onDrop={drop}
          className="div1"
          name="bat"
        >
          {arr1.map((player) => {
            return (
              <div
                key={player.id}
                className="liDiv1"
                draggable
                onDragStart={drag}
                name="bat"
              >
                <li className="liBat" name="bat">{player.name}</li>
                <button className="dragBtn" name="bat">=</button>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h2>Bowler</h2>
        <div
          onDragOver={makeDraggable}
          onDrop={drop}
          className="div2"
          name="bowl"
        >
          {arr2.map((player) => {
            return (
              <div
                key={player.id}
                className="liDiv2"
                draggable
                onDragStart={drag}
                name="bowl"
              >
                <li className="liBat" name="bowl">{player.name}</li>
                <button className="dragBtn" name="bowl">=</button>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h2>Fielder</h2>
        <div
          onDragOver={makeDraggable}
          onDrop={drop}
          className="div3"
          name="field"
        >
          {arr3.map((player) => {
            return (
              <div
                key={player.id}
                className="liDiv3"
                draggable
                onDragStart={drag}
                name="field"
              >
                <li className="liBat" name="field">{player.name}</li>
                <button className="dragBtn" name="field">=</button>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h2>WK</h2>
        <div
          onDragOver={makeDraggable}
          onDrop={drop}
          className="div4"
          name="wk"
        >
          {arr3.map((player) => {
            return (
              <div
                key={player.id}
                className="liDiv4"
                draggable
                onDragStart={drag}
                name="wk"
              >
                <li className="liBat" name="wk">{player.name}</li>
                <button className="dragBtn" name="wk">=</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default App;
