import { PropsWithChildren } from "react";
import Header from "./header";
import AnimatedDivFade from "../elements/animated/block";
import Footer from "./footer";

interface LayoutPropsBase {
  pageName?: string | undefined;
  theme: "dark" | "light";
}
interface LayoutProps extends PropsWithChildren<LayoutPropsBase> {}

export const MainLayout = (props: LayoutProps) => {
  return (
    <div
      className={`w-full h-dvh font-[PPNeueMontreal] ${props.theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}`}
      {...props}
    >
      <AnimatedDivFade>
        <Header theme={props.theme} />
      </AnimatedDivFade>
      {props.children}
      <Footer />
    </div>
  );
};
