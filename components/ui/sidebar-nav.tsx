"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Store } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

interface SidebarNavProps {
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
  items: {
    title: string
    icon: any
    href: string
    items?: {
      title: string
      href: string
    }[]
  }[]
}

export function SidebarNav({ isOpen, onOpenChange, items }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <SidebarProvider open={isOpen} onOpenChange={onOpenChange}>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center space-x-2 px-3 py-2">
            <div className="h-6 w-6 rounded bg-primary flex items-center justify-center">
              <Store className="h-3 w-3 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Tilla</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {items.map((item, index) => {
              if (item.items && item.items.length > 0) {
                return (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                    <SidebarMenuSub>
                      {item.items.map((subItem, subIndex) => (
                        <SidebarMenuSubItem key={subIndex}>
                          <SidebarMenuSubButton asChild isActive={pathname === subItem.href}>
                            <Link href={subItem.href}>
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </SidebarMenuItem>
                )
              }

              return (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link href={item.href}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="p-3 border-t border-sidebar-border">
          <div className="flex items-center text-xs text-sidebar-foreground">
            <span>© 2025 Tilla POS</span>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarTrigger />
    </SidebarProvider>
  )
}
