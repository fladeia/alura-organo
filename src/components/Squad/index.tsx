import { IStaffs } from "../../shared/interface/IStaff";
import { Card } from "../Card";

interface SquadProps {
  staffs: IStaffs[];
  tertiaryColor: string;
  secondaryColorBorder: string;
  name: string;
  secondaryColorBg: string;
}

export function Squad({staffs, tertiaryColor, secondaryColorBorder, name, secondaryColorBg }: SquadProps) {
  return (
    staffs.length > 0 ? <section className={`text-center p-8 ${tertiaryColor}`}>
      <h3 className={`text-3xl border-b-4 ${secondaryColorBorder} inline-block pb-2`}>{name}</h3>
      <div className="flex flex-wrap justify-between mt-8">
        {staffs.map((staff) => {
          return (
            <Card 
              key={staff.image} 
              image={staff.image} 
              name={staff.name} 
              role={staff.role} 
              squadColor={secondaryColorBg} 
            />
          )
        })}
      </div>
    </section>
    : <></>
  )
}