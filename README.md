# Sociis Group

A modern web application built with React, TypeScript, and Vite.

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd sociis

# Step 3: Install the necessary dependencies
npm install

# Step 4: Start the development server
npm run dev
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview the production build

## Technologies

This project is built with:

- **Vite** - Next generation frontend tooling
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **shadcn-ui** - UI component library
- **Tailwind CSS** - Utility-first CSS framework

## Project Structure

```
src/
├── components/     # React components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
└── assets/        # Static assets
```

## Development

The development server will start on `http://localhost:8080` by default.

## Deployment

Build the project for production:

```sh
npm run build
```

The built files will be in the `dist/` directory, ready to be deployed to your hosting provider.
