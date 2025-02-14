interface BodyBlockProps {
  children: React.ReactNode;
  class: string;
}

const ContactUsBodyBlock: React.FC<BodyBlockProps> = (props) => {
  return (
    <div className={`w-full flex items-center justify-end ${props.class}`}>
      <div className="w-2/3 flex justify-start *:px-9">{props.children}</div>
    </div>
  );
};

export default ContactUsBodyBlock;
