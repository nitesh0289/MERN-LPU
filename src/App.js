import "./App.css";
import React, { use, useState } from "react";

import Greet, { Greet1 } from "./components/Greet";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import Conditional from "./components/Conditional";
import Form from "./components/Form";
import Uncontrolled from "./components/Uncontrolled";
import List from "./components/List";
import ClassComponent from "./components/lifecycle/ClassComponent";
import Listner from "./components/lifecycle/Listner";
import CounterWithHook from "./components/lifecycle/CounterWithHook";
import UserSearch from "./components/UserSearch";
import TimerWithEffect from "./components/TimerWithEffect";
import Stopwatch from "./components/Stopwatch";
import Cheating from "./components/Cheating";
import Draft from "./components/Draft";
import InternetConnection from "./components/InternetConnection";
import MemoComp from "./components/MemoComp";
import CallbackMemo from "./components/CallbackMemo";

function App() {
  const [is, setIs] = useState(false);

  return (
    <div className="App">
      {/* <Greet studentName={"Munit"} college={"Lpu"} branch={"CSE"} /> */}
      {/* <Counter /> */}
      {/* <Timer /> */}

      {/* <Conditional handleParent={(state) => setIs(state)} />
      {is ? <h1>Hello LPU</h1> : <h3>Hello students</h3>} */}

      {/* <Form /> */}
      {/* <Uncontrolled /> */}
      {/* <List /> */}

      {/* <ClassComponent /> */}
      {/* <Listner /> */}
      {/* <CounterWithHook /> */}

      {/* <UserSearch /> */}
      {/* {is && <TimerWithEffect />} */}
      {/* <button onClick={() => setIs((prev) => !prev)}>Update</button> */}
      {/* <Stopwatch /> */}
      {/* <Cheating /> */}
      {/* <Draft /> */}
      {/* <InternetConnection /> */}
      {/* <MemoComp /> */}

      {/* <button onClick={() => setIs((prev) => !prev)}>Render App.js</button> */}

      <CallbackMemo />
    </div>
  );
}

export default App;
