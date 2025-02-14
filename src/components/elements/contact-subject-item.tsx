import Checkbox from "./checkbox";

interface SubjectProps {
  name: string;
  items: string[];
}

export const subjects: [SubjectProps[], SubjectProps[]] = [
  [
    {
      name: "DermaLab Combo",
      items: [
        "Ultrasound",
        "TEWL",
        "Hydration",
        "Skin color",
        "Elasticity",
        "pH",
        "Temperature",
        "Sebum",
        "Dermascope Camera",
      ],
    },
    {
      name: "DermaLab Aesthetic",
      items: ["Aesthetic"],
    },
    {
      name: "DermaLab Single",
      items: ["Ultrasound", "Hydration", "TEWL", "Elasticity"],
    },
  ],
  [
    {
      name: "DermaLab Mini",
      items: [
        "Ultrasound",
        "Hydration",
        "Elasticity",
        "Temperature",
        "Dermascope Camera",
        "TEWL",
        "Skin color",
        "pH",
        "Sebum",
      ],
    },
    {
      name: "CryoPro",
      items: ["Maxi", "Mini"],
    },
    {
      name: "DermaScan",
      items: ["20 MHz", "50 MHz"],
    },
    {
      name: "Colorimeter DSM-4",
      items: ["DSM-4"],
    },
  ],
];

const SubjectItem = ({
  item,
  setLine,
}: {
  item: SubjectProps;
  setLine: (value: string, state: boolean) => void;
}) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-xl font-medium">{item.name}</h3>
      <div className="flex flex-wrap *:w-1/2">
        {item.items.map((elem, index) => (
          <Checkbox
            key={index}
            name={item.name}
            elem={elem}
            setState={setLine}
          />
        ))}
      </div>
    </div>
  );
};

export default SubjectItem;
