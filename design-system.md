# Design System — LuxUI Genesis

## Introduction
**But**
Fournir un guide clair, actionnable et centralisé pour le design system de **LuxUI Genesis** : tokens, typographie, composants, règles d’espacement, animations, accessibilité et bonnes pratiques d’implémentation.

**Audience**
Designers, développeurs front, intégrateurs et contributeurs du projet.

---

## Principes
- **Élégance sobre** — esthétique sombre, accents dorés, sobriété typographique.
- **Modularité** — composants réutilisables et variables centralisées.
- **Performance** — CSS léger, animations subtiles, images optimisées.
- **Accessibilité** — contraste, focus visible, navigation clavier.
- **Scalabilité** — tokens CSS pour faciliter le theming et l’évolution.

---

## Tokens CSS essentiels
:root {
  /* Couleurs */
  --lux-bg: #0d0d0d;
  --lux-surface: rgba(26,26,26,0.85);
  --lux-text: #ffffff;
  --lux-muted: #d0d0d0;
  --lux-gold: #d4af37;
  --lux-border: rgba(212,175,55,0.25);
  --lux-overlay: rgba(0,0,0,0.55);

  /* Typographie */
  --font-sans: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  --type-base: 16px;

  /* Espacements */
  --space-xs: 6px;
  --space-sm: 12px;
  --space-md: 20px;
  --space-lg: 32px;
  --space-xl: 48px;

  /* Rayons */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;

  /* Transitions */
  --ease-fast: 0.18s ease;
  --ease-medium: 0.3s ease;
  --ease-slow: 0.6s ease;
}

---

## Typographie et hiérarchie
**Police principale**
- **Inter** pour l’interface : lisible, neutre et moderne.

**Échelle typographique recommandée**
- **H1** — 2.8rem; **font-weight** 600; line-height: 1.05
- **H2** — 1.8rem; **font-weight** 600
- **H3** — 1.2rem; **font-weight** 600
- **Body** — 1rem; **font-weight** 400
- **Small** — 0.85rem

---

## Palette et contrastes
- **Fond principal** : --lux-bg (très sombre).
- **Surface / cartes** : --lux-surface.
- **Accent** : --lux-gold (utiliser avec parcimonie).
- **Texte principal** : --lux-text.
- **Texte secondaire / muted** : --lux-muted.
- **Bordures** : --lux-border.

Vérification contraste : s’assurer que les combinaisons texte/fond respectent WCAG AA (ratio ≥ 4.5:1).

---

## Composants de base

### Bouton primaire
<button class="lux-btn">Action</button>

.lux-btn {
  background: var(--lux-gold);
  color: var(--lux-bg);
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-md);
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: transform var(--ease-fast), box-shadow var(--ease-medium);
  box-shadow: 0 10px 30px rgba(0,0,0,0.45);
}
.lux-btn:hover { transform: translateY(-2px); }

### Bouton ghost (secondaire)
<button class="lux-btn ghost">Secondaire</button>

.lux-btn.ghost {
  background: transparent;
  color: var(--lux-gold);
  border: 1px solid var(--lux-border);
}
.lux-btn.ghost:hover {
  background: var(--lux-gold);
  color: var(--lux-bg);
}

### Carte vitrée (card)
<article class="lux-card">
  <h3>Titre</h3>
  <p>Texte descriptif</p>
</article>

.lux-card {
  background: var(--lux-surface);
  border: 1px solid var(--lux-border);
  border-radius: var(--radius-md);
  padding: var(--space-md);
  backdrop-filter: blur(6px);
  box-shadow: 0 18px 40px rgba(0,0,0,0.6);
}

### Navbar (pattern)
- Structure : logo à gauche, menu à droite, bouton toggle mobile.
- Comportement : sticky top, backdrop blur, contraste élevé.
- Accessibilité : aria-expanded sur le toggle, aria-controls pour le menu.

---

## Layout, grille et espacement
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 96px 24px;
}

.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
@media (max-width: 768px) {
  .features { grid-template-columns: 1fr; }
}

---

## Motion & animations
@keyframes luxFadeIn {
  from { opacity: 0; transform: translateY(20px); filter: blur(6px); }
  to   { opacity: 1; transform: translateY(0); filter: blur(0); }
}
.section.is-active { animation: luxFadeIn 0.6s var(--ease-medium) forwards; }

---

## Accessibilité
- Respecter WCAG AA pour contraste (4.5:1 pour texte normal).
- Tous les éléments interactifs doivent être focusables.
- Focus visible et cohérent (outline ou box-shadow).
- Menu mobile : aria-expanded, aria-controls.
- Sections dynamiques : role="region" et aria-labelledby.

---

## Patterns & bonnes pratiques
- Tokens d’abord : modifier une variable plutôt que des styles dispersés.
- Composants atomiques : boutons, inputs, cartes, badges.
- Composants composés : navbar, hero, features, cta.
- Isolation : préférer classes explicites plutôt que sélecteurs globaux.
- Documentation : chaque composant doit avoir un exemple HTML, variantes et états.

---

## Exemples d’intégration
<section class="section" id="section-new" role="region" aria-labelledby="section-new-title">
  <div class="container">
    <h2 id="section-new-title">Nouveau module</h2>
    <div class="features">
      <article class="lux-card">...</article>
    </div>
  </div>
</section>

JS:
SECTION_MAP['new'] = 'section-new';

---

## Tests et validation
- Vérifier l’absence d’espace fantôme : sections inactives doivent utiliser display:none.
- Tester navigation SPA, menu mobile, et surbrillance du bouton actif (.is-current).
- Tests cross‑browser : Chrome, Firefox, Safari, Edge.
- Tests responsive : mobile (≤768px), tablette, desktop.
- Vérifier performance (Lighthouse) et corriger recommandations critiques.

---

## Gouvernance & maintenance
- Versionner le design system (MAJOR.MINOR.PATCH).
- Documenter breaking changes dans un changelog.
- Tests visuels (captures) avant/après pour changements majeurs.
- Tests cross‑browser réguliers.

---

## Ressources
- Auteur : JBATISTAMA — design & architecture.
- Repo : centraliser README.md, TODO.md, design-system.md.
- Prochaine étape : créer un styleguide visuel (MD ou Storybook).

---

## Licence
Ajouter un fichier LICENSE (par exemple MIT) et indiquer la licence choisie dans le dépôt.
  