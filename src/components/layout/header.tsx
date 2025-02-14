import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { useMemo } from "react";
import { useLinkWithTranslation } from "../../utils/extentions";
import Langs from "../elements/langs";
import HeaderLink, { HeaderLinkItem } from "../elements/header-link";

import logoTextDark from "../../assets/images/logo-text-dark.svg";
import logoTextLight from "../../assets/images/logo-text-light.svg";
import logoImgDark from "../../assets/images/logo-img-dark.svg";
import logoImgLight from "../../assets/images/logo-img-light.svg";

const Header = ({ theme }: { theme: string }) => {
  const { t } = useTranslation();
  const link = useLinkWithTranslation();
  const location = useLocation();

  const [isFixed, setIsFixed] = useState(false);
  const [isPopped, setIsPopped] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    if (isFixed) {
      setIsPopped(true);
      setTimeout(() => {
        setIsPopped(false);
      }, 500);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFixed]);

  const headerItems: [string, any][] = Object.entries(
    t("header.items", { returnObjects: true }),
  );

  const subItems = useMemo<Array<string>>(() => {
    const result = t(
      `header.items.${location.pathname.split("/").pop()}.items`,
      {
        returnObjects: true,
      },
    );
    return Array.isArray(result) ? result : [];
  }, [t, link]);

  return (
    <header
      className={`${
        theme === "light" ? "bg-light text-dark" : "bg-dark text-light"
      } font-[PPNeueMontreal] flex flex-col items-center w-full h-[80px] lg:h-[140px] z-[1003]
      transition-all duration-500 ease-in-out
      ${isFixed ? "fixed -top-1 pt-7" : "sticky top-0"}
      ${isPopped ? "scale-[1.02]" : "scale-100"} h-[80px] lg:h-[140px] pt-6 px-4 w-full`}
    >
      <div className="flex items-center w-full h-1/2">
        <Link className="w-1/6" to={link("/")}>
          <img
            className="h-[30px] w-[130px]"
            src={theme === "light" ? logoTextLight : logoTextDark}
            alt="logo text"
            width={130}
            height={30}
          />
        </Link>
        <span className="flex w-5/6 justify-between items-center">
          {headerItems.map((item, index) => (
            <HeaderLink
              key={index}
              currentPath={location.pathname}
              link={link}
              path={item[0]}
              text={item[1].title}
            />
          ))}
          <span className="flex items-center *:m-1 relative right-0">
            <Langs theme={theme} />
            <img
              src={theme === "light" ? logoImgLight : logoImgDark}
              alt="logo"
            />
          </span>
        </span>
      </div>
      <div className="w-full flex items-center">
        <span className="w-1/6"></span>
        <span className="pl-1 flex items-center">
          {subItems.map((item: string, index: number) => (
            <HeaderLinkItem key={index} text={item} />
          ))}
        </span>
      </div>
    </header>
  );
};

export default Header;
