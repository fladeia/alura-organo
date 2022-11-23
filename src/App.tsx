import { useState } from 'react'
import Banner from './components/Banner'
import Form from './components/Form'
import { Squad } from './components/Squad';
import { squads } from './data'

interface StaffsValue {
  name: string;
  role: string;
  image: string;
  squad: string;
}

function App() {
  const [staffs, setStaffs] = useState<StaffsValue[]>([])

  function addNewStaff(staff: StaffsValue) {
    setStaffs([...staffs, staff])
    return staffs
  }

  return (
    <>
      <Banner />
      <Form addStaff={staff => addNewStaff(staff)} />
      {
        squads.map((squad) => {
          return (
            <Squad
              key={squad.name}
              name={squad.name}
              secondaryColor={squad.secondaryColor}
              tertiaryColor={squad.tertiaryColor}
              staffs={staffs.filter((staff) => staff.squad === squad.name)}
            />)
        })
      }
    </>
  )
}

export default App