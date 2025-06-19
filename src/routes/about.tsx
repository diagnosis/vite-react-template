import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="p-2">
      <h3>About</h3>
      <p>This is the about page built with TanStack Router!</p>
      <p>Features included in this template:</p>
      <ul style={{ textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
        <li>⚡ Vite for fast development</li>
        <li>⚛️ React 18 with TypeScript</li>
        <li>🛣️ TanStack Router for type-safe routing</li>
        <li>🔍 ESLint for code quality</li>
        <li>🎯 Proper TypeScript configuration</li>
        <li>🔧 Development tools and devtools</li>
      </ul>
    </div>
  )
}