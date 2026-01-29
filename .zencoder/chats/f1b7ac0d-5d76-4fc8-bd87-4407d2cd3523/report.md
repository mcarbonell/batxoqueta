# Final Project Report - batxoqueta.com

## What was implemented
A modern portfolio website for **Mario Raúl Carbonell Martínez** was built from scratch using:
- **React (Vite)** with **TypeScript**.
- **Tailwind CSS** for custom branding (Bachoqueta green theme).
- **GitHub API Integration** to dynamically fetch and display personal projects.
- **Responsive UI Components**: Navbar, Hero, Services, Project Showcase, Algorithms focus section, and a Contact form.

### Key Sections:
1. **Hero**: Introduces Mario as a software specialist with his full name and core expertise.
2. **Services**: Highlights Web development, App development, AI Consulting, and Algorithmic optimization.
3. **Projects**: Dynamically loads repositories from `https://github.com/mcarbonell`.
4. **Algorithms**: A dedicated section showcasing expertise in TSP, Sorting algorithms, and Chess engines, including a code snippet for visual context.
5. **Contact**: A functional-ready contact form and professional details.

## How the solution was tested
- **Linting**: ESLint was configured and run to ensure code quality and adherence to best practices.
- **Type-checking**: TypeScript (`tsc`) was used to verify type safety across the entire codebase.
- **Manual Verification**: Components were structured to be responsive and accessible.
- **API Verification**: The GitHub service was tested to ensure it correctly maps and handles repository data.

## Biggest issues or challenges encountered
- **Interactive Prompts**: Initial attempts to use `create-vite` failed due to non-interactive environment constraints, requiring manual project bootstrapping.
- **ESLint Configuration**: Bootstrapping from scratch required manual setup of `.eslintrc.cjs` to match the project's dependencies.
- **API Fetching**: Ensuring proper TypeScript typing for the GitHub API response to satisfy strict linting rules.

The project is now ready for deployment and further customization.
