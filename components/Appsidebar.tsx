
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Home, Inbox, Plus, Projector, User2 } from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator,
} from "@/components/ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";


const items = [
    {
        title: "Acceuil",
        href: "/acceuil",
        icon: Home,

    },
    {
        title: "Créer Assemblée",
        href: "/creerAssem",
        icon: Inbox,

    },
    {
        title: "Voir Assemblées",
        href: "/voirAssemblees",
        icon: Home,

    },
   
    
]
const items2 = [
    {
        title: "Voir  Membres",
        href: "/VoirMembres",
        icon: Home,

    },
    {
        title: "Créer un Membre",
        href: "/creerMembre",
        icon: Home,
    },
    
]
const items3 = [
    {
        title: "Consulter les D&O",
        href: "/ConsulterFinance",
        icon: Inbox,

    },
    {
        title: "Voir Assemblée(s) avec impayés",
        href: "/",
        icon: Home,

    },
    
]

const Appsidebar = ({ readOnly = false }: { readOnly?: boolean }) =>{
    return (<Sidebar collapsible="icon">
        <div className="flex h-full min-h-0 flex-col">
        <SidebarHeader className="shrink-0 px-3 py-4">
            <SidebarMenu>
                <SidebarMenuItem >
                    <SidebarMenuButton className="h-auto gap-3 rounded-xl px-2 py-2 text-left">
                        <Image className="size-9 shrink-0 rounded-xl object-cover" src="https://avatars.githubusercontent.com/u/1486366?v=4" width={36} height={36} alt="Avatar de Yomie fouapa" />
                        <span className="flex min-w-0 flex-col items-start gap-0.5">
                            <span className="max-w-full truncate text-sm font-semibold">Yomie fouapa</span>
                            <span className="text-xs text-sidebar-foreground/60">{readOnly ? "Consultation" : "Administration"}</span>
                        </span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
        <SidebarSeparator className="mx-0 w-full shrink-0" />
        <SidebarContent className="min-h-0 flex-1 gap-1 overflow-y-auto overscroll-contain px-1 py-2">
            {readOnly ? (
                <SidebarGroup className="py-1">
                    <SidebarGroupLabel className="px-3 text-[11px] font-semibold uppercase tracking-wider text-sidebar-foreground/50">Consultation</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-1 px-1">
                            <SidebarMenuItem title="Tableau de bord">
                                <SidebarMenuButton className="h-9 rounded-lg text-sm" render={<Link href="/utilisateurDashb" />}>
                                    <Home />
                                    <span>Tableau de bord</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            ) : (
                <>
            <SidebarGroup className="py-1">
                <SidebarGroupLabel className="px-3 text-[11px] font-semibold uppercase tracking-wider text-sidebar-foreground/50">Gestion Assemblées</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu className="gap-1 px-1">
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title} title={item.title}>
                            <SidebarMenuButton className="h-9 rounded-lg text-sm" render={<Link href={item.href} />}>
                                <item.icon />
                                <span>{item.title}</span>
                                
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                    ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup className="py-1">
                <SidebarGroupLabel className="px-3 text-[11px] font-semibold uppercase tracking-wider text-sidebar-foreground/50">Gestion Membres</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu className="gap-1 px-1">
                    {items2.map((item) => (
                        <SidebarMenuItem key={item.title} title={item.title}>
                            <SidebarMenuButton className="h-9 rounded-lg text-sm" render={<Link href={item.href} />}>
                                <item.icon />
                                <span>{item.title}</span>
                                
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                    ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup className="py-1">
                <SidebarGroupLabel className="px-3 text-[11px] font-semibold uppercase tracking-wider text-sidebar-foreground/50">Gestion Finances</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu className="gap-1 px-1">
                    {items3.map((item) => (
                        <SidebarMenuItem key={item.title} title={item.title}>
                            <SidebarMenuButton className="h-9 rounded-lg text-sm" render={<Link href={item.href} />}>
                                <item.icon />
                                <span>{item.title}</span>
                                
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                    ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
           
            <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup className="py-1">
                 <SidebarGroupLabel className="px-3 text-[11px] font-semibold uppercase tracking-wider text-sidebar-foreground/50" render={<CollapsibleTrigger />}>
                    Help
                    <ChevronDown className="ml-auto transition-transform group-data-open/collapsible:rotate-180" />
                 </SidebarGroupLabel>
            
                 <CollapsibleContent>
                 <SidebarGroupContent>
                    <SidebarMenu className="gap-1 px-1">
                        <SidebarMenuItem>
                            <SidebarMenuButton className="h-9 rounded-lg text-sm" render={<Link href="/#" />}>
                            <Projector />
                            <span>Voir tous les projets</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton className="h-9 rounded-lg text-sm" render={<Link href="/#" />}>
                            <Plus />
                            <span>Ajouter projet</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                 </SidebarGroupContent>
                 </CollapsibleContent>
            </SidebarGroup>
            </Collapsible>
                </>
            )}
        </SidebarContent>
                   

        <SidebarFooter className="mt-auto shrink-0 border-t border-sidebar-border px-3 py-3">
            <SidebarMenu>
                <SidebarMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger render={<SidebarMenuButton className="h-10 rounded-xl px-3 text-sm" />}>
                        <User2 className="size-4" /> <span className="truncate">Yomie fouapa</span> <ChevronDown className="ml-auto size-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="min-w-48 rounded-xl">
                            <DropdownMenuItem>Compte</DropdownMenuItem>
                            <DropdownMenuItem>Parametres</DropdownMenuItem>
                            <DropdownMenuItem>Déconnexion</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
        </div>

    </Sidebar>
    )
}

export default Appsidebar