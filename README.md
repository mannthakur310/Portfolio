## Modern Portfolio

A modern, responsive personal portfolio built with React, Tailwind CSS, and tsparticles. It features smooth section navigation, dark/light theme toggle, and sections for About, Skills, Projects, Education, and Contact.

### Demo
- You can deploy this to Netlify, Vercel, or GitHub Pages. See Deployment below.

### Tech Stack
- **React 18** (Create React App)
- **React Router** (SPA navigation)
- **Tailwind CSS 3** (utility-first styling)
- **tsparticles** (interactive particle background)
- **lucide-react** (icons)
- Tooling: PostCSS, Autoprefixer, concurrently

### Project Structure
```
portfolio/
  └─ client/                # React app (Create React App)
     ├─ public/
     ├─ src/
     │  ├─ component/screen/  # Page sections: Home, Skill, Project, Education, Contact
     │  ├─ index.css           # Tailwind input
     │  └─ tailwind.css        # Generated Tailwind output
     ├─ tailwind.config.js
     ├─ postcss.config.js
     └─ package.json
```

### Prerequisites
- Node.js 18+ and npm

### Quick Start
```bash
# From repo root
cd client
npm install
npm start
```
- The app runs at `http://localhost:3000`.

### Available Scripts (from `client`)
- `npm start`: Runs Tailwind in watch mode and starts CRA dev server.
- `npm run build`: Builds Tailwind once and creates a production build.
- `npm test`: Runs tests in watch mode.

### Styling with Tailwind
- Source styles are in `src/index.css` and compiled to `src/tailwind.css`.
- During development, `npm start` runs Tailwind in watch mode automatically.

### Features
- Dark/Light theme toggle
- Smooth scroll to sections (About → Home, Skills, Projects, Education, Contact)
- Interactive particle background that adapts to theme
- Social links (GitHub, LinkedIn, coding profiles)

### Deployment
You can deploy the `client/build` output to any static hosting.

1) Netlify or Vercel (recommended)
- Build command: `npm run build`
- Publish directory: `client/build`

2) GitHub Pages
- CRA supports GitHub Pages. Typical steps:
  - In `client/package.json`, add `"homepage": "https://<your-username>.github.io/<repo-name>"`.
  - Optionally add `gh-pages` to deploy, or manually publish the `client/build` folder to `gh-pages` branch.
- Since this is an SPA, ensure your host serves `index.html` for unknown routes (Netlify _redirects or GitHub Pages SPA workaround may be needed).

### Customization
- Update personal links and details in `src/App.js` (object `Bio`).
- Edit section components in `src/component/screen/` to change content.

### Screenshots
- Add screenshots to `client/public/` and reference them here if desired.

### Author
- Manvendra Pratap Singh
- GitHub: `https://github.com/mannthakur310`
- LinkedIn: `https://www.linkedin.com/in/mannthakur/`



