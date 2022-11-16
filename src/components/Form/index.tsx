import InputField from "./InputField";
import Dropdown from "./Dropdown";
import Button from "./Button";

export default function Form() {
  const squad = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ]

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    console.log('squad')
  }

  return (
    <section className="max-w-[80%] mx-auto my-20">
      <form
        onSubmit={handleSubmit}
        className="bg-primary-gray rounded-2xl py-9 px-16"
      >
        <InputField
          label='Nome'
          placeholder='Digite o nome'
        />
        <InputField
          label='Cargo'
          placeholder='Digite o cargo'
        />
        <InputField
          label='Image'
          placeholder='Digite o endereço da imagem'
        />
        <Dropdown label="Times" squad={squad} />
        <Button>
          Criar card
        </Button>
      </form>
    </section>
  )
}