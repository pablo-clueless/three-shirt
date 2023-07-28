import { Links } from "config/constants"

const Attribution = () => {
  return (
    <div className="flex flex-col items-center gap-4 fixed top-1/2 right-2 -translate-y-1/2 glassmorphism p-2 rounded-md text-center !z-20">
      {Links.map((link, index) => (
        <a key={index} href={link.url} target="_blank" className="text-2xl">
          {link.icon}
        </a>
      ))}
    </div>
  )
}

export default Attribution