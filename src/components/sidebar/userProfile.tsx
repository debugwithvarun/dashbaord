import { useState } from "react"
import { ChevronUp, User, LogOut, Settings } from "lucide-react"
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../../components/ui/sidebar"

const userMenuItems = [
  {
    title: "Account Info",
    icon: User,
    onClick: () => console.log("Account Info clicked"),
  },
  {
    title: "Settings",
    icon: Settings,
    onClick: () => console.log("Settings clicked"),
  },
  {
    title: "Logout",
    icon: LogOut,
    onClick: () => console.log("Logout clicked"),
  },
]

const userData = {
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: null, // Replace null with avatar URL if available
  initials: "JD",
}

export default function UserProfileMenu() {
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"
  const [showUserMenu, setShowUserMenu] = useState(false)

  const handleUserMenuToggle = () => {
    if (!isCollapsed) {
      setShowUserMenu(!showUserMenu)
    }
  }

  const handleMouseEnter = () => {
    if (!isCollapsed) {
      setShowUserMenu(true)
    }
  }

  const handleMouseLeave = () => { 
    if (!isCollapsed) {
      setShowUserMenu(false)
    }
  }

  return (
    <SidebarFooter className="p-2">
      <div className="relative">
        <SidebarMenu>
          <SidebarMenuItem>
            {isCollapsed ? (
              // Collapsed: avatar only with tooltip
              <SidebarMenuButton
                size="lg"
                tooltip={`${userData.name} - ${userData.email}`}
                className="w-full justify-center p-2"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  {userData.avatar ? (
                    <img
                      src={userData.avatar}
                      alt={userData.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <span>{userData.initials}</span>
                  )}
                </div>
              </SidebarMenuButton>
            ) : (
              // Expanded: full info with dropdown
              <SidebarMenuButton
                size="lg"
                onClick={handleUserMenuToggle}
                onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseLeave}
                className="w-full justify-start data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-medium shrink-0">
                  {userData.avatar ? (
                    <img
                      src={userData.avatar}
                      alt={userData.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <span>{userData.initials}</span>
                  )}
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight min-w-0">
                  <span className="truncate font-semibold">{userData.name}</span>
                  <span className="truncate text-xs text-muted-foreground">
                    {userData.email}
                  </span>
                </div>
                <ChevronUp
                  className={`ml-auto h-4 w-4 shrink-0 transition-transform duration-200 ${
                    showUserMenu ? "rotate-180" : ""
                  }`}
                />
              </SidebarMenuButton>
            )}
          </SidebarMenuItem>
        </SidebarMenu>

        {showUserMenu && !isCollapsed && (
          <div
            className="absolute bottom-full left-0 right-0 mb-2 bg-popover border border-border rounded-md shadow-lg z-50 animate-in fade-in-0 zoom-in-95"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="p-1">
              {userMenuItems.map((menuItem, index) => (
                <button
                  key={index}
                  onClick={() => {
                    menuItem.onClick()
                    setShowUserMenu(false)
                  }}
                  className="flex w-full items-center gap-3 rounded-sm px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors duration-150"
                >
                  <menuItem.icon className="h-4 w-4 shrink-0" />
                  <span className="truncate">{menuItem.title}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </SidebarFooter>
  )
}
