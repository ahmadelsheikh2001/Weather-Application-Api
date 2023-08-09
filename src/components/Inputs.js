import { useEffect } from "react";
import { useState } from "react";
import CityContext from "../CityContext";
import { useContext } from "react";


const Inputs = (props) => {
  const savedData = JSON.parse(localStorage.getItem('pressure'))
  // حفظ كل الدول
  // const context = useContext(CityContext) ;
  // const savedData2 = JSON.parse(localStorage.getItem('pressure2'))
  // console.log(savedData2);
  // if(savedData2){
  //   if(savedData2){
  //     const country = savedData2.filter((con)=>{
  //     return con.country == context.selectedCity
  //   })
  // }
  // console.log(country);
  // }
  let [value1, setValue1] = useState(savedData ? savedData.input1 : '');
  let [value2, setValue2] = useState(savedData ? savedData.input2 : '');
  let [value3, setValue3] = useState(savedData ? savedData.input3 : '');
  let [state, setState] = useState("");
  let [check, setCheck] = useState(0);
  const [finalResult, setFinalResult] = useState(0);

  // console.log(savedData2);
  // console.log(country[0].input1);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setState(value);
    setTimeout(() => {
      setValue3(value);
      setValue2(value3);
      setValue1(value2);
      setState(props.sea);
    }, 1800000);
  };
  // ========================
  // طرح القيم
  console.log()
  function performSubtractionAndCreateNewArray() {
    const inputNumbers1 = state.toString().replace(/\./g, "");
    const inputNumbers2 = value1.toString().replace(/\./g, "");

    const resultArray = [
      inputNumbers1 - inputNumbers2,
    ];

    for (let i = 0; i < resultArray.length; i++) {
      resultArray[i] = Math.abs(resultArray[i]);
    }

    let newArray = [...resultArray];

    while (newArray[0] === 0 && newArray.length > 1) {
      newArray.shift();
    }
    if (
      inputNumbers2 !== "" &&
      inputNumbers1 !== "" &&
      state.toString().includes(".")
    ) {
      setFinalResult(parseInt(newArray.join("")));
      console.log("worked");
    } else {
      setFinalResult("");
    }
  }
  useEffect(() => {
    if (state.toString() && value1 !== '' && value2 !== '' && value3 !== '') {

      if (+value2 > +value1 && +value3 > +value2 && +state < +value3 ||
        +value2 > +value1 && +value3 == +value2 && +state < +value3) {
        setCheck(0)
      }
      if (+value2 > +value1 && +value3 > +value2 && +value3 == +state ||
        +value2 > +value1 && +value3 == +value2 && +value3 == +state ||
        +value2 == +value1 && +value3 > +value2 && +value3 == +state) {
        setCheck(1)
      }

      if (+value1 < +value2 && +value2 < +value3 && +value3 < +state) {
        setCheck(2)
      }
      if (+value2 == +value1 && +value3 > +value2 && +state > +value3 ||
        +value2 < +value1 && +value3 == +value2 && +state > +value3 ||
        +value2 < +value1 && +value3 > +value2 && +state > +value3) {
        setCheck(3)
      }
      if (+value1 == +value2 && +value2 == +value3 && +value3 == +state && +state !== "") {
        setCheck(4);
      }
      if (+value2 < +value1 && +value3 < +value2 && +state > +value3 ||
        +value2 == +value1 && +value3 < +value2 && +state > +value3 ||
        +value2< +value1 && +value3 == +value2 && +state > +value3) {
        setCheck(5)
      }
      if (+value2 < +value1 && +value3 < +value2 && +value3 == +state ||
        +value2 == +value1 && +value3 < +value2 && +value3 == +state ||
        +value2 <+value1 && +value3 == +value2 && +value3 == +state) {
        setCheck(6);
      }
      if (+value1 > +value2 && +value2 > +value3 && +value3 > +state) {
        setCheck(7);
      }
      if (+value2 > +value1 && +value3 < +value2 && + state < +value3 ||
        +value2 < +value1 && +value3 == +value2 && + state < +value3 ||
        +value2 == +value1 && +value3 > +value2 && + state < +value3) {
        setCheck(8)
      }
    } else {
      setCheck('');
    }
    // حفز كل الدول مع مشكله واحده
    //     const allCoun = [
    //       {
    //         country : 'baghdad',
    //         input1: value1,
    //         input2: value2,
    //         input3: value3,
    //         input4: state,
    //      },
    //       {
    //         country : 'Samawah',
    //         input1: value1,
    //         input2: value2,
    //         input3: value3,
    //         input4: state,
    //      },
    //       {
    //         country : 'Al kut iraq',
    //         input1: value1,
    //         input2: value2,
    //         input3: value3,
    //         input4: state,
    //      },
    //     ]
    //     const countryToSave = context.selectedCity;

    //     // const storedData = localStorage.getItem('pressure2');
    // const storedCoun = savedData2 ? savedData2 : [];

    // // حذف العنصر إذا وجد في storedCoun بناءً على الـ country
    // const filteredCoun = storedCoun.filter((item) => item.country !== countryToSave);

    // // دمج القيم الجديدة مع القيم القديمة (بعد حذف التكرار)
    // const updatedCoun = [...filteredCoun, ...allCoun.filter((item) => item.country === countryToSave)];

    //     const storedData2 = localStorage.setItem("pressure2",JSON.stringify(updatedCoun));

    const storedData = localStorage.setItem("pressure", JSON.stringify({
      input1: value1,
      input2: value2,
      input3: value3,
      input4: state,
    }));

  }, [state, value1, value2, value3]);
  // []
  useEffect(() => {
    performSubtractionAndCreateNewArray();
  }, [state, value1]);
  useEffect(() => {
    setState(props.sea);
  }, [props.sea]);
  return (
    <div className="App">
      <div className="form-floating mb-3 me-2 w-100 input-bg">
        <input
          type="text"
          className="form-control input-shadow"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
          placeholder="Input 1"
        />

        <label htmlFor="sea-level-pressure"></label>
      </div>
      <div className="form-floating mb-3 me-2 w-100 input-bg">
        <input
          type="text"
          value={value2}
          className="form-control input-shadow"
          onChange={(e) => setValue2(e.target.value)}
          placeholder="Input 2"
        />
        <label htmlFor="sea-level-pressure"></label>
      </div>
      <div className="form-floating mb-3 me-2 w-100 input-bg">
        <input
          type="text"
          value={value3}
          className="form-control input-shadow"
          onChange={(e) => setValue3(e.target.value)}
        />
        <label htmlFor="sea-level-pressure"></label>
      </div>
      <div className="form-floating mb-3 me-2 w-100 input-bg">
        <input
          type="text"
          value={state}
          // value={props.sea}
          className="form-control input-shadow"
          onChange={handleInputChange}
          placeholder="Input 4"
        />
        <label htmlFor="sea-level-pressure">sea-level-pressure</label>
      </div>

      <div className="form-floating mb-3 w-100 input-bg">
        <input
          className="form-control input-shadow"
          id="A"
          type="text"
          value={check}
          autoComplete="off"
        />
        <label htmlFor="A">A</label>
      </div>
      <div className="form-floating mb-3 w-100 input-bg">
        <input
          className="form-control input-shadow"
          id="PPP"
          type="text"
          value={finalResult}
          autoComplete="off"
        />
        <label htmlFor="PPP">PPP</label>
      </div>

    </div>
  );
};

export default Inputs;
