interface BannerProps {
  src: string;
  alt: string;
}

export default function Banner({ src, alt }: BannerProps) {
  return (
    <img
      src={src}
      alt={alt}
      className='w-full bg-primary-blue'
    />
  )
}