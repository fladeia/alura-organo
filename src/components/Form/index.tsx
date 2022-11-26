import InputField from "./InputField";
import Dropdown from "./Dropdown";
import Button from "./Button";
import { useState } from "react";

interface StaffsValue {
  name: string;
  role: string;
  image: string;
  squad: string;
}
interface FormProps {
  addStaff: (staff: StaffsValue) => void;
}

export default function Form(props: FormProps) {
  const [name, SetName] = useState('')
  const [role, SetRole] = useState('')
  const [image, SetImage] = useState('')
  const [squad, SetSquad] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()

    props.addStaff({
      name,
      role,
      image,
      squad
    })

    SetSquad('')
    SetImage('')
    SetRole('')
    SetName('')
  }

  return (
    <section className="max-w-[80%] mx-auto my-20">
      <form
        onSubmit={handleSubmit}
        className="bg-primary-gray rounded-2xl py-9 px-16"
      >
        <InputField
          label='Nome'
          value={name}
          onChange={value => SetName(value)}
          placeholder='Digite o nome'
        />
        <InputField
          label='Cargo'
          value={role}
          onChange={value => SetRole(value)}
          placeholder='Digite o cargo'
        />
        <InputField
          label='Image'
          value={image}
          onChange={value => SetImage(value)}
          placeholder='Digite o endereço da imagem'
        />
        <Dropdown
          label="Times"
          value={squad}
          onChange={value => SetSquad(value)}
        />
        <Button>
          Criar card {/*ButtonProps = children: React.ReactNode */}
        </Button>
      </form>
    </section>
  )
}