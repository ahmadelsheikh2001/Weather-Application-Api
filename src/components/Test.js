// import { useState } from "react"
// import { Arr } from "../data/data"
// import { useEffect } from "react"

// const Test = ()=>{
//     const [dryTemp,setDryTemp] = useState(0)
//     const [wet_Bulb,setWet_Bulb] = useState(0)
//     const [TD,setTD] = useState(0)
//     const [RH,setRH] = useState(0)
//     const [VP,setVP] = useState(0)
//     useEffect(()=>{
//             const item = Arr.map((i)=>{
//                 i.filter((y)=>{
//                     // console.log(y);
//                     if(y.TTT === +dryTemp && y.WB === +wet_Bulb){
//                         console.log(y);
//                         setTD(y.TDTDTD)
//                         setRH(y.RH)
//                         setVP(y.VP)
//                     }
//                 })
//                   })

//     },[dryTemp,wet_Bulb])
//     return(
//         <>
//             <input type="number" onChange={(e)=>setDryTemp(e.target.value)}/>
//             <input type="number" onChange={(e)=>setWetBulb(e.target.value)}/>
//             <p>TD: {TD}</p>            
//             <p>RH: {RH}</p>            
//             <p>VP: {VP}</p>            
//         </>
//     )
// }


// export default Test
import React, { useState, useEffect } from 'react';
// import './Test.css';

function Test() {
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');
    const [inputValue4, setInputValue4] = useState('');
  
    const handleInputChange = (e) => {
      const value = e.target.value;
      setInputValue4(value);
  
      setTimeout(() => {
        setInputValue3(value);
        setInputValue2(inputValue3);
        setInputValue1(inputValue2);
        if(inputValue3!=='' && inputValue2!==''){
            inputValue1 = value
        }else{
            setInputValue4("")
        }
      }, 1000);
    };
  
    return (
      <div className="App">
        <h1>Inputs في تطبيق React</h1>
        <input
          type="text"
          value={inputValue1}
          onChange={(e) => setInputValue1(e.target.value)}
          placeholder="Input 1"
        />
        <input
          type="text"
          value={inputValue2}
          onChange={(e) => setInputValue2(e.target.value)}
          placeholder="Input 2"
        />
        <input
          type="text"
          value={inputValue3}
          onChange={(e) => setInputValue3(e.target.value)}
          placeholder="Input 3"
        />
        <input
          type="text"
          value={inputValue4}
          onChange={handleInputChange}
          placeholder="Input 4"
        />
      </div>
    );
  }  
export default Test;
