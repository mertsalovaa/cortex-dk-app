import { PropsWithChildren, useEffect, useState } from "react";

import Header from "./header";
import AnimatedDivFade from "../elements/animated/block";
import Footer from "./footer";

import { AxisValue, WAY_COUNT } from "../../utils/constants";

interface LayoutPropsBase {
  pageName?: string;
  theme: "dark" | "light";
}

interface LayoutProps extends PropsWithChildren<LayoutPropsBase> {}

export const MainLayout = ({ theme, children }: LayoutProps) => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${isFixed && "pt-[130px]"} w-full h-dvh font-[PPNeueMontreal] ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}`}
    >
      <AnimatedDivFade axis={AxisValue.Y} way={WAY_COUNT.down}>
        <Header isFixed={isFixed} theme={theme} />
      </AnimatedDivFade>
      {children}
      <Footer />
    </div>
  );
};
