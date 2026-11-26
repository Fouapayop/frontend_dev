"use client";

import { useMemo, useState } from "react";
import { ArrowDownToLine, CircleDollarSign, Search, Wallet } from "lucide-react";

import PageHeader from "@/components/PageHeader";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type MemberContribution = {
  id: string;
  member: string;
  assembly: string;
  date: string;
  dimes: number;
  fmi: number;
  fml: number;
};

const contributions: MemberContribution[] = [
  { id: "V-1048", member: "Aline Tchana", assembly: "Centre-ville", date: "2026-11-18", dimes: 25000, fmi: 5000, fml: 3000 },
  { id: "V-1047", member: "Marc Nguemo", assembly: "Nord", date: "2026-11-17", dimes: 20000, fmi: 15000, fml: 5000 },
  { id: "V-1046", member: "Esther Fopa", assembly: "Centre-ville", date: "2026-11-16", dimes: 18000, fmi: 7000, fml: 10000 },
  { id: "V-1045", member: "Pauline Talla", assembly: "Sud", date: "2026-11-15", dimes: 30000, fmi: 12000, fml: 6000 },
  { id: "V-1044", member: "David Kemajou", assembly: "Nord", date: "2026-11-13", dimes: 22000, fmi: 20000, fml: 8000 },
  { id: "V-1043", member: "Sarah Nono", assembly: "Centre-ville", date: "2026-11-12", dimes: 18000, fmi: 4000, fml: 6000 },
];

const formatAmount = (amount: number) =>
  new Intl.NumberFormat("fr-FR").format(amount);

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short", year: "numeric" }).format(new Date(`${date}T00:00:00`));

export default function ConsulterFinancePage() {
  const [query, setQuery] = useState("");

  const filteredContributions = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("fr");
    if (!normalizedQuery) return contributions;

    return contributions.filter((contribution) =>
      [contribution.id, contribution.member, contribution.assembly]
        .some((value) => value.toLocaleLowerCase("fr").includes(normalizedQuery))
    );
  }, [query]);

  const total = contributions.reduce(
    (sum, contribution) => sum + contribution.dimes + contribution.fmi + contribution.fml,
    0
  );

  return (
    <main className="mx-auto w-full max-w-7xl space-y-6 px-4 py-8 sm:px-6 lg:px-8">
      <PageHeader
        title="Suivi des finances"
        description="Consultez les versements enregistrés et suivez les contributions de vos assemblées."
        icon={CircleDollarSign}
      />

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-muted-foreground">Total des versements affichés</p>
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Wallet className="size-5" aria-hidden="true" />
            </span>
          </div>
          <p className="mt-4 text-2xl font-semibold tracking-tight">{formatAmount(total)} <span className="text-sm font-medium text-muted-foreground">FCFA</span></p>
        </div>
        <div className="rounded-2xl border bg-card p-5 shadow-sm">
          <p className="text-sm font-medium text-muted-foreground">Membres affichés</p>
          <p className="mt-4 text-2xl font-semibold tracking-tight">{contributions.length}</p>
          <p className="mt-1 text-xs text-muted-foreground">Chaque personne a ses montants par groupe</p>
        </div>
      </section>

      <section className="overflow-hidden rounded-2xl border bg-card shadow-sm">
        <div className="flex flex-col gap-4 border-b p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div>
            <h2 className="font-semibold">Dîmes et offrandes par membre</h2>
            <p className="mt-1 text-sm text-muted-foreground">Les données affichées sont des exemples de présentation.</p>
          </div>
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Rechercher un membre..."
              className="pl-9"
              aria-label="Rechercher un membre"
            />
          </div>
        </div>
        <Table className="w-full table-fixed">
          <TableHeader>
            <TableRow>
              <TableHead rowSpan={2} className="px-2 py-3 sm:px-5">Membre</TableHead>
              <TableHead rowSpan={2} className="hidden px-2 py-3 sm:table-cell sm:px-5">Assemblée</TableHead>
              <TableHead rowSpan={2} className="px-2 py-3 text-right sm:px-5">Dîmes</TableHead>
              <TableHead colSpan={2} className="border-x border-primary/15 bg-primary/5 px-2 py-3 text-center font-semibold text-primary sm:px-5">
                Offrandes
              </TableHead>
              <TableHead rowSpan={2} className="hidden px-2 py-3 sm:table-cell sm:px-5">Date</TableHead>
            </TableRow>
            <TableRow className="bg-primary/[0.03]">
              <TableHead className="border-l border-primary/15 px-2 py-2 text-right text-xs sm:px-5">FMI</TableHead>
              <TableHead className="border-r border-primary/15 px-2 py-2 text-right text-xs sm:px-5">FML</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredContributions.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-28 text-center text-muted-foreground">
                  Aucun membre ne correspond à cette recherche.
                </TableCell>
              </TableRow>
            ) : filteredContributions.map((contribution) => (
              <TableRow key={contribution.id}>
                <TableCell className="px-3 py-4 sm:px-5">
                  <span className="block truncate font-medium">{contribution.member}</span>
                  <span className="mt-1 block text-xs text-muted-foreground">{contribution.id}</span>
                </TableCell>
                <TableCell className="hidden px-3 py-4 text-muted-foreground sm:table-cell sm:px-5">{contribution.assembly}</TableCell>
                <TableCell className="px-2 py-4 text-right font-semibold tabular-nums sm:px-5">
                  {formatAmount(contribution.dimes)}
                  <span className="ml-1 text-[10px] font-normal text-muted-foreground sm:text-xs">FCFA</span>
                </TableCell>
                <TableCell className="border-l border-primary/10 bg-primary/[0.02] px-2 py-4 text-right tabular-nums sm:px-5">
                  {formatAmount(contribution.fmi)}
                  <span className="ml-1 text-[10px] text-muted-foreground sm:text-xs">FCFA</span>
                </TableCell>
                <TableCell className="border-r border-primary/10 bg-primary/[0.02] px-2 py-4 text-right tabular-nums sm:px-5">
                  {formatAmount(contribution.fml)}
                  <span className="ml-1 text-[10px] text-muted-foreground sm:text-xs">FCFA</span>
                </TableCell>
                <TableCell className="hidden px-3 py-4 text-muted-foreground sm:table-cell sm:px-5">{formatDate(contribution.date)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center gap-2 border-t px-4 py-3 text-xs text-muted-foreground sm:px-5">
          <ArrowDownToLine className="size-4" aria-hidden="true" />
          Les montants sont présentés à titre d’exemple.
        </div>
      </section>
    </main>
  );
}
