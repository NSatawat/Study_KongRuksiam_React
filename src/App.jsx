import { useState } from "react";

//เวลาจะใช้ components ต้อง  import
import Header from "./components/Header";
import PersonList from "./components/PersonList";

function App() {
  const name = "คุณนั้ม";
  // const [age, setAge] = useState(28);

  //--1)state
  // function add() {
  //   setAge(age + 1);
  // }
  // function subtract() {
  //   setAge(age - 1);
  // }
  // function reset(){
  //   setAge(28);
  // }

  //--2) array-state
  // const [data, setData] = useState([
  //   { id: 1, name: "นั้ม", gender: "ชาย" },
  //   { id: 2, name: "น้ำ", gender: "หญิง" },
  //   { id: 3, name: "ใจ", gender: "ชาย" },
  // ]);
  // console.table(data);
  // const[show,setshow]=useState(true);


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
      
      {/* <h1>จำนวนประชากร {data.length} คน</h1>
      <button onClick={()=>setshow(!show)}>{show ? "ซ่อน":"แสดง"}</button>
      <ul>
        {show && data.map((item)=>( 
          <li key={item.id}>{item.id} | {item.name} | {item.gender}</li>
        ))}
      </ul>
       */}

      {/* เรียกใช้ components */}
      <Header/>
      <PersonList/>
    </>
  );
}

export default App;
