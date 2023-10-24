// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [items, setItems] = useState([
//     "Item 1",
//     "Item 2",
//     "Item 3",
//     "Item 4",
//     "Item 5",
//     "Item 6",
//     "Item 7",
//     "Item 8",
//     "Item 9",
//     "Item 10",
//   ]);

//   const handleDragStart = (event, itemIndex) => {
//     event.dataTransfer.setData("text/plain", itemIndex);
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const handleDrop = (event, dropIndex) => {
//     event.preventDefault();

//     const draggedItemIndex = event.dataTransfer.getData("text/plain");
//     const newItems = [...items];
//     const [draggedItem] = newItems.splice(draggedItemIndex, 1);
//     newItems.splice(dropIndex, 0, draggedItem);

//     setItems(newItems);
//     console.log(newItems);
//   };

//   return (
//     <div>
//       <div>
//         {items.map((item, index) => (
//           <div
//             key={`${item}-${index}`}
//             style={{ border: "1px solid black", margin: "4px" , padding:'2px' , width:'50px'}}
//             draggable
//             onDragStart={(e) => handleDragStart(e, index)}
//             onDragOver={handleDragOver}
//             onDrop={(e) => handleDrop(e, index)}
//           >
//             {item}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
  ]);

  const handleDragStart = (event, itemIndex) => {
    event.dataTransfer.setData("text/plain", itemIndex);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, dropIndex) => {
    event.preventDefault();

    const draggedItemIndex = event.dataTransfer.getData("text/plain");
    const newItems = [...items];
    const [draggedItem] = newItems.splice(draggedItemIndex, 1);
    newItems.splice(dropIndex, 0, draggedItem);
    console.log(newItems);
    setItems(newItems);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          style={{}}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default App;
