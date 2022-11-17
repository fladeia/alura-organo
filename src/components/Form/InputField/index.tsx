interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export default function InputField(props: InputProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    props.onChange(event.target.value)
  }

  return (
    <div className="my-6">
      <label
        htmlFor="name"
        className="block mb-2 text-2xl"
      >
        {props.label}
      </label>
      <input
        type="text"
        className="w-full text-2xl p-6 shadow-lg"
        value={props.value}
        onChange={handleChange}
        placeholder={props.placeholder}
        required
      />
    </div>
  )
}