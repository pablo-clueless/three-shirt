import { Dispatch, SetStateAction } from "react"

// import Button from "./Button"

interface Props {
  handleSubmit: (value: string) => void
  loading: boolean
  prompt: string
  setPrompt: Dispatch<SetStateAction<string>>
}

const AiPicker = (props: Props) => {
  return (
    <div className="aipicker-container">
      <textarea
        value={props.prompt}
        onChange={(e) => props.setPrompt(e.target.value)}
        className="aipicker-textarea resize-none"
        placeholder="Generate image with AI"
        rows={6}
        disabled
      />
      <p className="text-lg font-semibold text-center">
        Not available
      </p>
      {/* <div className="flex flex-wrap gap-3">
        {props.loading ? (
          <Button
            title="Generating..."
            variant="outlined"
            className="w-fit text-xs font-bold"
          />
        ): (
          <>
          <Button
            title="AI Logo"
            variant="outlined"
            className="w-fit text-xs font-bold"
            onClick={() => props.handleSubmit("logo")}
            />
          <Button
            title="AI Full"
            variant="filled"
            className="w-fit text-xs font-bold"
            onClick={() => props.handleSubmit("full")}
          />
          </>
        )}
      </div> */}
    </div>
  )
}

export default AiPicker
