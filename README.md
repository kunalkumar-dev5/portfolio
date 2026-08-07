# 🌌 Cosmic Personal Portfolio

A stunning, premium personal portfolio website built with **React 19**, **Vite**, and **Tailwind CSS v4**. It features high-quality micro-animations, a responsive interactive layout, a dynamic starry space background, dark/light theme switching, and an interactive contact form with toast notifications.

---

## ✨ Features

- **🚀 Modern Tech Stack:** Powered by React 19 and Vite for extremely fast builds and HMR.
- **✨ Star Background:** Interactive star field background effect (`StarBackground.jsx`) that adds a premium feel.
- **🎨 Glassmorphism & Aesthetics:** Tailwind CSS v4 utility classes featuring modern gradients, hover animations, and glow effects.
- **🌓 Theme Support:** Custom theme-switcher (`ThemeToggle.jsx`) supporting light and dark modes.
- **📱 Fully Responsive:** Responsive grid layouts matching mobile, tablet, and desktop screens.
- **✉️ Interactive Contact Form:** Live contact form with state management, loading states, and elegant toast notification popups on successful submit.

---

## 🛠️ Tech Stack

- **Frontend Library:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) (Toast utility)

---

## 📂 Folder Structure

```text
Personal Portfolio/
├── public/                 # Static assets (images, icons)
├── src/
│   ├── assets/             # Global image assets
│   ├── components/         # Reusable React components
│   │   ├── ui/             # Reusable UI library components (Toast, etc.)
│   │   ├── AboutSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── StarBackground.jsx
│   │   └── ThemeToggle.jsx
│   ├── hooks/              # Custom React hooks (use-toast, etc.)
│   ├── lib/                # Helper utilities (cn, etc.)
│   ├── pages/              # Main pages (Home, NotFound)
│   ├── App.jsx             # Main Application Entry Component
│   ├── index.css           # Global Tailwind stylesheet with custom @theme configs
│   └── main.jsx            # DOM renderer entry point
├── package.json            # npm packages and scripts
├── vite.config.js          # Vite custom configuration (resolves '@' alias to './src')
└── README.md               # This README file
```

---

## ⚙️ Installation & Local Setup

To set up the project locally on your machine, follow these steps:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v18.0.0 or higher is recommended).

### Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/kunalkumar-dev5/Project.git
   cd "Personal Portfolio"
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173/](http://localhost:5173/) (or the port specified in terminal) in your browser to view the app!

4. **Build for Production:**
   ```bash
   npm run build
   ```
   This generates a highly optimized production bundle in the `dist` folder.

5. **Preview Production Build:**
   ```bash
   npm run preview
   ```

---

## 📬 Contact Details

- **Email:** kunalkr5674@gmail.com
- **Phone:** (+91) 8757843220
- **Location:** Patna, Bihar
- **GitHub:** [kunalkumar-dev5](https://github.com/kunalkumar-dev5)
