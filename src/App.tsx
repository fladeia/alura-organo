import { useState } from 'react'
import Banner from './components/Banner'
import banner from './assets/banner.png'
import { Footer } from './components/Footer';
import Form from './components/Form'
import { Squad } from './components/Squad';
import { IStaffs } from './shared/interface/IStaff';
import { squads } from './data'

function App() {
  const [staffs, setStaffs] = useState<IStaffs[]>([])

  function addNewStaff(staff: IStaffs) {
    setStaffs([...staffs, staff])
    return staffs
  }

  return (
    <>
      <Banner
        src={banner}
        alt="Banner com a frase 'Pessoas e times organizados em um só lugar' e uma imagem com pessoas formando um circulo com as mãos juntas"
      />
      <Form addNewStaff={staff => addNewStaff(staff)} />
      {
        squads.map((squad) => {
          return (
            <Squad
              key={squad.name}
              staffs={staffs.filter((staff) => staff.squad === squad.name)}
              tertiaryColor={squad.tertiaryColor}
              secondaryColorBorder={squad.secondaryColor.border}
              name={squad.name}
              secondaryColorBg={squad.secondaryColor.background}
            />)
        })
      }
      <Footer />
    </>
  )
}

export default App

// 'Squad' cannot be used as a JSX component.
//   Its return type 'false | Element' is not a valid JSX element.
//     Type 'boolean' is not assignable to type 'ReactElement<any, any>'.ts(2786)

// Squad.tsx - staffs.length > 0 && <section... (if empty return false)