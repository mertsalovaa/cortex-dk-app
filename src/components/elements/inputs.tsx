import "../../styles/input.css";

interface TextInputProps {
  placeholder: string;
  attribute: string;
  state: string;
  setState: (v: string) => void;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  return (
    <div className="input-label text-dark">
      <input
        id={props.attribute}
        name={props.attribute}
        placeholder={" "}
        value={props.state}
        onChange={(e) => props.setState(e.target.value)}
        className="w-full bg-white outline-none rounded-md text-base text-dark border-dark/15 border-[0.5px] h-8 p-2 pl-4"
      />
      <label className="flex pl-1.5">
        <svg
          className="text-violet fill-current"
          height="20"
          width="10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle r="3" cx="3" cy="25%" />
        </svg>
        <p>{props.placeholder}</p>
      </label>
    </div>
  );
};

export default TextInput;

export const TextAreaInput: React.FC<TextInputProps> = (props) => {
  return (
    <div className="input-label text-dark">
      <textarea
        id={props.attribute}
        name={props.attribute}
        placeholder={" "}
        value={props.state}
        rows={4}
        onChange={(e) => props.setState(e.target.value)}
        className="w-full bg-white outline-none rounded-md text-base text-dark border-dark/15 border-[0.5px] p-2 pl-4 pt-0.5"
      />

      <label className="flex pl-1.5">
        <svg
          className="text-violet fill-current"
          height="20"
          width="10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle r="3" cx="3" cy="25%" />
        </svg>
        <p>{props.placeholder}</p>
      </label>
    </div>
  );
};
