# Shivay Mehra - Portfolio Website

A modern, dark-themed portfolio website showcasing AI & Data Science expertise with gradient animations and professional project displays.

## Features

- **Dark Theme**: Modern dark theme with gradient animations and starfield background
- **Responsive Design**: Mobile-first approach with smooth scrolling navigation
- **Hero Section**: Animated profile with gradient text, profile image support, and call-to-action buttons
- **About Section**: Education timeline with institutional logos, hover effects, and glowing timeline dots
- **Experience Section**: Professional experience with company logos, key metrics display, and achievement listings
- **Projects Section**: Featured projects with custom background images, GitHub links, and live demo functionality
- **Skills Section**: Technical skills organized by categories with color-coded badges
- **Contact Section**: Contact information with social media links (LinkedIn, GitHub, Email)
- **Resume Download**: Direct PDF download functionality
- **Logo Integration**: Institution and company logos throughout the portfolio
- **Custom Backgrounds**: Project-specific background images for enhanced visual appeal

## Technology Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- Vite for build system
- Wouter for routing
- Radix UI components
- Lucide React icons
- Framer Motion for animations

### Backend
- Express.js with TypeScript
- Node.js runtime
- File serving for resume and profile image

### Database
- PostgreSQL with Drizzle ORM (configured)
- In-memory storage for development

## Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Steps

1. **Clone or extract the project**
   ```bash
   # If you have the zip file, extract it
   # If cloning from repository:
   git clone <repository-url>
   cd shivay-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your profile image**
   - Place your profile image as `dp.png` in the `attached_assets` folder
   - The image should be square (1:1 aspect ratio) for best results

4. **Add your resume**
   - Place your resume PDF in the `attached_assets` folder
   - Update the filename in `server/routes.ts` if different from "Shivay Updated CV_1752416882719.pdf"

5. **Customize logos and backgrounds**
   - Institution logos are automatically served from the attached_assets folder
   - Company logos are displayed in the experience section
   - Project backgrounds enhance the visual appeal of the projects section
   - All image assets are served through dedicated API endpoints

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open in browser**
   - Navigate to `http://localhost:5050`
   - The application will run on port 5050

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom hooks
│   │   ├── lib/            # Utility functions
│   │   └── index.css       # Global styles
│   └── index.html          # HTML template
├── server/                 # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Database interface
│   └── vite.ts            # Vite integration
├── shared/                 # Shared types and schemas
├── attached_assets/        # Static assets (resume, images)
└── package.json           # Dependencies and scripts
```

## Customization

### Personal Information
Update the following files with your information:
- `client/src/components/hero-section.tsx` - Name, title, and tags
- `client/src/components/about-section.tsx` - Bio and education
- `client/src/components/experience-section.tsx` - Work experience
- `client/src/components/projects-section.tsx` - Projects and links
- `client/src/components/skills-section.tsx` - Technical skills
- `client/src/components/contact-section.tsx` - Contact information

### Styling
- Colors and themes: `client/src/index.css`
- Component styles: Individual component files
- Animations: CSS classes in `index.css`

### Adding New Sections
1. Create a new component in `client/src/components/`
2. Import and add it to `client/src/pages/home.tsx`
3. Add navigation link in `client/src/components/navigation.tsx`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run db:push` - Deploy database schema

## Production Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

3. **Environment Variables**
   - `DATABASE_URL` - PostgreSQL connection string (optional)
   - `NODE_ENV` - Set to "production" for production builds

## Features Overview

### Navigation
- Smooth scrolling between sections
- Mobile-responsive hamburger menu
- Fixed header with blur effect

### Hero Section
- Animated gradient text
- Profile image with fallback
- Call-to-action buttons
- Floating decorative elements

### About Section
- Education timeline with hover effects
- Visual timeline with colored dots
- Responsive card layout

### Experience Section
- Professional experience cards
- Key metrics display
- Achievement listings with icons

### Projects Section
- Featured projects with gradient backgrounds
- Technology stack listings
- Live demo and GitHub links
- Responsive grid layout

### Skills Section
- Categorized skill listings
- Color-coded skill badges
- Responsive grid layout

### Contact Section
- Contact information cards
- Social media links
- Clean, centered layout

## Browser Support

- Chrome/Chromium 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## License

This project is for personal portfolio use. Feel free to use as a template for your own portfolio.

## Support

For issues or questions, please contact:
- Email: shivaaymehra@yahoo.com
- LinkedIn: https://www.linkedin.com/in/shivay-mehra-8a66ba251/
- GitHub: https://github.com/shxvaayy

---

**Note**: Make sure to add your `dp.png` profile image to the `attached_assets` folder before running the application.