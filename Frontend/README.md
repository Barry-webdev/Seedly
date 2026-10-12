# Seedly Technology & Apps — Frontend

Site vitrine professionnel de l'agence digitale Seedly, basée à Conakry, République de Guinée.

## Stack technique

- **Next.js 14** — App Router
- **TypeScript** — mode strict
- **Tailwind CSS 3** — design system intégré
- **React 18**
- **Lucide React** — icônes
- **Framer Motion** — (installé, prêt à l'emploi)
- **ESLint** — configuration Next.js

## Lancement en développement

```bash
cd seedly-app
npm install
npm run dev
```

Le site sera disponible sur [http://localhost:3000](http://localhost:3000).

> **Note :** Si le build échoue avec une erreur SSL (Google Fonts), c'est un problème de certificat local Windows.
> Solution pour le développement : `$env:NODE_TLS_REJECT_UNAUTHORIZED="0"; npm run dev`
> En production (serveur Linux), ce problème n'existe pas.

## Build de production

```bash
npm run build
npm run start
```

## Lint

```bash
npm run lint
```

## Structure du projet

```
seedly-app/
├── app/                          # Routes (App Router)
│   ├── layout.tsx               # Layout racine + polices + métadonnées SEO
│   ├── page.tsx                 # Accueil
│   ├── globals.css              # Styles globaux + design system CSS
│   ├── not-found.tsx            # Page 404 personnalisée
│   ├── robots.ts                # robots.txt
│   ├── sitemap.ts               # sitemap.xml
│   ├── a-propos/                # Page À propos
│   ├── services/                # Page Services
│   ├── realisations/            # Portfolio
│   │   └── [slug]/              # Détail projet
│   ├── devis/                   # Formulaire de devis
│   ├── contact/                 # Page Contact
│   ├── mentions-legales/        # Mentions légales
│   └── confidentialite/         # Politique de confidentialité
│
├── components/
│   ├── layout/                  # Header, Footer, MainLayout
│   ├── sections/home/           # Sections de la page d'accueil
│   ├── ui/                      # Composants atomiques (Button, Badge, Logo, SectionHeader)
│   └── forms/                   # QuoteForm
│
├── data/                        # Données centralisées
│   ├── contact.ts               # Coordonnées (TODO: compléter)
│   ├── navigation.ts            # Liens de navigation
│   ├── services.ts              # Services Seedly
│   ├── projects.ts              # Portfolio (démos actuellement)
│   └── company.ts               # Infos entreprise, valeurs, process
│
├── types/
│   └── index.ts                 # Tous les types TypeScript
│
├── lib/
│   └── utils.ts                 # Utilitaires (cn, validation, etc.)
│
└── public/
    ├── manifest.json
    └── images/                  # Assets (à créer)
```

## Pages disponibles

| Route | Description | État |
|-------|-------------|------|
| `/` | Accueil | ✅ Complet |
| `/services` | Services | ✅ Complet |
| `/realisations` | Portfolio | ✅ Complet |
| `/realisations/[slug]` | Détail projet | ✅ Complet |
| `/a-propos` | À propos | ✅ Complet |
| `/devis` | Formulaire devis | ✅ UI — Backend manquant |
| `/contact` | Contact | ✅ Complet |
| `/mentions-legales` | Légal | ✅ Modèle |
| `/confidentialite` | Légal | ✅ Modèle |
| 404 | Not Found | ✅ Complet |

## Éléments à compléter avant mise en ligne

### Données obligatoires (dans `/data/contact.ts`)
- [ ] Email officiel de contact
- [ ] Numéro WhatsApp officiel
- [ ] Numéro de téléphone officiel
- [ ] Adresse exacte
- [ ] URLs réseaux sociaux (LinkedIn, Instagram, Facebook, Twitter)

### Assets à créer
- [ ] Logo officiel SVG → remplacer le logo dans `components/ui/Logo.tsx`
- [ ] Favicon (`/public/favicon.ico`)
- [ ] Icônes PWA (`/public/icons/icon-192.png`, `icon-512.png`, etc.)
- [ ] Image Open Graph (`/public/images/og-seedly.png`) — 1200×630px
- [ ] Images des projets réels → `/public/images/projects/`
- [ ] Photos de l'équipe → `/public/images/team/`

### Données à compléter
- [ ] Vrais projets → `/data/projects.ts` (remplacer les démos)
- [ ] Membres de l'équipe → `/data/company.ts`
- [ ] Nom de domaine → `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`
- [ ] Mentions légales → compléter avec un professionnel du droit

### Intégration Backend (formulaire de devis)
- [ ] Créer l'endpoint `POST /api/quote` (ou utiliser un service comme Resend, Formspree, etc.)
- [ ] Connecter la fonction `submitQuote()` dans `components/forms/QuoteForm.tsx`
- [ ] Contrat d'API attendu : voir `types/index.ts` → `QuoteApiPayload` et `QuoteApiResponse`

### Variables d'environnement
Créer un fichier `.env.local` avec :
```env
# TODO: Ajouter les variables nécessaires selon le Backend choisi
# Exemple avec un service d'email :
# RESEND_API_KEY=re_xxxx
# CONTACT_EMAIL=contact@seedly.tech

# URL du site en production
NEXT_PUBLIC_SITE_URL=https://seedly.tech
```

## Design System

### Couleurs principales
| Token | Valeur | Usage |
|-------|--------|-------|
| `primary` | `#1A7A4A` | Couleur principale (vert Seedly) |
| `accent` | `#2DD4A0` | Accent (vert clair) |
| `dark` | `#0A0F0D` | Fond sombre |
| `surface` | `#0D1A14` | Surfaces |

### Polices
- **Plus Jakarta Sans** — Titres et wordmark
- **Inter** — Corps de texte

## Commandes utiles

```bash
# Développement
npm run dev

# Build production
npm run build

# Démarrer en production
npm run start

# Lint
npm run lint
```

---

**Seedly Technology & Apps** — Plant the idea. Grow the business.
