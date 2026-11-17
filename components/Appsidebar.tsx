
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Home, Inbox, Plus, Projector, User2 } from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupAction,
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
        href: "/",
        icon: Home,

    },
    {
        title: "Creer membre",
        href: "#",
        icon: Inbox,

    },
    {
        title: "Voir les membres",
        href: "",
        icon: Home,

    },
    {
        title: "Voir Membres Assemblée",
        href: "#",
        icon: Home,

    },
    {
        title: "Creer Assemblée",
        href: "#",
        icon: Home,

    },
    {
        title: "Mettre a jour Assemblée",
        href: "#",
        icon: Home,

    },
    {
        title: "Creer un compte",
        href: "#",
        icon: Home,

    }
]

const Appsidebar = () =>{
    return (<Sidebar collapsible="icon">
        <div className="flex h-full min-h-0 flex-col">
        <SidebarHeader className="shrink-0 px-3 py-4">
            <SidebarMenu>
                <SidebarMenuItem >
                    <SidebarMenuButton className="h-auto gap-3 rounded-xl px-2 py-2 text-left">
                        <Image className="size-9 shrink-0 rounded-xl object-cover" src="https://avatars.githubusercontent.com/u/1486366?v=4" width={36} height={36} alt="Avatar de Yomie fouapa" />
                        <span className="flex min-w-0 flex-col items-start gap-0.5">
                            <span className="max-w-full truncate text-sm font-semibold">Yomie fouapa</span>
                            <span className="text-xs text-sidebar-foreground/60">Gestionnaire</span>
                        </span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
        <SidebarSeparator className="mx-0 w-full shrink-0" />
        <SidebarContent className="min-h-0 flex-1 gap-1 overflow-y-auto overscroll-contain px-1 py-2">
            <SidebarGroup className="py-1">
                <SidebarGroupLabel className="px-3 text-[11px] font-semibold uppercase tracking-wider text-sidebar-foreground/50">Tableau de bord</SidebarGroupLabel>
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
                <SidebarGroupLabel className="px-3 text-[11px] font-semibold uppercase tracking-wider text-sidebar-foreground/50">Projets</SidebarGroupLabel>
                 <SidebarGroupAction className="right-3 top-2.5 rounded-md">
                    <Plus /> <span className="sr-only">Add Project</span>
                 </SidebarGroupAction>
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