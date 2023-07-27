import { ComponentProps, ReactNode } from "react"
import { useSnapshot } from "valtio"

import state from "store"

interface Props extends ComponentProps<"button"> {
  title: string
  icon?: ReactNode
  variant: "filled" | "outlined"
}

const Button = (props: Props) => {
  const snap = useSnapshot(state)

  const generatedStyle = (variant: string) => {
    if (variant === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#FFF",
      }
    } else if (variant === "outlined") {
      return {
        border: `1px solid ${snap.color}`,
        color: snap.color,
      }
    }
  }

  return (
    <button
      style={generatedStyle(props.variant)}
      onClick={props.onClick}
      className={`px-2 py-1.2 flex items-center gap-2 flex-1 rounded-md ${props.className}`}>
      {props.title}
      <span className="text-lg">{props.icon}</span>
    </button>
  )
}

export default Button