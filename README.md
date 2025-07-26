# AG Skincare UI

A modern, responsive skincare e-commerce website built with React, TypeScript, and Tailwind CSS. This project showcases a beautiful, accessible, and performant user interface for a premium skincare brand.

## 🚀 Features

- **Fully Responsive Design** - Optimized for all device sizes (mobile, tablet, desktop)
- **Modern UI/UX** - Clean, elegant design with smooth animations and transitions
- **Accessibility First** - WCAG compliant with proper ARIA labels and semantic HTML
- **Performance Optimized** - Fast loading with optimized images and code splitting
- **TypeScript** - Type-safe development with better maintainability
- **Tailwind CSS** - Utility-first CSS framework for rapid development
- **Component-Based Architecture** - Modular, reusable components

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **SVG Support**: Vite Plugin SVGR

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd AG-Skincare-Ui
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── ProductCard.tsx # Reusable product card
│   ├── FAQ.tsx         # FAQ section
│   ├── Footer.tsx      # Footer component
│   └── ResponsiveSkincare.tsx # Main component
├── styles/             # CSS styles
│   └── responsive.css  # Responsive utilities
├── svg/               # SVG icons
├── img/               # Image assets
└── index.tsx          # App entry point
```

## 🎨 Design System

### Colors
- **Primary**: `#2d3b36` (Dark Green)
- **Secondary**: `#f8f9f2` (Light Cream)
- **Accent**: `#f8fee5` (Light Yellow)
- **Text**: `#525349` (Gray)

### Typography
- **Font Family**: Inter
- **Weights**: 400, 500, 600, 700, 800

### Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Laptop**: 1024px - 1919px
- **Desktop**: 1920px+

## 🚀 Deployment

### Netlify Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to Netlify:
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Deploy!

### Other Platforms

The project can be deployed to any static hosting platform:
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting

## 📱 Responsive Features

- **Mobile-First Design** - Optimized for mobile devices
- **Touch-Friendly** - Proper touch targets (44px minimum)
- **Flexible Grid System** - Responsive layouts that adapt to screen size
- **Optimized Images** - WebP format with fallbacks
- **Performance** - Lazy loading and optimized assets

## ♿ Accessibility

- **Semantic HTML** - Proper heading hierarchy and landmarks
- **ARIA Labels** - Screen reader friendly
- **Keyboard Navigation** - Full keyboard accessibility
- **Color Contrast** - WCAG AA compliant
- **Focus Management** - Visible focus indicators

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Code Quality

- **TypeScript** - Type safety and better IDE support
- **ESLint** - Code linting and formatting
- **Component Structure** - Modular, reusable components
- **Performance** - Optimized bundle size and loading

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please contact the development team.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
