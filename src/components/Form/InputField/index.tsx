interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required: boolean;
}

export default function InputField({ label, value, placeholder, onChange, required }: InputProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value)
  }

  return (
    <div className="my-6">
      <label
        htmlFor="name"
        className="block mb-2 text-2xl"
      >
        {label}
      </label>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        required={required}
        className="w-full text-2xl p-6 shadow-lg"
      />
    </div>
  )
}