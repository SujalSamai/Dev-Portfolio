import React from "react";
import { BsArrowRight } from "react-icons/bs";

const StackCard = (props) => {
  return (
    <div className="flex flex-col mr-10 w-[28%] my-10 border p-8 drop-shadow-xl border-slate-600 hover:bg-teal-900/40 hover:scale-105 cursor-pointer transition-all duration-300 ease-out rounded-lg">
      <div className="text-xl font-semibold tracking-wide border-b-2 border-slate-600 py-2">{props.name}.</div>
      <ul className="items-end text-sm tracking-wide mt-2">
        {props.tech.map((element) => {
          return (
            <li key={element} className="flex gap-1 items-center my-2">
              <BsArrowRight/>
              {element}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StackCard;
