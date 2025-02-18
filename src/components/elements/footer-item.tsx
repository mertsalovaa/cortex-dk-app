import { Link } from "react-router-dom";

const FooterItem = ({
  currentPath,
  link,
  item,
}: {
  currentPath: string;
  link: (c: any) => string;
  item: [string, any];
}) => {
  return (
    <div>
      <Link
        to={link(
          item[0].includes("contact-us") || item[0].includes("skin-analysis")
            ? item[0]
            : "/",
        )}
        className={`text-dark pb-2 ${(currentPath.includes(item[0]) || ((currentPath === "/en" || currentPath === "/en/") && item[0].includes("skin-analysis"))) && "underline underline-offset-2"}`}
      >
        {item[1].title}
      </Link>
      {item[1].items.map((elem: string, indexElem: number) => (
        <p key={indexElem} className="text-light-dark">
          {elem}
        </p>
      ))}
    </div>
  );
};

export default FooterItem;
