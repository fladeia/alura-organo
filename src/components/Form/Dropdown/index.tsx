interface DropdownProps {
  label: string;
  squad: string[];
}

export default function Dropdown(props: DropdownProps) {
  return (
    <div className="my-6">
      <label className="block mb-2 text-2xl">{props.label}</label>
      <select className="w-full text-2xl p-6 shadow-lg">
        {props.squad.map((item) => {
          return <option key={item} >{item}</option>
        })}
      </select>
    </div>
  )
}