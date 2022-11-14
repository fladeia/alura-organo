import InputField from "../InputField";

export default function Form() {
  return (
    <section className="max-w-[80%] mx-auto my-20">
      <form className="bg-primary-gray rounded-2xl py-9 px-16" >
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
      </form>
    </section>
  )
}