# Technical Specification - batxoqueta.com

## Technical Context
- **Language**: JavaScript/TypeScript
- **Frontend**: React (Vite)
- **Styling**: Tailwind CSS (Green-themed branding for "Bachoqueta")
- **Backend**: Node.js/Express (optional, for contact form or metadata)
- **APIs**: GitHub REST API for project showcase
- **Deployment**: TBD (Vercel/Netlify recommended)

## Implementation Approach
1. **Branding & Layout**: Create a "Bachoqueta" themed design (flat green bean logo/colors).
2. **Component Architecture**: Modular React components for Services, Projects, and Algorithms.
3. **GitHub Integration**: Fetch repository data using GitHub API to dynamically list projects.
4. **Algorithmic Lab**: A dedicated section to showcase the TSP, Sorting, and Chess engine with links to GitHub.
5. **Responsive Design**: Mobile-first approach for all devices.

## Source Code Structure
- `/src/components`: Reusable UI elements.
- `/src/pages`: Home, Services, Projects, Algorithms.
- `/src/services`: GitHub API client.
- `/src/assets`: Logo and images.
- `/public`: Static assets.

## Data Model / API Changes
- **GitHub API**: Integration with `users/{username}/repos`.
- **Contact Form**: Simple API endpoint for email/messages.

## Verification Approach
- **Linting**: `eslint` for code quality.
- **Testing**: `Vitest` for component testing.
- **Manual**: Visual regression check across browsers.
