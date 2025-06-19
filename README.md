# Vite + React 19 + ESLint + TanStack Router Template

A modern, production-ready template for building React applications with JavaScript, featuring:

## 🚀 Features

- **⚡ Vite** - Fast build tool and development server
- **⚛️ React 19** - Latest React with JavaScript support
- **🛣️ TanStack Router** - Type-safe routing with file-based routing
- **🔍 ESLint** - Code linting with React support
- **📦 JavaScript** - Full JavaScript configuration with JSConfig
- **🎯 Development Tools** - Router devtools included

## 📁 Project Structure

```
src/
├── routes/           # File-based routing
│   ├── __root.jsx   # Root layout component
│   ├── index.jsx    # Home page
│   └── about.jsx    # About page
├── assets/          # Static assets
├── main.jsx         # Application entry point
└── index.css        # Global styles
```

## 🛠️ Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

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

1. Create a new file in `src/routes/` (e.g., `contact.jsx`)
2. Export a route using `createFileRoute`:

```jsx
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

- **Vite Config**: `vite.config.js`
- **JavaScript**: `jsconfig.json`
- **ESLint**: `.eslintrc.cjs`

## 📚 Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TanStack Router](https://tanstack.com/router)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)