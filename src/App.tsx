import { useState } from 'react'
import Banner from './components/Banner'
import Form from './components/Form'
import { Squad } from './components/Squad';

interface StaffsValue {
  name: string;
  role: string;
  image: string;
  squad: string;
}

function App() {
  const squads = [
    {
      name: 'Programação',
      secondaryColor: 'border-secondary-programming',
      tertiaryColor: 'bg-tertiary-programming'
    },
    {
      name: 'Front-End',
      secondaryColor: 'border-secondary-frontend',
      tertiaryColor: 'bg-tertiary-frontend'
    },
    {
      name: 'Data Science',
      secondaryColor: 'border-secondary-dataSciences',
      tertiaryColor: 'bg-tertiary-dataSciences'
    },
    {
      name: 'Devops',
      secondaryColor: 'border-secondary-devops',
      tertiaryColor: 'bg-tertiary-devops'
    },
    {
      name: 'UX e Design',
      secondaryColor: 'border-secondary-uxDesign',
      tertiaryColor: 'bg-tertiary-uxDesign'
    },
    {
      name: 'Mobile',
      secondaryColor: 'border-secondary-mobile',
      tertiaryColor: 'bg-tertiary-mobile'
    },
    {
      name: 'Inovação e Gestão',
      secondaryColor: 'border-secondary-inovation',
      tertiaryColor: 'bg-tertiary-inovation'
    },
  ]

  const [staffs, setStaffs] = useState<StaffsValue[]>([])

  function addNewStaff(staff: StaffsValue) {
    setStaffs([...staffs, staff])
    return staffs
  }

  console.log(staffs)

  return (
    <>
      <Banner />
      <Form addStaff={staff => addNewStaff(staff)} squads={squads} />
      {
        squads.map((item) => {
          return <Squad key={item.name} name={item.name} secondaryColor={item.secondaryColor} tertiaryColor={item.tertiaryColor} />
        })
      }

    </>
  )
}

export default App