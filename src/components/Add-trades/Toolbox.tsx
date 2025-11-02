
import { useState } from "react"
import { Button } from "../../components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip"
import { Plus, PenTool, Upload, Link2 } from "lucide-react"
import UploadDialog from "./upload/upload-dialog"
import UploadDialogManual from "./upload/upload-dialog-manual"


export function Toolbox() {
  const [isOpen, setIsOpen] = useState(false)





  const getPosition = (angle: number, isOpen: boolean) => {
    if (!isOpen) return { x: 0, y: 0 }
    const radius = 80
    const radians = (angle - 90) * (Math.PI / 180)
    return {
      x: Math.cos(radians) * radius,
      y: Math.sin(radians) * radius
    }
  }


  return (
    <TooltipProvider>
      <div className="relative inline-flex items-center justify-center">

        {/* manual entry  */}
        <Tooltip delayDuration={0} >

          <UploadDialogManual >
            <TooltipTrigger asChild>

              <Button
                size="icon"
                className={`absolute rounded-full shadow-lg transition-all duration-500 ease-out ${isOpen
                  ? 'opacity-100 scale-100 pointer-events-auto'
                  : 'opacity-0 scale-0 pointer-events-none'
                  }`}
                style={{
                  transform: `translate(${getPosition(0, isOpen).x}px, ${getPosition(0, isOpen).y}px)`,
                  transitionDelay: isOpen ? `${0 * 80}ms` : '0ms'
                }}
                onClick={() => {

                  setIsOpen(false)

                }}
              >
                <PenTool className="h-5 w-5" />
              </Button>

            </TooltipTrigger>
          </UploadDialogManual>
          <TooltipContent side="right" className="font-medium">
            Manual Entry
          </TooltipContent>
        </Tooltip>


        {/* upload files  */}

        <Tooltip delayDuration={0}>

          <UploadDialog name="excel">
            <TooltipTrigger asChild>

              <Button
                size="icon"
                className={`absolute rounded-full shadow-lg transition-all duration-500 ease-out ${isOpen
                  ? 'opacity-100 scale-100 pointer-events-auto'
                  : 'opacity-0 scale-0 pointer-events-none'
                  }`}
                style={{
                  transform: `translate(${getPosition(-45, isOpen).x}px, ${getPosition(-45, isOpen).y}px)`,
                  transitionDelay: isOpen ? `${1 * 80}ms` : '0ms'
                }}
                onClick={() => {

                  setIsOpen(false)

                }}
              >
                <Upload className="h-5 w-5" />
              </Button>

            </TooltipTrigger>
          </UploadDialog>
          <TooltipContent side="right" className="font-medium">
            Upload Files
          </TooltipContent>
        </Tooltip>


        {/* api intregation  */}


        <Tooltip delayDuration={0}>

          <UploadDialog name="api">
            <TooltipTrigger asChild>

              <Button
                size="icon"
                className={`absolute rounded-full shadow-lg transition-all duration-500 ease-out ${isOpen
                  ? 'opacity-100 scale-100 pointer-events-auto'
                  : 'opacity-0 scale-0 pointer-events-none'
                  }`}
                style={{
                  transform: `translate(${getPosition(-90, isOpen).x}px, ${getPosition(90, isOpen).y}px)`,
                  transitionDelay: isOpen ? `${2 * 80}ms` : '0ms'
                }}
                onClick={() => {

                  setIsOpen(false)

                }}
              >
                <Link2 className="h-5 w-5" />
              </Button>

            </TooltipTrigger>
          </UploadDialog>
          <TooltipContent side="right" className="font-medium">
            API Intregations
          </TooltipContent>
        </Tooltip>



        <Button
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className={`relative rounded-full shadow-xl transition-all duration-300 ${isOpen
            ? ' rotate-45'
            : 'rotate-0'
            } `}
        >
          <Plus className="h-6 w-6" />
        </Button>


        {/* Backdrop overlay when open */}
        {isOpen && (
          <div
            className="fixed inset-0 -z-10"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </TooltipProvider>
  )
}