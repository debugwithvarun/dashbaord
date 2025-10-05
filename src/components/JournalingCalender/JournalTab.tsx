import JCTextArea from "./JCTextArea"


const JournalTab = () => {
  return (
    <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl py-3 ">
      <div className="flex flex-col gap-2">
        {/* <span className="flex gap-2 iitems-center">Trade Notes</span> */}
        <JCTextArea labelName="Trade Notes" placeholder="No Notes Available"/>
      </div>
      <div className="flex flex-col gap-2">
        {/* <span className="flex gap-2 iitems-center">Trade Notes</span> */}
        <JCTextArea labelName="OutLook" placeholder="No Notes Available"/>
      </div>
      <div className="flex flex-col gap-2">
        {/* <span className="flex gap-2 iitems-center">Trade Notes</span> */}
        <JCTextArea labelName="Psychology" placeholder="No Notes Available"/>
      </div>
    </div>
  )
}

export default JournalTab