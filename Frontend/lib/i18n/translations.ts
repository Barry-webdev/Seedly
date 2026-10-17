// =============================================
// TRADUCTIONS — Seedly Technology & Apps
// FR / EN
// =============================================

export type Locale = "fr" | "en";

export const translations = {
  fr: {
    // Navigation
    nav: {
      home:      "Accueil",
      services:  "Services",
      portfolio: "Réalisations",
      about:     "À propos",
      contact:   "Contact",
      cta:       "Demander un devis",
    },

    // Hero
    hero: {
      badge:       "Agence digitale · Conakry, Guinée",
      brand:       "Seedly Technology & Apps",
      title1:      "Nous transformons vos idées en",
      titleAccent: "solutions numériques",
      title2:      "performantes.",
      description: "Sites web, applications mobiles, design et marketing digital — Seedly conçoit des solutions sur mesure pour aider les entreprises à se développer et à attirer plus de clients.",
      tagline:     "Plantez l'idée. Faites grandir votre activité.",
      ctaPrimary:  "Discuter de mon projet",
      ctaSecondary:"Découvrir nos réalisations",
      whatsapp:    "Ou écrivez-nous directement sur WhatsApp",
    },

    // Section labels
    sections: {
      ourApproach:     "Notre approche",
      whatWeDo:        "Ce que nous faisons",
      ourWork:         "Nos réalisations",
      ourMethod:       "Notre méthode",
      whySeedly:       "Pourquoi Seedly",
      readyToStart:    "Prêt à commencer ?",
      ourHistory:      "Notre histoire",
      ourValues:       "Nos valeurs",
      ourPhilosophy:   "Notre philosophie",
      team:            "L'équipe",
      portfolio:       "Portfolio",
    },

    // Value proposition
    value: {
      title:       "La transformation digitale, sans la complexité",
      description: "Beaucoup d'entreprises guinéennes n'ont pas encore de présence digitale solide. Ce n'est pas un manque de volonté — c'est souvent un manque d'accompagnement adapté. C'est exactement ce que Seedly propose.",
      points: [
        "Nous partons de votre situation réelle, pas d'un modèle standard.",
        "Nous expliquons clairement ce que nous faisons et pourquoi.",
        "Nous livrons des outils que vous comprendrez et pourrez utiliser.",
        "Nous restons disponibles même après la livraison.",
      ],
    },

    // Services
    services: {
      title:       "Des solutions digitales pour chaque besoin",
      description: "De la création de votre site web à la gestion de votre présence en ligne, nous vous accompagnons à chaque étape.",
      learnMore:   "En savoir plus",
      viewAll:     "Voir tous les services",
      included:    "Ce qui est inclus",
      benefits:    "Les bénéfices pour vous",
      forWho:      "Pour qui c'est fait ?",
    },

    // Portfolio
    portfolio: {
      title:       "Ce que nous avons construit",
      description: "Un aperçu de nos projets récents.",
      viewAll:     "Voir tout",
      viewProject: "Voir le projet",
      viewSite:    "Voir le site en ligne",
      viewDetail:  "Voir le détail",
      demo:        "Démonstration",
      back:        "Retour aux réalisations",
    },

    // Process
    process: {
      title:       "Comment nous travaillons ensemble",
      description: "Un processus structuré pour livrer des résultats prévisibles, dans les délais convenus.",
      stepLabel:   "Étape",
      durationLabel:"Durée estimée",
      note:        "Les délais varient selon la complexité du projet. Chaque engagement est précisé dans le devis.",
    },

    // Differentiator
    diff: {
      title:       "Une agence pensée pour vous",
      description: "Ce n'est pas ce que nous faisons qui nous distingue. C'est la façon dont nous le faisons, et pour qui.",
      quote:       "Notre mission : planter une graine digitale dans chaque business guinéen.",
    },

    // CTA
    cta: {
      ready:       "Prêt à commencer ?",
      title:       "Votre projet mérite d'être réalisé.",
      description: "Que vous ayez une idée précise ou juste un besoin à exprimer, parlons-en. La première consultation est gratuite.",
      primary:     "Demander un devis gratuit",
      whatsapp:    "Écrire sur WhatsApp",
      note:        "Réponse sous 24h · Sans engagement",
    },

    // About
    about: {
      title:       "Seedly Technology & Apps — l'agence qui plante des graines digitales",
      mission:     "Notre mission",
      vision:      "Notre vision",
      seed:        "La graine",
      seedDesc:    "Votre idée ou votre besoin digital, même encore vague. C'est là que tout commence.",
      support:     "L'accompagnement",
      supportDesc: "Notre travail : vous donner les outils, la stratégie et les compétences pour que cette idée prenne racine.",
      growth:      "La croissance",
      growthDesc:  "Un business plus visible, mieux organisé, plus compétitif. Des résultats concrets et durables.",
      teamTitle:   "Les personnes derrière Seedly",
      teamDesc:    "Nous sommes une équipe passionnée par la technologie et par l'impact que nous pouvons avoir sur les entreprises guinéennes.",
      noTeamYet:   "Les profils de notre équipe seront bientôt disponibles ici.",
      contactUs:   "contactez-nous directement",
    },

    // Contact
    contact: {
      title:       "Prenons contact",
      description: "Vous avez un projet, une question ou juste envie d'en savoir plus ? Nous vous répondons dans les 24 heures.",
      whatsapp:    "WhatsApp",
      email:       "Email",
      phone:       "Téléphone",
      location:    "Localisation",
      fastReply:   "Réponse la plus rapide",
      availability:"Disponibilité",
      availDesc:   "Du lundi au vendredi, 8h — 18h (GMT). Réponse sous 24h garantie.",
      followUs:    "Suivez-nous",
      haveProject: "Vous avez un projet ?",
      projectDesc: "Pour un projet structuré, notre formulaire de devis est le meilleur point de départ.",
      fillForm:    "Remplir le formulaire de devis",
      or:          "ou",
      writeWA:     "Écrire sur WhatsApp",
      freeConsult: "La première consultation est gratuite et sans engagement.",
    },

    // Devis
    quote: {
      title:       "Demander un devis",
      description: "Remplissez ce formulaire pour nous décrire votre projet. Nous vous répondons sous 24h avec une proposition adaptée.",
      yourInfo:    "Vos coordonnées",
      firstName:   "Prénom",
      lastName:    "Nom",
      company:     "Entreprise",
      email:       "Email",
      phone:       "Téléphone",
      yourProject: "Votre projet",
      serviceType: "Type de service",
      selectService:"Choisissez un service",
      projectDesc: "Description du projet",
      extras:      "Informations complémentaires",
      optional:    "(facultatif)",
      budget:      "Budget indicatif",
      timeline:    "Délai souhaité",
      contactPref: "Moyen de contact préféré",
      submit:      "Envoyer ma demande",
      sending:     "Envoi en cours…",
      success:     "Demande reçue !",
      successMsg:  "Merci pour votre message. Nous vous répondrons dans les 24 heures.",
      backendNote: "L'envoi du formulaire sera disponible dès la connexion au Backend. En attendant, utilisez WhatsApp ou l'email pour nous contacter.",
      noCommit:    "En soumettant ce formulaire, vous acceptez que Seedly vous contacte concernant votre projet. Aucun engagement de votre part.",
    },

    // Footer
    footer: {
      services:    "Services",
      company:     "Entreprise",
      contact:     "Contact",
      tagline:     "Plantez l'idée. Faites grandir votre activité.",
      taglineDesc: "Parlez-nous de votre projet, nous vous répondons rapidement.",
      startProject:"Démarrer un projet",
      rights:      "Tous droits réservés.",
    },

    // 404
    notFound: {
      title:       "Cette page est introuvable",
      description: "La page que vous cherchez n'existe pas, a été déplacée ou l'adresse est incorrecte.",
      home:        "Retour à l'accueil",
      contactUs:   "Nous contacter",
      looking:     "Vous cherchez quelque chose ?",
      ourServices: "Voir nos services",
      ourWork:     "Nos réalisations",
    },
  },

  en: {
    nav: {
      home:      "Home",
      services:  "Services",
      portfolio: "Portfolio",
      about:     "About",
      contact:   "Contact",
      cta:       "Request a quote",
    },

    hero: {
      badge:       "Digital agency · Conakry, Guinea",
      brand:       "Seedly Technology & Apps",
      title1:      "We turn your ideas into",
      titleAccent: "high-performing digital",
      title2:      "solutions.",
      description: "Websites, mobile apps, design and digital marketing — Seedly builds tailored solutions to help businesses grow and attract more clients.",
      tagline:     "Plant the idea. Grow the business.",
      ctaPrimary:  "Discuss my project",
      ctaSecondary:"Discover our work",
      whatsapp:    "Or write to us directly on WhatsApp",
    },

    sections: {
      ourApproach:     "Our approach",
      whatWeDo:        "What we do",
      ourWork:         "Our work",
      ourMethod:       "Our method",
      whySeedly:       "Why Seedly",
      readyToStart:    "Ready to start?",
      ourHistory:      "Our story",
      ourValues:       "Our values",
      ourPhilosophy:   "Our philosophy",
      team:            "The team",
      portfolio:       "Portfolio",
    },

    value: {
      title:       "Digital transformation, without the complexity",
      description: "Many Guinean businesses don't yet have a solid digital presence. It's not a lack of will — it's often a lack of tailored support. That's exactly what Seedly offers.",
      points: [
        "We start from your real situation, not a generic template.",
        "We clearly explain what we do and why.",
        "We deliver tools you'll understand and be able to use.",
        "We stay available even after delivery.",
      ],
    },

    services: {
      title:       "Digital solutions for every need",
      description: "From building your website to managing your online presence, we support you at every step.",
      learnMore:   "Learn more",
      viewAll:     "View all services",
      included:    "What's included",
      benefits:    "Benefits for you",
      forWho:      "Who is it for?",
    },

    portfolio: {
      title:       "What we've built",
      description: "A look at our recent projects.",
      viewAll:     "View all",
      viewProject: "View project",
      viewSite:    "View live site",
      viewDetail:  "View details",
      demo:        "Demo",
      back:        "Back to portfolio",
    },

    process: {
      title:       "How we work together",
      description: "A structured process to deliver predictable results, on time.",
      stepLabel:   "Step",
      durationLabel:"Estimated duration",
      note:        "Timelines vary by project complexity. Every commitment is specified in the quote.",
    },

    diff: {
      title:       "An agency built for you",
      description: "It's not what we do that sets us apart. It's how we do it, and for whom.",
      quote:       "Our mission: plant a digital seed in every Guinean business.",
    },

    cta: {
      ready:       "Ready to start?",
      title:       "Your project deserves to be built.",
      description: "Whether you have a precise idea or just a need to express, let's talk. The first consultation is free.",
      primary:     "Request a free quote",
      whatsapp:    "Write on WhatsApp",
      note:        "Response within 24h · No commitment",
    },

    about: {
      title:       "Seedly Technology & Apps — the agency that plants digital seeds",
      mission:     "Our mission",
      vision:      "Our vision",
      seed:        "The seed",
      seedDesc:    "Your idea or digital need, even if still vague. That's where everything begins.",
      support:     "The support",
      supportDesc: "Our work: give you the tools, strategy and skills to help that idea take root.",
      growth:      "The growth",
      growthDesc:  "A more visible, better organized, more competitive business. Concrete and lasting results.",
      teamTitle:   "The people behind Seedly",
      teamDesc:    "We're a team passionate about technology and the impact we can have on Guinean businesses.",
      noTeamYet:   "Team profiles will be available here soon.",
      contactUs:   "contact us directly",
    },

    contact: {
      title:       "Get in touch",
      description: "Have a project, a question, or just want to learn more? We'll get back to you within 24 hours.",
      whatsapp:    "WhatsApp",
      email:       "Email",
      phone:       "Phone",
      location:    "Location",
      fastReply:   "Fastest response",
      availability:"Availability",
      availDesc:   "Monday to Friday, 8am — 6pm (GMT). Response within 24h guaranteed.",
      followUs:    "Follow us",
      haveProject: "Have a project?",
      projectDesc: "For a structured project, our quote form is the best starting point.",
      fillForm:    "Fill in the quote form",
      or:          "or",
      writeWA:     "Write on WhatsApp",
      freeConsult: "The first consultation is free and no commitment required.",
    },

    quote: {
      title:       "Request a quote",
      description: "Fill in this form to describe your project. We'll respond within 24h with a tailored proposal.",
      yourInfo:    "Your details",
      firstName:   "First name",
      lastName:    "Last name",
      company:     "Company",
      email:       "Email",
      phone:       "Phone",
      yourProject: "Your project",
      serviceType: "Service type",
      selectService:"Choose a service",
      projectDesc: "Project description",
      extras:      "Additional information",
      optional:    "(optional)",
      budget:      "Estimated budget",
      timeline:    "Desired timeline",
      contactPref: "Preferred contact method",
      submit:      "Send my request",
      sending:     "Sending…",
      success:     "Request received!",
      successMsg:  "Thank you for your message. We'll get back to you within 24 hours.",
      backendNote: "Form submission will be available once the backend is connected. In the meantime, contact us via WhatsApp or email.",
      noCommit:    "By submitting this form, you agree that Seedly may contact you about your project. No commitment required.",
    },

    footer: {
      services:    "Services",
      company:     "Company",
      contact:     "Contact",
      tagline:     "Plant the idea. Grow the business.",
      taglineDesc: "Tell us about your project, we'll get back to you quickly.",
      startProject:"Start a project",
      rights:      "All rights reserved.",
    },

    notFound: {
      title:       "Page not found",
      description: "The page you're looking for doesn't exist, has been moved, or the address is incorrect.",
      home:        "Back to home",
      contactUs:   "Contact us",
      looking:     "Looking for something?",
      ourServices: "View our services",
      ourWork:     "Our portfolio",
    },
  },
} as const;

export type Translations = typeof translations.fr;
