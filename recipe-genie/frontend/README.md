# Recipe Genie Frontend

Frontend for the Recipe Genie application built with React and TypeScript.

## Quick Start

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Run development server
npm run dev
```

The app will be available at `http://localhost:5173`

## Building for Production

```bash
npm run build
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Environment Variables

See `.env.example` for all available configuration options.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components
├── services/       # API services
├── styles/         # CSS styles
├── types/          # TypeScript types
├── App.tsx         # Main app component
└── main.tsx        # Entry point
```
