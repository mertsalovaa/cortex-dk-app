import { PropsWithChildren } from "react";
import "../../styles/buttons.css";

const NextButton = (
  props: PropsWithChildren<{ disabled: boolean; width: string }>,
) => {
  return (
    <button
      className={`${props.width} rounded-3xl font-[PPNeueMontreal] bg-light-orange border-none text-white text-left text-xl px-8 py-2 transition-all duration-300 cursor-pointer inline-block relative m-2 hover:pr-12 hover:pl-5 hover:bg-orange disabled:opacity-50 disabled:transition-none disabled:duration-0 disabled:cursor-not-allowed disabled:hover:px-8 disabled:hover:bg-light-orange`}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default NextButton;
