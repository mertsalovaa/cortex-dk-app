import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MainLayout } from "../../components/layout/main-layout";
import { useLocation } from "react-router-dom";

import AnimatedLine from "../../components/elements/animated/line";
import NextButton, { ArrowButton } from "../../components/elements/buttons";
import AnimatedDivFade from "../../components/elements/animated/block";
import DefaultTitle, { DefaultText } from "../../components/elements/title";

import colorimeterDsm4 from "../../assets/images/product/Colorimeter DSM-4.avif";
import dermaLabAesthetic from "../../assets/images/product/DermaLab Aesthetic.avif";
import dermaLabCombo4 from "../../assets/images/product/DermaLab Combo 4.avif";
import dermaLabMini from "../../assets/images/product/DermaLab Mini.avif";
import dermaLabSingle from "../../assets/images/product/DermaLab Single.avif";
import dermaScan from "../../assets/images/product/DermaScan.avif";

import JacobWested from "../../assets/images/jakob-wested.avif";
import planetImage from "../../assets/images/planet_skin-analysis.png";

import { AxisValue, WAY_COUNT } from "../../utils/constants";

const productImages = [
  dermaLabCombo4,
  dermaLabMini,
  dermaLabAesthetic,
  colorimeterDsm4,
  dermaScan,
  dermaLabSingle,
];

const SkinAnalysis = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const headerItems: [string, any][] = Object.entries(
    t("skin-analysis-page.header", { returnObjects: true }),
  );

  const products = Object.entries(
    t("skin-analysis-page.products", { returnObjects: true }),
  );

  return (
    <MainLayout theme="dark">
      <div className="flex items-start justify-center w-full py-11">
        <div className="w-1/4 relative py-32 text-4xl">
          <AnimatedDivFade axis={AxisValue.Y} way={WAY_COUNT.up}>
            <p>{location.pathname.includes("zh") && "我们知道皮肤"}</p>
          </AnimatedDivFade>
        </div>
        <div
          className={`w-2/3 bg-dark py-32 flex items-start *:w-1/2 *:space-y-5 space-x-8`}
        >
          {headerItems.map((item, index) => (
            <div key={index} className="">
              <DefaultTitle color="light">{item[1].title}</DefaultTitle>
              {item[1].desc.map((desc: string, indexD: number) => (
                <DefaultText key={indexD} class="w-3/4">
                  {desc}
                </DefaultText>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-light">
        <AnimatedLine />
        <AnimatedDivFade axis={AxisValue.Y} way={WAY_COUNT.down}>
          <p className="text-dark text-4xl px-5 pb-5">
            {t("skin-analysis-page.title-1")}
          </p>
        </AnimatedDivFade>
        <div className="flex flex-wrap w-full py-4">
          {products.map((item, index) => (
            <div
              className="w-1/4 p-1.5 my-3 flex flex-col items-center first:*:flex first:*:justify-center first:*:w-11/12"
              key={index}
            >
              <AnimatedDivFade axis="y" way={0}>
                <img
                  className="bg-image-grey p-5 transition-all duration-300 hover:p-1 h-[347px]"
                  src={productImages[index]}
                  alt={item[1].name}
                />
              </AnimatedDivFade>
              <div className="w-11/12 last:*:w-2/3 last:*:pt-3 pt-2 pb-10 flex flex-col items-start space-y-3">
                <DefaultTitle color="dark">{item[1].name}</DefaultTitle>
                <DefaultText class="text-light-dark pr-3">
                  {item[1].desc}
                </DefaultText>
                <ArrowButton animated={true} text={item[1].name} link="" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-dark min-h-dvh flex flex-col items-center">
        <div className="w-2/5 py-20">
          <DefaultTitle color="white">
            {t("skin-analysis-page.info-block.text1")}
          </DefaultTitle>
          <ArrowButton
            animated={false}
            text={t("skin-analysis-page.info-block.button1")}
            link="https://www.cortex.dk/contact/fairs/"
          />
          <DefaultTitle color="white">
            {t("skin-analysis-page.info-block.text2")}
          </DefaultTitle>
          <ArrowButton
            animated={false}
            text={t("skin-analysis-page.info-block.button2")}
            link="https://www.cortex.dk/company/newsletter/"
          />
        </div>
        <div className="w-full py-24 flex items-center justify-end">
          <div className="w-2/5 *:leading-10 mr-14">
            <AnimatedDivFade axis={AxisValue.X} way={WAY_COUNT.down}>
              <p className="text-light text-4xl leading-10">
                {t("skin-analysis-page.author.text")}
              </p>
            </AnimatedDivFade>
          </div>
          <div className="w-1/3">
            <AnimatedDivFade axis={AxisValue.Y} way={WAY_COUNT.down}>
              {" "}
              <img
                src={JacobWested}
                alt="Jacob Wested"
                width={348}
                height={458}
              />
            </AnimatedDivFade>
            <p className="text-lg font-semibold pt-2">
              {t("skin-analysis-page.author.name")}
            </p>
            <p className="text-lg font-medium pb-2">
              {t("skin-analysis-page.author.job")}
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${planetImage})`,
          backgroundColor: "theme(colors.light)",
        }}
        className="p-5 relative -top-7 flex bg-light text-dark w-full h-svh bg-contain bg-no-repeat bg-right"
      >
        <div className="w-1/4 relative py-32 px-5 text-5xl *:w-1/2">
          <AnimatedDivFade axis={AxisValue.Y} way={WAY_COUNT.up}>
            <p>{t("skin-analysis-page.planet-block.title")}</p>
          </AnimatedDivFade>
        </div>
        <div
          className={`w-2/3 py-32 flex flex-col items-start space-y-8 px-10 space-x-1`}
        >
          <DefaultTitle color="dark">
            {t("skin-analysis-page.planet-block.subtitle")}
          </DefaultTitle>
          <p className="text-light-dark text-lg w-3/5">
            {t("skin-analysis-page.planet-block.text1")}
          </p>
          <p className="text-light-dark text-lg w-3/5">
            {t("skin-analysis-page.planet-block.text2")}
          </p>
          <NextButton disabled={false} width="min-w-1/3 mx-8">
            <Link target="_blank" to={"https://www.cortex.dk/contact/fairs/"}>
              {t("contact-us-page.meet-btn")}
            </Link>
          </NextButton>
        </div>
      </div>
    </MainLayout>
  );
};

export default SkinAnalysis;
