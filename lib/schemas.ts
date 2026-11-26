import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().trim().min(1, "Saisis ton nom d'utilisateur."),
  password: z.string().min(1, "Saisis ton mot de passe."),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const assemblySchema = z.object({
  nom: z.string().trim().min(2, "Le nom doit contenir au moins 2 caractères."),
  localisation: z.string().trim().min(2, "La localisation doit contenir au moins 2 caractères."),
  description: z.string().trim().min(2, "La description doit contenir au moins 2 caractères."),
  date_creation: z.string().min(1, "Choisissez une date de création."),
  statut: z.string().min(1, "Choisissez un statut."),
});

export type AssemblyFormValues = z.infer<typeof assemblySchema>;

export const memberSchema = z.object({
  nom: z.string().trim().min(2, "Le nom doit contenir au moins 2 caractères."),
  prenom: z.string().trim().min(2, "Le prénom doit contenir au moins 2 caractères."),
  dateNaissance: z.string().min(1, "Choisissez une date de naissance."),
  sexe: z.string().min(1, "Choisissez une option."),
  telephone: z.string().trim().min(1, "Saisissez un numéro de téléphone."),
  adresse: z.string().trim().min(1, "Saisissez une adresse."),
  assemblee: z.string().trim().min(1, "Saisissez une assemblée."),
  dateInscription: z.string().min(1, "Choisissez une date d'inscription."),
  statut: z.string().min(1, "Choisissez un statut."),
  dateConversion: z.string(),
  baptemeEau: z.string(),
  baptemeSaintEsprit: z.string(),
  autres: z.string(),
});

export type MemberFormValues = z.infer<typeof memberSchema>;

const contributionAmountSchema = z.coerce
  .number()
  .finite("Saisissez un montant valide.")
  .min(0, "Le montant ne peut pas être négatif.");

export const contributionSchema = z
  .object({
    membreId: z.string().trim().min(1, "Sélectionnez un membre."),
    dateVersement: z.string().min(1, "Choisissez la date du versement."),
    dimes: contributionAmountSchema,
    offrandes: z.object({
      fmi: contributionAmountSchema,
      fml: contributionAmountSchema,
    }),
  })
  .refine(
    (values) => values.dimes > 0 || values.offrandes.fmi > 0 || values.offrandes.fml > 0,
    {
      message: "Saisissez au moins un montant dans les groupes Dîmes ou Offrandes.",
      path: ["offrandes"],
    }
  );

export type ContributionFormInput = z.input<typeof contributionSchema>;
export type ContributionFormValues = z.output<typeof contributionSchema>;
