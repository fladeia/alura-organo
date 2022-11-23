interface SquadProps {
  name: string;
  secondaryColor: string;
  tertiaryColor: string;
}

export function Squad(props: SquadProps) {
  return (
    <section className={`text-center p-8 ${props.tertiaryColor}`}>
      <h3 className={`text-3xl border-b-4 ${props.secondaryColor} inline-block pb-2`}>{props.name}</h3>
    </section>
  )
}