import { PropsWithChildren } from "react";

const DefaultTitle = (props: PropsWithChildren<{ color: string }>) => {
  return (
    <h3 className={`text-3xl text-${props.color}`} {...props}>
      {props.children}
    </h3>
  );
};

export default DefaultTitle;
