"use client";
import { Button } from "@/components/ui/button";
import { FieldSet,FieldLegend, FieldDescription, FieldGroup,Field, FieldLabel,FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver} from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import PageHeader from "@/components/PageHeader";
import { Landmark } from "lucide-react";
import { toast } from "sonner";
import { assemblySchema, type AssemblyFormValues } from "@/lib/schemas";

export default function Form1(){
    const form = useForm<AssemblyFormValues>({
        resolver: zodResolver(assemblySchema),
        defaultValues: {nom: "", localisation: "", description:"", date_creation: "", statut: ""},
    });
function onSubmit(){
    toast.info("Formulaire validé. La sauvegarde en base de données reste à connecter.");
}


    return(
        <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <PageHeader
              title="Créer une assemblée"
              description="Renseignez les informations principales pour organiser une nouvelle assemblée."
              icon={Landmark}
            />
            <div className="mx-auto max-w-3xl rounded-2xl border bg-card p-5 shadow-sm sm:p-8">
                <div className="mb-6 flex items-start gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Landmark className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="font-semibold">Informations de l’assemblée</h2>
                    <p className="mt-1 text-sm text-muted-foreground">Complétez les champs avant de continuer.</p>
                  </div>
                </div>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldSet>
                      <FieldLegend className="sr-only">Informations générales</FieldLegend>
                      <FieldDescription className="sr-only">Informations concernant l’assemblée.</FieldDescription>
                      <FieldGroup className="grid gap-4 sm:grid-cols-2">
                        {/*---Full name */}
                        <Controller
                          name="nom"
                          control={form.control}
                          render={({ field, fieldState}) =>(
                            <Field data-invalid={fieldState.invalid}>
                              <FieldLabel htmlFor="nom">Nom de l’assemblée</FieldLabel>
                              <Input {...field} id="nom" placeholder="Nom de l’assemblée"
                              aria-invalid={fieldState.invalid}/>
                              {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]}/>
                          )}
                          </Field>
                          )}
                        />
                        {/* --Localisation-- */}
                          <Controller
                            name="localisation"
                            control={form.control}
                            render={({ field, fieldState }) => (
                              <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="localisation">Localisation</FieldLabel>
                                <Input {...field} id="localisation" placeholder="Ville ou quartier" aria-invalid={fieldState.invalid} />
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                              </Field>
                            )}
                          />
                          {/* --Description-- */}
                          <Controller
                            name="description"
                            control={form.control}
                            render={({ field, fieldState }) => (
                              <Field data-invalid={fieldState.invalid} className="sm:col-span-2">
                                <FieldLabel htmlFor="description">Description</FieldLabel>
                                <Textarea {...field} id="description" placeholder="Décrivez brièvement cette assemblée" aria-invalid={fieldState.invalid} />
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                              </Field>
                            )}
                          />
                          {/* --Date-creation-- */}
                          <Controller
                            name="date_creation"
                            control={form.control}
                            render={({ field, fieldState }) => (
                              <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="date_creation">Date de création</FieldLabel>
                                <Input {...field} type="date" id="date_creation" aria-invalid={fieldState.invalid} />
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                              </Field>
                            )}
                          />
                          {/* --statut-- */}
                          <Controller
                            name="statut"
                            control={form.control}
                            render={({ field, fieldState }) => (
                              <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="statut">Statut</FieldLabel>
                                <select {...field} id="statut" aria-invalid={fieldState.invalid} className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm">
                                  <option value="">Choisir un statut</option>
                                  <option value="active">Active</option>
                                  <option value="inactive">Inactive</option>
                                </select>
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                              </Field>
                            )}
                          />
                        
                      </FieldGroup>
                    </FieldSet>
                    <Field orientation="horizontal" className="mt-6 justify-end border-t pt-5">
                        <Button type="button" variant="outline" onClick={() => form.reset()}>Réinitialiser</Button>
                        <Button type="submit">Créer l’assemblée</Button>
                    </Field>
                </form>
            </div>
        </main>
    )
}