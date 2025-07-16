# Project Structure Documentation

## Microservices Architecture Overview

This React application follows a microservices architecture pattern with modular components and services.

## Directory Structure

```
src/
├── components/                 # Reusable UI components
│   ├── common/                # Common/shared components
│   │   ├── Button.jsx         # Reusable button component
│   │   ├── Button.css
│   │   ├── ServiceCard.jsx    # Service card component
│   │   └── ServiceCard.css
│   ├── layout/                # Layout components
│   │   ├── Layout.jsx         # Main layout wrapper
│   │   ├── Layout.css
│   │   ├── Header.jsx         # Site header
│   │   ├── Header.css
│   │   ├── Footer.jsx         # Site footer
│   │   └── Footer.css
│   ├── sections/              # Page sections
│   │   ├── Hero.jsx           # Hero section
│   │   ├── Hero.css
│   │   ├── Services.jsx       # Services section
│   │   ├── Services.css
│   │   ├── InteractiveDemo.jsx # Interactive demo
│   │   └── InteractiveDemo.css
│   └── index.js               # Component exports
├── services/                  # Business logic services
│   ├── apiService.js          # API communication
│   ├── contentService.js      # Content management
│   ├── analyticsService.js    # Analytics tracking
│   └── index.js               # Service exports
├── styles/                    # Global styles
│   └── variables.css          # CSS variables
├── App.jsx                    # Main application component
├── App.css                    # App-specific styles
├── index.css                  # Global styles
└── main.jsx                   # Application entry point
```

## Component Architecture

### Common Components

- **Button**: Reusable button with multiple variants (primary, secondary)
- **ServiceCard**: Card component for displaying services

### Layout Components

- **Layout**: Main layout wrapper that includes header, main content, and footer
- **Header**: Contains logo and navigation
- **Footer**: Contains copyright and links

### Section Components

- **Hero**: Main hero section with welcome message
- **Services**: Displays company services in a grid
- **InteractiveDemo**: Interactive demo section

## Service Architecture

### API Service

- Handles all HTTP requests
- Provides methods for GET, POST, PUT, DELETE operations
- Centralized error handling

### Content Service

- Manages content and data
- Provides methods for fetching services, company info, testimonials
- Mock data for development

### Analytics Service

- Tracks user interactions and page views
- Provides methods for tracking events, button clicks, form submissions
- Configurable for different analytics providers

## Benefits of This Architecture

1. **Modularity**: Each component has a single responsibility
2. **Reusability**: Common components can be used throughout the application
3. **Maintainability**: Easy to update and modify individual components
4. **Scalability**: Easy to add new features and components
5. **Testability**: Individual components can be tested in isolation
6. **Separation of Concerns**: UI components are separate from business logic

## Usage Examples

### Using Components

```jsx
import { Button, ServiceCard } from '../components';

// Use the Button component
<Button variant="primary" onClick={handleClick}>
  Click me
</Button>

// Use the ServiceCard component
<ServiceCard
  title="Web Design"
  description="Modern, responsive websites"
/>
```

### Using Services

```jsx
import { contentService, analyticsService } from "../services";

// Fetch content
const services = await contentService.getServices();

// Track events
analyticsService.trackButtonClick("cta-button", "hero-section");
```

## Environment Variables

Create a `.env` file in the root directory:

```
VITE_API_URL=https://api.infinitecreations.com
VITE_ANALYTICS_ENABLED=true
```

## Future Enhancements

1. Add routing with React Router
2. Implement state management with Redux/Context API
3. Add form handling and validation
4. Implement authentication service
5. Add internationalization support
6. Implement caching service
7. Add error boundary components
8. Implement lazy loading for components
