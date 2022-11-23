import { squads } from '../../../data'
interface DropdownProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export default function Dropdown(props: DropdownProps) {
  return (
    <div className="my-6">
      <label className="block mb-2 text-2xl">{props.label}</label>
      <select
        onChange={event => props.onChange(event.target.value)}
        required
        value={props.value}
        className="w-full text-2xl p-6 shadow-lg"
      >
        <option value="">Escolha um time...</option>
        {squads.map((item) => {
          return <option key={item.name} >{item.name}</option>
        })}
      </select>
    </div>
  )
}