import { useState } from 'react'
import Banner from './components/Banner'
import { Footer } from './components/Footer';
import Form from './components/Form'
import { Squad } from './components/Squad';
import { squads } from './data'
import banner from './assets/banner.png'

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
      <Banner
        src={banner}
        alt="Banner com a frase 'Pessoas e times organizados em um só lugar' e uma imagem com pessoas formando um circulo com as mãos juntas"
      />
      <Form addStaff={staff => addNewStaff(staff)} />
      {
        squads.map((squad) => {
          return (
            <Squad
              key={squad.name}
              name={squad.name}
              secondaryColorBorder={squad.secondaryColor.border}
              secondaryColorBg={squad.secondaryColor.background}
              tertiaryColor={squad.tertiaryColor}
              staffs={staffs.filter((staff) => staff.squad === squad.name)}
            />)
        })
      }
      <Footer />
    </>
  )
}

export default App