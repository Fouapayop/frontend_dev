import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  CircleDollarSign,
  Users,
  Wallet,
} from "lucide-react";

import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import StatCard from "@/components/StatCard";

export default function DashboardOverview({ readOnly = false }: { readOnly?: boolean }) {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
      <PageHeader
        title="Vue d’ensemble"
        description="Retrouvez en un coup d’œil les indicateurs et l’activité de votre communauté."
        icon={CalendarDays}
        action={
          readOnly ? undefined : (
            <Button nativeButton={false} render={<Link href="/ConsulterFinance" />}>
              Consulter les finances
            </Button>
          )
        }
      />

      <p className="mb-4 text-xs text-muted-foreground">
        Indicateurs de démonstration — à relier aux données réelles.
      </p>
      <section aria-label="Indicateurs" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard name="Membres inscrits" icon={Users} value="2 500" />
        <StatCard name="Assemblées" icon={CalendarDays} value="24" />
        <StatCard name="Fonds collectés" icon={CircleDollarSign} value="1 250 000 FCFA" />
        <StatCard name="Versements ce mois" icon={Wallet} value="186" />
      </section>

      <section className={`mt-6 grid gap-4 ${readOnly ? "" : "xl:grid-cols-[1.5fr_1fr]"}`}>
        {!readOnly && (
          <div className="rounded-2xl border bg-card p-5 shadow-sm sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-base font-semibold">Activité financière</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Aperçu indicatif des collectes sur les six derniers mois
                </p>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                <ArrowUpRight className="mr-1 inline size-3.5" aria-hidden="true" />
                En progression
              </span>
            </div>
            <div className="mt-7 flex h-48 items-end gap-3 sm:gap-5" aria-label="Graphique indicatif des collectes">
              {[42, 58, 46, 74, 62, 90].map((height, index) => (
                <div key={index} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                  <div
                    className="w-full max-w-14 rounded-t-lg bg-primary/80 transition-all hover:bg-primary"
                    style={{ height: `${height}%` }}
                    title={`Mois ${index + 1}`}
                  />
                  <span className="text-xs text-muted-foreground">
                    {["Juin", "Juil.", "Août", "Sept.", "Oct.", "Nov."][index]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {!readOnly && (
          <div className="rounded-2xl border bg-card p-5 shadow-sm sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-base font-semibold">Actions rapides</h2>
                <p className="mt-1 text-sm text-muted-foreground">Accédez aux tâches courantes</p>
              </div>
              <ArrowDownRight className="size-5 text-muted-foreground" aria-hidden="true" />
            </div>
            <div className="mt-5 grid gap-3">
              <Button nativeButton={false} variant="outline" className="h-auto justify-start gap-3 rounded-xl p-4" render={<Link href="/creerMembre" />}>
                <Users className="size-4 text-primary" aria-hidden="true" />
                <span className="text-left">
                  <span className="block font-medium">Ajouter un membre</span>
                  <span className="mt-1 block text-xs font-normal text-muted-foreground">Enregistrer un nouveau membre</span>
                </span>
              </Button>
              <Button nativeButton={false} variant="outline" className="h-auto justify-start gap-3 rounded-xl p-4" render={<Link href="/EnregistrerFinances" />}>
                <CircleDollarSign className="size-4 text-primary" aria-hidden="true" />
                <span className="text-left">
                  <span className="block font-medium">Saisir un versement</span>
                  <span className="mt-1 block text-xs font-normal text-muted-foreground">Enregistrer une collecte</span>
                </span>
              </Button>
              <Button nativeButton={false} variant="outline" className="h-auto justify-start gap-3 rounded-xl p-4" render={<Link href="/voirAssemblees" />}>
                <CalendarDays className="size-4 text-primary" aria-hidden="true" />
                <span className="text-left">
                  <span className="block font-medium">Voir les assemblées</span>
                  <span className="mt-1 block text-xs font-normal text-muted-foreground">Consulter les groupes existants</span>
                </span>
              </Button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
