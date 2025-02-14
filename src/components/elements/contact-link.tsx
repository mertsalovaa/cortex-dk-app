import { Link } from "react-router-dom";

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
