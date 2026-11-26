"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CalendarDays, MapPin, Plus, Search, Users } from "lucide-react";

import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type Assembly = {
  id: string;
  name: string;
  location: string;
  members: number;
  meetingDay: string;
  status: "Active" | "En préparation";
};

const assemblies: Assembly[] = [
  { id: "A-001", name: "Assemblée Centre-ville", location: "Dschang, Centre-ville", members: 84, meetingDay: "Dimanche", status: "Active" },
  { id: "A-002", name: "Assemblée du Nord", location: "Dschang, Foto", members: 62, meetingDay: "Dimanche", status: "Active" },
  { id: "A-003", name: "Assemblée du Sud", location: "Dschang, Sud", members: 47, meetingDay: "Samedi", status: "Active" },
  { id: "A-004", name: "Assemblée de la Gare", location: "Dschang, Gare", members: 31, meetingDay: "Dimanche", status: "En préparation" },
];

export default function VoirAssembleesPage() {
  const [query, setQuery] = useState("");

  const filteredAssemblies = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("fr");
    if (!normalizedQuery) return assemblies;
    return assemblies.filter((assembly) =>
      [assembly.name, assembly.location, assembly.meetingDay]
        .some((value) => value.toLocaleLowerCase("fr").includes(normalizedQuery))
    );
  }, [query]);

  const totalMembers = assemblies.reduce((sum, assembly) => sum + assembly.members, 0);

  return (
    <main className="mx-auto w-full max-w-7xl space-y-6 px-4 py-8 sm:px-6 lg:px-8">
      <PageHeader
        title="Assemblées"
        description="Retrouvez les assemblées, leurs lieux de rencontre et leurs effectifs."
        icon={CalendarDays}
        action={
          <Button nativeButton={false} render={<Link href="/creerAssem" />}>
            <Plus className="mr-2 size-4" aria-hidden="true" />
            Nouvelle assemblée
          </Button>
        }
      />

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="flex items-center gap-4 rounded-2xl border bg-card p-5 shadow-sm">
          <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <CalendarDays className="size-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm text-muted-foreground">Assemblées répertoriées</p>
            <p className="mt-1 text-2xl font-semibold">{assemblies.length}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-2xl border bg-card p-5 shadow-sm">
          <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Users className="size-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm text-muted-foreground">Membres associés</p>
            <p className="mt-1 text-2xl font-semibold">{totalMembers}</p>
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-2xl border bg-card shadow-sm">
        <div className="flex flex-col gap-4 border-b p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div>
            <h2 className="font-semibold">Toutes les assemblées</h2>
            <p className="mt-1 text-sm text-muted-foreground">Informations de démonstration à remplacer par vos données.</p>
          </div>
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Rechercher une assemblée..."
              className="pl-9"
              aria-label="Rechercher une assemblée"
            />
          </div>
        </div>
        <Table className="w-full table-fixed">
          <TableHeader>
            <TableRow>
              <TableHead className="px-3 py-3 sm:px-5">Assemblée</TableHead>
              <TableHead className="hidden px-3 py-3 sm:table-cell sm:px-5">Lieu</TableHead>
              <TableHead className="px-3 py-3 text-center sm:px-5">Membres</TableHead>
              <TableHead className="hidden px-3 py-3 md:table-cell md:px-5">Rencontre</TableHead>
              <TableHead className="px-3 py-3 text-right sm:px-5">Statut</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAssemblies.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="h-28 text-center text-muted-foreground">
                  Aucune assemblée ne correspond à cette recherche.
                </TableCell>
              </TableRow>
            ) : filteredAssemblies.map((assembly) => (
              <TableRow key={assembly.id}>
                <TableCell className="px-3 py-4 sm:px-5">
                  <span className="block truncate font-medium">{assembly.name}</span>
                  <span className="mt-1 block text-xs text-muted-foreground">{assembly.id}</span>
                </TableCell>
                <TableCell className="hidden px-3 py-4 sm:table-cell sm:px-5">
                  <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                    <MapPin className="size-3.5" aria-hidden="true" />
                    {assembly.location}
                  </span>
                </TableCell>
                <TableCell className="px-3 py-4 text-center font-medium tabular-nums sm:px-5">{assembly.members}</TableCell>
                <TableCell className="hidden px-3 py-4 text-muted-foreground md:table-cell md:px-5">{assembly.meetingDay}</TableCell>
                <TableCell className="px-3 py-4 text-right sm:px-5">
                  <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${assembly.status === "Active" ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "bg-amber-500/10 text-amber-700 dark:text-amber-400"}`}>
                    {assembly.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </main>
  );
}
