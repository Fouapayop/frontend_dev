"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
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
import { SidebarTrigger } from "@/components/ui/sidebar";

const Navbar = () =>{
    const {setTheme} = useTheme();
    const pathname = usePathname();
    const dashboardHref = pathname === "/utilisateurDashb"
        ? "/utilisateurDashb"
        : pathname === "/acceuil" ? "/acceuil" : "/dashboard";
    const pageTitle: Record<string, string> = {
        "/acceuil": "Accueil",
        "/dashboard": "Tableau de bord",
        "/utilisateurDashb": "Espace consultation",
        "/creerAssem": "Créer une assemblée",
        "/voirAssemblees": "Assemblées",
        "/VoirMembres": "Membres",
        "/creerMembre": "Ajouter un membre",
        "/ConsulterFinance": "Suivi des finances",
        "/EnregistrerFinances": "Enregistrer un versement",
    };
    return(
        <nav className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background/85 px-4 backdrop-blur-xl sm:px-6">
            <div className="flex items-center gap-3">
                <SidebarTrigger />
                <span className="hidden items-center gap-1 text-sm font-medium text-muted-foreground sm:inline-flex">
                    Gestion Finance <span className="px-1 text-border">/</span>
                    <Link href={dashboardHref} className="transition-colors hover:text-primary">
                        {pathname === "/utilisateurDashb"
                            ? "Espace consultation"
                            : pathname === "/dashboard" ? "Tableau de bord" : "Accueil"}
                    </Link>
                    {pathname !== dashboardHref && (
                        <>
                            <span className="px-1 text-border">/</span>
                            <span className="text-foreground">{pageTitle[pathname] ?? "Tableau de bord"}</span>
                        </>
                    )}
                </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
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