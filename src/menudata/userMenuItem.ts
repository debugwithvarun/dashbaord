import { LogOut, Settings, User } from "lucide-react";

export const userMenuItems = [
    {
      title: "Account Info",
      icon: User,
      onClick: () => console.log("Account Info clicked")
    },
    {
      title: "Settings", 
      icon: Settings,
      onClick: () => console.log("Settings clicked")
    },
    {
      title: "Logout",
      icon: LogOut,
      onClick: () => console.log("Logout clicked")
    }
  ]