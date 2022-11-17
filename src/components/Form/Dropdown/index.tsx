interface DropdownProps {
  label: string;
  squads: string[];
  value: string;
  onChange: (value: string) => void;
}

export default function Dropdown(props: DropdownProps) {
  return (
    <div className="my-6">
      <label className="block mb-2 text-2xl">{props.label}</label>
      <select
        onChange={event => props.onChange(event.target.value)}
        className="w-full text-2xl p-6 shadow-lg"
      >
        {props.squads.map((item) => {
          return <option key={item} >{item}</option>
        })}
      </select>
    </div>
  )
}