export const getRandomHexColor = () => {
  const red = Math.floor(Math.random() * 256).toString(16).padStart(2, '0')
  const green = Math.floor(Math.random() * 256).toString(16).padStart(2, '0')
  const blue = Math.floor(Math.random() * 256).toString(16).padStart(2, '0')

  return `#${red}${green}${blue}`
}

export const getRandomImage = (images: string[]) => {
  if (images) {
    const randomIndex = Math.floor(Math.random() * images.length)
    const randomImage = images[randomIndex]
    return randomImage
  }
}
