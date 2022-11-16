interface InputProps {
  label: string;
  placeholder: string;
}

export default function InputField(props: InputProps) {
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
        placeholder={props.placeholder}
      />
    </div>
  )
}