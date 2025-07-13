# Shivay Mehra Portfolio - Setup Instructions

## Overview
This is a modern, dark-themed portfolio website built with React, TypeScript, and Express.js. It features your professional experience, projects, skills, and contact information with institutional logos and project backgrounds.

## Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

## Installation & Setup

### 1. Extract the Project
```bash
tar -xzf shivay-portfolio.tar.gz
cd shivay-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5050`

## Project Structure

```
shivay-portfolio/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utility functions
│   │   └── hooks/         # Custom React hooks
├── server/                # Express backend
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   └── storage.ts         # Data storage
├── shared/                # Shared schemas and types
├── attached_assets/       # Images, logos, resume
└── README.md             # Detailed documentation
```

## Key Features

### ✅ Completed Features
- **Modern Dark Theme**: Professional dark design with gradient animations
- **Responsive Layout**: Mobile-first approach with smooth scrolling
- **Hero Section**: Profile image support with fallback to initials
- **Education Timeline**: Interactive timeline with institutional logos
- **Experience Section**: Company logos and achievement metrics
- **Projects Section**: Custom backgrounds and GitHub links
- **Skills Section**: Organized technical skills by category
- **Contact Section**: Clickable email and social media links
- **Resume Download**: Direct PDF download functionality

### 🎨 Visual Elements
- Institutional logos (Birla Vidya Niketan, ADG Institute, IIT Roorkee)
- Company logos (Spyne, IIT Roorkee)
- Project backgrounds (WritoryOfficial.com screenshot, stock market visualization)
- Starfield background animation
- Glowing timeline dots with hover effects

### 🔗 Links & Functionality
- **GitHub Projects**: 
  - WritoryOfficial.com → Full-stack-poetry-contest-app
  - Stock Market Prediction → Stock-price-prediction
- **Live Demo**: WritoryOfficial.com → https://writoryofficial.com
- **Email**: shivaaymehra2@gmail.com (clickable mailto link)
- **Resume**: Latest PDF download functionality

## Customization

### Adding Your Profile Image
1. Add your profile picture as `dp.png` in the `attached_assets/` folder
2. The image should be square (1:1 aspect ratio) for best results
3. The system will automatically fall back to initials if no image is provided

### Updating Content
- **Personal Information**: Edit `client/src/components/hero-section.tsx`
- **Experience**: Modify `client/src/components/experience-section.tsx`
- **Projects**: Update `client/src/components/projects-section.tsx`
- **Skills**: Edit `client/src/components/skills-section.tsx`
- **Contact**: Modify `client/src/components/contact-section.tsx`

### Adding New Logos
1. Place logo files in `attached_assets/` folder
2. Add new API endpoints in `server/routes.ts`
3. Update the relevant component to use the new logo API endpoint

## Production Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## Technical Stack

### Frontend
- **React 18**: Modern UI library
- **TypeScript**: Type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and development server
- **TanStack Query**: Server state management
- **Radix UI**: Accessible component primitives

### Backend
- **Express.js**: Web application framework
- **Node.js**: JavaScript runtime
- **TypeScript**: Type-safe backend development
- **File System API**: Static file serving for images and resume

### Development Tools
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Drizzle ORM**: Database ORM (configured for future use)

## File Structure Details

### Key Files
- `package.json`: Project dependencies and scripts
- `vite.config.ts`: Vite configuration
- `tailwind.config.ts`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript configuration
- `server/routes.ts`: API endpoints for file downloads and logo serving
- `client/src/main.tsx`: React application entry point

### Asset Management
- All logos and images are served through dedicated API endpoints
- Resume PDF is served with proper download headers
- Images are optimized for web delivery

## API Endpoints

- `GET /api/download-resume`: Download resume PDF
- `GET /api/dp.png`: Profile image
- `GET /api/birla-logo.png`: Birla Vidya Niketan logo
- `GET /api/adg-logo.png`: ADG Institute logo
- `GET /api/iit-logo.jpeg`: IIT Roorkee logo
- `GET /api/spyne-logo.png`: Spyne company logo
- `GET /api/writory-bg.png`: WritoryOfficial.com background
- `GET /api/stock-bg.png`: Stock market background

## Troubleshooting

### Common Issues
1. **Port Already in Use**: Change port in `server/index.ts` or kill existing process
2. **Missing Dependencies**: Run `npm install` to install all dependencies
3. **File Permissions**: Ensure all files in `attached_assets/` have proper read permissions
4. **Images Not Loading**: Check that logo files exist in `attached_assets/` folder

### Development Tips
- Use `npm run dev` for development with hot reload
- Check browser console for any client-side errors
- Server logs will show API endpoint access and errors
- All API endpoints return JSON error messages for debugging

## Support
For any issues or questions regarding the setup, please refer to the README.md file for detailed technical documentation.

---

**Created by**: Shivay Mehra
**Last Updated**: January 2025
**Version**: 1.0.0