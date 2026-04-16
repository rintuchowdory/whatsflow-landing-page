# WhatsFlow Landing Page

A modern, professional landing page for WhatsFlow - a WhatsApp chatbot platform with CI/CD automation, built for Android environments.

## 🚀 Live Demo

- **GitHub Pages**: https://rintuchowdory.github.io/whatsflow-landing-page
- **Custom Domain**: https://whatsflow.dev (when configured)

## ✨ Features

- **Modern Design**: Technical-minimalist aesthetic with electric cyan accents
- **Portfolio Showcase**: Featured projects with interactive hover effects
- **Developer Profile**: Professional profile section with social links
- **Responsive Layout**: Fully responsive design for all devices
- **Fast Performance**: Optimized images and minimal CSS
- **Accessibility**: WCAG AA compliant with proper contrast and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Build Tool**: Vite 7
- **Deployment**: GitHub Pages with automated CI/CD
- **Package Manager**: pnpm

## 📦 Project Structure

```
whatsflow-landing-page/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx          # Main landing page
│   │   ├── components/           # Reusable UI components
│   │   ├── App.tsx               # Router and layout
│   │   └── index.css             # Global styles and design tokens
│   ├── public/
│   │   ├── CNAME                 # Custom domain configuration
│   │   └── favicon.ico
│   └── index.html
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Pages deployment workflow
├── package.json
└── README.md
```

## 🚀 Getting Started

### Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

### Deployment

The project automatically deploys to GitHub Pages when you push to the `main` branch. The CI/CD workflow:

1. Installs dependencies
2. Builds the project
3. Uploads artifacts to GitHub Pages
4. Deploys to https://rintuchowdory.github.io/whatsflow-landing-page

**Check deployment status:**
- Go to repository → Actions tab
- View the latest "Deploy to GitHub Pages" workflow run

## 🎨 Design Philosophy

This landing page follows a **Technical-Minimalist** design approach:

- **Color Palette**: Electric Cyan (#00D9FF) accent on monochrome base
- **Typography**: IBM Plex Mono (headlines) + IBM Plex Sans (body)
- **Layout**: Asymmetric layouts with generous whitespace
- **Interactions**: Smooth transitions and hover effects
- **Accessibility**: High contrast and semantic HTML

## 📝 Sections

### Hero Section
Eye-catching headline with CTA buttons and hero image. Establishes the value proposition immediately.

### Features
Six core features with icons and descriptions, showcasing WhatsFlow's capabilities.

### Portfolio
Three featured projects with images, descriptions, technology tags, and external links.

### Developer Profile
Professional profile section with avatar, bio, social links, and CTA buttons.

### Tech Stack
Overview of technologies used in WhatsFlow, with visual references and descriptions.

### Call-to-Action
Final conversion section encouraging visitors to get started.

## 🔧 Customization

### Update Colors

Edit `client/src/index.css` and modify the CSS variables:

```css
:root {
  --primary: #00D9FF;  /* Accent color */
  --background: #FFFFFF;  /* Background */
  --foreground: #1A1A1A;  /* Text color */
  /* ... other colors ... */
}
```

### Update Content

Edit `client/src/pages/Home.tsx` to update:
- Headlines and descriptions
- Portfolio projects
- Developer profile information
- Social links
- Contact information

### Update Images

Replace images in the `projects` array and other sections with your own CDN URLs or generated images.

## 📱 Responsive Design

The landing page is fully responsive:

- **Mobile** (< 640px): Single column layout, optimized touch targets
- **Tablet** (640px - 1024px): Two-column layouts where appropriate
- **Desktop** (> 1024px): Full multi-column layouts with optimal spacing

## ♿ Accessibility

- WCAG AA compliant color contrast (4.5:1 minimum for text)
- Semantic HTML with proper heading hierarchy
- Keyboard navigation support
- Alt text for all images
- Focus indicators on interactive elements

## 🚀 Custom Domain Setup

To use a custom domain (e.g., whatsflow.dev):

1. Update `client/public/CNAME` with your domain name
2. Configure DNS records with your domain registrar:
   - Add CNAME record pointing to `rintuchowdory.github.io`
   - Or add A records pointing to GitHub Pages IP addresses
3. Enable custom domain in repository Settings → Pages
4. GitHub will automatically provision an SSL certificate

**Current CNAME**: whatsflow.dev (requires DNS configuration)

## 📊 Performance

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Image Optimization**: WebP format with compression
- **CSS**: Tailwind purging removes unused styles
- **Bundle Size**: ~50KB gzipped

## 🔐 Security

- HTTPS enabled by default on GitHub Pages
- No sensitive data in repository
- Environment variables for API keys (if needed)
- Regular dependency updates

## 📄 License

MIT License - Feel free to use this template for your own projects.

## 🤝 Contributing

To contribute improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

- **GitHub**: https://github.com/rintuchowdory
- **Project**: https://github.com/rintuchowdory/WhatsFlow
- **Website**: https://whatsflow.dev

## 🙏 Acknowledgments

- Built with React 19 and Tailwind CSS 4
- Components from shadcn/ui
- Icons from Lucide React
- Deployed on GitHub Pages

---

**Last Updated**: April 2026

For questions or issues, please open an issue on GitHub.
