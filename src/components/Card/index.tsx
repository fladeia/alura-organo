interface CardProps {
  squadColor: string
  image: string, 
  name: string, 
  role: string, 
}

export function Card({ squadColor, image, name, role }: CardProps) {
  return (
    <div className="w-72">
      <div className={`${squadColor} rounded-lg`}>
        <img src={image} alt="" className="w-24 rounded-full relative -bottom-12 inline-block" />
      </div>
      <div className="bg-primary-white shadow-md rounded-lg pt-24 pb-10">
        <h4 className="text-primary-blue text-lg leading-5 font-bold mb-2">{name}</h4>
        <h5 className="leading-5 text-lg text-primary-black px-4">{role}</h5>
      </div>
    </div>
  )
}