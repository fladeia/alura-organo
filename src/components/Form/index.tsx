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
          placeholder='Digite o nome'
          onChange={value => SetName(value)}
          required={true}
        />
        <InputField
          label='Cargo'
          value={role}
          placeholder='Digite o cargo'
          onChange={value => SetRole(value)}
          required={true}
        />
        <InputField
          label='Image'
          value={image}
          placeholder='Digite o endereço da imagem'
          onChange={value => SetImage(value)}
          required={true}
        />
        <Dropdown
          label="Times"
          value={squad}
          onChange={value => SetSquad(value)}
        />
        <Button>
          Criar card
        </Button>
      </form>
    </section>
  )
}