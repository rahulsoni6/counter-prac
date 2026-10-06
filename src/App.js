// import Counter from "./Counter";

// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Counter</h1>

//       <Counter />
//     </div>
//   );
// }

//  -------------------------------------------------------------------------------

import "./styles.css";
import React, { useState } from "react";
import TabsComponent from "./TabsComponent";

// const Product = React.memo(() =>{
//   console.log("hi")
// })

// export default function App() {
//   const AccordianData = Array.from({ length: 5 }, (_, index) => ({
//     id: index + 1,
//     content: `Hello ${index + 1}`,
//     description: `This is description of content ${index + 1}`,
//   }));

//   const [selected, setSelected] = useState([AccordianData[0].id]);

//   const handleClick = (id) => {
//     setSelected((prev) =>
//       prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
//     );
//   };

//   return (
//     <div className="container">
//       <div className="accordian">
//         <h2>ACCORDIAN</h2>
//         {AccordianData.map((item, index) => (
//           <div className="accordian-item" key={item.id}>
//             <div
//               className="accordion-header"
//               role="button"
//               onClick={() => handleClick(item.id)}
//             >
//               <span>{item.content}</span>
//               <span className="icon">
//                 {selected.includes(item.id) ? "−" : "+"}
//               </span>
//             </div>
//             {selected.includes(item.id) ? (
//               <div className="accordion-content">{item.description}</div>
//             ) : null}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function App() {
//   const tabs = Array.from({ length: 5 }, (_, index) => ({
//     id: index + 1,
//     content: `This is tab ${index + 1}`,
//     title: `Tab ${index + 1}`,
//   }));
//   return (
//     <div>
//       <TabsComponent tabs={tabs} />
//     </div>
//   );
// }

import CustomModel from "./CustomModel";

export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <CustomModel isOpen={isOpen} closeModal={setIsOpen} />
      <button
        // style={{ display: "flex", justifyContent: "center", width: "10%" }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Open Modal
      </button>
    </div>
  );
}
