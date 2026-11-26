"use client";

import { LoginForm } from "@/components/Formulaire"
import { Wallet } from "lucide-react"

export default function ConnexionPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background px-4 py-10">
      <div className="pointer-events-none absolute -left-32 -top-32 size-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-24 size-120 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative grid w-full max-w-5xl overflow-hidden rounded-[2rem] border bg-card shadow-2xl shadow-primary/10 md:min-h-150 md:grid-cols-2">
        <section className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/80 p-10 text-primary-foreground md:flex lg:p-14">
          <div className="absolute -right-20 -top-20 size-72 rounded-full border border-primary-foreground/10" />
          <div className="absolute -right-8 -top-8 size-48 rounded-full border border-primary-foreground/10" />
          <div className="absolute -bottom-28 -left-24 size-72 rounded-full border border-primary-foreground/10" />
          <div className="relative flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-primary-foreground/15">
              <Wallet className="size-5" />
            </span>
            <span className="text-lg font-semibold tracking-tight">Gestion Finance</span>
          </div>
          <div className="relative max-w-sm">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/65">
              Espace de gestion
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight">
              Gérez vos finances en toute simplicité.
            </h1>
            <p className="mt-4 leading-7 text-primary-foreground/75">
              Connectez-vous pour retrouver votre tableau de bord et gérer votre activité.
            </p>
          </div>
          <p className="relative text-xs text-primary-foreground/60">
            Simple, organisé et pensé pour vous.
          </p>
        </section>
        <section className="flex items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-sm">
            <div className="mb-8 md:hidden">
              <div className="mb-5 flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Wallet className="size-5" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">Gestion Finance</p>
            </div>
            
            <LoginForm />
            <p className="mt-6 text-center text-xs leading-5 text-muted-foreground">
              Connectez-vous pour accéder à votre espace de gestion.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
