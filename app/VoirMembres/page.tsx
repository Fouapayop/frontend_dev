"use client";

import { useState } from "react";
import Link from "next/link";
import { Pencil, Plus, Search, Trash2, UserRound } from "lucide-react";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import PageHeader from "@/components/PageHeader";
import { demoMembers, type MemberRecord } from "@/lib/members";

// --- Types et données factices ---
const levels = ["Moyen", "Élevé", "Basse"] as const;
type Level = (typeof levels)[number];
type Item = MemberRecord;

export default function ItemListPage() {
  const [items, setItems] = useState<Item[]>(demoMembers);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<Level | "Tous">("Tous");
  const [editDraft, setEditDraft] = useState<Item | null>(null);
  const [deletingItem, setDeletingItem] = useState<Item | null>(null);

  // Recherche par texte et filtre par niveau.
  const filteredItems = items.filter(
    (item) =>
      (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedLevel === "Tous" || item.level === selectedLevel)
  );

  // 2. Logique de mise à jour
  const handleUpdate = (updatedItem: Item) => {
    setItems((prev) => prev.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
    setEditDraft(null);
    toast.success("Élément mis à jour avec succès.");
  };

  const startEditing = (item: Item) => {
    setEditDraft({ ...item });
  };

  const cancelEditing = () => {
    setEditDraft(null);
  };

  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    setDeletingItem(null);
    toast.success("Élément supprimé avec succès.");
  };

  return (
    <main className="mx-auto w-full max-w-7xl space-y-6 px-4 py-8 sm:px-6 lg:px-8">
      <PageHeader
        title="Membres"
        description="Recherchez, filtrez et mettez à jour les informations des membres."
        icon={UserRound}
        action={
          <Button nativeButton={false} render={<Link href="/creerMembre" />}>
            <Plus className="mr-2 size-4" aria-hidden="true" />
            Ajouter un membre
          </Button>
        }
      />
      <div className="flex flex-col gap-4 rounded-2xl border bg-card p-4 shadow-sm sm:flex-row sm:items-center">
        <div className="relative w-full sm:max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Rechercher un membre..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
        <label className="sr-only" htmlFor="level-filter">Filtrer par niveau</label>
        <select
          id="level-filter"
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value as Level | "Tous")}
          className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm sm:w-44"
        >
          <option value="Tous">Tous les niveaux</option>
          {levels.map((level) => (
            <option key={level} value={level}>{level}</option>
          ))}
        </select>
        <p className="text-sm text-muted-foreground sm:ml-auto">
          {filteredItems.length} membre{filteredItems.length === 1 ? "" : "s"}
        </p>
      </div>

      {/* Tableau */}
      <div className="w-full rounded-2xl border bg-card p-3 shadow-sm sm:p-4">
        <Table className="w-full table-fixed">
          <TableHeader>
            <TableRow>
              <TableHead className="px-2 py-3 sm:px-4">Nom</TableHead>
              <TableHead className="px-2 py-3 sm:px-4">Prénom</TableHead>
              <TableHead className="px-2 py-3 sm:px-4">Email</TableHead>
              <TableHead className="px-2 py-3 sm:px-4">Niveau</TableHead>
              <TableHead className="px-2 py-3 text-right sm:px-4">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredItems.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center h-24 text-muted-foreground">
                  Aucun résultat.
                </TableCell>
              </TableRow>
            ) : (
              filteredItems.map((item) => (
                <TableRow key={item.id}>
                  {editDraft?.id === item.id ? (
                    <>
                      <TableCell className="px-2 py-3 sm:px-4">
                        <Input
                          value={editDraft.name}
                          onChange={(e) => setEditDraft({ ...editDraft, name: e.target.value })}
                          aria-label="Nom"
                          className="w-full min-w-0"
                        />
                      </TableCell>
                      <TableCell className="px-2 py-3 sm:px-4">
                        <Input
                          value={editDraft.prenom}
                          onChange={(e) => setEditDraft({ ...editDraft, prenom: e.target.value })}
                          aria-label="Prénom"
                          className="w-full min-w-0"
                        />
                      </TableCell>
                      <TableCell className="px-2 py-3 sm:px-4">
                        <Input
                          value={editDraft.email}
                          onChange={(e) => setEditDraft({ ...editDraft, email: e.target.value })}
                          aria-label="Email"
                          className="w-full min-w-0"
                        />
                      </TableCell>
                      <TableCell className="px-2 py-3 sm:px-4">
                        <select
                          value={editDraft.level}
                          onChange={(e) => setEditDraft({ ...editDraft, level: e.target.value as Level })}
                          aria-label="Niveau"
                          className="h-9 w-full min-w-0 rounded-md border border-input bg-background px-2 text-sm"
                        >
                          {levels.map((level) => (
                            <option key={level} value={level}>{level}</option>
                          ))}
                        </select>
                      </TableCell>
                      <TableCell className="px-2 py-3 sm:px-4">
                        <div className="flex flex-wrap justify-end gap-2">
                          <Button
                            type="button"
                            size="sm"
                            className="h-auto min-w-0 whitespace-normal px-2 py-1 text-xs"
                            onClick={() => handleUpdate(editDraft)}
                          >
                            Enregistrer
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="h-auto min-w-0 whitespace-normal px-2 py-1 text-xs"
                            onClick={cancelEditing}
                          >
                            Annuler
                          </Button>
                        </div>
                      </TableCell>
                    </>
                  ) : (
                    <>
                      <TableCell className="px-2 py-3 font-medium sm:px-4">{item.name}</TableCell>
                      <TableCell className="px-2 py-3 sm:px-4">{item.prenom}</TableCell>
                      <TableCell className="break-all px-2 py-3 sm:px-4">{item.email}</TableCell>
                      <TableCell className="px-2 py-3 sm:px-4">{item.level}</TableCell>
                      <TableCell className="px-2 py-3 text-right sm:px-4">
                        <DropdownMenu>
                          <DropdownMenuTrigger
                            render={
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Ouvrir le menu</span>
                                <span className="h-4 w-4 text-xl leading-none">⋯</span>
                              </Button>
                            }
                          />
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => startEditing(item)}>
                              <Pencil className="mr-2 h-4 w-4" /> Modifier
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => setDeletingItem(item)}
                              className="text-destructive focus:text-destructive"
                            >
                              <Trash2 className="mr-2 h-4 w-4" /> Supprimer
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </>
                  )}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {deletingItem && (
        <AlertDialog open onOpenChange={(open) => !open && setDeletingItem(null)}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Êtes-vous sûr ?</AlertDialogTitle>
              <AlertDialogDescription>
                Cette action est irréversible. L&apos;élément « {deletingItem.name} » sera définitivement supprimé.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Annuler</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => handleDelete(deletingItem.id)}
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              >
                Supprimer
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </main>
  );
}