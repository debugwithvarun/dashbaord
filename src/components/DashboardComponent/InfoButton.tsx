import { GlobeIcon } from "lucide-react"

import { Button } from "../ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip"

export default function InfoButton() {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild className="items-center">
          <Button variant="outline" size="default" className="w-6 h-6 rounded-full text-[10px] p-0 flex items-center justify-center">
           i
          </Button>
        </TooltipTrigger>
        <TooltipContent className="dark py-3">
          <div className="flex gap-3">
            <GlobeIcon
              className="mt-0.5 shrink-0 opacity-60"
              size={16}
              aria-hidden="true"
            />
            <div className="space-y-1">
              <p className="text-[13px] font-medium">
                Tooltip with title and icon
              </p>
              <p className="text-xs text-muted-foreground">
                Tooltips are made to be highly customizable, with features like
                dynamic placement, rich content, and a robust API.
              </p>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
