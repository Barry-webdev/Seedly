"use client";

import React, { useState, useCallback } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import type { QuoteFormData, QuoteFormErrors, FormState } from "@/types";
import { isValidEmail, isValidPhone } from "@/lib/utils";
import { whatsappCTA } from "@/data/contact";

// =============================================
// FORMULAIRE DE DEVIS — Seedly Technology & Apps
//
// INTÉGRATION BACKEND REQUISE :
// Ce formulaire est prêt côté client. Pour l'envoi réel, connecter
// l'endpoint POST /api/quote (ou similaire) dans la fonction submitQuote().
// Voir types/index.ts → QuoteApiPayload et QuoteApiResponse.
// =============================================

const initialFormData: QuoteFormData = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  serviceType: "",
  projectDescription: "",
  budget: "",
  timeline: "",
  contactPreference: "",
};

// Validation côté client
function validateForm(data: QuoteFormData): QuoteFormErrors {
  const errors: QuoteFormErrors = {};

  if (!data.firstName.trim()) {
    errors.firstName = "Le prénom est requis.";
  }

  if (!data.lastName.trim()) {
    errors.lastName = "Le nom est requis.";
  }

  if (!data.email.trim()) {
    errors.email = "L'email est requis.";
  } else if (!isValidEmail(data.email)) {
    errors.email = "Veuillez saisir une adresse email valide.";
  }

  if (!data.phone.trim()) {
    errors.phone = "Le numéro de téléphone est requis.";
  } else if (!isValidPhone(data.phone)) {
    errors.phone = "Veuillez saisir un numéro de téléphone valide.";
  }

  if (!data.serviceType) {
    errors.serviceType = "Veuillez sélectionner un type de service.";
  }

  if (!data.projectDescription.trim()) {
    errors.projectDescription = "Veuillez décrire votre projet.";
  } else if (data.projectDescription.trim().length < 30) {
    errors.projectDescription = "Décrivez votre projet en quelques mots au moins (30 caractères minimum).";
  }

  return errors;
}

// ⚠️ INTÉGRATION BACKEND MANQUANTE
// Cette fonction doit être connectée à un endpoint réel.
// Elle retourne une erreur explicite pour éviter de simuler un envoi réussi.
async function submitQuote(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _data: QuoteFormData
): Promise<{ success: boolean; message: string }> {
  // TODO: Remplacer par un vrai appel API
  // Exemple:
  // const response = await fetch("/api/quote", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ ..._data, submittedAt: new Date().toISOString() }),
  // });
  // const result = await response.json();
  // return result;

  // En attendant l'intégration, l'envoi est bloqué intentionnellement.
  throw new Error("BACKEND_NOT_CONNECTED");
}

interface FieldWrapperProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

const FieldWrapper: React.FC<FieldWrapperProps> = ({ label, htmlFor, required, error, children }) => (
  <div className="space-y-1.5">
    <label htmlFor={htmlFor} className="block text-sm font-medium text-neutral-300">
      {label}
      {required && (
        <span className="text-red-400 ml-1" aria-label="champ obligatoire">*</span>
      )}
    </label>
    {children}
    {error && (
      <p id={`${htmlFor}-error`} role="alert" className="flex items-center gap-1.5 text-xs text-red-400 mt-1">
        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
        {error}
      </p>
    )}
  </div>
);

export const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>(initialFormData);
  const [errors, setErrors] = useState<QuoteFormErrors>({});
  const [formState, setFormState] = useState<FormState>({ status: "idle" });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      // Effacer l'erreur du champ modifié
      if (errors[name as keyof QuoteFormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus sur le premier champ en erreur pour l'accessibilité
      const firstErrorKey = Object.keys(validationErrors)[0];
      const el = document.getElementById(firstErrorKey);
      if (el) el.focus();
      return;
    }

    setFormState({ status: "submitting" });

    try {
      await submitQuote(formData);
      setFormState({ status: "success", message: "Votre demande a été envoyée." });
    } catch (error) {
      const isBackendMissing =
        error instanceof Error && error.message === "BACKEND_NOT_CONNECTED";

      setFormState({
        status: "error",
        message: isBackendMissing
          ? "L'envoi du formulaire n'est pas encore disponible. En attendant, contactez-nous directement sur WhatsApp ou par email."
          : "Une erreur est survenue. Veuillez réessayer ou nous contacter directement.",
      });
    }
  };

  // Construire le message WhatsApp de secours
  const whatsappFallback = whatsappCTA(
    `Bonjour Seedly, je souhaite obtenir un devis pour : ${formData.serviceType || "un projet"}.`
  );

  // État de succès
  if (formState.status === "success") {
    return (
      <div
        className="card-seedly p-10 text-center space-y-5"
        role="alert"
        aria-live="polite"
      >
        <div className="w-14 h-14 rounded-full bg-green-500/15 border border-green-500/20 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-7 h-7 text-green-400" aria-hidden="true" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-white">Demande reçue !</h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Merci pour votre message. Nous vous répondrons dans les 24 heures.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Formulaire de demande de devis"
      className="space-y-6"
    >
      <div className="card-seedly p-6 md:p-8 space-y-6">
        {/* Message d'erreur global */}
        {formState.status === "error" && (
          <div
            role="alert"
            aria-live="assertive"
            className="p-4 rounded-xl bg-red-500/8 border border-red-500/20 space-y-3"
          >
            <div className="flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-red-300">{formState.message}</p>
            </div>
            {/* Alternatives de contact */}
            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <a
                href={whatsappFallback}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sm inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors"
              >
                Écrire sur WhatsApp
              </a>
              <a
                href="mailto:contact@seedly.tech"
                className="btn-sm inline-flex items-center gap-2 btn-outline rounded-lg px-4 py-2 text-sm"
              >
                Envoyer un email
              </a>
            </div>
          </div>
        )}

        {/* Identité */}
        <fieldset className="space-y-4">
          <legend className="text-sm font-semibold text-white uppercase tracking-wider pb-2 border-b border-white/5 w-full">
            Vos coordonnées
          </legend>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FieldWrapper label="Prénom" htmlFor="firstName" required error={errors.firstName}>
              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Votre prénom"
                className={`input-seedly ${errors.firstName ? "error" : ""}`}
                aria-required="true"
                aria-describedby={errors.firstName ? "firstName-error" : undefined}
                aria-invalid={!!errors.firstName}
              />
            </FieldWrapper>

            <FieldWrapper label="Nom" htmlFor="lastName" required error={errors.lastName}>
              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Votre nom"
                className={`input-seedly ${errors.lastName ? "error" : ""}`}
                aria-required="true"
                aria-describedby={errors.lastName ? "lastName-error" : undefined}
                aria-invalid={!!errors.lastName}
              />
            </FieldWrapper>
          </div>

          <FieldWrapper label="Entreprise" htmlFor="company">
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              value={formData.company}
              onChange={handleChange}
              placeholder="Nom de votre entreprise (facultatif)"
              className="input-seedly"
            />
          </FieldWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FieldWrapper label="Email" htmlFor="email" required error={errors.email}>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="votre@email.com"
                className={`input-seedly ${errors.email ? "error" : ""}`}
                aria-required="true"
                aria-describedby={errors.email ? "email-error" : undefined}
                aria-invalid={!!errors.email}
              />
            </FieldWrapper>

            <FieldWrapper label="Téléphone" htmlFor="phone" required error={errors.phone}>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+224 000 000 000"
                className={`input-seedly ${errors.phone ? "error" : ""}`}
                aria-required="true"
                aria-describedby={errors.phone ? "phone-error" : undefined}
                aria-invalid={!!errors.phone}
              />
            </FieldWrapper>
          </div>
        </fieldset>

        {/* Projet */}
        <fieldset className="space-y-4">
          <legend className="text-sm font-semibold text-white uppercase tracking-wider pb-2 border-b border-white/5 w-full">
            Votre projet
          </legend>

          <FieldWrapper label="Type de service" htmlFor="serviceType" required error={errors.serviceType}>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className={`input-seedly ${errors.serviceType ? "error" : ""}`}
              aria-required="true"
              aria-describedby={errors.serviceType ? "serviceType-error" : undefined}
              aria-invalid={!!errors.serviceType}
            >
              <option value="">Choisissez un service</option>
              <option value="website">Création de site web</option>
              <option value="mobile-app">Application mobile</option>
              <option value="ui-ux-design">Design UI/UX</option>
              <option value="digital-marketing">Marketing digital</option>
              <option value="other">Autre / Je ne sais pas encore</option>
            </select>
          </FieldWrapper>

          <FieldWrapper
            label="Description du projet"
            htmlFor="projectDescription"
            required
            error={errors.projectDescription}
          >
            <textarea
              id="projectDescription"
              name="projectDescription"
              rows={5}
              value={formData.projectDescription}
              onChange={handleChange}
              placeholder="Décrivez votre projet, vos objectifs, votre cible, vos fonctionnalités souhaitées..."
              className={`input-seedly resize-none ${errors.projectDescription ? "error" : ""}`}
              aria-required="true"
              aria-describedby={errors.projectDescription ? "projectDescription-error" : undefined}
              aria-invalid={!!errors.projectDescription}
            />
            <p className="text-xs text-neutral-600 mt-1">
              {formData.projectDescription.length} caractère{formData.projectDescription.length !== 1 ? "s" : ""}
              {formData.projectDescription.length < 30 && " — minimum 30"}
            </p>
          </FieldWrapper>
        </fieldset>

        {/* Informations complémentaires */}
        <fieldset className="space-y-4">
          <legend className="text-sm font-semibold text-white uppercase tracking-wider pb-2 border-b border-white/5 w-full">
            Informations complémentaires <span className="text-neutral-600 font-normal text-xs normal-case tracking-normal">(facultatif)</span>
          </legend>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FieldWrapper label="Budget indicatif" htmlFor="budget">
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="input-seedly"
              >
                <option value="">Budget non défini</option>
                <option value="less-500">Moins de 500 USD</option>
                <option value="500-1000">500 — 1 000 USD</option>
                <option value="1000-3000">1 000 — 3 000 USD</option>
                <option value="3000-5000">3 000 — 5 000 USD</option>
                <option value="more-5000">Plus de 5 000 USD</option>
              </select>
            </FieldWrapper>

            <FieldWrapper label="Délai souhaité" htmlFor="timeline">
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="input-seedly"
              >
                <option value="">Pas de contrainte</option>
                <option value="urgent">Urgent (moins de 2 semaines)</option>
                <option value="1-month">Dans 1 mois</option>
                <option value="1-3-months">Dans 1 à 3 mois</option>
                <option value="3-6-months">Dans 3 à 6 mois</option>
                <option value="flexible">Flexible</option>
              </select>
            </FieldWrapper>
          </div>

          <FieldWrapper label="Moyen de contact préféré" htmlFor="contactPreference">
            <select
              id="contactPreference"
              name="contactPreference"
              value={formData.contactPreference}
              onChange={handleChange}
              className="input-seedly"
            >
              <option value="">Peu importe</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="email">Email</option>
              <option value="phone">Téléphone</option>
            </select>
          </FieldWrapper>
        </fieldset>

        {/* Note sur le Backend */}
        <div className="p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/10">
          <p className="text-xs text-yellow-500/70 leading-relaxed">
            <span className="font-medium">Note :</span> L&apos;envoi du formulaire sera disponible dès la connexion au Backend.
            En attendant, utilisez WhatsApp ou l&apos;email pour nous contacter.
          </p>
        </div>

        {/* Bouton de soumission */}
        <button
          type="submit"
          disabled={formState.status === "submitting"}
          className="btn-accent btn-lg w-full disabled:opacity-60 disabled:cursor-not-allowed"
          aria-busy={formState.status === "submitting"}
        >
          {formState.status === "submitting" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
              Envoi en cours…
            </>
          ) : (
            <>
              Envoyer ma demande
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </>
          )}
        </button>

        <p className="text-xs text-neutral-600 text-center">
          En soumettant ce formulaire, vous acceptez que Seedly vous contacte concernant votre projet.
          Aucun engagement de votre part.
        </p>
      </div>
    </form>
  );
};

export default QuoteForm;
