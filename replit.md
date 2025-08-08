# Portfolio Application

## Overview

This is a modern full-stack portfolio website built for Brendon Dalaba, a full-stack developer. The application showcases a professional portfolio with sections for about, skills, projects, and contact information. It features a clean, responsive design with modern UI components and smooth animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built using React with TypeScript, following a component-based architecture. Key design decisions include:

- **Component Structure**: Organized into reusable UI components using shadcn/ui library with Radix UI primitives
- **Styling**: Tailwind CSS for utility-first styling with CSS custom properties for theme variables
- **State Management**: React Query (TanStack Query) for server state management and React hooks for local state
- **Routing**: Wouter for lightweight client-side routing
- **Theme System**: Built-in dark/light theme support with theme provider context
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
The backend follows a lightweight Express.js architecture:

- **Server Framework**: Express.js with TypeScript for type safety
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) that can be easily replaced with database implementations
- **Middleware**: Custom logging middleware for API request tracking
- **Development Setup**: Integrated with Vite for hot module replacement in development

### Data Layer
Currently uses an in-memory storage system with plans for PostgreSQL integration:

- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe schema definitions
- **Schema**: User model with username/password fields using UUID primary keys
- **Validation**: Zod schemas for runtime type validation integrated with Drizzle
- **Database Provider**: Configured for Neon Database (serverless PostgreSQL)

### UI/UX Design Patterns
The application follows modern design principles:

- **Component Library**: Comprehensive set of UI components based on shadcn/ui
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Accessibility**: Built on Radix UI primitives ensuring WCAG compliance
- **Animation**: Smooth transitions and hover effects for enhanced user experience
- **Typography**: Custom font loading (Inter and JetBrains Mono) for professional appearance

## External Dependencies

### Core Framework Dependencies
- **React 18**: Frontend framework with TypeScript support
- **Express.js**: Backend web framework
- **Vite**: Build tool and development server
- **Wouter**: Lightweight client-side routing

### UI and Styling
- **shadcn/ui**: Component library built on Radix UI primitives
- **Radix UI**: Accessible, unstyled UI components
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **class-variance-authority**: For component variant management

### Data and State Management
- **TanStack React Query**: Server state management and caching
- **Drizzle ORM**: Type-safe ORM for database operations
- **Zod**: Runtime type validation and schema definition

### Database and Storage
- **Neon Database**: Serverless PostgreSQL provider
- **@neondatabase/serverless**: Neon's serverless database driver
- **connect-pg-simple**: PostgreSQL session store (prepared for future use)

### Development and Build Tools
- **TypeScript**: Static type checking
- **ESBuild**: JavaScript bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer
- **Replit Integration**: Development environment plugins and error handling

### Utility Libraries
- **date-fns**: Date manipulation and formatting
- **clsx**: Conditional CSS class utility
- **nanoid**: Unique ID generation
- **cmdk**: Command palette component