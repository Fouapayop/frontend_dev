
import Link from "next/link";
import { Calendar, Home, Inbox, Search } from "lucide-react";
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
} from "@/components/ui/sidebar";


const items = [
    {
        title: "Aceuil",
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
    return (<Sidebar>
        <SidebarHeader>
            
        </SidebarHeader>
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel>Tableau de bord</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title} title={item.title}>
                            <SidebarMenuButton render={<Link href={item.href} />}>
                                <item.icon />
                                <span>{item.title}</span>
                                
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                    ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
        
        <SidebarFooter>
            
        </SidebarFooter>

    </Sidebar>
    )
}

export default Appsidebar