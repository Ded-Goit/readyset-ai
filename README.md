# ReadySet.

```md
🇬🇧 English | [🇺🇦 Українська](./README.ua.md) | [🇫🇷 Français](./README.fr.md)

AI-powered onboarding platform for B2B sales teams.

ReadySet.AI helps companies reduce onboarding time, improve training quality, and provide instant access to internal knowledge through AI-driven learning paths and role-play simulations.

---

## 🚀 Features

- 🌍 Multi-language support (English / Ukrainian / French)
- 🤖 AI onboarding roadmap (30 / 60 / 90 days)
- 🎯 Training Arena role-play simulations
- 📚 Internal knowledge assistant
- 📊 Mentor risk signals dashboard
- ✨ Scroll animations with Framer Motion
- 📱 Fully responsive design
- ⚡ Built with Next.js App Router

---

## 🛠 Tech Stack

- Next.js 16
- React 19
- Framer Motion
- Context API
- CSS Modules
- JavaScript (ES6+)

---

## 📂 Project Structure

```text
src/
│
├── app/
│   └── page.jsx
│
├── components/
│   ├── layout/
│   │   ├── Header
│   │   └── Footer
│   │
│   ├── sections/
│   │   ├── Hero
│   │   ├── Problem
│   │   ├── HowItWorks
│   │   ├── Impact
│   │   └── Pilot
│   │
│   ├── shared/
│   │   └── FadeIn
│   │
│   └── ui/
│       ├── Logo
│       └── LanguageSwitcher
│
├── context/
│   └── LanguageContext.jsx
│
├── hooks/
│   ├── useLanguage.js
│   └── useTranslation.js
│
├── locales/
│   ├── en.js
│   ├── ua.js
│   ├── fr.js
│   └── index.js
│
└── styles/
🌍 Language Switching

The application supports:

English (EN)
Ukrainian (UA)
French (FR)

Language preference is stored in LocalStorage and restored automatically.

📦 Installation
git clone https://github.com/yourusername/readyset-ai.git

cd readyset-ai

npm install
💻 Development
npm run dev

Open:

http://localhost:3000
🏗 Production Build
npm run build

npm run start
🏆 Project Background

Created during:

GoIT AI Solutions Hackathon 2026

🥇 1st Place Winner

📄 License

MIT