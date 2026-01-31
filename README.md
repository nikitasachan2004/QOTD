# TechLearn QOTD - Question of the Day Platform

A production-quality, single-page coding challenge platform designed for edtech. Built with React, Tailwind CSS, and Framer Motion to encourage daily habit formation among students aged 18-24.

## 🎯 Project Overview

This is a **hiring evaluation project** showcasing production-level code quality, component architecture, and UX design. The application combines the developer-serious aesthetic of LeetCode with the playful engagement of Duolingo, wrapped in Notion-style editorial spacing.

## ✨ Features

### Core Components

- **Header** - Brand identity with QOTD badge and streak indicator
- **Hero Section** - Daily motivation with difficulty and average solve time
- **Question Card** - Problem statement, examples, and constraints
- **Code Editor** - Custom mock editor with line numbers, syntax highlighting, and language selector
- **Output Panel** - Real-time execution feedback with success/error states
- **Stats Dashboard** - Personal performance metrics (attempts, success rate, avg time)
- **Hint System** - Locked hints with blur overlay and reveal animation
- **Leaderboard** - Top 5 users with current user highlight
- **Subscribe CTA** - Daily email notifications signup
- **Footer** - Social links and branding

### Design Philosophy

- **Monotone Blue Premium Theme** - Professional yet approachable
- **Responsive Mobile-First** - Optimized for all screen sizes
- **Accessibility** - ARIA labels, semantic HTML, keyboard navigation
- **Smooth Animations** - Subtle Framer Motion effects for engagement
- **Clean Component Structure** - Reusable, maintainable code

## 🛠️ Tech Stack

- **React 18** - Modern functional components with hooks
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icon library

## 📁 Project Structure

```
techlearn.qotd/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── QuestionCard.jsx
│   │   ├── CodeEditor.jsx
│   │   ├── OutputPanel.jsx
│   │   ├── Stats.jsx
│   │   ├── Hint.jsx
│   │   ├── Leaderboard.jsx
│   │   ├── Subscribe.jsx
│   │   └── Footer.jsx
│   ├── data/                # Mock data
│   │   ├── questionData.js
│   │   └── leaderboardData.js
│   ├── constants/           # Constants and configs
│   ├── App.jsx             # Main application
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── public/
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/nikitasachan2004/QOTD.git

# Navigate to project directory
cd QOTD

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 🎨 Design Decisions

### Color System

- **Primary Blue** - Trust, professionalism, learning
- **Neutral Grays** - Clean backgrounds, text hierarchy
- **Semantic Colors** - Green (success), Red (error), Yellow (hints)

### Typography

- **Inter** - Clean, readable sans-serif for UI
- **JetBrains Mono** - Monospace for code blocks

### Component Architecture

Each component is:
- **Self-contained** - Manages its own state and logic
- **Reusable** - Props-based configuration
- **Accessible** - ARIA labels, semantic HTML
- **Responsive** - Mobile-first approach

### UX Patterns

- **Progressive Disclosure** - Hints locked until needed
- **Immediate Feedback** - Real-time output panel
- **Gamification** - Streaks, leaderboard, stats
- **Habit Formation** - Daily reminders, consistency rewards

## 🧪 Key Features Implementation

### Custom Code Editor

No heavy dependencies like Monaco - built a lightweight mock editor with:
- Line numbers
- Syntax coloring (CSS-based)
- Language switching
- Monospace font

### Animation Strategy

Using Framer Motion for:
- Staggered page entry
- Hint reveal transitions
- Output panel appearance
- Button interactions

All animations are subtle and purposeful, never distracting.

### Accessibility

- Semantic HTML (`<header>`, `<article>`, `<section>`)
- ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- Color contrast compliance

## 📊 Performance Considerations

- **Component lazy loading** (ready for scaling)
- **Optimized re-renders** (React hooks best practices)
- **Minimal dependencies** (smaller bundle size)
- **CSS-in-Tailwind** (purged unused styles)

## 🔐 Future Enhancements

- Backend API integration
- User authentication
- Real code execution (sandboxed)
- Problem difficulty progression
- Social sharing features
- Multiple language support

## 📝 Commit Strategy

This project follows granular commit practices:
- Each component gets its own commit
- Styling changes are separate
- Accessibility improvements tracked independently
- Clear, descriptive commit messages

Total commits: 20+ (showing incremental progress)

## 👨‍💻 Author

Built as a hiring evaluation project demonstrating:
- Clean code architecture
- Production-ready UI/UX
- Component-driven development
- Accessibility awareness
- Performance optimization

## 📄 License

MIT License - feel free to use this project for learning purposes.

---

**Made with ❤️ for developers by TechLearn**
