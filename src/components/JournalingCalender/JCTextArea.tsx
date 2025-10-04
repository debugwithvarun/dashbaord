import { useId } from "react"
import { Mic } from 'lucide-react';
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"

type JCProps={
  labelName:string
  placeholder:string
}

export default function JCTextArea({labelName,placeholder}:JCProps) {
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>{labelName}</Label>
      <Textarea
        id={id}
        placeholder={placeholder}
        className="field-sizing-content min-h-20 resize-none py-1.75"
      />
      <div className="flex gap-2">
      <Button variant={"outline"}>Save</Button>
      <Button variant={"outline"}>Image</Button>
      <Button variant={"outline"}><Mic/></Button>
      </div>
    </div>
  )
}
