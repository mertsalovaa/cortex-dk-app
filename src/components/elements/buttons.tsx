import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import "../../styles/buttons.css";

const svgArrowIcon = (
  <svg
    className="text-light-orange fill-current"
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
  >
    <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
  </svg>
);

const NextButton = (
  props: PropsWithChildren<{ disabled: boolean; width: string }>,
) => {
  return (
    <button
      className={`${props.width} next-btn rounded-3xl font-[PPNeueMontreal] bg-light-orange border-none text-white text-left text-xl px-8 py-2 transition-all duration-300 cursor-pointer inline-block relative m-2 hover:pr-12 hover:pl-5 hover:bg-orange disabled:opacity-50 disabled:transition-none disabled:duration-0 disabled:cursor-not-allowed disabled:hover:px-8 disabled:hover:bg-light-orange`}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default NextButton;

export const ArrowButton = ({
  text,
  link,
  animated,
}: {
  text: string;
  link: string;
  animated: boolean;
}) => {
  return (
    <Link
      className={`relative flex items-center justify-start my-6 p-0 active:scale-95 ${animated ? "arrow-btn" : "hover:pl-4 transition-all duration-300"}`}
      to={link}
      target="_blank"
    >
      <span className="circle flex items-center justify-center bg-transparent border border-light-orange rounded-full relative top-0 left-0 w-10 h-10 transition-all duration-500">
        {svgArrowIcon}
      </span>

      <span className={`title text-base text-orange ${!animated && "px-3"}`}>
        {text}
      </span>
    </Link>
  );
};
