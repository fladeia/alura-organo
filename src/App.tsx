import { useState } from 'react'
import Banner from './components/Banner'
import Form from './components/Form'

interface StaffsValue {
  staffs: string[];
}

function App() {
  const [staffs, setStaffs] = useState<StaffsValue[]>([])

  function addNewStaff(staff: {}) {
    setStaffs(...staffs, staff)
  }

  return (
    <>
      <Banner />
      <Form addStaff={staff => addNewStaff(staff)} />
    </>
  )
}

export default App