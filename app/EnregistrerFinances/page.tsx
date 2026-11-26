"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import PageHeader from "@/components/PageHeader";
import {
  contributionSchema,
  type ContributionFormInput,
  type ContributionFormValues,
} from "@/lib/schemas";
import { demoMembers } from "@/lib/members";

export default function Form1() {
  const form = useForm<ContributionFormInput, unknown, ContributionFormValues>({
    resolver: zodResolver(contributionSchema),
    defaultValues: {
      membreId: "",
      dateVersement: "",
      dimes: "",
      offrandes: {
        fmi: "",
        fml: "",
      },
    },
  });
  const { register, handleSubmit, reset, formState: { errors } } = form;

  function onSubmit() {
    toast.info("Formulaire validé. La sauvegarde en base de données reste à connecter.");
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <PageHeader
        title="Enregistrer un versement"
        description="Saisissez les différentes contributions d’un membre en quelques étapes."
        icon={Wallet}
      />
      <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.7fr)]">
        <form className="rounded-2xl border bg-card p-5 shadow-sm sm:p-7" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="space-y-7">
            <section>
              <div className="mb-4">
                <h2 className="text-base font-semibold">Informations du versement</h2>
                <p className="mt-1 text-sm text-muted-foreground">Identifiez le membre et la période concernée.</p>
              </div>
              <FieldGroup className="grid gap-4 sm:grid-cols-2">
                <Field data-invalid={!!errors.membreId}>
                  <FieldLabel htmlFor="membre">Membre</FieldLabel>
                  <select
                    {...register("membreId")}
                    id="membre"
                    aria-invalid={!!errors.membreId}
                    className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm"
                  >
                    <option value="">Sélectionner un membre</option>
                    {demoMembers.map((member) => (
                      <option key={member.id} value={member.id}>
                        {member.name} {member.prenom} — membre #{member.id}
                      </option>
                    ))}
                  </select>
                  {errors.membreId && <FieldError errors={[errors.membreId]} />}
                </Field>
                <Field data-invalid={!!errors.dateVersement}>
                  <FieldLabel htmlFor="date-versement">Date du versement</FieldLabel>
                  <Input {...register("dateVersement")} id="date-versement" type="date" aria-invalid={!!errors.dateVersement} />
                  {errors.dateVersement && <FieldError errors={[errors.dateVersement]} />}
                </Field>
              </FieldGroup>
            </section>

            <section className="border-t pt-6">
              <div className="mb-4">
                <h2 className="text-base font-semibold">Dîmes</h2>
                <p className="mt-1 text-sm text-muted-foreground">Saisissez le montant des dîmes en FCFA.</p>
              </div>
              <FieldGroup>
                <Field data-invalid={!!errors.dimes}>
                  <FieldLabel htmlFor="dimes">Montant des dîmes</FieldLabel>
                  <Input {...register("dimes")} id="dimes" type="number" min="0" placeholder="120 000" aria-invalid={!!errors.dimes} />
                  {errors.dimes && <FieldError errors={[errors.dimes]} />}
                </Field>
              </FieldGroup>
            </section>

            <section className="border-t pt-6">
              <div className="mb-4">
                <h2 className="text-base font-semibold">Offrandes</h2>
                <p className="mt-1 text-sm text-muted-foreground">Les offrandes sont réparties entre les fonds FMI et FML, en FCFA.</p>
              </div>
              <FieldGroup className="grid gap-4 sm:grid-cols-2">
                <Field data-invalid={!!errors.offrandes?.fmi}>
                  <FieldLabel htmlFor="offrandes-fmi">Fonds missionnaire international (FMI)</FieldLabel>
                  <Input {...register("offrandes.fmi")} id="offrandes-fmi" type="number" min="0" placeholder="50 000" aria-invalid={!!errors.offrandes?.fmi} />
                  {errors.offrandes?.fmi && <FieldError errors={[errors.offrandes.fmi]} />}
                </Field>
                <Field data-invalid={!!errors.offrandes?.fml}>
                  <FieldLabel htmlFor="offrandes-fml">Fonds missionnaire local (FML)</FieldLabel>
                  <Input {...register("offrandes.fml")} id="offrandes-fml" type="number" min="0" placeholder="75 000" aria-invalid={!!errors.offrandes?.fml} />
                  {errors.offrandes?.fml && <FieldError errors={[errors.offrandes.fml]} />}
                </Field>
                {errors.offrandes?.message && (
                  <p role="alert" className="text-sm text-destructive sm:col-span-2">
                    {errors.offrandes.message}
                  </p>
                )}
              </FieldGroup>
            </section>
          </div>
          <div className="mt-7 flex flex-col-reverse gap-3 border-t pt-5 sm:flex-row sm:justify-end">
            <Button type="reset" variant="outline" onClick={() => reset()}>Effacer</Button>
            <Button type="submit">Enregistrer le versement</Button>
          </div>
        </form>

        <aside className="rounded-2xl border bg-primary/[0.04] p-5 sm:p-6">
          <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Wallet className="size-5" aria-hidden="true" />
          </span>
          <h2 className="mt-4 text-base font-semibold">À vérifier avant l’enregistrement</h2>
          <ul className="mt-3 space-y-3 text-sm leading-6 text-muted-foreground">
            <li>Sélectionnez le membre dans la liste et vérifiez la date du versement.</li>
            <li>Laissez vide toute contribution qui n’a pas été versée.</li>
            <li>Confirmez les montants avant de valider.</li>
          </ul>
        </aside>
      </div>
    </main>
  );
}