import type { ReactNode } from "react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,

  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../components/ui/alert-dialog"

import UploadBox from "./excel-box"



export default function UploadDialog({children,name}:{children:ReactNode,name:string}) {

  return (
    <AlertDialog >
      <AlertDialogTrigger asChild>
       {children}
      </AlertDialogTrigger>
      <AlertDialogContent className="w-full scrollbar-none max-h-[70%]">
        <AlertDialogHeader>
          <AlertDialogTitle>
            {/* {name==="manual" && "Manual Entry"} */}
            {name==="excel" && "Upload File"}
            {name==="api" && "API Intregation"}
            </AlertDialogTitle>
            
            
            {name==="excel" && <UploadBox/>}
            {name==="api" && <UploadBox/>}
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Save</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
