
import type { LucideIcon } from "lucide-react";

type StatCardProps = {
    name: string;
    icon: LucideIcon;
    value: string;
};

const StatCard = ({ name, icon: Icon, value }: StatCardProps) => {
    return (
        <div className="group rounded-2xl border bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-6">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-sm font-medium text-muted-foreground">{name}</p>
                    <p className="mt-3 text-3xl font-semibold tracking-tight">{value}</p>
                </div>
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon size={20} aria-hidden="true" />
                </span>
            </div>
        </div>
    )
}

export default StatCard;