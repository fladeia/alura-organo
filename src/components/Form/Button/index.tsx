interface ButtonProps {
  children: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  return (
    <button className="bg-primary-blue rounded font-bold p-8 text-primary-white my-4 hover:text-primary-green">
      {props.children}
    </button>
  )
}