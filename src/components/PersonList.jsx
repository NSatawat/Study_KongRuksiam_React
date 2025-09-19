import { useState } from "react";
import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";

function PersonList() {
  const [data, setData] = useState([
    { id: 1, name: "นั้ม", gender: "ชาย" },
    { id: 2, name: "น้ำ", gender: "หญิง" },
    { id: 3, name: "ใจ", gender: "ชาย" },
    { id: 4, name: "พลอย", gender: "หญิง" },
  ]);
  const [show, setshow] = useState(true);
  return (
    <>
      <h1>จำนวนประชากร</h1>
      <button onClick={() => setshow(!show)}>{show ? "ซ่อน" : "แสดง"}</button>
      <ul>
        {show &&
          data.map((item) => (
            <li key={item.id}>
              <img src={item.gender=="ชาย"? boy :girl} width={50} height={50} alt="" />
              {/* {item.id} |  */}
              {item.name} 
              {/* | {item.gender} */}
            </li>
          ))}
      </ul>
    </>
  );
}
export default PersonList;
