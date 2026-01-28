# project-plan.md

# Project Plan — New Space 1 : LuxUI Genesis

**Résumé**  
Ce document décrit le plan de projet pour New Space 1 — *LuxUI Genesis*. Il couvre objectifs, périmètre, livrables, planning, jalons, ressources, risques et critères d’acceptation. Copiez ce fichier dans le dépôt pour garder la feuille de route visible et partagée.

---

## 1. Objectifs du projet
- Livrer une **SPA front‑end** premium, modulaire et performante en HTML5/CSS/JS.  
- Fournir une **base réutilisable** (design system sombre + doré) pour les futurs espaces New Space.  
- Assurer une **expérience utilisateur fluide** (transitions premium, navigation SPA, responsive).

---

## 2. Périmètre
**Inclus**
- `index.html` (SPA) avec sections principales.  
- `assets/css/luxui.css` (design system, animations, responsive).  
- `assets/js/luxui.js` (navigation SPA, menu mobile, surbrillance).  
- Assets visuels (og-image, favicon).  
- Documentation : `README.md`, `TODO.md`, `project-plan.md`.

**Exclus (phase 1)**
- Backend, API, authentification.  
- Internationalisation avancée (i18n).  
- Tests automatisés E2E en CI (prévu phase 2).

---

## 3. Livrables
- Version stable du site SPA (HTML/CSS/JS).  
- Fichiers sources dans l’arborescence recommandée.  
- Documentation utilisateur et développeur (README, TODO, project-plan).  
- Pack d’assets optimisés (images compressées).

---

## 4. Planning (sprint 4 semaines — exemple)

**Semaine 1 — Setup & Structure**
- Initialiser repo, arborescence, assets.  
- Implémenter `index.html` et structure des sections.  
- Intégrer `luxui.css` de base.

**Semaine 2 — Interactions & SPA**
- Implémenter `luxui.js` (mapping, menu, is-active).  
- Corriger flux d’affichage (display:none + animation).  
- Tests manuels navigation et responsive.

**Semaine 3 — Polissage & Accessibilité**
- Ajouter surbrillance `.is-current`, focus visible, aria.  
- Optimiser styles, ajuster breakpoints.  
- Optimiser images, préparer assets WebP.

**Semaine 4 — Tests & Déploiement**
- Tests cross‑browser (Chrome, Firefox, Safari, mobile).  
- Minification CSS/JS, build final.  
- Déploiement sur GitHub Pages / Netlify / Vercel.

---

## 5. Jalons
- **M1** : Repo initial + index.html (fin S1).  
- **M2** : Navigation SPA fonctionnelle (fin S2).  
- **M3** : Design system et accessibilité (fin S3).  
- **M4** : Build production + déploiement (fin S4).

---

## 6. Rôles & Ressources
- **Product Owner / Designer** : JBATISTAMA — vision, contenu, design.  
- **Développeur Front** : implémentation HTML/CSS/JS, tests.  
- **QA** : tests manuels cross‑browser et mobile.  
- **Ressources** : éditeur de code, navigateur, serveur local (http-server / python), hébergement statique.

---

## 7. Risques & Mitigations
- **Risque** : Sections inactives créent espace fantôme → **Mitigation** : `display:none` + animation CSS.  
- **Risque** : Assets non chargés (404) → **Mitigation** : vérifier chemins relatifs et tests Network.  
- **Risque** : Problèmes cross‑browser → **Mitigation** : tests sur navigateurs majeurs et ajustements CSS.

---

## 8. Critères d’acceptation
- Chaque bouton `data-section` ouvre la section correspondante et la place en haut de la page.  
- Aucune erreur JavaScript dans la console au chargement et lors de la navigation.  
- Responsive : rendu correct sur mobile (≤768px) et desktop.  
- Performance de base : assets optimisés, temps de chargement raisonnable.

---

## 9. Suivi & Communication
- Utiliser issues GitHub pour tâches et bugs.  
- Réunions courtes hebdomadaires (standup) pour suivi.  
- Documenter décisions importantes dans le README ou un changelog.

---

## 10. Améliorations futures (post‑MVP)
- Routage par hash et deep linking.  
- Tests E2E automatisés (Cypress / Playwright).  
- Mode thème (dark/light) et gestion des variables CSS.  
- Storybook ou styleguide pour composants réutilisables.  
- Intégration CI/CD pour build et déploiement automatique.



# Project Plan — New Space 1 : LuxUI Genesis

Résumé : plan de projet, objectifs, périmètre, livrables, planning, jalons, ressources, risques et critères d’acceptation.

# project-plan.md

# Project Plan — New Space 1 : LuxUI Genesis

**Résumé**  
Ce document décrit le plan de projet pour New Space 1 — *LuxUI Genesis*. Il couvre objectifs, périmètre, livrables, planning, jalons, ressources, risques et critères d’acceptation. Copiez ce fichier dans le dépôt pour garder la feuille de route visible et partagée.

---

## 1. Objectifs du projet
- Livrer une **SPA front‑end** premium, modulaire et performante en HTML5/CSS/JS.
- Fournir une **base réutilisable** (design system sombre + doré) pour les futurs espaces New Space.
- Assurer une **expérience utilisateur fluide** (transitions premium, navigation SPA, responsive).

---

## 2. Périmètre
**Inclus**
- index.html (SPA) avec sections principales.
- assets/css/luxui.css (design system, animations, responsive).
- assets/js/luxui.js (navigation SPA, menu mobile, surbrillance).
- Assets visuels (og-image, favicon).
- Documentation : README.md, TODO.md, project-plan.md.

**Exclus (phase 1)**
- Backend, API, authentification.
- Internationalisation avancée (i18n).
- Tests automatisés E2E en CI (prévu phase 2).

---

## 3. Livrables
- Version stable du site SPA (HTML/CSS/JS).
- Fichiers sources dans l’arborescence recommandée.
- Documentation utilisateur et développeur (README, TODO, project-plan).
- Pack d’assets optimisés (images compressées).

---

## 4. Planning (sprint 4 semaines — exemple)

**Semaine 1 — Setup & Structure**
- Initialiser repo, arborescence, assets.
- Implémenter index.html et structure des sections.
- Intégrer luxui.css de base.

**Semaine 2 — Interactions & SPA**
- Implémenter luxui.js (mapping, menu, is-active).
- Corriger flux d’affichage (display:none + animation).
- Tests manuels navigation et responsive.

**Semaine 3 — Polissage & Accessibilité**
- Ajouter surbrillance .is-current, focus visible, aria.
- Optimiser styles, ajuster breakpoints.
- Optimiser images, préparer assets WebP.

**Semaine 4 — Tests & Déploiement**
- Tests cross‑browser (Chrome, Firefox, Safari, mobile).
- Minification CSS/JS, build final.
- Déploiement sur GitHub Pages / Netlify / Vercel.

---

## 5. Jalons
- M1 : Repo initial + index.html (fin S1).
- M2 : Navigation SPA fonctionnelle (fin S2).
- M3 : Design system et accessibilité (fin S3).
- M4 : Build production + déploiement (fin S4).

---

## 6. Rôles & Ressources
- Product Owner / Designer : JBATISTAMA — vision, contenu, design.
- Développeur Front : implémentation HTML/CSS/JS, tests.
- QA : tests manuels cross‑browser et mobile.
- Ressources : éditeur de code, navigateur, serveur local (http-server / python), hébergement statique.

---

## 7. Risques & Mitigations
- Risque : Sections inactives créent espace fantôme → Mitigation : display:none + animation CSS.
- Risque : Assets non chargés (404) → Mitigation : vérifier chemins relatifs et tests Network.
- Risque : Problèmes cross‑browser → Mitigation : tests sur navigateurs majeurs et ajustements CSS.

---

## 8. Critères d’acceptation
- Chaque bouton data-section ouvre la section correspondante et la place en haut de la page.
- Aucune erreur JavaScript dans la console au chargement et lors de la navigation.
- Responsive : rendu correct sur mobile (≤768px) et desktop.
- Performance de base : assets optimisés, temps de chargement raisonnable.

---

## 9. Suivi & Communication
- Utiliser issues GitHub pour tâches et bugs.
- Réunions courtes hebdomadaires (standup) pour suivi.
- Documenter décisions importantes dans le README ou un changelog.

---

## 10. Améliorations futures (post‑MVP)
- Routage par hash et deep linking.
- Tests E2E automatisés (Cypress / Playwright).
- Mode thème (dark/light) et gestion des variables CSS.
- Storybook ou styleguide pour composants réutilisables.
- Intégration CI/CD pour build et déploiement automatique.



