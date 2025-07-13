# Replit.md - Full Stack Portfolio Application

## Overview

This is a full-stack web application built as a personal portfolio website for Shivay Mehra, an AI & Data Science professional. The application showcases professional experience, projects, skills, and provides contact functionality. It's built with modern web technologies using a client-server architecture with React frontend and Express backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Updates (January 2025)

### Portfolio Website Customization
- Updated navigation header from "SM" to "SHIVAY" 
- Modified hero section to display "SHIVAY MEHRA" in white text with letter spacing
- Added support for profile image (dp.png) in hero section with fallback to "SM" initials
- Added Birla Vidya Niketan school to education timeline (2007-2021)
- Enhanced education cards with hover scale effects and glowing timeline dots
- Updated experience section to show key metrics (30%, 25%, 20% for Spyne.ai and 85%, 40%, 30% for Diginique)
- Removed "AI Object Detection" project from projects section
- Updated WritoryOfficial.com project to include Cloudinary and Google API technologies
- Made WritoryOfficial.com "Live Demo" link to https://writoryofficial.com
- Removed contact form, kept only contact information display
- Added dp.png API endpoint for serving profile images
- Updated timeline dots to have black borders with blue glow effects
- Added institutional logos to education section (Birla Vidya Niketan, ADG Institute, IIT Roorkee)
- Added company logos to experience section (Spyne, IIT Roorkee)
- Updated project GitHub links: WritoryOfficial.com → https://github.com/shxvaayy/Full-stack-poetry-contest-app
- Updated Stock Market project GitHub link → https://github.com/shxvaayy/Stock-price-prediction
- Added custom background images for projects (WritoryOfficial.com screenshot, stock market SVG)
- Created API endpoints for all logos and background images
- Updated logo endpoints to use correct screenshot files for Birla Vidya Niketan and ADG Institute
- Updated WritoryOfficial.com background to use proper screenshot (Screenshot 2025-07-13 at 8.24.24 PM)
- Removed MongoDB from Programming Languages skills section
- Updated contact section to display email and phone on same line
- Made email clickable with mailto link to shivaaymehra2@gmail.com
- Updated resume download endpoint to use latest PDF file (Shivay Updated CV_1752418656050.pdf)
- Fixed mobile responsiveness across all sections with proper breakpoints
- Changed starfield background dots from white to blue-cyan with glowing effect
- Updated contact section to use separate boxes for email and phone (still in one line)
- Improved resume download functionality with proper headers and file streaming
- Enhanced hero section with responsive text sizes and button layouts
- Added support for profile image (dp.png) that can be updated in assets folder

## System Architecture

### Overall Structure
The application follows a monorepo structure with clear separation between client, server, and shared components:
- **Client**: React-based frontend with modern UI components
- **Server**: Express.js backend with REST API endpoints
- **Shared**: Common schemas and types used across client and server

### Technology Stack
- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS
- **Backend**: Express.js, Node.js, TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **UI Components**: Radix UI with shadcn/ui styling
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for client-side routing

## Key Components

### Frontend Architecture
- **Component Library**: Extensive use of Radix UI primitives with shadcn/ui styling
- **Styling**: Tailwind CSS with custom dark theme variables
- **Build System**: Vite for development and production builds
- **Type Safety**: Full TypeScript implementation

### Backend Architecture
- **API Structure**: RESTful endpoints for contact form and file downloads
- **Database Layer**: Drizzle ORM with PostgreSQL (configured but using in-memory storage currently)
- **Middleware**: Express middleware for JSON parsing, logging, and error handling
- **Development**: Hot reload with Vite integration in development mode

### Database Schema
- **Users Table**: Basic user structure with id, username, password fields
- **ORM**: Drizzle ORM with Zod schema validation
- **Database**: PostgreSQL (configured via DATABASE_URL environment variable)

## Data Flow

### Client-Server Communication
1. **Contact Form**: POST /api/contact endpoint handles form submissions
2. **File Downloads**: GET /api/download-resume serves resume file
3. **Error Handling**: Global error handling with proper HTTP status codes
4. **Request Logging**: Comprehensive logging for API requests

### State Management
- **TanStack Query**: Handles server state, caching, and API calls
- **React State**: Local component state for UI interactions
- **Form Handling**: React Hook Form with Zod validation

## External Dependencies

### UI and Components
- **Radix UI**: Comprehensive primitive components
- **shadcn/ui**: Pre-built component library
- **React Icons**: Icon library for UI elements
- **Embla Carousel**: Carousel functionality
- **Lucide React**: Icon system

### Backend Dependencies
- **Express**: Web framework
- **Drizzle ORM**: Database ORM
- **Neon Database**: PostgreSQL serverless database
- **Date-fns**: Date manipulation utilities

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety
- **ESBuild**: Backend bundling
- **PostCSS**: CSS processing

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds optimized React application to `dist/public`
2. **Backend**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations in `migrations/` directory

### Environment Configuration
- **Development**: Uses tsx for TypeScript execution, Vite dev server
- **Production**: Node.js serves bundled backend with static frontend
- **Database**: PostgreSQL via DATABASE_URL environment variable

### Scripts
- `dev`: Development server with hot reload
- `build`: Production build for both client and server
- `start`: Production server startup
- `db:push`: Database schema deployment

### Key Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Theme**: Custom dark theme with CSS variables
- **Contact Form**: Functional contact form with validation
- **Resume Download**: Direct file download capability
- **Professional Portfolio**: Sections for about, experience, projects, skills
- **Interactive UI**: Smooth animations and transitions
- **SEO Ready**: Proper HTML structure and meta tags

### Development Considerations
- **TypeScript**: Full type safety across the stack
- **Component Reusability**: Extensive component library
- **Performance**: Vite for fast development, optimized production builds
- **Code Quality**: ESLint and TypeScript compiler checks
- **Responsive Design**: Mobile-first with Tailwind CSS utilities