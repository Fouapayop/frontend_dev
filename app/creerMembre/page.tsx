"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { UserRoundPlus } from "lucide-react";

import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { memberSchema, type MemberFormValues } from "@/lib/schemas";

const defaultValues: MemberFormValues = {
  nom: "",
  prenom: "",
  dateNaissance: "",
  sexe: "",
  telephone: "",
  adresse: "",
  assemblee: "",
  dateInscription: "",
  statut: "Membre",
  dateConversion: "",
  baptemeEau: "",
  baptemeSaintEsprit: "",
  autres: "",
};

export default function Form1() {
  const form = useForm<MemberFormValues>({
    resolver: zodResolver(memberSchema),
    defaultValues,
  });
  const { register, handleSubmit, reset, formState: { errors } } = form;

  function onSubmit() {
    toast.info("Formulaire validé. La sauvegarde en base de données reste à connecter.");
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <PageHeader
        title="Ajouter un membre"
        description="Créez une fiche complète avec les coordonnées et les informations d’appartenance."
        icon={UserRoundPlus}
      />
      <div className="rounded-2xl border bg-card p-5 shadow-sm sm:p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          <FieldGroup className="space-y-5">
            <FieldSet>
              <FieldLegend>Informations personnelles</FieldLegend>
              <FieldDescription>Identité et date de naissance du membre.</FieldDescription>
              <FieldGroup className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field data-invalid={!!errors.nom}>
                  <FieldLabel htmlFor="nom">Nom</FieldLabel>
                  <Input {...register("nom")} id="nom" placeholder="Nom de famille" aria-invalid={!!errors.nom} />
                  {errors.nom && <FieldError errors={[errors.nom]} />}
                </Field>
                <Field data-invalid={!!errors.prenom}>
                  <FieldLabel htmlFor="prenom">Prénom</FieldLabel>
                  <Input {...register("prenom")} id="prenom" placeholder="Prénom" aria-invalid={!!errors.prenom} />
                  {errors.prenom && <FieldError errors={[errors.prenom]} />}
                </Field>
                <Field data-invalid={!!errors.dateNaissance}>
                  <FieldLabel htmlFor="date-naissance">Date de naissance</FieldLabel>
                  <Input {...register("dateNaissance")} id="date-naissance" type="date" aria-invalid={!!errors.dateNaissance} />
                  {errors.dateNaissance && <FieldError errors={[errors.dateNaissance]} />}
                </Field>
                <Field data-invalid={!!errors.sexe}>
                  <FieldLabel htmlFor="sexe">Sexe</FieldLabel>
                  <select {...register("sexe")} id="sexe" aria-invalid={!!errors.sexe} className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm">
                    <option value="">Choisir une option</option>
                    <option value="femme">Femme</option>
                    <option value="homme">Homme</option>
                    <option value="autre">Autre</option>
                  </select>
                  {errors.sexe && <FieldError errors={[errors.sexe]} />}
                </Field>
              </FieldGroup>
            </FieldSet>

            <FieldSeparator />
            <FieldSet>
              <FieldLegend>Coordonnées</FieldLegend>
              <FieldDescription>Comment joindre et localiser le membre.</FieldDescription>
              <FieldGroup className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field data-invalid={!!errors.telephone}>
                  <FieldLabel htmlFor="telephone">Numéro de téléphone</FieldLabel>
                  <Input {...register("telephone")} id="telephone" type="tel" placeholder="+237 6XX XXX XXX" aria-invalid={!!errors.telephone} />
                  {errors.telephone && <FieldError errors={[errors.telephone]} />}
                </Field>
                <Field data-invalid={!!errors.adresse}>
                  <FieldLabel htmlFor="adresse">Adresse de résidence</FieldLabel>
                  <Input {...register("adresse")} id="adresse" placeholder="Quartier, ville" aria-invalid={!!errors.adresse} />
                  {errors.adresse && <FieldError errors={[errors.adresse]} />}
                </Field>
              </FieldGroup>
            </FieldSet>

            <FieldSeparator />
            <FieldSet>
              <FieldLegend>Appartenance</FieldLegend>
              <FieldDescription>Assemblée de rattachement et rôle du membre.</FieldDescription>
              <FieldGroup className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field data-invalid={!!errors.assemblee}>
                  <FieldLabel htmlFor="assemblee">Assemblée</FieldLabel>
                  <Input {...register("assemblee")} id="assemblee" placeholder="Nom de l’assemblée" aria-invalid={!!errors.assemblee} />
                  {errors.assemblee && <FieldError errors={[errors.assemblee]} />}
                </Field>
                <Field data-invalid={!!errors.dateInscription}>
                  <FieldLabel htmlFor="date-inscription">Date d’inscription</FieldLabel>
                  <Input {...register("dateInscription")} id="date-inscription" type="date" aria-invalid={!!errors.dateInscription} />
                  {errors.dateInscription && <FieldError errors={[errors.dateInscription]} />}
                </Field>
                <Field data-invalid={!!errors.statut} className="sm:col-span-2">
                  <FieldLabel htmlFor="statut">Statut</FieldLabel>
                  <select {...register("statut")} id="statut" aria-invalid={!!errors.statut} className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm">
                    <option value="">Choisir un statut</option>
                    <option value="Membre">Membre</option>
                    <option value="Dirigeant">Dirigeant</option>
                    <option value="Trésorier">Trésorier</option>
                    <option value="Évangélisation">Évangélisation</option>
                  </select>
                  {errors.statut && <FieldError errors={[errors.statut]} />}
                </Field>
              </FieldGroup>
            </FieldSet>

            <FieldSeparator />
            <FieldSet>
              <FieldLegend>Informations spirituelles</FieldLegend>
              <FieldDescription>Dates importantes et notes complémentaires.</FieldDescription>
              <FieldGroup className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="date-conversion">Date de conversion</FieldLabel>
                  <Input {...register("dateConversion")} id="date-conversion" type="date" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="bapteme-eau">Baptême d’eau</FieldLabel>
                  <Input {...register("baptemeEau")} id="bapteme-eau" type="date" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="bapteme-saint-esprit">Baptême du Saint-Esprit</FieldLabel>
                  <Input {...register("baptemeSaintEsprit")} id="bapteme-saint-esprit" type="date" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="autres">Autres informations</FieldLabel>
                  <Textarea {...register("autres")} id="autres" placeholder="Notes complémentaires..." />
                </Field>
              </FieldGroup>
            </FieldSet>
          </FieldGroup>

          <Field orientation="horizontal" className="justify-end border-t pt-5">
            <Button type="reset" variant="outline" onClick={() => reset(defaultValues)}>Effacer</Button>
            <Button type="submit">Enregistrer le membre</Button>
          </Field>
        </form>
      </div>
    </main>
  );
}
