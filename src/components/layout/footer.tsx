import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { useLinkWithTranslation } from "../../utils/extentions";
import FooterItem from "../elements/footer-item";

const contactInfo = {
  phone: " +4598574100",
  email: "cortex@cortex.dk",
  "corp.reg.no": "DK78880813",
};

const Footer = () => {
  const { t } = useTranslation();
  const link = useLinkWithTranslation();
  const location = useLocation();

  const contactTexts: [string, any][] = Object.entries(
    t("footer.contact-text", { returnObjects: true }),
  );

  const footerItems: [string, any][] = Object.entries(
    t("header.items", { returnObjects: true }),
  );

  return (
    <footer className="w-full bg-white font-[PPNeueMontreal] p-8 ">
      <p className="text-5xl font-medium text-dark w-1/4 py-16">
        Cortex Technology
      </p>
      <div className="flex items-start justify-between *:p-2">
        <div className="w-1/4 text-light-dark text-lg">
          <p>Niels Jernes Vej</p>
          <p>6B 9220</p>
          <p>Aalborg Denmark</p>
          <br />
          <p>
            {contactTexts[0][1]}: {contactInfo.phone}
          </p>
          <p>
            {contactTexts[1][1]}: {contactInfo.email}
          </p>
          <p>
            {contactTexts[2][1]}: {contactInfo["corp.reg.no"]}
          </p>
        </div>
        <div className="text-dark w-2/3 flex items-start justify-between *:gap-5 cursor-pointer hover:*:*:*:underline hover:*:*:*:underline-offset-2">
          <p className="w-2/5 text-2xl">{t("footer.main-text")}</p>
          <div className="w-1/4 flex flex-col flex-wrap pt-2">
            {footerItems.slice(0, 2).map((item, index) => (
              <FooterItem
                key={index}
                currentPath={location.pathname}
                link={link}
                item={item}
              />
            ))}
          </div>
          <div className="w-1/4 flex flex-col flex-wrap pt-2">
            {footerItems.slice(2).map((item, index) => (
              <FooterItem
                key={index}
                currentPath={location.pathname}
                link={link}
                item={item}
              />
            ))}
            <div>
              <p className="text-dark pb-2">Other</p>
              <Link
                className="text-light-dark pb-2"
                to={"https://www.cortex.dk/privacy-policy/"}
                target="_blank"
              >
                Privacy Policy
              </Link>
              <p className="text-light-dark pb-2"></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
