import { Link, useLocation } from "react-router-dom"
import { Moon, Sun } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar
} from "../components/ui/sidebar"
import { items } from "../menudata/SidebarMenuItem"
import UserProfileMenu from "./userProfile"
import { useTheme } from "../hooks/useTheme"

export function AppSidebar() {
    const location = useLocation()
    const { state } = useSidebar()
    const { theme, toggleTheme } = useTheme()
    const isCollapsed = state === "collapsed"

    return (
        <Sidebar variant="sidebar" collapsible="icon">
            <SidebarContent>
                {/* Header with TradyLytics branding */}
                <SidebarGroup>
                    <SidebarGroupContent className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-2'} text-lg font-bold px-2`}>
                        <div className={`flex items-center justify-center w-6 h-6 rounded-lg shrink-0`}>
                            <img
                                src={theme === 'dark' ? 'logo.png' : 'blacklogo.png'}
                                alt="TradyLytics"
                                className="w-full h-full object-contain flex justify-center items-center"
                            />
                        </div>
                        {!isCollapsed && (
                            <span className="text-foreground">TradyLytics</span>
                        )}
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Navigation Menu */}
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={location.pathname === item.url}
                                        tooltip={isCollapsed ? item.title : undefined}
                                        className="w-full justify-start"
                                    >
                                        <Link to={item.url} className="flex items-center gap-3">
                                            <item.icon className="h-5 w-5 shrink-0"/>
                                            {!isCollapsed && (
                                                <span className="truncate">{item.title}</span>
                                            )}
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            {/* Theme Toggle Button */}
            <div className="mt-auto border-t border-sidebar-border">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    onClick={toggleTheme}
                                    tooltip={isCollapsed ? (theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode') : undefined}
                                    className="w-full justify-start"
                                >
                                    <div className="flex items-center gap-3">
                                        {theme === 'dark' ? (
                                            <Sun className="h-5 w-5 shrink-0" />
                                        ) : (
                                            <Moon className="h-5 w-5 shrink-0" />
                                        )}
                                        {!isCollapsed && (
                                            <span className="truncate">
                                                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                                            </span>
                                        )}
                                    </div>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </div>

            <UserProfileMenu />
        </Sidebar>
    )
}
