# Brendon Dalaba - Portfolio

A modern, responsive portfolio website showcasing my work as a Creative Technologist. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

1. **Clone and install dependencies:**
   ```bash
   git clone <your-repo-url>
   cd bd-portfolio
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   Opens at `http://localhost:3000`

3. **Build for production:**
   ```bash
   npm run build
   npm run preview
   ```

## 🛠️ Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI + shadcn/ui
- **Icons:** Lucide React
- **Routing:** Wouter
- **State Management:** TanStack Query
- **Animations:** Framer Motion

## 📁 Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components
│   │   ├── header.tsx      # Navigation
│   │   ├── hero.tsx        # Hero section
│   │   ├── about.tsx       # About section
│   │   ├── skills.tsx      # Skills section
│   │   ├── projects.tsx    # Projects showcase
│   │   └── contact.tsx     # Contact section
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities and configurations
│   ├── pages/              # Page components
│   └── index.css           # Global styles
├── public/                 # Static assets
└── dist/                   # Production build
```

## 🎨 Features

- **Responsive Design:** Mobile-first approach
- **Dark/Light Theme:** Toggle support
- **Smooth Animations:** Enhanced user experience
- **SEO Optimized:** Meta tags and semantic HTML
- **Fast Loading:** Optimized assets and code splitting
- **Accessibility:** WCAG compliant components

## 🚢 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Build settings are configured in `netlify.toml`
3. Deploy automatically on push to main

### Manual Deployment
```bash
npm run build
# Upload the `dist/` folder to your hosting provider
```

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking
- `npm run lint` - Run ESLint

## 🎯 Customization

1. **Colors:** Update `tailwind.config.ts` for custom color scheme
2. **Content:** Modify components in `src/components/` 
3. **Projects:** Update project data in `src/components/projects.tsx`
4. **Contact Info:** Update links in `src/components/hero.tsx` and `src/components/contact.tsx`

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

MIT License - feel free to use this code for your own portfolio.