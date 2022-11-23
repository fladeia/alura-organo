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
      secondaryColor: 'bg-secondary-programming',
      tertiaryColor: 'bg-tertiary-programming'
    },
    {
      name: 'Front-End',
      secondaryColor: 'bg-secondary-frontend',
      tertiaryColor: 'bg-tertiary-frontend'
    },
    {
      name: 'Data Science',
      secondaryColor: 'bg-secondary-dataSciences',
      tertiaryColor: 'bg-tertiary-dataSciences'
    },
    {
      name: 'Devops',
      secondaryColor: 'bg-secondary-devops',
      tertiaryColor: 'bg-tertiary-devops'
    },
    {
      name: 'UX e Design',
      secondaryColor: 'bg-secondary-uxDesign',
      tertiaryColor: 'bg-tertiary-uxDesign'
    },
    {
      name: 'Mobile',
      secondaryColor: 'bg-secondary-mobile',
      tertiaryColor: 'bg-tertiary-mobile'
    },
    {
      name: 'Inovação e Gestão',
      secondaryColor: 'bg-secondary-inovation',
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
          return <Squad name={item.name} secondaryColor={item.secondaryColor} tertiaryColor={item.tertiaryColor} />
        })
      }

    </>
  )
}

export default App