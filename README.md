# Vite + React + ESLint + TanStack Router Template

A modern, production-ready template for building React applications with TypeScript, featuring:

## 🚀 Features

- **⚡ Vite** - Fast build tool and development server
- **⚛️ React 18** - Latest React with TypeScript support
- **🛣️ TanStack Router** - Type-safe routing with file-based routing
- **🔍 ESLint** - Code linting with TypeScript support
- **📦 TypeScript** - Full TypeScript configuration
- **🎯 Development Tools** - Router devtools included

## 📁 Project Structure

```
src/
├── routes/           # File-based routing
│   ├── __root.tsx   # Root layout component
│   ├── index.tsx    # Home page
│   └── about.tsx    # About page
├── assets/          # Static assets
├── main.tsx         # Application entry point
└── index.css        # Global styles
```

## 🛠️ Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking

## 🚦 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Adding New Routes

TanStack Router uses file-based routing. To add a new route:

1. Create a new file in `src/routes/` (e.g., `contact.tsx`)
2. Export a route using `createFileRoute`:

```tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  return <div>Contact Page</div>
}
```

3. The route will be automatically available at `/contact`

## 🔧 Configuration

- **Vite Config**: `vite.config.ts`
- **TypeScript**: `tsconfig.json` & `tsconfig.node.json`
- **ESLint**: `.eslintrc.cjs`

## 📚 Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TanStack Router](https://tanstack.com/router)
- [TypeScript](https://www.typescriptlang.org/)