import { useState } from "react";

function App() {
  const name = "คุณนั้ม";
  // const [age, setAge] = useState(28);

  // state

  // function add() {
  //   setAge(age + 1);
  // }

  // function subtract() {
  //   setAge(age - 1);
  // }

  // function reset(){
  //   setAge(28);
  // }

  //array-state
  const [data, setData] = useState([
    { id: 1, name: "นั้ม", gender: "ชาย" },
    { id: 2, name: "น้ำ", gender: "หญิง" },
    { id: 3, name: "ใจ", gender: "ชาย" },
  ]);
  console.table(data);
  const[show,setshow]=useState(true);

  return (
    <>
      {/* 
      --state
      <h1>สวัสดีครับ {name}</h1>
      <h1>ที่อยู่ : สกลนคร</h1>
      <h2>อายุ : {age}</h2>
      <button onClick={()=>setAge(age+1)}>เพิ่ม</button>
      <button onClick={()=>setAge(age-1)}>ลด</button>
      <button onClick={()=>setAge(28)}>เคลียร์</button> */}
      
      <h1>จำนวนประชากร {data.length} คน</h1>
      <ul>
        {data.map((item)=>( 
          <li key={item.id}>{item.id} | {item.name} | {item.gender}</li>
        ))}
      </ul>
      <button onClick={()=>setshow(!show)}>สลับ</button>
    </>
  );
}

export default App;
