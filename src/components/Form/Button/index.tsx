interface ButtonProps {
  // children: ReactElement | string;
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="w-full bg-primary-blue rounded font-bold px-8 py-4 text-primary-white my-4 hover:text-primary-green">
      <p>{children}</p>
    </button>
  )
}