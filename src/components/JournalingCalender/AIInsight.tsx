import { useId } from "react"

import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"


type JCProps={
  labelName:string
  placeholder:string
}

export default function AIInsight({labelName,placeholder}:JCProps) {
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>{labelName}</Label>
      <Textarea
        id={id}
        placeholder={placeholder}
        className="field-sizing-content min-h-20 resize-none py-1.75"
      />

    </div>
  )
}
