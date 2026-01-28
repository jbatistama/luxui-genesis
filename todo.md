# TODO.md

# Projet LuxUI Genesis

**Objectif**  
Fournir une base SPA premium, modulaire et performante pour construire des interfaces élégantes, cohérentes et extensibles.

---

## Structure du projet

**Arborescence recommandée**
index.html
assets/
css/luxui.css
js/luxui.js
images/og-image.jpg
favicon.ico
README.md
TODO.md
LICENSE


**Rôle des fichiers**
- **index.html** — SPA principale avec sections et attributs `data-section`.  
- **assets/css/luxui.css** — styles globaux, animations, responsive.  
- **assets/js/luxui.js** — logique SPA, mapping des sections, menu mobile, surbrillance.  
- **assets/images/** — visuels (og-image, backgrounds).  
- **README.md** — guide d’installation et d’utilisation.  
- **LICENSE** — licence du projet.

---

## Checklist prioritaire

### Haute priorité
- [ ] **Vérifier mapping** : chaque `data-section` correspond exactement à un `id` `section-...`.  
- [ ] **Corriger affichage des sections** : sections inactives `display: none` + animation `@keyframes` pour l’apparition.  
- [ ] **S’assurer du chargement des assets** : `luxui.css` et `luxui.js` doivent renvoyer 200 dans Network.  
- [ ] **Tester navigation** : cliquer chaque bouton affiche la section correspondante sans espace fantôme.  
- [ ] **Console propre** : aucune erreur JavaScript dans la console.

### Moyenne priorité
- [ ] **Surbrillance du bouton actif** : ajouter `.is-current` et styles associés.  
- [ ] **Menu mobile** : toggle, fermeture automatique après sélection, accessibilité.  
- [ ] **Accessibilité basique** : focus visible, attributs `aria` pour le menu et les boutons.  
- [ ] **Année dynamique** : script pour mettre à jour l’année dans le footer si souhaité.

### Basse priorité
- [ ] **Routing par hash** (`#components`) pour deep linking et partage d’URL.  
- [ ] **Minification** : minifier CSS et JS pour production.  
- [ ] **Optimisation images** : WebP, compression, `srcset`.  
- [ ] **Styleguide** : documenter composants (MD ou Storybook).

---

## Tâches techniques détaillées

**HTML**
- [ ] Remplacer toutes les occurrences de `jbatista` par **JBATISTAMA**.  
- [ ] Vérifier que chaque section a la classe `section` et un `id` unique.  
- [ ] Placer `<script src="assets/js/luxui.js"></script>` juste avant `</body>`.

**CSS**
- [ ] Implémenter bloc `.section` avec `display: none` et `.section.is-active` avec animation `luxFadeIn`.  
- [ ] Ajouter règle `.is-current` pour surbrillance des boutons.  
- [ ] Tester responsive et ajuster breakpoints.

**JavaScript**
- [ ] Vérifier mapping `SECTION_MAP` et inclure toutes les clés : `home`, `components`, `documentation`, `contact`, `design-premium`, `code-minimal`, `experience-unique`.  
- [ ] Appeler `window.scrollTo(0, 0)` **avant** d’activer la section pour éviter l’espace fantôme.  
- [ ] Ajouter gestion du menu mobile (`luxToggleMenu`) et fermeture automatique.  
- [ ] Ajouter logs de debug temporaires puis les retirer en production.

---

## Tests et validation

**Tests manuels**
- [ ] Ouvrir DevTools → Console et Network.  
- [ ] Vérifier chargement CSS/JS (statut 200).  
- [ ] Cliquer chaque bouton → section visible en haut de la page.  
- [ ] Vérifier qu’aucun espace vide n’apparaît (sections inactives `display: none`).  
- [ ] Vérifier que le bouton actif reçoit `.is-current`.  
- [ ] Tester menu mobile sur petit écran.  
- [ ] Tester sur Chrome, Firefox, Safari et mobile.

**Tests automatisés recommandés**
- [ ] Tests unitaires pour fonctions JS critiques (mapping, toggle).  
- [ ] Tests E2E (Playwright ou Cypress) pour navigation SPA et rendu des sections.

---

## Déploiement et optimisation

**Préparation production**
- [ ] Minifier `luxui.css` et `luxui.js`.  
- [ ] Compresser images et générer WebP.  
- [ ] Configurer cache et headers HTTP sur le serveur/CDN.

**Hébergement recommandé**
- **GitHub Pages**, **Netlify** ou **Vercel** pour hébergement statique.

**Vérifications post-déploiement**
- [ ] Tester chemins relatifs (`assets/...`) en production.  
- [ ] Vérifier meta OG/Twitter et favicon.  
- [ ] Vérifier performance (Lighthouse) et corriger recommandations critiques.

---

## Améliorations futures

- [ ] Ajouter routing par hash et support du back/forward du navigateur.  
- [ ] Mode thème (dark/light) avec variables CSS.  
- [ ] Composants réutilisables documentés (MD ou Storybook).  
- [ ] Loader premium et micro-interactions.  
- [ ] Pipeline CI pour linting et tests E2E.

---

## Crédits et licence

**Auteur**
- **JBATISTAMA** — conception, design, architecture.

**Licence**
- Ajouter fichier `LICENSE` (ex. MIT) et indiquer la licence choisie.

---

## Notes finales
- Remplacer tout texte temporaire par contenu final avant mise en production.  
- Si un bug persiste, fournir les logs console et un extrait minimal reproductible pour diagnostic rapide.
