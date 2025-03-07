import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import AnimatedLine from "../../components/elements/animated/line";
import AnimatedDivFade from "../../components/elements/animated/block";
import ContactLink, {
  ContactInfoCard,
} from "../../components/elements/contact-link";
import DefaultTitle, { DefaultText } from "../../components/elements/title";
import { MainLayout } from "../../components/layout/main-layout";
import TextInput, { TextAreaInput } from "../../components/elements/inputs";
import SubjectItem, {
  subjects,
} from "../../components/elements/contact-subject-item";
import ContactUsBodyBlock from "../../components/layout/blocks";
import Checkbox from "../../components/elements/checkbox";
import NextButton from "../../components/elements/buttons";

import planetImage from "../../assets/images/planet_contact-us.png";

import { AxisValue, WAY_COUNT } from "../../utils/constants";

export type SocialInfo = { name: string; value: string };

const socialArray: SocialInfo[] = [
  { name: "Facebook", value: "https://www.facebook.com/CortexTechnology/" },
  { name: "Instagram", value: "https://www.instagram.com/cortex_technology/" },
  {
    name: "LinkedIn",
    value:
      "https://www.linkedin.com/company/cortex-technology-aps?originalSubdomain=dk",
  },
  { name: "YouTube", value: "https://www.youtube.com/@CortexTechnology" },
];

const contactsArray: { title: string; items: Array<SocialInfo> }[] = [
  {
    title: "中国香港、澳门、台湾 Namfield Medical Technology Ltd.",
    items: [
      { name: "电话", value: "+852 2714 6878" },
      { name: "电子邮件", value: "info@namfield.com.hk" },
      { name: "网站", value: "namfield.com" },
    ],
  },
  {
    title: "中国内地 Guangzhou A&F Scientific Technology Co., LTD.",
    items: [
      { name: "电话", value: "020-83789751" },
      { name: "电子邮件", value: "info@afscientific.com" },
      { name: "网站", value: "www.afscientific.com" },
    ],
  },
];

const ContactUs = () => {
  const [fullName, setFullName] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [website, setWebsite] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [line, setLine] = useState<string>("");
  const [isTermsState, setIsState] = useState<boolean>(false);
  const [isDisabledBtn, setIsDisabledBtn] = useState<boolean>(true);

  const { t } = useTranslation();
  const location = useLocation();

  const selectedAnswer = (chosen: string, state: boolean) => {
    if (chosen.includes("terms and conditions")) {
      setIsState(state);
    } else {
      setLine((prevLine) => {
        if (state) {
          return prevLine.length !== 0 ? prevLine + ", " + chosen : chosen;
        } else {
          return prevLine
            .replace(", " + chosen, "")
            .replace(prevLine.indexOf(chosen) === 0 ? chosen + ", " : "", "")
            .replace(chosen, "")
            .trim();
        }
      });
    }
  };

  useEffect(() => {
    if (
      fullName !== "" &&
      company !== "" &&
      website !== "" &&
      email !== "" &&
      country !== "" &&
      message !== "" &&
      line !== "" &&
      isTermsState
    ) {
      setIsDisabledBtn(false);
    } else {
      setIsDisabledBtn(true);
    }
  }, [fullName, company, website, email, country, message, line, isTermsState]);

  return (
    <MainLayout theme="dark">
      {location.pathname.includes("en") && (
        <ContactUsBodyBlock class={`bg-dark min-h-screen`}>
          <div className="w-2/5 space-y-5">
            <DefaultTitle color="light">Get more info and prices!</DefaultTitle>
            <DefaultTitle color="light">
              Book a demonstration of products!
            </DefaultTitle>
            <DefaultText class="">
              Feel free to request more information about our products or
              require prices. Please use our contact form. We look forward to
              hearing from you!
            </DefaultText>
          </div>

          <div className="w-1/3 space-y-5">
            <DefaultTitle color="light">Find us at SoMe:</DefaultTitle>
            <div className="flex flex-col">
              {socialArray.map((item) => (
                <ContactLink
                  key={item.name}
                  name={item.name}
                  link={item.value}
                />
              ))}
            </div>
          </div>
        </ContactUsBodyBlock>
      )}
      {location.pathname.includes("zh") && (
        <div className={`bg-dark min-h-screen flex justify-center py-16`}>
          <div className="w-1/4 space-y-5">
            <DefaultTitle color="light">请联系</DefaultTitle>
            {contactsArray.map((item, index) => (
              <ContactInfoCard item={item} key={index} />
            ))}
          </div>
        </div>
      )}

      {location.pathname.includes("en") && (
        <div className="bg-light">
          <AnimatedLine />

          <AnimatedDivFade axis={AxisValue.Y} way={WAY_COUNT.down}>
            <p className="text-4xl text-dark px-4">
              Please use the contact form
            </p>
          </AnimatedDivFade>

          <ContactUsBodyBlock class="bg-light *:flex-col min-h-dvh py-16 *">
            <DefaultTitle color="dark">Your details</DefaultTitle>
            <div className="flex *:w-1/3 *:space-y-8 py-5">
              <div>
                <TextInput
                  placeholder="Full name"
                  attribute="full-name-input"
                  state={fullName}
                  setState={setFullName}
                />
                <TextInput
                  placeholder="Company name"
                  attribute="company-name-input"
                  state={company}
                  setState={setCompany}
                />
                <TextInput
                  placeholder="Website"
                  attribute="website-input"
                  state={website}
                  setState={setWebsite}
                />
              </div>
              <div className="ml-9">
                <TextInput
                  placeholder="E-mail"
                  attribute="email-input"
                  state={email}
                  setState={setEmail}
                />
                <TextInput
                  placeholder="Country"
                  attribute="country-input"
                  state={country}
                  setState={setCountry}
                />
                <TextAreaInput
                  placeholder="Message"
                  attribute="message-input"
                  state={message}
                  setState={setMessage}
                />
              </div>
            </div>

            <DefaultTitle color="dark">Please choose a subject</DefaultTitle>
            <div className=" flex flex-col flex-wrap gap-10 justify-start text-dark">
              {subjects.map((item, index) => (
                <div className="flex flex-wrap pt-5 *:w-1/2" key={index}>
                  <SubjectItem
                    key={subjects[index][0].name}
                    item={subjects[index][0]}
                    setLine={selectedAnswer}
                  />
                  <div className="flex justify-between flex-col">
                    {item.slice(1).map((subject) => (
                      <SubjectItem
                        key={subject.name}
                        item={subject}
                        setLine={selectedAnswer}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <span
              className={`w-4/5 text-light-dark ${line.length === 0 && "pt-10"}`}
            >
              {line.length !== 0 && (
                <AnimatedDivFade axis={AxisValue.Y} way={WAY_COUNT.up}>
                  <p className="text-lg text-light-dark *:px-0.5 relative top-12 left-4 pt-2 pb-1">
                    You have chosen:{" "}
                    <span className="font-semibold">{line}</span> as your
                    subject.
                  </p>
                </AnimatedDivFade>
              )}
              <AnimatedLine />{" "}
              <div className="pl-4 flex justify-start items-start text-light-dark text-sm">
                <p className="w-1/2">
                  By using this contactform you agrees to our Terms and
                  conditions.
                </p>
                <span className="w-2/5 relative -top-2">
                  <Checkbox
                    name={"terms and conditions"}
                    elem={``}
                    setState={selectedAnswer}
                  />
                  <NextButton width="w-4/5" disabled={isDisabledBtn}>
                    Submit form
                  </NextButton>
                  <span className="py-5 px-2 flex items-center">
                    <svg
                      className="text-violet fill-current mr-2"
                      height="10"
                      width="10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle r="3.5" cx="50%" cy="50%" />
                    </svg>
                    <p>Fields are required</p>
                  </span>
                </span>
              </div>
            </span>
          </ContactUsBodyBlock>
        </div>
      )}
      <span className="*:bg-light relative *:pb-10">
        <AnimatedLine />
      </span>
      <div
        style={{
          backgroundImage: `url(${planetImage})`,
          backgroundColor: "theme(colors.light)",
        }}
        className="p-5 relative -top-7 flex bg-light text-dark w-full h-svh bg-contain bg-no-repeat bg-left"
      >
        <ContactUsBodyBlock class="bg-transparent *:flex-col items-center *:justify-between *:items-start *:w-2/5 *:h-1/3">
          <AnimatedDivFade axis={AxisValue.Y} way={WAY_COUNT.down}>
            <DefaultTitle color="dark">
              {t("contact-us-page.meet-title")}
            </DefaultTitle>
          </AnimatedDivFade>
          <p className="text-light-dark w-8/12">
            {t("contact-us-page.meet-text")}
          </p>
          <NextButton disabled={false} width="min-w-1/3 mx-8">
            <Link target="_blank" to={"https://www.cortex.dk/contact/fairs/"}>
              {t("contact-us-page.meet-btn")}
            </Link>
          </NextButton>
        </ContactUsBodyBlock>
      </div>
    </MainLayout>
  );
};

export default ContactUs;
