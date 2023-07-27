import { ComponentProps } from "react"
import { useSnapshot } from "valtio"

import state from "store"

interface Props extends ComponentProps<"div"> {
  tab: { name: string, icon: string }
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
      tab
    </div>
  )
}

export default Tab