import { Card } from "../Card";

interface StaffsValue {
  name: string;
  role: string;
  image: string;
  squad: string;
}

interface SquadProps {
  name: string;
  secondaryColor: string;
  tertiaryColor: string;
  staffs: StaffsValue[];
}


export function Squad(props: SquadProps) {
  return (
    <section className={`text-center p-8 ${props.tertiaryColor}`}>
      <h3 className={`text-3xl border-b-4 ${props.secondaryColor} inline-block pb-2`}>{props.name}</h3>
      <div className="flex flex-wrap justify-between mt-8">
        {props.staffs.map((staff) => {
          return <Card key={staff.image} image={staff.image} name={staff.name} role={staff.role} />
        })}
      </div>
    </section>
  )
}