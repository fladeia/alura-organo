import { squads } from '../../../data'
interface DropdownProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required: boolean;
}

export default function Dropdown({label, value, onChange, required}: DropdownProps) {
  return (
    <div className="my-6">
      <label className="block mb-2 text-2xl">{label}</label>
      <select
        value={value}
        onChange={event => onChange(event.target.value)}
        required={required}
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