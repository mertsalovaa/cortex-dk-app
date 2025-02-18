import { PropsWithChildren } from "react";

const DefaultTitle = (props: PropsWithChildren<{ color: string }>) => {
  return (
    <h3 className={`text-3xl text-${props.color}`} {...props}>
      {props.children}
    </h3>
  );
};

export default DefaultTitle;

export const DefaultText = (props: PropsWithChildren<{ class: string }>) => {
  return (
    <p className={`text-lg opacity-70 ${props.class}`}>{props.children}</p>
  );
};
