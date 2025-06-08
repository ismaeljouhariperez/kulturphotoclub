# 📸 Kultur Photo Club

Un blog photo moderne construit avec Next.js 15.3, React 19, TypeScript, Tailwind CSS et Sanity.io.

---

## 🚀 Technologies utilisées

- **Next.js 15.3** avec App Router
- **React 19**
- **TypeScript** pour la sécurité des types
- **Tailwind CSS 4** pour le styling
- **Sanity.io** comme CMS headless pour la gestion du contenu

---

## 📁 Structure du projet

```
kulturphotoclub/
├── next/              # Application Next.js (Front-end)
├── studio/            # Studio Sanity (CMS)
├── README.md
└── .git/
```

---

## 🔧 Prérequis

- Node.js >= 20.x
- npm >= 9
- Un compte [Sanity.io](https://www.sanity.io/)

---

## 🛠 Installation et développement

### 1. Cloner le repository

```bash
git clone [URL_DU_REPO]
cd kulturphotoclub
```

### 2. Installation des dépendances

```bash
# Front-end Next.js
cd next
npm install

# Studio Sanity
cd ../studio
npm install
```

### 3. Configuration des variables d'environnement

Créez un fichier `.env.local` dans le dossier `next/` :

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-10-01
```

### 4. Démarrage des serveurs de développement

```bash
# Terminal 1 - Front-end Next.js
cd next
npm run dev

# Terminal 2 - Studio Sanity
cd studio
npm run dev
```

- Front-end : [http://localhost:3000](http://localhost:3000)
- Studio Sanity : [http://localhost:3333](http://localhost:3333)

---

## 🌐 Configuration Sanity

### CORS Configuration

Pour permettre au front-end d'accéder à Sanity :

```bash
cd studio
npx sanity cors add http://localhost:3000
```

### Schémas de contenu

Le studio Sanity sera configuré avec les schémas suivants :

- Articles de blog avec images
- Catégories
- Tags
- Informations sur l'auteur

---

## 📸 Fonctionnalités prévues

- [ ] Page d'accueil avec galerie d'articles
- [ ] Pages d'articles dynamiques
- [ ] Système de catégories
- [ ] Galerie d'images optimisées
- [ ] Interface d'administration Sanity
- [ ] SEO optimisé
- [ ] Design responsive

---

## 🚀 Déploiement

### Vercel (Recommandé)

1. Connectez votre repo GitHub à Vercel
2. Configurez les variables d'environnement dans Vercel
3. Déployez automatiquement à chaque push

### Studio Sanity

Le studio peut être déployé via :

```bash
cd studio
npm run deploy
```

---

## 🛠 Scripts disponibles

### Next.js (`next/`)

- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm run start` - Serveur de production
- `npm run lint` - Linting du code

### Sanity (`studio/`)

- `npm run dev` - Studio de développement
- `npm run build` - Build du studio
- `npm run deploy` - Déploiement du studio

---

## 📝 To-Do

- [ ] Configuration des schémas Sanity
- [ ] Intégration Next.js ↔ Sanity
- [ ] Design et composants UI
- [ ] Système de navigation
- [ ] Optimisation des images
- [ ] Configuration SEO

---

## 🤝 Contribution

Ce projet est en cours de développement. Les contributions sont les bienvenues !

---

## 📄 Licence

Projet privé - Kultur Photo Club
