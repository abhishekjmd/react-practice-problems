import React from "react";
import Counter from "./problems/Counter";
import ToggleSwitch from "./problems/ToggleSwitch";
import DigitalClock from "./problems/DigitalClock";
import TodoList from "./problems/TodoList";
import Accordion from "./problems/Accordion";
import FormValidation from "./problems/FormValidation";
import CountdownTimer from "./problems/CountDownTimer";
import ModalDialog from "./problems/ModalDialog";
import Accordian from "./problems/Accordian";
import ContactUs from "./problems/ContactUs";
import SearchBar from "./problems/SearchBar";
import Counter from "./problems/counter/Counter1";

export default function App() {
  return (
    <div className="w-[100vw]  lg:h-[100vh] min-h-[100vh] overflow-y-scroll flex justify-center items-center">
      <Counter />
    </div>
    // <div className="w-[100vw] bg-[#141C2F] lg:h-[100vh] min-h-[100vh] overflow-y-scroll flex justify-center items-center">
    //   {/* <Accordian /> */}
    //   {/* <ContactUs /> */}
    //   {/* <SearchBar /> */}
      
    // </div>
  );
}
