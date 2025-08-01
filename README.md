# Elad Digital Portfolio

A modern, dynamic, and professional portfolio website for Elad Keren, featuring sophisticated animations, interactive elements, and a stunning visual design.

## 🌟 Features

- **Dynamic 3D Gradient Backgrounds** - Animated gradient backgrounds with floating elements
- **Interactive Animations** - Smooth scroll-triggered animations and hover effects
- **Hebrew RTL Support** - Full right-to-left layout support for Hebrew content
- **Responsive Design** - Optimized for all devices and screen sizes
- **Modern UI/UX** - Professional design with glassmorphism effects
- **Portfolio Showcase** - Beautiful project cards with thumbnails and external links
- **Contact Integration** - Ready-to-use contact forms and social links

## 🚀 Technologies Used

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **CSS Animations** - Custom keyframe animations for complex effects
- **Intersection Observer API** - Scroll-triggered animations
- **Responsive Design** - Mobile-first approach

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.tsx      # Navigation bar with RTL support
│   ├── Hero.tsx           # Main hero section with dynamic background
│   ├── About.tsx          # About section with highlights
│   ├── Services.tsx       # Services showcase
│   ├── Portfolio.tsx      # Portfolio with project cards
│   ├── Testimonials.tsx   # Client testimonials
│   └── CTA.tsx           # Call-to-action section
├── App.tsx               # Main application component
├── index.tsx            # Application entry point
└── index.css           # Global styles and animations
```

## 🎨 Design Features

- **Gradient Animations** - Dynamic color shifts and glowing effects
- **Floating Elements** - Subtle floating animations for visual interest
- **Glassmorphism** - Modern glass-like effects with backdrop blur
- **Interactive Hover States** - Engaging hover animations and transitions
- **Typography** - Custom fonts (Orbitron, Rajdhani) for modern look

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/eldikeren/eladdigital.git
cd elad-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🏗️ Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🌐 Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a React app
3. Deploy with default settings
4. Your site will be live at `https://eladdigital.vercel.app`

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `build` folder to your hosting provider

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎯 Key Sections

1. **Hero Section** - Dynamic background with rotating text and CTA
2. **About** - Professional background and highlights
3. **Services** - Service offerings with icons and descriptions
4. **Portfolio** - Project showcase with thumbnails and links
5. **Testimonials** - Client feedback and recommendations
6. **Contact** - Contact information and call-to-action

## 🔧 Customization

### Colors
The main color scheme uses purple gradients (`#a855f7`, `#8b5cf6`) which can be customized in the CSS variables.

### Content
Update the content in each component file to match your information:
- Personal details in `About.tsx`
- Services in `Services.tsx`
- Projects in `Portfolio.tsx`
- Contact information in `CTA.tsx`

### Animations
Custom animations are defined in the `<style>` tags within each component and in `index.css`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Elad Keren**
- Portfolio: [eladdigital.vercel.app](https://eladdigital.vercel.app)
- GitHub: [@eldikeren](https://github.com/eldikeren)

---

Built with ❤️ using React, TypeScript, and modern web technologies.
