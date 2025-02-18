import { Link } from "react-router-dom";
import { DefaultText } from "./title";
import { SocialInfo } from "../../pages/contact-us/contact-us";

const ContactLink = ({ name, link }: { name: string; link: string }) => {
  return (
    <Link
      className="opacity-70 py-2.5 text-lg underline-offset-3 underline hover:opacity-100"
      target="_blank"
      rel="noopener noreferrer"
      to={link}
    >
      {name}
    </Link>
  );
};

export default ContactLink;

export const ContactInfoCard = ({
  item,
}: {
  item: {
    title: string;
    items: Array<SocialInfo>;
  };
}) => {
  return (
    <div>
      <DefaultText class="font-semibold pt-5 pb-2">{item.title}</DefaultText>
      {item.items.map((elem, indexElem) => (
        <div key={indexElem} className="flex items-center justify-between py-2">
          <DefaultText class="text-white opacity-100">{elem.name}</DefaultText>
          <DefaultText class="text-white opacity-100">{elem.value}</DefaultText>
        </div>
      ))}
    </div>
  );
};
