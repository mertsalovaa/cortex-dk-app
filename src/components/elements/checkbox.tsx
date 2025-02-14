import { useState } from "react";
import "../../styles/checkbox.css";
import { Link } from "react-router-dom";

const Checkbox = ({
  name,
  elem,
  setState,
}: {
  name: string;
  elem: string;
  setState: (value: string, state: boolean) => void;
}) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = () => {
    setChecked(!checked);
    setState(`${name}: ${elem}`, !checked);
  };

  return (
    <span
      onClick={handleChange}
      className="flex items-center cursor-pointer *:p-3 text-sm text-light-dark"
    >
      <input
        type="checkbox"
        value={`${name}: ${elem}`}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <span></span>

      {name.includes("terms and conditions") ? (
        <span>
          I agree with
          <Link
            className="px-1 cursor-pointer underline underline-offset-2 hover:text-dark/60"
            to={"https://www.cortex.dk/privacy-policy/"}
            target="_blank"
          >
            terms and conditions
          </Link>
        </span>
      ) : (
        <p>{elem}</p>
      )}
    </span>
  );
};

export default Checkbox;
