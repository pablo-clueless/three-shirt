import { ComponentProps } from "react"
import { useSnapshot } from "valtio"

import { getContrastingColor } from "config/helpers"
import state from "store"

interface Props extends ComponentProps<"div"> {
  tab: { name: string, icon: JSX.Element }
  isFilter?: boolean
  isActive?: string
}

const Tab = (props: Props) => {
  const snap = useSnapshot(state)

  const activeStyles = props.isFilter && props.isActive ? {
    backgroundColor: snap.color,
    opacity: 0.5,
  } : {
    backgroundColor: "transparent",
    opacity: 1,
  }

  return (
    <div
      key={props.tab.name}
      onClick={props.onClick}
      className={`tab-btn ${props.isFilter ? "rounded-full glasmorphism" : "rounded-sm"}`}
      style={activeStyles}>
      <span style={{color: props.isFilter ? getContrastingColor(snap.color) : "#000"}} className="text-3xl">
        {props.tab.icon}
      </span>
    </div>
  )
}

export default Tab