import { Dispatch, SetStateAction } from "react"

import Button from "./Button"

interface Props {
  file: File | null
  readFile: (value: string) => void
  setFile: Dispatch<SetStateAction<File | null>>
}

const FilePicker = (props: Props) => {
  return (
    <div className="filepicker-container">
      <div className="flex flex-1 flex-col">
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          onChange={(e) => e.target.files && props.setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>
        <p className="mt-2 text-xs font-semibold text-gray-800 truncate">
          {props.file ? props.file.name : "No file selected"}
        </p>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        <Button
          title="Apply as logo"
          variant="filled"
          onClick={() => props.readFile("logo")}
          className="text-xs font-bold w-full"
        />
        <Button
          title="Apply as pattern"
          variant="filled"
          onClick={() => props.readFile("full")}
          className="text-xs font-bold w-full"
        />
      </div>
    </div>
  )
}

export default FilePicker
