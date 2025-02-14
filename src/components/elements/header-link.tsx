import { Link } from "react-router-dom";

const linkStyles: string = "py-4 px-5 text-2xl hover:opacity-75";
const activeItem: string = "text-active";
const itemStyles: string =
  "py-4 px-4 text-lg opacity-75 hover:opacity-60 cursor-pointer";

const HeaderLink = ({
  currentPath,
  link,
  path,
  text,
}: {
  currentPath: string;
  link: (c: any) => string;
  path: string;
  text: string;
}) => {
  return (
    <Link
      className={`${linkStyles} ${currentPath.includes(path) && activeItem}`}
      to={link(
        path.includes("contact-us") || path.includes("skin-analysis")
          ? path
          : "/",
      )}
    >
      <p>{text}</p>
    </Link>
  );
};

export default HeaderLink;

export const HeaderLinkItem = ({ text }: { text: string }) => {
  return <p className={itemStyles}>{text}</p>;
};
