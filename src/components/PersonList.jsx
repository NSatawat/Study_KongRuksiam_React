import { useState } from "react";

function PersonList() {
  const [data, setData] = useState([
    { id: 1, name: "นั้ม", gender: "ชาย" },
    { id: 2, name: "น้ำ", gender: "หญิง" },
    { id: 3, name: "ใจ", gender: "ชาย" },
  ]);
  const [show, setshow] = useState(true);
  return (
    <>
      <button onClick={() => setshow(!show)}>{show ? "ซ่อน" : "แสดง"}</button>
      <ul>
        {show &&
          data.map((item) => (
            <li key={item.id}>
              {item.id} | {item.name} | {item.gender}
            </li>
          ))}
      </ul>
    </>
  );
}
export default PersonList;
