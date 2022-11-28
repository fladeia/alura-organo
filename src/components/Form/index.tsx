import InputField from "./InputField";
import Dropdown from "./Dropdown";
import Button from "./Button";
import { useState } from "react";
import { IStaffs } from "../../shared/interface/IStaff";
interface FormProps {
  addNewStaff: (staff: IStaffs) => void;
}

export default function Form({ addNewStaff }: FormProps) {
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [image, setImage] = useState('')
  const [squad, setSquad] = useState('')
  const [date, setDate] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()

    addNewStaff({
      name,
      role,
      image,
      squad,
      date
    })

    setSquad('')
    setImage('')
    setRole('')
    setName('')
    setDate('')
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
          onChange={value => setName(value)}
          required={true}
        />
        <InputField
          label='Cargo'
          value={role}
          placeholder='Digite o cargo'
          onChange={value => setRole(value)}
          required={true}
        />
        <InputField
          label='Image'
          value={image}
          placeholder='Digite o endereço da imagem'
          onChange={value => setImage(value)}
          required={true}
        />
        <InputField
          type='date'
          label='Data'
          value={date}
          placeholder=''
          onChange={date => setDate(date)}
          required={true}
        />
        <Dropdown
          label="Times"
          value={squad}
          onChange={value => setSquad(value)}
          required={true}
        />
        <Button>
          Criar card
        </Button>
      </form>
    </section>
  )
}