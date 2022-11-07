import React, { useCallback, useMemo, useState } from "react";

import "./App.css";
import DemoList from "./components/DemoList";
import Demo from "./components/UI/Button/Demo";
import Button from "./components/UI/Button/Button";

function App() {
  console.log("APP");
  const [show, setShow] = useState(false);
  const [letShow, setLetShow] = useState(false);
  const showHandler = () => {
    setShow((prev) => !prev);
  };
  // const demoHandler=()=>{
  //   setLetShow(true)
  // }
  // const user = {
  //   name: "Malik",
  //   age: 26,
  // };
  const user = useMemo(() => {
    return {
      name: "Malik",
      age: 26,
    };
    /*useMemo бул obj учун  */
  },[]);
  const demoHandler = useCallback(() => {
    setLetShow(true);
  }, []);
  /* useCallback функцияны перерендер кылбаш учун керек  */
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoList />
      <Demo onclick={demoHandler} user={user} />

      {show && <p>Hi there</p>}
      <Button onClick={showHandler}>click</Button>
    </div>
  );
}

export default App;
