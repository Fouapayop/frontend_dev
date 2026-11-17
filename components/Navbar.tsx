"use client"

import Link from "next/link";
import { LogOut, Moon, Settings, Sun, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui//avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

const Navbar = () =>{
    const {setTheme} = useTheme();
    const {toggleSidebar} = useSidebar();
    return(
        <nav className="p-4 flex items-center justify-between">
            {/*GAUCHE */}
            <SidebarTrigger />
            {/*<Button variant="outline" onClick={toggleSidebar}>Ouvrir/Fermer</Button>*/}
            {/*RIGTH */}
            <div className="flex items-center gap-4">
                <Link href="/">Dashboard</Link>
                {/*theme menu */}
        
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" size="icon" />}>
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
                {/*User menu */}
                <DropdownMenu>
                   <DropdownMenuTrigger >
                          <Avatar>
                           <AvatarImage src="https://avatars.githubusercontent.com/u/1486366" />
                           <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                   </DropdownMenuTrigger>
                  <DropdownMenuContent sideOffset={10}>
                   <DropdownMenuGroup>
                   <DropdownMenuLabel>Mon Compte</DropdownMenuLabel>
                   <DropdownMenuItem>
                    <User className="h-[1.2rem] w-[1.2rem] mr-2" />
                    Profile
                    </DropdownMenuItem>
                   <DropdownMenuItem>
                    <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
                    Parametres
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                 <DropdownMenuItem variant="destructive">
                    <LogOut className="h-[1.2rem] w-[1.2rem] mr-2"/>
                    Se deconnecter
                 </DropdownMenuItem>
             </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            </div>
        </nav>
    )
}

export default Navbar